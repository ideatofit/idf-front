import React from 'react'
import Image from 'next/image'
import category1 from '../../public/category1.png'
import { Roboto_Condensed, Roboto } from '@next/font/google'
import { motion } from 'framer-motion'

const robotoCondensed = Roboto_Condensed({weight:"700", subsets:['latin']})
const roboto = Roboto({weight:"500", subsets:['latin']})

function CategoryCard(props: {
  img: string,
  alt: string
}) {
  return (
    <motion.div initial={'initial'} animate={'animate'} variants={{
      initial:{
        x: -100
      },
      animate:{
        x: 0
      }
    }} className='relative min-h-[17rem] w-[16rem] rounded-[1.4rem] bg-slate-300 overflow-hidden'>
      <div className='absolute h-full w-full z-10 text-themeColor flex items-end'>
        <div className='relative z-20 border-2 border-white w-full h-[20%] rounded-b-[1.4rem] flex'>
          <div className='relative flex-[50%] h-full border-r-2 border-white flex items-center justify-center'>
          <span className={`${robotoCondensed.className} text-[1.6rem]`}>
          ₹299
          </span>
          </div>
          <div className='relative flex-[50%] h-full border-l-2 border-white flex items-center justify-center'>
            <span className={`${roboto.className} text-[1rem]`}>
            Explore More
            </span>
          </div>
        </div>
      </div>
      <Image src={category1} alt={'alt'} className='relative h-full w-full' />
    </motion.div>
  )
}

export default CategoryCard