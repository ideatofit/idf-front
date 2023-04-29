import React from 'react'
import Image from 'next/image'
import productimg from '../../public/joggers.png'
import stars from '../../public/stars.svg'
import { Poppins } from '@next/font/google'
import { motion } from 'framer-motion'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import dynamic from 'next/dynamic'


const poppins = Poppins({ weight: "500", subsets: ['latin'] })

function ProductsCard(props: {
    title: string,
    price: number,
    stars: number,
    img: string
    affiliate: {
        name: string
        link: string
    }[]
}) {
    return (
        <div className={`${poppins.className} h-fit w-[14.9rem] flex flex-col max-sm:scale-90`}>
            <div className='max-w-[14.83rem] w-[14.83rem] max-h-[19.89rem] h-[19.89rem] rounded-xl overflow-hidden'>
                <motion.div
                    className="group"
                    initial={'initial'}
                    whileInView={'animate'}
                    whileHover={'hover'}
                    variants={{
                        initial: {
                            scale: 1.4,
                            opacity: 0.5,
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                        },
                        hover: {
                            scale: 1.07,
                        },
                    }}
                    transition={{ ease: 'easeOut', duration: 0.4 }}
                >
                    <Image
                        src={props['img']}
                        width={267}
                        height={358}
                        className={'relative h-full w-full'}
                        alt={''}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center hidden group-hover:flex">
                        {
                            props['affiliate'].map((data, i)=>{
                                return <Link href={data['link']} key={`affiliateButton${i}`}><Button variant='primary'>{data['name']}</Button></Link>
                            })
                        }
                    </div>
                </motion.div>
            </div>
            <div className='h-fit w-full text-left pt-2 px-2'>
                <h6>{props.title}</h6>
            </div>
            <div className='h-fit w-full flex flex-row px-2'>
                <span className='flex-[60%] flex justify-self-start'>{`₹${props['price']}`}</span>
                <div className='relative flex-[40%] max-w-full min-h-full'>
                    <div className='flex flex-row w-full items-start justify-start'>
                        {
                            Array.from({ length: props['stars'] }).map((_, index) => {
                                return (
                                    <Image key={`recipe${index}`} src={stars} alt={''} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(ProductsCard), { ssr: false })