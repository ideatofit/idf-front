import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import Navigation from '@/layouts/Navigation'
import Footer from '@/layouts/Footer'
import getFooterData, { FooterProps } from '@/lib/footer'
import Image from 'next/image'
import font from '../../styles/font.module.css'
import { PostBySlug, getPostComments, getPostsBySlug, getPostsData, sendPostsComments } from '@/lib/posts'
import Blogscard from '@/components/Blogscard'
import { useSession } from 'next-auth/react'
import Comments from '@/components/Comments'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Login from '@/components/Login'
import { Button } from 'react-bootstrap'
import style from '../../styles/spinner.module.css'
import { ArticleJsonLd } from 'next-seo'

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

function Blogs(props: {
  posts: PostBySlug,
  footer: FooterProps
  comments: comments
}) {
  const [comment, setComment] = useState(props['comments']);
  const [userComment, setUserComment] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [sending, setSending] = useState(false)
  const [displayedComments, setDisplayedComments] = useState(4);


  const { data: session, status } = useSession()

  const fetchComments = async () => {
    const data = await getPostComments(props['posts']['id'])
    setComment(data)
  }

  const handleSendComment = async () => {
    if (status === 'unauthenticated') {
      setShowLogin(true)
      return
    }
    setSending(true)
    await sendPostsComments(props['posts']['id'], userComment, session)
    await fetchComments()
    setSending(false)
    setUserComment('')
  };

  const showMoreComments = () => {
    setDisplayedComments(displayedComments + 4);
  };

  return (
    <main>
      <ArticleJsonLd
        url="https://example.com/article"
        title="Article headline"
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName={[
          {
            name: 'Jane Blogs',
            url: 'https://example.com',
          },
          {
            name: 'Mary Stone',
            url: 'https://example.com',
          },
        ]}
        publisherName="Gary Meehan"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
        isAccessibleForFree={true}
      />
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
        <header className='flex flex-col gap-1 py-4'>
          <h5>{props['posts']['title']}</h5>
          <span>{props['posts']['publishedat']}</span>
        </header>
        <article className={`text-themeColor py-8`} dangerouslySetInnerHTML={{ __html: props['posts']['content'] ?? "<h1>No post are available</h1>" }}></article>
        <div aria-label='Comments' className='min-h-fit w-full border-borderColor border-b-2 text-themeColor'>{`comments ${comment.length}`}</div>
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
          {comment.slice(0, displayedComments).map((data, i) => {
            // the session has the id property but the @type Session is not mentioned that in its types so it keep giving errors so i supressed it
            //@ts-ignore
            return <Comments key={`postsComments${i}`} name={data['name']} content={data['content']} isEditable={data['id'] == (session?.user?.id)} commentId={data['commentId']} image={data['avatar'] ?? ''} postId={props['posts']['id']} />;
            //@ts-check
          })}
          {comment.length > displayedComments && (
            <button onClick={showMoreComments}>Show More</button>
          )}
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
    </main>
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
  const comments = await getPostComments(posts['id'])
  return {
    props: {
      posts, footer, comments
    },
    revalidate: 60
  }
}

export default Blogs