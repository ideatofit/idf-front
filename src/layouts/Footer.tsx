import React from 'react'
import Image from 'next/image'
import phone from '../../public/Phone.svg'
import email from '../../public/email.svg'
import facebook from '../../public/Facebook.svg'
import linkedin from '../../public/LinkedIn.svg'
import youtube from '../../public/Youtube.svg'
import instagram from '../../public/Instagram.svg'
import twitter from '../../public/Twitter.svg'
import { Roboto, Open_Sans } from '@next/font/google'
import { FooterProps } from '@/lib/footer'
import Link from 'next/link'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const opensans = Open_Sans({ weight: '300', subsets: ['latin'] })

function Footer(props: {
    footer: FooterProps
}) {
    return (
        <>
            <div className='w-full h-[40vh] max-sm:h-fit max-xl:flex xl:flex max-xl:flex-row xl:flex-row max-sm:grid max-sm:grid-cols-2 bg-[#232631] text-themeColor'>
                <div className='flex-[20%] flex flex-col justify-start items-start gap-2 p-8'>
                    <h6 className={`${roboto.className}`}>Contact us</h6>
                    <div className='flex flex-row items-start gap-2'>

                        <Image src={phone} alt={'phone'} className='hover:cursor-pointer' />
                        <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}><a className='text-decoration-none text-[#AAAAAA]' href={`tel:+91${props['footer']['contact']['phone']}`}>{`+91${props['footer']['contact']['phone']}`}</a></div>

                    </div>
                    <div className='flex flex-row items-start gap-2'>
                        <Image src={email} alt={'phone'} className='hover:cursor-pointer' />
                        <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}><a className='text-decoration-none text-[#AAAAAA]' href='mailto:desidevlopers@gmail.com'>desidevlopers@gmail.com</a></div>
                    </div>
                    <div className='flex flex-row w-full gap-2'>
                        {
                            props['footer']['contact']['socialmedia'].map((data) => {
                                return <Link href={data['url']}><Image src={data['logo']} alt={data['name']} width={31} height={30} className='hover:cursor-pointer' /></Link>
                            })
                        }
                    </div>
                </div>
                {
                    props['footer']['footercontent'].map((data)=>{
                        return(
                            <div className='flex-[20%] flex flex-col justify-start max-xl:items-start max-sm:items-center gap-2 p-8'>
                            <h6 className={`${roboto.className}`}>{data['title']}</h6>
                            {
                                data['content'].map((data)=>{
                                    return <Link href={data['url']} className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA] text-decoration-none`}>{data['text']}</Link>
                                })
                            }
                        </div>
                        )
                    })
                }
            </div>
            <div className='w-full h-[8vh] flex max-xl:flex-row bg-[#232631] border-t-2 border-borderColor text-[#AAAAAA]'>
                <div className={` ${roboto.className} text-[0.7rem] flex-[60%] flex flex-col h-full text-center justify-center`}>
                    <div>Copyright © 2015 - 2022 All Rights Reserved.</div>
                </div>
                <div className={` ${roboto.className} text-[0.7rem] flex-[40%] flex h-full text-center justify-center p-3`}>
                    <div className='border-r-2 h-full w-full border-borderColor text-right flex items-center justify-center'>
                        Privacy Policy
                    </div>
                    <div className='border-r-2 h-full w-full border-borderColor  flex items-center justify-center'>
                        Terms & Conditions
                    </div>
                    <div className='h-full w-full  flex items-center justify-center'>
                        Sitemap
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer