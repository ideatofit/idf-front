import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useState } from 'react'
import { Poppins, Inter } from '@next/font/google'
import Image from 'next/image'
import getPlans, { PlanProps } from '@/lib/diet'
import DietCard from '@/components/DietCard'
import Testimonial from '@/components/Testimonial'
import Button from '@/components/Button'
import Link from 'next/link'
import Gotaquestion from '@/components/Gotaquestion'
import dynamic from 'next/dynamic'
import Statistics from '@/components/Statistics'
import animateGradient from '../../styles/animateGradient.module.css'


const poppins = Poppins({ weight: ['100', '200', '400', '600', '700', '800'], subsets: ['latin'] })
const inter = Inter({ weight: ['100', '200', '400', '600', '700', '800'], subsets: ['latin'] })

function Index(props: {
  footer: FooterProps
  diet: PlanProps
}) {
  const [tab, setTab] = useState(1)
  return (
    <>
      <Navigation />
      <div className='min-h-screen max-h-fit w-full bg-backgroundColor flex flex-col items-center text-themeColor py-24'>
        <div style={{ background: 'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)' }} className={`${poppins.className} min-h-[75vh] w-[80%] flex rounded-md overflow-hidden p-4`}>
          <div className='min-w-[40%] min-h-full text-white flex flex-col justify-between p-4'>
            <div className=''>
              <h2 className='font-bold'>Get Consultation</h2>
              <h5>Explore various plans according to you</h5>
            </div>
            <div className='h-fit w-full flex flex-col gap-2'>
              {
                props.diet.plans.map((data, i) => {
                  return (
                    <button key={`dietPlansButton${i}`} className={`${tab === i + 1 && 'bg-white text-black'} text-sm rounded-full w-[90%] px-2 py-2 flex justify-around`} onMouseEnter={() => {
                      setTab(i + 1)
                    }}>
                      <span>{data.title}</span>
                      <span className={`${inter.className} bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-gradient-x`}>र{i + 1}99</span>
                      {tab === i + 1 && <span>&gt;</span>}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className='min-w-[60%] min-h-full flex flex-col justify-start gap-4 p-4'>
            <div>
              <h2>Why choose us?</h2>
              <h6>Explore various plans according to you</h6>
            </div>
            {
              props.diet.plans.map((data, i) => {
                return (
                  <div key={`dietPlansInfo${i}`} className={` ${tab !== i + 1 && 'hidden'} ${inter.className} text-sm`}>
                    {data.offerDetails.map((data, i) => {
                      return (
                        <p key={`dietPlansInfoText${i}`} className=''>{data.text}</p>
                      )
                    })}
                    <Link href={`/user?redirectto=${data.redirectTo}`} className='text-inherit text-decoration-none '>
                      <Button text={'START NOW'} />
                    </Link>
                  </div> 
                )
              })
            }
          </div>
        </div>
        <Statistics />
        <div className='w-[80%] text-left pt-12'>
          <h3>Testimonials</h3>
        </div>
        <div className='flex h-fit w-[80%] overflow-auto gap-4'>
          {
            props['diet']['testimonials'].map((data, i) => {
              return <Testimonial key={`testimonials${i}`} text={data['text']} avatar={data['img']['url']} name={data['name']} />
            })
          }
        </div>
      </div>
      <Gotaquestion />
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticProps() {
  const [footer, diet] = await Promise.all([
    getFooterData(),
    getPlans()
  ])
  return {
    props: { footer, diet },
    revalidate: 60
  }
}

export default dynamic(() => Promise.resolve(Index), { ssr: false })