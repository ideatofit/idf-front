import Gotaquestion from '@/components/Gotaquestion'
import Recipecard from '@/components/Recipecard'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { getPostsBySlug, getPostsData } from '@/lib/posts'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Posts(props:{
  posts: any,
  footer: FooterProps
}) {
  const { slug } = useRouter().query
  return (
    <>
    <Head>
      <title>{props['posts']['data'][0]['attributes']['title']}</title>
    </Head>
    <Navigation/>
    <div className={`min-h-screen max-h-fit bg-backgroundColor p-12`}>
      <div className={`min-h-[50vh] w-full text-themeColor rounded-lg`}>
        <Image src={props['posts']['data'][0]['attributes']['img']['data']['attributes']['url']} alt={''} height={360} width={1130}/>
      </div>
      <div className={`text-themeColor py-8`} dangerouslySetInnerHTML={{__html:props['posts']['data'][0]['attributes']['content']}}></div>
      <div className='min-h-fit w-full border-borderColor border-t-2 text-themeColor'>49 views  0 comments</div>
      <label className='text-themeColor'>Related Posts</label>
      <div className='w-full h-fit flex flex-row justify-evenly'>
      <Recipecard img={''} title={''} description={''} vegeterian={false} slug={''}/>
      <Recipecard img={''} title={''} description={''} vegeterian={false} slug={''}/>
      <Recipecard img={''} title={''} description={''} vegeterian={false} slug={''}/>
      </div>
    </div>
    <Gotaquestion/>
    <Footer footer={props['footer']}/>
    </>
  )
}

export async function getStaticPaths() {
  const slugs = (await getPostsData()).posts.map((data) => {
    return data['slug']
  })
  return {
    paths: slugs.map((data) => {
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
  const { slug } = context.params
  const posts = await getPostsBySlug(slug)
  const footer = await getFooterData()
  return {
    props: { posts, footer }
  }
}

export default Posts

