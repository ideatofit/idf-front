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

const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const opensans = Open_Sans({ weight: '300', subsets: ['latin'] })

function Footer() {
    return (
        <>
            <div className='w-full h-[40vh] max-sm:h-fit max-xl:flex xl:flex max-xl:flex-row xl:flex-row max-sm:grid max-sm:grid-cols-2 bg-[#232631] text-themeColor'>
                <div className='flex-[20%] flex flex-col justify-start items-start gap-2 p-8'>
                    <h6 className={`${roboto.className}`}>Contact us</h6>
                    <div className='flex flex-row items-start gap-2'>

                        <Image src={phone} alt={'phone'} className='hover:cursor-pointer'/>
                        <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}><a className='text-decoration-none text-[#AAAAAA]' href="tel:+918156002524">+91 81560 02524</a></div>

                    </div>
                    <div className='flex flex-row items-start gap-2'>
                        <Image src={email} alt={'phone'} className='hover:cursor-pointer'/>
                        <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}><a className='text-decoration-none text-[#AAAAAA]' href='mailto:desidevlopers@gmail.com'>desidevlopers@gmail.com</a></div>
                    </div>
                    <div className='flex flex-row w-full gap-2'>
                        <Image src={facebook} alt={'phone'} className='hover:cursor-pointer'/>
                        <Image src={linkedin} alt={'phone'} className='hover:cursor-pointer'/>
                        <Image src={youtube} alt={'phone'} className='hover:cursor-pointer'/>
                        <Image src={instagram} alt={'phone'} className='hover:cursor-pointer'/>
                        <Image src={twitter} alt={'phone'} className='hover:cursor-pointer'/>
                    </div>
                </div>
                <div className='flex-[20%] flex flex-col justify-start max-xl:items-start max-sm:items-center gap-2 p-8'>
                    <h6 className={`${roboto.className}`}>Company</h6>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>About us</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Become a Coach</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Careers</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Help & Support</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Contact Us</div>
                </div>
                <div className='flex-[20%] flex flex-col max-xl:items-start max-sm:items-center justify-start gap-2 p-8'>
                    <h6 className={`${roboto.className}`}>Services</h6>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Online Coaching</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Corporate Wellness</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Fitness & Nutrition</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Courses</div>
                </div>
                <div className='flex-[20%] flex flex-col justify-start max-xl:items-start max-sm:items-center p-8 gap-2'>
                    <h6 className={`${roboto.className}`}>Explore</h6>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Fitness Articles</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Healthy Recipes</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Exercise Videos</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Nutrition Facts</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Transformations</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Mission 50 Million</div>
                </div>
                <div className='flex-[20%] flex flex-col justify-start max-xl:items-start max-sm:items-center p-8 gap-2'>
                    <h6 className={`${roboto.className}`}>Tools</h6>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Bmr Calculator</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>Body Fat Calculator</div>
                    <div className={`${opensans.className} font-[100] text-[0.8rem] text-[#AAAAAA]`}>1Rm Calculator</div>
                </div>
            </div>
            <div className='w-full h-[8vh] flex max-xl:flex-row max-xl:flex-col bg-[#232631] border-t-2 border-borderColor text-[#AAAAAA]'>
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