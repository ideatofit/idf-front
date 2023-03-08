import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'


function Index(props: {
  footer: FooterProps
}) {
  return (
    <div className='h-screen w-full bg-backgroundColor text-themeColor'>
      <Navigation />
      <div className='h-screen w-full bg-inherit grid place-items-center'>
        Diets
      </div>
      <Footer footer={props['footer']} />
    </div>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  return {
    props: {
      footer
    }
  }
}

export default Index