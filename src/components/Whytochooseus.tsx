import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

// assets
import arrow1 from '../../public/arrow1.svg'
import arrow2 from '../../public/arrow2.svg'
import arrow3 from '../../public/arrow3.svg'

// fonts
import { Poppins } from '@next/font/google'

const poppins = Poppins({
    subsets: ['latin-ext'],
    weight: ['400', '600', '700'],
})

function Whytochooseus() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className={`${poppins.className} bg-backgroundColor flex flex-col h-fit min-w-full relative mt-12`}>
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
  </motion.div>
  )
}

export default Whytochooseus