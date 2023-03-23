import Blogscard from '@/components/Blogscard'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { PostsProps, getPostComments, getPostsData } from '@/lib/posts'
import Gotaquestion from '@/components/Gotaquestion'
import Head from 'next/head'

function Index(props: {
  footer: FooterProps
  posts: PostsProps,
}) {

  return (
    <>
      <Head>
      <title>Ideaotift - Blogs, Health and Fitness Tips</title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content="Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips
,meal planning services
,nutritionist consultation
,Weight loss coaching
,Online fitness classes
,Fitness training programs
,Workout routines for weight loss
,Low-calorie meal ideas
,Plant-based diet plans
,High-fiber recipes
,Gluten-free meal ideas
,Meal prep delivery services
,Healthy eating habits
,Meal replacement options
,Mindful eating techniques
,High-intensity interval training (HIIT) workouts
,Resistance training programs
,Cardiovascular exercise routines
,Nutrition education programs
,Personalized workout plans." />
        <meta name="author" content="deepak sahu" />
      </Head>
      <div className='max-h-fit min-h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
        <Navigation />
        <div className='h-fit w-full grid max-xl:grid-cols-3 xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  p-24'>
          {
            props['posts']['posts'].map((data, i) => {
              return (
                <Blogscard key={`blogs${i}`} img={data['img']} title={data['title']} description={data['description']} slug={data['slug']} publishedOn={data['publisdedat']} />
              )
            })
          }
        </div>
        <Gotaquestion />
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