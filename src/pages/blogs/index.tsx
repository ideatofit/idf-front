import Blogscard from '@/components/Blogscard'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { PostsProps, getPostsData } from '@/lib/posts'
import Gotaquestion from '@/components/Gotaquestion'

function Index(props: {
  footer: FooterProps
  posts: PostsProps
}) {
  return (
    <>
    <div className='max-h-fit min-h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
      <Navigation />
      <div className='h-fit w-full grid max-xl:grid-cols-3 xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  p-24'>
        {
          props['posts']['posts'].map((data, i)=>{
            return(
              <Blogscard key={`blogs${i}`} img={data['img']} title={data['title']} description={data['description']} slug={data['slug']} publishedOn={data['publisdedat']}/>
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