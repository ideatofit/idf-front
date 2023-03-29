import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import Image from 'next/image'
import topImage from '../../../public/aboutTop.webp'
import about1 from '../../../public/aboutus_1.jpg.webp'
import about2 from '../../../public/aboutus_2.jpg.webp'
import { Roboto, Open_Sans } from '@next/font/google'
import Gotaquestion from '@/components/Gotaquestion'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })
const opensans = Open_Sans({ weight: ['400'], subsets: ['latin'] })

function Aboutus(props: {
  footer: FooterProps
}) {
  return (
    <>
      <Navigation />
      <div className={`${roboto.className} bg-backgroundColor min-h-screen min-w-[100vw] flex flex-col pt-28 text-themeColor gap-12`}>
        <Image src={topImage} alt={''} />
        <div className='flex'>
          <div className='flex flex-[50%] p-4 gap-4 items-end justify-end'>
            <Image src={about1} alt='' className='rounded-lg' />
            <Image src={about2} alt='' className='rounded-lg h-[80%]' />
          </div>
          <div className='flex-[50%] items-start justify-start pr-[13%]'>
            <h2 className={`text-[700]`}>About us</h2>
            <div className='text-[400]'>
              <p>We’re a bunch of regular people who came together with one purpose: to help others discover how amazing life can be when your own body is no longer an obstacle but a gift!</p>
              <p>It all started when we helped friends and family get fit. And today, we’re helping people all over the world live their best lives.</p>
              <p>What holds FITTR together is a passion for fitness and a desire to see people at their best. And we’re just getting started!</p>
            </div>
          </div>
        </div>
        <div className='text-center px-[12%]'>
          <h2>Goals</h2>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto aut non officiis enim, eveniet soluta cum cumque ab quisquam veniam asperiores eum quasi ex aperiam, sapiente, nulla possimus reprehenderit aspernatur?
            Est numquam sapiente excepturi natus, itaque, error iusto eligendi minima labore, reprehenderit soluta quibusdam facilis facere sint? In tenetur quisquam modi ea, assumenda mollitia architecto, iure iste velit delectus fugit.
          </div>
        </div>
        <Gotaquestion/>
      </div>
      <Footer footer={props['footer']} />
    </>
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

export default Aboutus