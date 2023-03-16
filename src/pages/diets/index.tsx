import Checkbox from '@/components/Checkbox'
import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { Public_Sans } from '@next/font/google'
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
      <div className='h-fit bg-inherit flex flex-col items-start'>
      <span className='mt-24 xl:ml-24 max-xl:ml-24 max-sm:ml:8 text-[1.7rem]'>Recipes</span>
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