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
        <div className={`${poppins.className} flex justify-start w-[80%] pt-8`}>
          <h3>More things for your fitness lifestyle</h3>
        </div>
        <section className="bg-backgroundColor">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">Our Blog</h2>
              <p className="font-light sm:text-xl text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <article className="p-6  rounded-lg border  shadow-md bg-gray-800 border-gray-700">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    Tutorial
                  </span>
                  <span className="text-sm">14 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white "><Link href="#" className='text-inherit text-decoration-none'>How to quickly deploy a static website</Link></h2>
                <p className="mb-5 font-light text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                    <span className="font-medium text-white">
                      Jese Leos
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </article>
              <article className="p-6 rounded-lg border shadow-md bg-gray-800 border-gray-700">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                    Article
                  </span>
                  <span className="text-sm">14 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white"><a href="#">Our first project with React</a></h2>
                <p className="mb-5 font-light text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                    <span className="font-medium text-white">
                      Bonnie Green
                    </span>
                  </div>
                  <a href="#" className="inline-flex items-center font-medium text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
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
  const footer = await getFooterData()
  const diet = await getPlans()
  return {
    props: { footer, diet }
  }
}

export default Index