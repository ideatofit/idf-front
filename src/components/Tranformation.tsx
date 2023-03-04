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
      for (let i = 0; i < containerRef1.current.children.length; i++) {
        width1 += containerRef1.current.children[i].getBoundingClientRect().width
      }
      width1 += containerRef1.current.children.length * 18
      setContainer1width(width1)
    }

    if (containerRef2.current) {
      for (let i = 0; i < containerRef2.current.children.length; i++) {
        width2 += containerRef2.current.children[i].getBoundingClientRect().width
      }
      width2 += containerRef2.current.children.length * 18
      setContainer2width(width2)
    }
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
         duration: props['transformation']['upperImage']['speed'],
         repeat: Infinity
       }} className={` w-fit h-full flex flex-row gap-3`} ref={containerRef1}>
         {
           props['transformation']['upperImage']['img'].map((data, i) => {
             return <Image style={{height:"160px", width:"250px"}} key={i + Math.random() * 100} src={data} alt={'img1'} width={263} height={421} />
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
         duration: props['transformation']['lowerImage']['speed'],
         repeat: Infinity
       }}
         style={{
           left: `-${container2width}px`
         }}
         className={`relative h-full flex flex-row gap-3`} ref={containerRef2}>
         {
           props['transformation']['lowerImage']['img'].map((data, i) => {
             return <Image style={{height:"160px", width:"250px"}} key={i + Math.random() * 10} src={data} alt={'img1'} width={263} height={421} />
           })
         }
       </motion.div>
    </div>
  )
}

export default Transformation