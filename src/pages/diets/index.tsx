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


const poppins = Poppins({ weight: ['100', '200', '400', '600', '700', '800'], subsets: ['latin'] })
const inter = Inter({ weight: ['100', '200', '400', '600', '700', '800'], subsets: ['latin'] })

function Index(props: {
  footer: FooterProps
  diet: PlanProps
}) {
  const [tab, setTab] = useState('tab0')
  return (
    <>
      <Navigation />
      <div className='min-h-screen max-h-fit w-full bg-backgroundColor flex flex-col items-center text-themeColor py-24'>
        <div style={{ background: 'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)' }} className='max-xl:h-[65vh] xl:h-[65vh] max-lg:h-fit max-lg:py-8 max-xl:w-[80%] xl:w-[80%] max-lg:w-[90%] flex max-xl:flex-row xl:flex-row max-xl:items-center xl:items-center justify-center rounded-xl border-2 border-borderColor'>
          <div className='h-[70%] w-[90%] max-lg:w-[90%] rounded-xl flex max-xl:flex-row xl:flex-row max-lg:flex-col-reverse max-lg:gap-8 max-lg:justify-center'>
            <div className='flex-[45%] flex flex-col'>
              <div className='relative h-[40%] text-left'>
                <h1 className={`${poppins.className} text-[2.2rem] font-[700]`}>Get Consultation</h1>
                <p className={`${inter.className} font-[700] pr-32`}>Explore various plans according to you</p>
              </div>
              <div className='relative h-[60%] flex flex-col justify-end gap-2 md:pt-6'>
                {
                  props['diet']['plans'].map((data, i) => {
                    return (
                      <div key={`plansButton${i}`} className={`text-decoration-none w-[50%] h-[25%] rounded-full ${tab === `tab${i}` ? 'bg-white' : 'bg-transparent'} hover:pointer-events-auto flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                        setTab(`tab${i}`)
                      }}>
                        <div className={`${tab === `tab${i}` ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>{data['title']}</div>
                        <div className={`${tab !== `tab${i}` && 'opacity-0'} text-black`}>&#62;</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='flex-[55%] flex max-xl:flex-row xl:flex-row justify-evenly gap-2'>
              {
                props['diet']['plans'].map((data, i) => {
                  return (
                    <div key={`plansCard${i}`} className={`min-h-[25vh] flex flex-col items-start justify-between ${tab === `tab${i}` ? '' : 'hidden'}`}>
                      <div>
                        <h4>What will you get?</h4>
                        <h6>Explore various plans according to you</h6>
                        <div className='py-3 text-left'>
                          {
                            data['offerDetails'].map((data, i) => {
                              return (
                                <h6 key={`h6${i}`} className='my-3'>{data['text']}</h6>
                              )
                            })
                          }
                        </div>
                      </div>
                      <div>
                        <Link href={data['redirectTo']} className='text-decoration-none text-inherit'>
                          <Link href={`/user?redirect=${data['redirectTo']}`} className='text-decoration-none text-inherit'><Button text={'START NOW'} /></Link>
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <Statistics />
        <div className='w-[80%] text-left pt-12'>
          <h3>Testimonials</h3>
        </div>
        <div className='flex h-fit w-[80%] overflow-auto'>
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
  // const footer = await getFooterData()
  // const diet = await getPlans()
  const [footer, diet] = await Promise.all([
    getFooterData(),
    getPlans()
  ])
  return {
    props: { footer, diet }
  }
}

export default dynamic(() => Promise.resolve(Index), { ssr: false })