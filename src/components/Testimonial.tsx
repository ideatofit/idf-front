import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import img1 from '../../public/transformation-individual-03.png'
import img2 from '../../public/transformation-individual-04.png'
import img3 from '../../public/groupofpeople.png'
import style from '../styles/Testimonial.module.css'

function Testimonial() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (containerRef1.current) {
      const width = getComputedStyle(containerRef1.current).getPropertyValue('width');
      containerRef1.current.style.setProperty('--container1-width', width);
      console.log(width)
    }
    if (containerRef2.current) {
      const width = getComputedStyle(containerRef2.current).getPropertyValue('width');
      containerRef2.current.style.setProperty('--container2-width', width);
    }
  }, []);

  return (
    <div className='bg-backgroundColor min-h-fit w-full py-4 flex flex-col overflow-hidden gap-3'>
      <div className='text-center'>
        <h1 className='text-white text-[3.4rem] max-sm:text-[2rem]'>300,000+ lives transformed</h1>
        <p className='text-white text-[1.4rem] max-sm:text-[1.2rem] max-sm:px-[1rem]'>Real people, real stories - that&apos;s what <b>IDEATOFIT</b> is all about!</p>
      </div>
      <div className={`${style.animation_1} w-fit h-full flex flex-row gap-3`} ref={containerRef1}>
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img2} alt={'img2'} height={164} />
        <Image src={img3} alt={'img3'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img2} alt={'img2'} height={164} />
        <Image src={img3} alt={'img3'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
      </div>
      <div className={`${style.animation_2} relative h-full flex flex-row left-[-100%] gap-3`} ref={containerRef2}>
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
        <Image src={img1} alt={'img1'} height={164} />
      </div>
    </div>
  )
}

export default Testimonial