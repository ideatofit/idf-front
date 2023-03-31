import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import Image from 'next/image'
import topImage from '../../../public/aboutTop.webp'
import about1 from '../../../public/aboutus_1.jpg.webp'
import about2 from '../../../public/aboutus_2.jpg.webp'
import { Roboto, Open_Sans } from '@next/font/google'
import Gotaquestion from '@/components/Gotaquestion'
import { getAboutusData } from '@/lib/aboutus'
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
      <div className={`${roboto.className} bg-backgroundColor min-h-screen min-w-[100vw] flex flex-col pt-28 text-themeColor gap-12`}>
        <Image src={props['aboutusData']['coverimage']} alt={''} width={1440} height={518}/>
        <div className='flex'>
          <div className='flex flex-[50%] p-4 gap-4 items-end justify-end'>
            <Image src={about1} alt='' className='rounded-lg' />
            <Image src={about2} alt='' className='rounded-lg h-[80%]' />
          </div>
          <div className='flex-[50%] items-start justify-start pr-[13%]' dangerouslySetInnerHTML={{__html: props['aboutusData']['aboutus']}}>
          </div>
        </div>
        <div className='text-center px-[12%]' dangerouslySetInnerHTML={{__html: props['aboutusData']['otherContent']}}>
        </div>
        <Gotaquestion/>
      </div>
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  const aboutusData = await getAboutusData()
  return {
    props: {
      footer, aboutusData
    },
    revalidate: 60
  }
}

export default Aboutus