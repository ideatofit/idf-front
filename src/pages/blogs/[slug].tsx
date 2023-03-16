import { useRouter } from 'next/router'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import Navigation from '@/layouts/Navigation'
import Footer from '@/layouts/Footer'
import getFooterData, { FooterProps } from '@/lib/footer'
import Image from 'next/image'
import font from '../../styles/font.module.css'
import { PostBySlug, PostsProps, getComments, getCommentsFiltered, getPostsBySlug, getPostsData, sendPostsComments } from '@/lib/posts'
import Blogscard from '@/components/Blogscard'
import { useSession } from 'next-auth/react'
import Comments from '@/components/Comments'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Login from '@/components/Login'
import { Button } from 'react-bootstrap'

interface userSession{
  session: any,
  status: 'loading' | 'authenticated' | 'unauthenticated'
  newComments: PostBySlug['comment']
}

function Blogs(props: {
  posts: PostBySlug,
  footer: FooterProps
}) {
  const [comment, setComment] = useState('');
  const [newComments, setNewComments] = useState<userSession['newComments']>()
  const[useNewComments, setUseNewComments] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState<userSession['session']>({})
  const [userStatus, setUserStatus] = useState<userSession['status']>()

  const {data: session, status} = useSession()

  const handleSendComment = async () => {
    if (status === 'unauthenticated') {
      setShowLogin(true)
      return
    }
    const res = await sendPostsComments(props['posts']['id'], comment, session)
    if(res['request'] === 'fulfilled'){
      const freshComments = await getCommentsFiltered(props['posts']['id'])
      setNewComments(freshComments)
    }
  };

  useEffect(()=>{
    if(newComments){
      setUseNewComments(true)
    }
  }, [newComments])
  return (
    <>
      <Head>
        <title>{`ideatofit-${props['posts']['title']}`}</title>
      </Head>
      <Navigation />
      {
        showLogin &&
        <div className='fixed h-screen w-[100vw] grid place-items-center z-40'>
          <Login />
          <Button onClick={() => { setShowLogin(false) }}>Cancel</Button>
        </div>
      }
      <div className={`relative ${font.gotham} min-h-screen w-full bg-backgroundColor xl:p-36 max-xl:p-36 max-sm:p-4 max-sm:pt-24 text-themeColor`}>
        <div className={`max-h-[50vh] w-full text-themeColor rounded-lg overflow-hidden`}>
          <Image src={props['posts']['img']} alt={''} height={360} width={1130} className='h-full w-full object-cover' />
        </div>
        <div className='flex flex-col gap-1 py-4'>
          <h5>{props['posts']['title']}</h5>
          <span>{props['posts']['publishedat']}</span>
        </div>
        <div className={`text-themeColor py-8`} dangerouslySetInnerHTML={{ __html: props['posts']['content'] ?? "<h1>No post are available</h1>" }}></div>
        <div className='min-h-fit w-full border-borderColor border-b-2 text-themeColor'>{`comments ${props['posts']['comment'].length}`}</div>
        <div className='flex flex-col gap-2 py-2 w-full'>
          <div className="relative">
            <textarea
              className="w-full h-12 bg-transparent border-b-2 border-themeColor focus:outline-none px-4 py-2 resize-none"
              placeholder="Leave a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="absolute bottom-2 right-2 focus:outline-none"
              onClick={handleSendComment}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-themeColor p-2" />
            </button>
          </div>
          { !useNewComments &&
            props['posts']['comment'].map((data, i) => {
              return <Comments key={`postsComments${i}`} name={data['name']} content={data['content']} isEditable={data['id'] == (session?.user?.id)} commentId={data['commentId']} image={data['avatar']}/>
            })
          }
          {
            useNewComments && newComments !== undefined &&
            newComments.map((data, i)=>{
              return <Comments key={`postsComments${i}`} name={data['name']} content={data['content']} isEditable={data['id'] == (session?.user?.id)} commentId={data['commentId']} image={data['avatar']}/>
            })
          }
        </div>
        <h2 className='text-themeColor my-4'>Related Recipes</h2>
        <div className='w-full h-fit flex flex-row justify-start gap-3 overflow-auto'>
          {
            props['posts']['relations'].map((data, i) => {
              return <Blogscard key={`postsBlogCard${i}`} img={data['img']} title={data['title']} description={data['description']} slug={data['slug']} publishedOn={data['publishedat']} />
            })
          }
        </div>
      </div>
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticPaths() {
  const slug = (await getPostsData()).posts.map((data) => {
    return data['slug']
  })
  return {
    paths: slug.map((data) => {
      return {
        params: {
          slug: data
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps(context: Params) {
  const { slug } = await context.params
  const posts = await getPostsBySlug(slug)
  const footer = await getFooterData()
  return {
    props: {
      posts, footer
    },
    revalidate: 60
  }
}

export default Blogs