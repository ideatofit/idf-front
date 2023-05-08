import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

// fonts
import { Poppins, Inter } from '@next/font/google'
import { wellnesshubProps } from '@/lib/wellnesshub'

// assets
import deepakbhaiya from '../../public/images/deepakbhaiya.png'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })
const inter = Inter({ subsets: ['latin'], weight: '400' })

function Wellnesshub(props: {
    wellnesshub: wellnesshubProps
}) {
    const [tab, setTab] = useState('tab1')

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className={`min-w-[100vw] text-white text-[1rem] bg-backgroundColor w-full flex flex-col items-center gap-4`}>
            <div style={{ background: 'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)' }} className='max-xl:h-[65vh] xl:h-[65vh] max-lg:h-fit max-lg:py-8 max-xl:w-[80%] xl:w-[80%] max-lg:w-[90%] flex max-xl:flex-row xl:flex-row max-xl:items-center xl:items-center justify-center rounded-xl border-2 border-borderColor'>
                <div className='h-[70%] w-[90%] max-lg:w-[90%] rounded-xl flex max-xl:flex-row xl:flex-row max-lg:flex-col-reverse max-lg:gap-8 max-lg:justify-center'>
                    <div className='flex-[45%] flex flex-col'>
                        <div className='relative h-[40%] text-left'>
                            <h1 className={`${poppins.className} text-[2rem]`}>{props['wellnesshub']['tab1']['title']}</h1>
                            <p className={`${inter.className} font-[500] pr-32`}>{props['wellnesshub']['tab1']['description']}</p>
                        </div>
                        <div className='relative h-[60%] flex flex-col justify-end gap-2 md:pt-6'>
                            <div className={`text-decoration-none w-[50%] h-[25%] rounded-full hover:pointer-events-auto	 ${tab === 'tab1' ? 'bg-white' : 'bg-transparent'} flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                                setTab('tab1')
                                if (tab === 'tab1') {
                                    window.location.href = props['wellnesshub']['tab1']['link']
                                }
                            }}>
                                <div className={`${tab === 'tab1' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>{props['wellnesshub']['tab1']['textonbutton']}</div>
                                <div className={`${tab !== 'tab1' && 'opacity-0'} text-black`}>&#62;</div>
                            </div>
                            <div className={`w-[50%] h-[25%] rounded-full ${tab === 'tab2' ? 'bg-white' : 'bg-transparent'} hover:pointer-events-auto	 text-decoration-none flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                                setTab('tab2')
                                if (tab === 'tab2') {
                                    window.location.href = props['wellnesshub']['tab2']['redirectTo']
                                }
                            }}>
                                <div className={`${tab === 'tab2' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>SUPPLIMENT</div>
                                <div className={`${tab !== 'tab2' && 'opacity-0'} text-black`}>&#62;</div>
                            </div>
                            <div className={`text-decoration-none w-[50%] h-[25%] rounded-full ${tab === 'tab3' ? 'bg-white' : 'bg-transparent'} hover:pointer-events-auto flex items-center justify-around p-2 cursor-pointer`} onClick={() => {
                                setTab('tab3')
                                if (tab === 'tab3') {
                                    window.location.href = props['wellnesshub']['tab3']['redirectTo']
                                }
                            }}>
                                <div className={`${tab === 'tab3' ? 'text-black' : 'text-white'} text-[1rem] md:text-[0.8rem]`}>EQUIPMENT</div>
                                <div className={`${tab !== 'tab3' && 'opacity-0'} text-black`}>&#62;</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-[55%] flex max-xl:flex-row xl:flex-row justify-evenly gap-2' id='wellnesshub'>
                        {tab === 'tab1' &&
                            <>
                                <div className='flex-[33%] relative h-full gap-2'>
                                    <div className='h-[103%] w-[100%] overflow-hidden '>
                                        <Link href={props['wellnesshub']['tab1']['link1'] ?? ''}>
                                            <Image src={props['wellnesshub']['tab1']['img1']['url']} alt='wellness hub 1' height={props['wellnesshub']['tab1']['img1']['height']} width={props['wellnesshub']['tab1']['img1']['width']} className='' />
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex-[33%] relative h-full flex flex-col items-center gap-2'>
                                    <div className='h-[55%] w-[100%] overflow-hidden rounded-xl'>
                                        <Link href={props['wellnesshub']['tab1']['link2'] ?? ''}>
                                            <Image src={props['wellnesshub']['tab1']['img2']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img2']['width']} className='' />
                                        </Link>
                                    </div>
                                    <div className='h-[45%] w-[100%] object-fill overflow-hidden rounded-xl'>
                                        <Link href={props['wellnesshub']['tab1']['link3'] ?? ''}>
                                            <Image src={props['wellnesshub']['tab1']['img3']['url']} alt='wellness hub 3' height={props['wellnesshub']['tab1']['img3']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='' />
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex-[33%] relative h-full flex flex-col gap-2'>
                                    <div className='h-[33%] w-[100%] overflow-hidden rounded-xl'>
                                        <Link href={props['wellnesshub']['tab1']['link4'] ?? ''}>
                                            <Image src={props['wellnesshub']['tab1']['img4']['url']} alt='wellness hub 1' height={props['wellnesshub']['tab1']['img4']['height']} width={props['wellnesshub']['tab1']['img4']['width']} className='' />
                                        </Link>
                                    </div>
                                    <div className='h-[67%] w-[100%] overflow-hidden rounded-xl'>
                                        <Link href={props['wellnesshub']['tab1']['link5'] ?? ''}>
                                            <Image src={props['wellnesshub']['tab1']['img5']['url']} alt='wellness hub 1' height={props['wellnesshub']['tab1']['img5']['height']} width={props['wellnesshub']['tab1']['img5']['width']} className='' />
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            tab === 'tab2' &&
                            <div className='min-h-[25vh] flex flex-col items-center text-center'>
                                <div className='flex max-w-full max-h-full overflow-hidden gap-2'>
                                    <Link href={props['wellnesshub']['tab2']['link1'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab2']['img1']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                    <Link href={props['wellnesshub']['tab2']['link2'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab2']['img2']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                </div>
                                <div className='flex max-w-full max-h-full overflow-hidden gap-2'>
                                    <Link href={props['wellnesshub']['tab2']['link3'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab2']['img3']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                    <Link href={props['wellnesshub']['tab2']['link4'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab2']['img4']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                </div>
                            </div>
                        }
                        {
                            tab === 'tab3' &&
                            <div className='min-h-[25vh] flex flex-col items-center text-center'>
                                <div className='flex max-w-full max-h-full overflow-hidden gap-2'>
                                    <Link href={props['wellnesshub']['tab3']['link1'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab3']['img1']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                    <Link href={props['wellnesshub']['tab3']['link2'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab3']['img2']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                </div>
                                <div className='flex max-w-full max-h-full overflow-hidden gap-2'>
                                    <Link href={props['wellnesshub']['tab3']['link3'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab3']['img3']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                    <Link href={props['wellnesshub']['tab3']['link4'] ?? ''} className='overflow-hidden h-full rounded-lg'>
                                        <Image src={props['wellnesshub']['tab3']['img4']['url']} alt='wellness hub 2' height={props['wellnesshub']['tab1']['img2']['height']} width={props['wellnesshub']['tab1']['img3']['width']} className='max-sm:w-[49%] rounded-lg my-1 object-cover' />
                                    </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} style={{ background: '#232631' }} className='max-xl:min-h-[65vh] xl:min-h-[65vh] max-sm:h-fit max-sm:py-8 max-xl:w-[80%] xl:w-[80%] max-sm:w-[90%] flex max-xl:flex-row xl:flex-row max-sm:flex-col rounded-xl border-2 border-borderColor overflow-hidden'>
                <div className='h-full flex-[40%]'>
                    <div style={{ borderRadius: '0px 243.54px 389.67px 0px' }} className='relative h-full w-[80%] left-0 bg-[#454958] max-md:overflow-hidden'>
                        <Image src={deepakbhaiya} alt='deepak sahu' height={550} width={750} className='scale-[1.3] max-sm:relative absolute top-0 max-sm:left-0 left-[10%]' />
                    </div>
                </div>
                <div className='flex-[60%] h-full'>
                    <div className='flex flex-col text-left p-8'>
                        <h1 className={`${poppins.className} font-[700]`}>Book Online <br />Consultation</h1>
                        <p>Start your journey to better health with an expert Health Consultant, today! Discover your health profile, learn the top health mistakes you might be making and get tips to achieve your health goal.</p>
                    </div>
                    <div className='relative flex flex-col justify-end items-start p-8'>
                        <Link href="/diets"><button className='bg-white h-12 w-32 rounded-xl text-[#252525]' type={'button'}>BOOK NOW</button></Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Wellnesshub