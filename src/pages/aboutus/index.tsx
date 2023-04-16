import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import Image from 'next/image'
import topImage from '../../../public/aboutTop.webp'
import about1 from '../../../public/aboutus_1.jpg.webp'
import about2 from '../../../public/aboutus_2.jpg.webp'
import { Roboto, Open_Sans } from '@next/font/google'
import Gotaquestion from '@/components/Gotaquestion'
import { getAboutUsData } from '@/lib/aboutus'
import { AboutUsProps } from '@/types/aboutus'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })
const opensans = Open_Sans({ weight: ['400'], subsets: ['latin'] })

function Aboutus(props: {
  footer: FooterProps
  aboutusData: AboutUsProps
}) {
  return (
    <>
      <Navigation />
      <div className={`${roboto.className} bg-backgroundColor min-h-screen min-w-[100vw] flex flex-col items-center text-themeColor max-w-[100vw] overflow-hidden max-sm:p-0 max-sm:pt-24 max-lg:p-0 xl:p-48`}>
        {
          props['aboutusData'].map((data, i) => {
            return (
              <div key={`aboutus${i}`} className={`xl:max-h-[50vh] min-h-[50vh] w-full flex max-sm:flex-col-reverse ${i % 2 == 0 ? 'xl:flex-row-reverse' : ''} overflow-hidden`}>
                <div className='min-h-full min-w-[50%] flex items-center justify-center'>
                  <Image src={data['image']['url']} height={data['image']['height']} width={data['image']['width']} alt='' className='min-w-full min-h-full object-fill' />
                </div>
                <div className='min-h-full min-w-[50%] bg-MidnightOcean'>
                  <article dangerouslySetInnerHTML={{ __html: data['text'] }} className='h-full min-w-full min-h-full p-3 items-center' />
                </div>
              </div>
            )
          })
        }
      </div>
      <Gotaquestion />
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticProps() {
  // const footer = await getFooterData()
  // const aboutusData = await getAboutUsData()
  const [footer, aboutusData] = await Promise.all([
    getFooterData(),
    getAboutUsData()
  ])
  return {
    props: {
      footer, aboutusData
    },
    revalidate: 60
  }
}

export default Aboutus