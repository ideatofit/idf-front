import React from 'react'
import Image from 'next/image'
import img1 from '../../public/transformationindividual03webp@2x.png'
import img2 from '../../public/transformationindividual04webp@2x.png'
import style from '../styles/Testimonial.module.css'

function Testimonial() {
  return (
    <div className='bg-slate-900 min-h-[28rem] w-full py-4 flex flex-col overflow-hidden gap-4'>
      <div className={`${style.animation_1} relative h-full flex flex-row gap-2`}>
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img2} alt={'img2'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
      </div>
      <div className={`${style.animation_2} relative h-full flex flex-row left-[-100%] gap-2`}>
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
        <Image src={img1} alt={'img1'} height={200} />
      </div>
    </div>
  )
}

export default Testimonial