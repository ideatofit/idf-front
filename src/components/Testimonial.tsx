import React from 'react'
import Image from 'next/image'
import img1 from '../../public/transformation-individual-03.png'
import img2 from '../../public/transformation-individual-04.png'
import style from '../styles/Testimonial.module.css'

function Testimonial() {
  return (
    <div className='bg-backgroundColor min-h-[28rem] w-full py-4 flex flex-col overflow-hidden gap-3'>
      <div className='text-center'>
        <h1 className='text-white text-[3.4rem]'>300,000+ lives transformed</h1>
        <p className='text-white text-[1.4rem]'>Real people, real stories - that&apos;s what <b>IDEATOFIT</b> is all about!</p>
      </div>
      <div className={`${style.animation_1} relative h-full flex flex-row gap-3`}>
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img2} alt={'img2'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
        <Image src={img1} alt={'img1'} className="max-h-[12rem]" />
      </div>
      <div className={`${style.animation_2} relative h-full flex flex-row left-[-100%] gap-3`}>
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