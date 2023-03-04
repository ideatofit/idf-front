import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import img1 from '../../public/transformation-individual-03.png'
import img2 from '../../public/transformation-individual-04.png'
import img3 from '../../public/groupofpeople.png'
import style from '../styles/Testimonial.module.css'
import { motion } from 'framer-motion'
import { TransformationProps } from '@/lib/transformation'

function Transformation(props: {
  transformation: TransformationProps
}) {
  const [container1width, setContainer1width] = useState(0)
  const [container2width, setContainer2width] = useState(0)
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width1 = 0
    let width2 = 0
    if (containerRef1.current) {
      for (let i = 0; i < 22; i++) {
        width1 += containerRef1.current.children[i].getBoundingClientRect().width
      }
      width1 += 22 * 18
      setContainer1width(width1)
    }

    if (containerRef2.current) {
      for (let i = 0; i < 22; i++) {
        width2 += containerRef2.current.children[i].getBoundingClientRect().width
      }
      width2 += 22 * 18
      setContainer2width(width2)
    }
    console.log(props.transformation)
  }, []);
  return (
    <div className='bg-backgroundColor min-h-fit w-full py-4 flex flex-col overflow-hidden gap-3'>
      <div className='text-center'>
        <h1 className='text-white text-[3.4rem] max-sm:text-[2rem]'>300,000+ lives transformed</h1>
        <p className='text-white text-[1.4rem] max-sm:text-[1.2rem] max-sm:px-[1rem]'>Real people, real stories - that&apos;s what <b>IDEATOFIT</b> is all about!</p>
      </div>
      <motion.div initial={'initial'} animate={'animate'} variants={{
        initial: {
          x: 0
        },
        animate: {
          x: container1width * -1
        }
      }} transition={{
        ease: 'linear',
        duration: props['transformation']['speed'],
        repeat: Infinity
      }} className={` w-fit h-full flex flex-row gap-3`} ref={containerRef1}>
        {
          props['transformation']['img'].map((data) => {
            return <Image src={data} alt={'img1'} className='max-sm:h-48' />
          })
        }
      </motion.div>
      <motion.div initial={'initial'} animate={'animate'} variants={{
        initial: {
          x: 0
        },
        animate: {
          x: container2width
        }
      }} transition={{
        ease: 'linear',
        duration: 40,
        repeat: Infinity
      }}
        style={{
          left: `-${container2width}px`
        }}
        className={`relative h-full flex flex-row gap-3`} ref={containerRef2}>
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img1} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
        <Image src={img2} alt={'img1'} className='max-sm:h-48' />
      </motion.div>
    </div>
  )
}

export default Transformation