import Tools from '@/components/Tools'
import Navigation from '@/layouts/Navigation'
import React from 'react'
import bmr from '../../../public/bmr.png'
import rep from '../../../public/1rep.png'
import bodyFat from '../../../public/bodyFat.png'
import Footer from '@/layouts/Footer'
import getFooterData, { FooterProps } from '@/lib/footer'
import Gotaquestion from '@/components/Gotaquestion'

function Index(
    props:{
        footer: FooterProps
    }
) {
    return (
        <>
            <Navigation />
            <div className='min-h-screen w-full bg-backgroundColor text-themeColor flex max-xl:flex-row xl:flex-row max-sm:flex-col items-center justify-center pt-24 gap-4'>
            <Tools img={bmr} alt={'bmr calculator'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'} slug={'bmr'}/>
            <Tools img={rep} alt={'1 Rep Max Calculator'} title={'1 Rep Max Calculator'} description={'1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.'} slug={'onerep'}/>
            <Tools img={bodyFat} alt={''} title={'Body Fat % Calculator'} description={'Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.'} slug={'bodyfat'}/>
            </div>
            <Gotaquestion/>
            <Footer footer={props['footer']}/>
        </>
    )
}

export async function getStaticProps(){
    const footer = await getFooterData()
    return{
        props:{footer}
    }
}

export default Index