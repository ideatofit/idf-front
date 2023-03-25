import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import arrow1 from '../../public/arrow1.svg'
import arrow2 from '../../public/arrow2.svg'
import arrow3 from '../../public/arrow3.svg'
import rectangle1 from '../../public/rectangle1.png'
import rectangle2 from '../../public/rectangle2.png'
import rectangle3 from '../../public/rectangle3.png'
import rectangle4 from '../../public/rectangle4.png'
import rectangle5 from '../../public/rectangle5.png'
import rectangle6 from '../../public/rectangle6.png'
import rectangle7 from '../../public/rectangle7.png'
import rectangle8 from '../../public/rectangle8.png'
import yellowshade from '../../public/yellowshade.png'
import groupofpeople from '../../public/groupofpeople.png'
import rep from '../../public/1rep.png'
import bmr from '../../public/bmr.png'
import bodyFat from '../../public/bodyFat.png'
import check from '../../public/check.svg'
import deepakbhaiya from '../../public/images/deepakbhaiya.png'
import Navigation from '@/layouts/Navigation';
import Slide from '@/components/Slide';
import Transformation from '@/components/Tranformation';
import Tools from '@/components/Tools';
import { Poppins, Open_Sans, Inter } from '@next/font/google'
import Stories from '@/components/Stories';
import Footer from '@/layouts/Footer';
import Button from '@/components/Button';
import storyStyle from '../styles/Stories.module.css'
import { getSlideData } from '@/lib/slide';
import { getStoriesData } from '@/lib/stories';
import getTransformationData from '@/lib/transformation';
import { SlideProps } from '@/lib/slide';
import { StoriesProps } from '@/lib/stories';
import { TransformationProps } from '@/lib/transformation';
import getWellnesshubData from '@/lib/wellnesshub';
import { wellnesshubProps } from '@/lib/wellnesshub';
import Link from 'next/link';
import Gotaquestion from '@/components/Gotaquestion';
import getFooterData, { FooterProps } from '@/lib/footer';
import Head from 'next/head';
import { getVideo } from '@/lib/video';
import { getkeywords } from '@/lib/keywords';


const poppins = Poppins({ subsets: ['latin'], weight: '400' })
const opensans = Open_Sans({ subsets: ['latin'], weight: '400' })
const inter = Inter({ subsets: ['latin'] })

type Props = {
  slide: SlideProps
  stories: StoriesProps
  transformation: TransformationProps,
  wellnesshub: wellnesshubProps
  video: string
  footer: FooterProps
  keywords: string
}

