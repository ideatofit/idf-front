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
        <div className='h-1/5 w-1/6 bg-MidnightOcean border-2 border-borderColor'>

        </div>
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