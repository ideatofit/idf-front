import Checkbox from '@/components/Checkbox'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { Public_Sans } from '@next/font/google'
import UserInfoForm from '@/components/UserInfoForm'
import Recipecard from '@/components/Recipecard'
import { getDietData } from '@/lib/diet'
import { RecipesProps } from '@/lib/diet'

const publicsans = Public_Sans({ weight: '800', subsets: ['latin'] })

function Index(props: {
  footer: FooterProps,
  recipes: RecipesProps
}) {
  return (
    <div className='h-screen max-w-[100vw] bg-backgroundColor text-themeColor '>
      <Navigation />
      <span>Recipes</span>
      <div className='min-h-screen max-h-fit w-[100vw] bg-inherit grid grid-cols-3 place-items-center p-24'>
        {
          props['recipes']['recipes'].map((data, index) => {
            return (
              <Recipecard key={`recipecard${index}`} img={data['img']} title={data['title']} description={data['description']} vegeterian={data['vegeterian']} slug={data['slug']} />
            )
          })
        }
      </div>
      <Footer footer={props['footer']} />
    </div>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  const recipes = await getDietData()
  return {
    props: {
      footer, recipes
    },
    revalidate: 60
  }
}

export default Index