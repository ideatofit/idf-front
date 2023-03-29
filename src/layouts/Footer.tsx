import React from 'react'
import Image from 'next/image'
import phone from '../../public/Phone.svg'
import email from '../../public/email.svg'
import { Roboto, Open_Sans } from '@next/font/google'
import { FooterProps } from '@/lib/footer'
import Link from 'next/link'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const opensans = Open_Sans({ weight: '300', subsets: ['latin'] })

function Footer(props: {
    footer: FooterProps
}) {
    return (
        <footer className='h-fit max-w-[100vw] overflow-hidden'>

            <div className='w-full min-h-[40vh] max-h-fit max-sm:h-fit max-xl:flex xl:flex max-xl:flex-row xl:flex-row max-sm:grid max-sm:grid-cols-2 bg-[#232631] text-themeColor'>
                <div className='flex-[20%] flex flex-col justify-start items-start gap-2 p-8'>
                    <h6 className={`${roboto.className}`}>Contact us</h6>
                    <div className='flex flex-row items-start gap-2'>

                        <Image src={phone} alt={'phone'} className='hover:cursor-pointer' />
                        <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}><a className='text-decoration-none text-[#AAAAAA]' href={`tel:+91${props['footer']['contact']['phone']}`}>{`+91${props['footer']['contact']['phone']}`}</a></div>

                    </div>
                    <div className='flex flex-row items-start gap-2'>
                        <Image src={email} alt={'phone'} className='hover:cursor-pointer' />
                        <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}><a className='text-decoration-none text-[#AAAAAA]' href={`mailto:${props['footer']['contact']['gmail']}`}>{props['footer']['contact']['gmail']}</a></div>
                    </div>
                    <div className='flex flex-row w-full gap-2'>
                        {
                            props['footer']['contact']['socialmedia'].map((data) => {
                                return <Link key={Math.random() * 1.33} href={data['url']}><Image src={data['logo']} alt={data['name']} width={31} height={30} className='hover:cursor-pointer' /></Link>
                            })
                        }
                    </div>
                </div>
                {
                    props['footer']['footercontent'].map((data) => {
                        return (
                            <div key={Math.random() * 1.25} className='flex-[20%] flex flex-col justify-start max-xl:items-start max-sm:items-center gap-2 p-8'>
                                <h6 className={`${roboto.className}`}>{data['title']}</h6>
                                {
                                    data['content'].map((data) => {
                                        return <Link key={Math.random() * 1.24} href={data['url']} className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA] text-decoration-none`}>{data['text']}</Link>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-full h-[8vh] flex max-xl:flex-row bg-[#232631] border-t-2 border-borderColor text-[#AAAAAA]'>
                <div className={` ${roboto.className} text-[0.7rem] flex-[30%] flex flex-col h-full text-center justify-center`}>
                    <div>Copyright © 2015 - 2022 All Rights Reserved.</div>
                </div>
                <div className={`${roboto.className} text-[0.7rem] flex-[70%] flex h-full text-center justify-center p-3`}>
                    <div className='border-r-2 h-full w-full border-borderColor text-right flex items-center justify-center'>
                        Privacy Policy
                    </div>
                    <div className='border-r-2 h-full w-full border-borderColor  flex items-center justify-center'>
                        Terms & Conditions
                    </div>
                    <div className='h-full w-full flex items-center justify-center'>
                        Sitemap
                    </div>
                </div>
            </div>
            <div className={`${opensans.className} min-h-[40vh] max-h-fit w-full border-borderColor border-y-2 flex flex-col p-4  bg-Midnight`}>
                <div className='text-start text-themeColor'>
                    <h6>Keywords</h6>
                </div>
                <div className='flex flex-wrap justify-start gap-8 text-white min-h-full p-3 text-[0.9rem]'>
                    {
                        props['footer']['keywords'].map((data) => data)
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer