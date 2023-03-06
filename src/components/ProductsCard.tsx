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
        <div className={`${poppins.className} h-fit max-sm:w-[12.8rem] max-xl:w-[14.9rem] flex flex-col my-3`}>
            <div className='max-w-[12.83rem] w-[14.83rem] max-h-[19.89rem] h-fit rounded-xl overflow-hidden'>
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
                <span className='max-xl:flex-[40%] max-lg:flex-[40%] flex justify-self-start'>{`₹${props['price']}`}</span>
                <div className='max-xl:flex-[60%] max-w-full min-h-full'>
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