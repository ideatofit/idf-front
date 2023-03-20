import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useState } from 'react'
import { Poppins, Inter } from '@next/font/google'
import getWellnesshubData, { wellnesshubProps } from '@/lib/wellnesshub'
import Image from 'next/image'

const poppins = Poppins({weight:['100', '200', '400', '600', '700', '800'], subsets:['latin']})
const inter = Inter({weight:['100', '200', '400', '600', '700', '800'], subsets:['latin']})

function index(props:{
  footer: FooterProps
  wellnesshub: wellnesshubProps
}) {
  const [tab, setTab] = useState('tab1')
  return (
    <>
    <Navigation/>
    <div className='min-h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
    <div style={{ background: 'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)' }} className='max-xl:h-[65vh] xl:h-[65vh] max-lg:h-fit max-lg:py-8 max-xl:w-[80%] xl:w-[80%] max-lg:w-[90%] flex max-xl:flex-row xl:flex-row max-xl:items-center xl:items-center justify-center rounded-xl border-2 border-borderColor'>
          <div className='h-[70%] w-[90%] max-lg:w-[90%] rounded-xl flex max-xl:flex-row xl:flex-row max-lg:flex-col-reverse max-lg:gap-8 max-lg:justify-center'>
            <div className='flex-[45%] flex flex-col'>
              <div className='relative h-[40%] text-left'>
                <h1 className={`${poppins.className} text-[2.2rem] font-[700]`}>Get Consultation</h1>
                <p className={`${inter.className} font-[700] pr-32`}>Explore various plans according to you</p>
              </div>
              <div className='relative h-[60%] flex flex-col justify-end gap-2 md:pt-6'>
                <div className={`text-decoration-none w-[50%] h-[25%] rounded-full hover:pointer-events-auto	 ${tab === 'tab1' ? 'bg-white' : 'bg-transparent'} flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                  setTab('tab1')
                }}>
                  <div className={`${tab === 'tab1' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>One Time Consultation</div>
                  <div className={`${tab !== 'tab1' && 'opacity-0'} text-black`}>&#62;</div>
                </div>
                <div className={`w-[50%] h-[25%] rounded-full ${tab === 'tab2' ? 'bg-white' : 'bg-transparent'} hover:pointer-events-auto	 text-decoration-none flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                  setTab('tab2')
                }}>
                  <div className={`${tab === 'tab2' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>SUPPLIMENT</div>
                  <div className={`${tab !== 'tab2' && 'opacity-0'} text-black`}>&#62;</div>
                </div>
                <div className={`text-decoration-none w-[50%] h-[25%] rounded-full ${tab === 'tab3' ? 'bg-white' : 'bg-transparent'} hover:pointer-events-auto flex items-center justify-around p-2 cursor-pointer`}  onClick={() => {
                  setTab('tab3')
                }}>
                  <div className={`${tab === 'tab3' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>EQUIPMENT</div>
                  <div className={`${tab !== 'tab3' && 'opacity-0'} text-black`}>&#62;</div>
                </div>
              </div>
            </div>
            <div className='flex-[55%] flex max-xl:flex-row xl:flex-row justify-evenly gap-2'>
              {tab === 'tab1' &&
                <>
                  <div className='flex-[33%] relative h-full gap-2 flex flex-col justify-center items-start'>
                    <h1></h1>
                  </div>
                </>
              }
              {
                tab === 'tab2' &&
                <div className='min-h-[25vh] flex items-center text-center'>
                  <h1>tab2</h1>
                </div>
              }
              {
                tab === 'tab3' &&
                <div className='min-h-[25vh] flex items-center text-center'>
                  <h1>tab3</h1>
                </div>
              }
            </div>
          </div>
        </div>
    </div>
    <Footer footer={props['footer']}/>
    </>
  )
}

export async function getStaticProps(){
  const footer = await getFooterData()
  const wellnesshub = await getWellnesshubData()
  return{
    props:{ footer, wellnesshub }
  }
}

export default index