import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Slide from '@/components/slide';
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
import Testimonial from '@/components/Testimonial';


const Home: React.FC = () => {

  return (
    <>
      <Head>
      </Head>
      <Navigation />
      <Slide />
      <Testimonial />
      <div className='bg-slate-900 w-full h-[90vh] bg-sladte-900 flex flex-col'>
        <div className='text-center text-white'>
          <h1 className='font-bold'>The <b>IDEATOFIT</b> way</h1>
        </div>
        <div className='text-white flex flex-row justify-evenly'>
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
        <div className='text-center my-4 text-white'>
          <p>The result: You achieve a fitter body...and a happier life!</p>
        </div>
      </div>
      <div className='h-fit py-4 flex flex-col gap-4 bg-slate-900'>
        <div className='w-full flex flex-row gap-4 justify-center'>
        <Image src={rectangle1} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        <Image src={rectangle2} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        <Image src={rectangle3} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        <Image src={rectangle4} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        </div>
        <div className='w-full flex flex-row gap-4 justify-center'>
        <Image src={rectangle5} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        <Image src={rectangle6} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        <Image src={rectangle7} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        <Image src={rectangle8} alt='fitness image' className='max-h-[17%] max-w-[17%]'/>
        </div>
      </div>
    </>
  )
};

export default Home