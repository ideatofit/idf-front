import Blogscard from '@/components/Blogscard'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import Link from 'next/link'
import blogsimg from '../../../public/blogsimg.png'
import { PostsProps, getPostsData } from '@/lib/posts'
import { useEffect } from 'react'
import Gotaquestion from '@/components/Gotaquestion'

function Index(props: {
  footer: FooterProps
  posts: PostsProps
}) {
  useEffect(()=>{
    console.log(props['posts'])
  }, [])
  return (
    <>
    <div className='max-h-fit min-h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
      <Navigation />
      <div className='h-fit w-full grid grid-cols-3 p-24'>
        {
          props['posts']['posts'].map((data)=>{
            return(
              <Blogscard img={data['img']} title={data['title']} description={data['description']} slug={data['slug']} publishedOn={data['publisdedat']}/>
            )
          })
        }
      </div>
      <Gotaquestion/>
    </div>
      <Footer footer={props['footer']} />
      </>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  const posts = await getPostsData()
  return {
    props: { footer, posts }
  }
}

export default Index