const Home = (props: Props) => {
  const [tab, setTab] = useState('tab1')
  return (
    <>
      <Head>
      <title>Ideaotift - Health and Fitness Tips | Workout Plans </title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content={`Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props['keywords']}`}/>
        <meta name="author" content="deepak sahu" />

        {/* open graph for social media cards */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ideaotift - Health and Fitness Tips | Workout Plans" />
        <meta property="og:description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta property="og:image" content="https://res.cloudinary.com/dyurrus9p/image/upload/v1679590456/logo_fy99df.png" />
        <meta property="og:url" content="https://www.ideatofit.com/" />

        <link rel="canonical" href="https://www.ideatofit.com/" />
        <link rel="icon" href="https://res.cloudinary.com/dyurrus9p/image/upload/v1679590456/logo_fy99df.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />

        {/* twitters open graph */}
        <meta property="twitter:card" content="Summary Large Image" />
        <meta property="twitter:title" content="Ideaotift - Health and Fitness Tips | Workout Plans" />
        <meta property="twitter:description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dyurrus9p/image/upload/c_scale,w_1200,h_675/v1679590456/logo_fy99df.png" />
      </Head>
        <Navigation />
      <div className='w-100vw h-fit bg-backgroundColor overflow-hidden'>
        <Slide slide={props.slide} />
        <Transformation transformation={props.transformation} />
        {/* why to choose us */}
        <div className={`${poppins.className} bg-backgroundColor flex flex-col h-fit min-w-full relative`}>
          <div className='text-center text-themeColor'>
            <h1 className='font-bold'>The IDEATOFIT way</h1>
          </div>
          <div className='flex justify-evenly max-sm:p-4 max-sm:flex-col max-xl:flex-row xl:flex-row text-themeColor'>
            <div className='flex max-sm:flex-row max-sm:items-center max-xl:flex-col xl:flex-col text-center'>
              <span className='antialiased font-bold text-[11rem] max-sm:text-[6rem] max-sm:flex-[33%]'>1</span>
              <p className='px-8 max-sm:text-left'>Science-backed workout & diet plans made for your body</p>
              <Image src={arrow1} alt={'arrow1'} className='relative left-[60%] max-sm:hidden' />
            </div>
            <div className='flex xl:items-center max-sm:flex-row max-sm:items-center max-xl:flex-col xl:flex-col text-center'>
              <span className='antialiased font-bold text-[11rem] max-sm:text-[6rem] max-sm:flex-[33%]'>2</span>
              <p className='px-8 max-sm:text-left'>Science-backed workout & diet plans made for your body</p>
              <Image src={arrow2} alt="arrow2" className="relative top-[-10%] md:transform md:translate-x-1/4 md:translate-y-1/2 xl:right-[2rem] max-sm:hidden" />
            </div>
            <div className='flex max-sm:flex-row max-sm:items-center max-xl:flex-col xl:flex-col text-center'>
              <span className='antialiased font-bold text-[11rem] max-sm:text-[6rem] max-sm:flex-[33%]'>3</span>
              <p className='px-8 max-sm:text-left'>Science-backed workout & diet plans made for your body</p>
              <Image src={arrow3} alt={'arrow3'} className='relative lg:md:right-[50%] xl:right-0 max-sm:hidden' />
            </div>
          </div>
          <div className='max-xl:my-4 md:mt-14 text-center text-themeColor xl:my-4 flex flex-col items-center'>
            <p className='px-4'>The result: You achieve a fitter body...and a happier life!</p>
            <Link href="/user" className='text-decoration-none text-inherit'><Button text={'GET PERSONALIZED TRAINING'} /></Link>
          </div>
        </div>
        {/*  */}
        <label htmlFor="iframe">hello</label>
        <div className='min-w-[100vw] h-fit flex items-center justify-center gap-4 p-24'>
          <iframe className='h-[85vh] w-[85vw] rounded-xl' src={props['video']} title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        {/* <div className='absolute w-full max-sm:h-[36%] max-md:h-[26%] md:h-[36%] flex flex-col justify-center'>
          <Image src={yellowshade} alt='yellowshade.png' />
        </div>
        <div className='absolute xl:h-[90%] max-sm:h-[36%] sm:h-[36%] w-full flex items-center justify-center'>
          <h1 className={` ${inter.className} font-[700] text-[4.3rem] max-sm:text-[2.4rem] text-center text-white md:px-48 lg:px-48 xl:px-48`}>
            Fun, trainer led group classes
          </h1>
        </div>
        <div className='w-full flex flex-row max-xl:gap-4 xl:gap-4 justify-center'>
          <Image src={rectangle5} alt='fitness image' className='max-xl:max-h-[20%] xl:max-h[20%] max-xl:max-w-[20%] xl:max-w-[20%] max-sm:max-w-[30%] max-h-[20%] max-w-[20%]' />
          <Image src={rectangle6} alt='fitness image' className='max-xl:max-h-[20%] xl:max-h[20%] max-xl:max-w-[20%] xl:max-w-[20%] max-sm:max-w-[30%] max-h-[20%] max-w-[20%]' />
          <Image src={rectangle7} alt='fitness image' className='max-xl:max-h-[20%] xl:max-h[20%] max-xl:max-w-[20%] xl:max-w-[20%] max-sm:max-w-[30%] max-h-[20%] max-w-[20%]' />
          <Image src={rectangle8} alt='fitness image' className='max-h-[20%] max-w-[20%] max-sm:hidden ' />
        </div>
        <div className='w-full flex flex-row gap-4 justify-center'>
          <Image src={rectangle1} alt='fitness image' className='max-xl:max-h-[20%] xl:max-w-[20%] max-sm:max-w-[30%] max-h-[20%] max-w-[20%]' />
          <Image src={rectangle2} alt='fitness image' className='max-xl:max-h-[20%] xl:max-w-[20%] max-sm:max-w-[30%] max-h-[20%] max-w-[20%]' />
          <Image src={rectangle3} alt='fitness image' className='max-xl:max-h-[20%] xl:max-w-[20%] max-sm:max-w-[30%] max-h-[20%] max-w-[20%]' />
          <Image src={rectangle4} alt='fitness image' className='max-h-[20%] max-w-[20%] max-sm:hidden ' />
        </div> */}
      <div className='min-w-[100vw] bg-backgroundColor text-themeColor flex flex-col text-center'>
        <div>
          <h1>Meet our expert fitness coaches</h1>
          <p>Whether you&apos;re a beginner or an advanced fitness enthusiast, we have<br />the right coaches for all your fitness needs.</p>
        </div>
        <div className='flex max-xl:flex-row xl:flex-row max-sm:flex-col max-sm:p-4 gap-4 md:p-4'>
          <div className='flex-[50%] flex justify-end'>
            <Image src={groupofpeople} alt='group of fit people' />
          </div>
          <div className={`${opensans.className} font-thin flex-[50%] flex flex-col justify-evenly max-xl:pr-[8%] xl:pr-[8%] md:pr-[0]`}>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png' />
              <div className='p-2 text-left text-[1rem]'>Whether you&apos;re a beginner or a pro, our expert coaches can help you achieve your fitness goals</div>
            </section>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png' />
              <div className='p-2 text-left text-[1rem]'>Get a customised diet & workout plan made for your body and lifestyle</div>
            </section>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png' />
              <div className='p-2 text-left text-[1rem]'>One-on-one guidance to help you create the right long-term habits</div>
            </section>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png' />
              <div className='p-2 text-left text-[1rem]'>Love the gym or prefer home workouts? Get a plan tailored to your needs!</div>
            </section>
          </div>
        </div>
        <div className={`${opensans.className} flex flex-col text-center my-4`}>
          <div>
            <h1 className='font-bold'>Track your fitness progress</h1>
            <p className='font-thin'>Use our free fitness tools & trackers to take your journey<br /> to the next level!</p>
          </div>
          <div className='flex max-xl:flex-row xl:flex-row max-xl:justify-center xl:justify-center gap-2 font-thin max-sm:flex-col max-sm:items-center'>
            <Tools img={bmr} alt={'bmr'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'} slug={'bmr'} />
            <Tools img={rep} alt={'1rep'} title={'1 Rep Max Calculator'} description={'1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.'} slug={'onerep'} />
            <Tools img={bodyFat} alt={'body fat'} title={'Body Fat % Calculator'} description={'Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.'} slug={'bodyfat'} />
          </div>
        </div>
      </div>
      <div className={`min-w-[100vw] text-white text-[1rem] bg-backgroundColor w-full flex flex-col items-center gap-4`}>
        <div style={{ background: 'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)' }} className='max-xl:h-[65vh] xl:h-[65vh] max-lg:h-fit max-lg:py-8 max-xl:w-[80%] xl:w-[80%] max-lg:w-[90%] flex max-xl:flex-row xl:flex-row max-xl:items-center xl:items-center justify-center rounded-xl border-2 border-borderColor'>
          <div className='h-[70%] w-[90%] max-lg:w-[90%] rounded-xl flex max-xl:flex-row xl:flex-row max-lg:flex-col-reverse max-lg:gap-8 max-lg:justify-center'>
            <div className='flex-[45%] flex flex-col'>
              <div className='relative h-[40%] text-left'>
                <h1 className={`${poppins.className} text-[2.2rem]`}>{props['wellnesshub']['tab1']['title']}</h1>
                <p className={`${inter.className} font-[500] pr-32`}>{props['wellnesshub']['tab1']['description']}</p>
              </div>
              <div className='relative h-[60%] flex flex-col justify-end gap-2 md:pt-6'>
                <div className={`text-decoration-none w-[50%] h-[25%] rounded-full hover:pointer-events-auto	 ${tab === 'tab1' ? 'bg-white' : 'bg-transparent'} flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                  setTab('tab1')
                }}>
                  <div className={`${tab === 'tab1' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>{props['wellnesshub']['tab1']['textonbutton']}</div>
                  <div className={`${tab !== 'tab1' && 'opacity-0'} text-black`}>&#62;</div>
                </div>
                <div className={`w-[50%] h-[25%] rounded-full ${tab === 'tab2' ? 'bg-white' : 'bg-transparent'} hover:pointer-events-auto	 text-decoration-none flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                  setTab('tab2')
                }}>
                  <div className={`${tab === 'tab2' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>SUPPLIMENT</div>
                  <div className={`${tab !== 'tab2' && 'opacity-0'} text-black`}>&#62;</div>
                </div>
                <div className={`text-decoration-none w-[50%] h-[25%] rounded-full ${tab === 'tab3' ? 'bg-white' : 'bg-transparent'} hover:pointer-events-auto flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
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
                  <div className='flex-[33%] relative h-full gap-2'>
                    <Image src={props['wellnesshub']['tab1']['img1']} alt='wellness hub 1' height={710} width={350} className='h-[103%] w-[100%]' />
                  </div>
                  <div className='flex-[33%] relative h-full flex flex-col items-center gap-2'>
                    <Image src={props['wellnesshub']['tab1']['img2']} alt='wellness hub 2' height={370} width={350} className='h-[55%] w-[100%]' />
                    <Image src={props['wellnesshub']['tab1']['img3']} alt='wellness hub 3' height={320} width={350} className='h-[45%] w-[100%]' />
                  </div>
                  <div className='flex-[33%] relative h-full flex flex-col gap-2'>
                    <Image src={props['wellnesshub']['tab1']['img4']} alt='wellness hub 1' height={220} width={350} className='h-[33%] w-[100%]' />
                    <Image src={props['wellnesshub']['tab1']['img5']} alt='wellness hub 1' height={470} width={350} className='h-[67%] w-[100%]' />
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
        <div style={{ background: '#232631' }} className='max-xl:h-[65vh] xl:h-[65vh] max-sm:h-fit max-sm:py-8 max-xl:w-[80%] xl:w-[80%] max-sm:w-[90%] flex max-xl:flex-row xl:flex-row max-sm:flex-col rounded-xl border-2 border-borderColor overflow-hidden'>
          <div className='h-full flex-[40%]'>
            <div style={{ borderRadius: '0px 243.54px 389.67px 0px' }} className='relative h-full w-[80%] left-0 bg-[#454958]'>
              <Image src={deepakbhaiya} alt='deepak sahu' height={550} className='max-sm:relative absolute bottom-0 max-sm:left-0 left-[10%]' />
            </div>
          </div>
          <div className='flex-[60%] h-full'>
            <div className='flex flex-col text-left p-8'>
              <h1 className={`${poppins.className} font-[700]`}>Book Online <br />Consultation</h1>
              <p>Start your journey to better health with an expert Health Consultant, today! Discover your health profile, learn the top health mistakes you might be making and get tips to achieve your health goal.</p>
            </div>
            <div className='relative flex flex-col justify-end items-start p-8'>
              <Link href="/user"><button className='bg-white h-12 w-32 rounded-xl text-[#252525]'>BOOK NOW</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${poppins.className} min-w-[100vw] h-[100%] bg-backgroundColor text-themeColor flex flex-col text-center py-4`}>
        <div>
          <h1 className='font-[700]'>IDEATOFIT Stories</h1>
        </div>
        <div className={` py-4 overflow-hidden `}>
          <div className={`${storyStyle.stories} h-fit flex flex-row gap-4`}>
            {
              props['stories']['stories'].map((data: any, i: number) => {
                return <Stories key={i} text={data['text']} name={data['name']} />
              })
            }
          </div>
        </div>
      </div>
      <Gotaquestion />
      <Footer footer={props.footer} />
    </div >
    </>
  )
};

export async function getStaticProps() {
  const slide: object | undefined = await getSlideData()
  const stories: object | undefined = await getStoriesData()
  const transformation: object | undefined = await getTransformationData()
  const wellnesshub: object | undefined = await getWellnesshubData()
  const video: string = await getVideo()
  const footer: FooterProps = await getFooterData()
  const keywords: string = (await getkeywords()).join(", ").toLocaleLowerCase()
  return {
    props: { slide, stories, transformation, wellnesshub, video, footer },
    revalidate: 60
  }
}

export default Home