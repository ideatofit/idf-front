import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Tools from './Tools'

// assets
import groupofpeople from '../../public/groupofpeople.png'
import check from '../../public/check.svg'
import rep from '../../public/1rep.png'
import bmr from '../../public/bmr.png'
import bodyFat from '../../public/bodyFat.png'

// fonts
import { Open_Sans } from '@next/font/google'

const opensans = Open_Sans({
    subsets: ['latin-ext'],
    weight: ['400', '600', '700'],
})

function CoachShowcase() {
  return (
    <motion.div className='min-w-[100vw] bg-backgroundColor text-themeColor flex flex-col text-center'>
    <div>
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>Meet our expert fitness coaches</motion.h1>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}>Whether you&apos;re a beginner or an advanced fitness enthusiast, we have<br />the right coaches for all your fitness needs.</motion.p>
    </div>
    <div className='flex max-xl:flex-row xl:flex-row max-sm:flex-col max-sm:p-4 gap-4 md:p-4'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex-[50%] flex justify-end'>
        <Image src={groupofpeople} alt='group of fit people' />
      </motion.div>
      <div className={`${opensans.className} font-thin flex-[50%] flex flex-col justify-evenly max-xl:pr-[8%] xl:pr-[8%] md:pr-[0]`}>
        <motion.section initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='w-full flex flex-row items-center'>
          <Image src={check} alt='check png' />
          <div className='p-2 text-left text-[1rem]'>Whether you&apos;re a beginner or a pro, our expert coaches can help you achieve your fitness goals</div>
        </motion.section>
        <motion.section initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='w-full flex flex-row items-center'>
          <Image src={check} alt='check png' />
          <div className='p-2 text-left text-[1rem]'>Get a customised diet & workout plan made for your body and lifestyle</div>
        </motion.section>
        <motion.section initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='w-full flex flex-row items-center'>
          <Image src={check} alt='check png' />
          <div className='p-2 text-left text-[1rem]'>One-on-one guidance to help you create the right long-term habits</div>
        </motion.section>
        <motion.section initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='w-full flex flex-row items-center'>
          <Image src={check} alt='check png' />
          <div className='p-2 text-left text-[1rem]'>Love the gym or prefer home workouts? Get a plan tailored to your needs!</div>
        </motion.section>
      </div>
    </div>
  </motion.div>
  )
}

export default CoachShowcase