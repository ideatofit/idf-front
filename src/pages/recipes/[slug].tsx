import { useRouter } from 'next/router'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import Navigation from '@/layouts/Navigation'
import Footer from '@/layouts/Footer'
import getFooterData, { FooterProps } from '@/lib/footer'
import Image from 'next/image'
import font from '../../styles/font.module.css'
import { getDietComments, getDietData, sendDietComments } from '@/lib/recipe'
import { useSession } from 'next-auth/react'
import Comments from '@/components/Comments'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Login from '@/components/Login'
import { Button } from 'react-bootstrap'
import style from '../../styles/spinner.module.css'
import { DietDataBySlug, getDietDataBySlug } from '@/lib/recipe'
import Recipecard from '@/components/Recipecard'

interface userSession {
  session: any,
  status: 'loading' | 'authenticated' | 'unauthenticated',
}

type comments = {
  id: number
  name: string
  avatar: string
  content: string
  commentId: number
}[]

function Diets(props: {
  diets: DietDataBySlug,
  footer: FooterProps
  comments: comments
}) {
  const [comments, setComment] = useState(props['comments']);
  const [userComment, setUserComment] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [sending, setSending] = useState(false)
  const [displayedComments, setDisplayedComments] = useState(4);


  const { data: session, status } = useSession()

  const fetchComments = async () => {
    const data = await getDietComments(props['diets']['id'])
    setComment(data)
  }

  const handleSendComment = async () => {
    if (status === 'unauthenticated') {
      setShowLogin(true)
      return
    }
    setSending(true)
    await sendDietComments(props['diets']['id'], userComment, session)
    await fetchComments()
    setSending(false)
    setUserComment('')
  };

  
    const showMoreComments = () => {
      setDisplayedComments(displayedComments + 4);
    };

  return (
    <>
      <Head>
      <title>Ideaotift - {props['diets']['title']}</title>
        <meta name="description" content={props['diets']['description']} />
        <meta name="keywords" content={`Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props['diets']['keywords'].join(", ")}`} />
        <meta name="author" content="deepak sahu" />

        {/* open graph for social media cards */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Ideaotift - ${props['diets']['keywords'].join(", ")}`} />
        <meta property="og:description" content={props['diets']['description']} />
        <meta property="og:image" content={props['diets']['img']} />
        <meta property="og:url" content="https://www.ideatofit.com/" />

        {/* twitters open graph */}
        <meta property="twitter:card" content="Summary Large Image" />
        <meta property="twitter:title" content={`Ideaotift - ${props['diets']['keywords'].join(", ")}`} />
        <meta property="twitter:description" content={props['diets']['description']} />
        <meta property="twitter:image" content={props['diets']['img']}/>     
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
          <Image src={props['diets']['img']} alt={''} height={360} width={1130} className='h-full w-full object-cover' />
        </div>
        <div className='flex flex-col gap-1 py-4'>
          <h5>{props['diets']['title']}</h5>
          <span>{props['diets']['date']}</span>
        </div>
        <div className={`text-themeColor py-8`} dangerouslySetInnerHTML={{ __html: props['diets']['content'] ?? "<h1>No post are available</h1>" }}></div>
        <div className='min-h-fit w-full border-borderColor border-b-2 text-themeColor'>{`comments ${comments.length}`}</div>
        <div className='flex flex-col gap-2 py-2 w-full'>
          <div className="relative">
            <textarea
              className="w-full h-12 bg-transparent border-b-2 border-themeColor focus:outline-none px-4 py-2 resize-none"
              placeholder="Leave a comment..."
              value={userComment}
              onChange={(e) => {
                setUserComment(e.target.value)
              }
              }
            />
            <button
              className="absolute bottom-2 right-2 focus:outline-none"
              onClick={handleSendComment}
            >
              <FontAwesomeIcon icon={sending ? faSpinner : faPaperPlane} className={`${sending && style.spinner} text-themeColor p-2`} />
            </button>
          </div>
          {comments.slice(0, displayedComments).map((data, i) => {
        // the session has the id property but the @type Session is not mentioned that in its types so it keep giving errors so i supressed it
        //@ts-ignore
        return <Comments key={`postsComments${i}`} name={data['name']} content={data['content']} isEditable={data['id'] == (session?.user?.id)} commentId={data['commentId']} image={data['avatar'] ?? ''} postId={props['diets']['id']} />;
        //@ts-check
      })}
      {comments.length > displayedComments && (
        <button onClick={showMoreComments}>Show More</button>
      )}
        </div>
        <h2 className='text-themeColor my-4'>Related Recipes</h2>
        <div className='w-full h-fit flex flex-row justify-start gap-3 overflow-auto'>
          {
            props['diets']['relations'].map((data, i) => {
              return <Recipecard key={`postsBlogCard${i}`} img={data['img']} title={data['title']} description={data['description']} slug={data['slug']} vegeterian={data['vegeterian']} />
            })
          }
        </div>
      </div>
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticPaths() {
  const slug = (await getDietData()).recipes.map((data) => {
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
  const diets = await getDietDataBySlug(slug)
  const footer = await getFooterData()
  const comments = await getDietComments(diets['id'])
  return {
    props: {
      diets, footer, comments
    },
    revalidate: 60
  }
}

export default Diets