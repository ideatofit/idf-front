import React from 'react'
import Image from 'next/image'
import productimg from '../../public/joggers.png'
import stars from '../../public/stars.svg'
import { Poppins } from '@next/font/google'
import { motion } from 'framer-motion'

const poppins = Poppins({weight:"500", subsets:['latin']})

function ProductsCard(props:{
    title: string,
    price: number,
    stars: number,
    img: string
}) {
    return (
        <div className={`${poppins.className} h-fit w-[14.9rem] flex flex-col`}>
            <div className='max-w-[14.83rem] w-[14.83rem] max-h-[19.89rem] h-[19.89rem] rounded-xl overflow-hidden'>
                <motion.div initial={'initial'} whileInView={'animate'} whileHover={'hover'} variants={{
                    initial:{
                        scale: 1.4,
                        opacity: 0.5
                    },
                    animate:{
                        opacity:1,
                        scale: 1
                    },
                    hover:{
                        scale: 1.07
                    }
                }}   transition={{ ease: "easeOut", duration: 0.4 }}>
                    <Image  src={props['img']} width={267} height={358} className={'relative h-full w-full'} alt={''} />
                </motion.div>
            </div>
            <div className='h-fit w-full text-left pt-2 px-2'>
                <h6>{props.title}</h6>
            </div>
            <div className='h-fit w-full flex flex-row px-2'>
                <span className='flex-[60%] flex justify-self-start'>{`₹${props['price']}`}</span>
                <div className='relative flex-[40%] max-w-full min-h-full'>
                    <div style={{maxWidth:`${props['stars'] / 5 * 100}%`, maskImage:`url(${stars})`}} className={`absolute min-h-full w-full bg-amber-400`}></div>
                    <div className='flex flex-row items-center'>
                    <Image src={stars} alt={''}/>
                    <Image src={stars} alt={''}/>
                    <Image src={stars} alt={''}/>
                    <Image src={stars} alt={''}/>
                    <Image src={stars} alt={''}/>
                    <Image src={stars} alt={''}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard