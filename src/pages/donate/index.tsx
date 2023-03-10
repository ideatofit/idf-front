import React from 'react'
import Image from 'next/image'
import fauji from '../../../public/fauji.png'
import Navigation from '@/layouts/Navigation'
import Link from 'next/link'
import Footer from '@/layouts/Footer'
import getFooterData, { FooterProps } from '@/lib/footer'

function index(props:{
    footer: FooterProps
}) {
    return (
        <>
        <Navigation/>
        <div className='max-h-screen min-h-screen bg-backgroundColor flex max-sm:flex-col max-xl:flex-row xl:flex-row text-themeColor'>
            <div className='flex-[45%] flex flex-col p-12'>
                <Image src={fauji} alt={''} className='rounded-lg h-full w-full object-fit aspect-16/9' />
            </div>
            <div className='flex-[55%] flex flex-col max-xl:pl-0 max-sm:pl-12 max-sm:pt-0 p-24'>
                <h1>Donate to the Indian Army’s Family</h1>
                <p>What ever you donate to us it will directly go to needy indian army’s family. What ever you buy from us 5% of the price goes to indian army’s family.</p>
                <Link href={`https://buy.stripe.com/test_3cs6qP0w3b6tbPaaEF`}><button className='bg-white h-12 w-32 rounded-xl text-[#252525] my-8'>Donate</button></Link>
            </div>
        </div>
        <Footer footer={props['footer']}/>
        </>
    )
}

export async function getStaticProps(){
    const footer = await getFooterData()
    return {
        props:{footer}
    }
}

export default index