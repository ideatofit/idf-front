import React from 'react';
import Image from 'next/image';
import Slide from '@/components/Slide';
import Navigation from '@/components/Navigation';
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
import macro from '../../public/macro.png'
import check from '../../public/check.svg'
import Testimonial from '@/components/Testimonial';
import { Poppins, Open_Sans } from '@next/font/google'
import Tools from '@/components/Tools';

const poppins = Poppins({ subsets: ['latin'], weight:'700' })
const opensans = Open_Sans({ subsets:['latin'], weight:'500' })


const Home: React.FC = () => {

  return (
    <>
      <Navigation />
      <Slide />
      <Testimonial />
      <div className={`${poppins.className} bg-backgroundColor w-full h-[90vh] bg-sladte-900 flex flex-col`}>
        <div className='text-center text-themeColor'>
          <h1 className='font-bold'>The IDEATOFIT way</h1>
        </div>
        <div className='text-themeColor flex flex-row justify-evenly'>
          <div className='flex flex-col text-center'>
            <span className='text-[11rem] font-bold antialiased'>1</span>
            <p>Science-backed workout &<br />diet plans made for your <br /> body</p>
            <Image src={arrow1} alt={'arrow1'} className='relative left-[70%]' />
          </div>
          <div className='flex flex-col text-center'>
            <span className='text-[11rem] font-bold antialiased'>2</span>
            <p>Science-backed workout &<br />diet plans made for your <br /> body</p>
            <Image src={arrow2} alt={'arrow2'} />
          </div>
          <div className='flex flex-col text-center'>
            <span className='text-[11rem] font-bold antialiased'>3</span>
            <p>Science-backed workout &<br />diet plans made for your <br /> body</p>
            <Image src={arrow3} alt={'arrow3'} className='relative right-[70%]' />
          </div>
        </div>
        <div className='text-center   my-4 text-themeColor'>
          <p>The result: You achieve a fitter body...and a happier life!</p>
        </div>
      </div>
      <div className='h-fit py-4 flex flex-col gap-4 bg-backgroundColor'>
        <div className='absolute'>
          <Image src={yellowshade} alt='yellowshade.png' />
        </div>
        <div className='w-full flex flex-row gap-4 justify-center'>
          <Image src={rectangle1} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
          <Image src={rectangle2} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
          <Image src={rectangle3} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
          <Image src={rectangle4} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
        </div>
        <div className='w-full flex flex-row gap-4 justify-center'>
          <Image src={rectangle5} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
          <Image src={rectangle6} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
          <Image src={rectangle7} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
          <Image src={rectangle8} alt='fitness image' className='max-h-[20%] max-w-[20%]' />
        </div>
      </div>
      <div className='bg-backgroundColor text-themeColor flex flex-col text-center'>
        <div>
        <h1>Meet our expert fitness coaches</h1>
        <p>Whether you&apos;re a beginner or an advanced fitness enthusiast, we have<br/>the right coaches for all your fitness needs.</p>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='flex-[50%] flex justify-end'>
            <Image src={groupofpeople} alt='group of fit people'/>
          </div>
          <div className={`${opensans.className} flex-[50%] flex flex-col justify-evenly pr-[8%]`}>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png'/>
              <div className='p-2 text-left text-[1.3rem]'>Whether you&apos;re a beginner or a pro, our expert coaches can help you achieve your fitness goals</div>
            </section>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png'/>
              <div className='p-2 text-left text-[1.3rem]'>Get a customised diet & workout plan made for your body and lifestyle</div>
            </section>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png'/>
              <div className='p-2 text-left text-[1.3rem]'>One-on-one guidance to help you create the right long-term habits</div>
            </section>
            <section className='w-full flex flex-row items-center'>
              <Image src={check} alt='check png'/>
              <div className='p-2 text-left text-[1.3rem]'>Love the gym or prefer home workouts? Get a plan tailored to your needs!</div>
            </section>
          </div>
        </div>
        <div className={`${opensans.className} flex flex-col text-center my-4`}>
          <div>
          <h1 className='font-[700]'>Track your fitness progress</h1>
          <p>Use our free fitness tools & trackers to take your journey<br/> to the next level!</p>
          </div>
          <div className='flex flex-row justify-center gap-2'>
          <Tools img={macro} alt={'macro'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'}/>
          <Tools img={macro} alt={'macro'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'}/>
          <Tools img={macro} alt={'macro'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'}/>
          </div>
        </div>
      </div>
      <div className='bg-backgroundColor w-full flex flex-col items-center gap-4'>
        <div style={{background:'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)'}} className='h-[80vh] w-[80%] rounded-xl border-2 border-borderColor'>

        </div>
        <div style={{background:'#232631'}} className='h-[80vh] w-[80%] rounded-xl border-2 border-borderColor'>

        </div>
      </div>
    </>
  )
};

export default Home