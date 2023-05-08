import { motion } from 'framer-motion'
import React from 'react'
import Tools from './Tools'

// assets
import bmr from '../../public/bmr.png'
import rep from '../../public/1rep.png'
import bodyFat from '../../public/bodyFat.png'

// fonts
import { Open_Sans } from '@next/font/google'

const opensans = Open_Sans({
    subsets: ['latin-ext'],
    weight: ['400', '600', '700'],
})

function ToolsShowcase() {
  return (
    <div className={`${opensans.className} flex flex-col text-center my-4 text-white opacity-90`}>
    <div>
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='font-bold'>Track your fitness progress</motion.h1>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1.5 }} transition={{ duration: 1 }} className='font-thin'>Use our free fitness tools & trackers to take your journey<br /> to the next level!</motion.p>
    </div>
    <div className='flex max-xl:flex-row xl:flex-row max-xl:justify-center xl:justify-center gap-2 font-thin max-sm:flex-col max-sm:items-center'>
      <Tools initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.9 }} img={bmr} alt={'bmr'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'} slug={'bmr'} animation={undefined} />
      <Tools initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.9 }} img={rep} alt={'1rep'} title={'1 Rep Max Calculator'} description={'1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.'} slug={'onerep'} animation={undefined} />
      <Tools initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.9 }} img={bodyFat} alt={'body fat'} title={'Body Fat % Calculator'} description={'Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.'} slug={'bodyfat'} animation={undefined} />
    </div>
  </div>
  )
}

export default ToolsShowcase