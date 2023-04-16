import Checkbox from '@/components/Checkbox'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { Public_Sans } from '@next/font/google'
import Recipecard from '@/components/Recipecard'
import { getDietData } from '@/lib/recipe'
import { RecipesProps } from '@/types/recipe'
import Head from 'next/head'
import { getkeywords } from '@/lib/keywords'

const publicsans = Public_Sans({ weight: '800', subsets: ['latin'] })

function Index(props: {
  footer: FooterProps,
  recipes: RecipesProps
  keywords: string[]
}) {
  return (
    <>
    <Head>
    <title>Ideaotift - Recipes, Health and Fitness Tips</title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content={`Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props.keywords} `}/>
        <meta name="author" content="deepak sahu" />
    </Head>
    <div className='h-screen max-w-[100vw] bg-backgroundColor text-themeColor '>
      <Navigation />
      <div className='h-fit bg-inherit flex flex-col '>
      <div className='min-h-screen max-h-fit w-[100vw] bg-inherit grid max-xl:grid-cols-3 max-sm:grid-cols-1 gap-6 xl:grid-cols-3 place-items-center max-xl:p-24 xl:px-24 max-sm:p-12'>
        {
          props['recipes']['recipes'].map((data, index) => {
            return (
              <Recipecard key={`recipecard${index}`} img={data['img']} title={data['title']} description={data['description']} vegeterian={data['vegeterian']} slug={data['slug']} />
            )
          })
        }
      </div>
      </div>
      <Footer footer={props['footer']} />
    </div>
    </>
  )
}

export async function getStaticProps() {
  const [footer, recipes, keywords] = await Promise.all([
    getFooterData(),
    getDietData(),
    (await getkeywords()).join(", ").toLocaleLowerCase()
  ])
  return {
    props: {
      footer, recipes, keywords
    },
    revalidate: 60
  }
}

export default Index