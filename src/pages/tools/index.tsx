import Tools from '@/components/Tools'
import Navigation from '@/layouts/Navigation'
import React from 'react'
import bmr from '../../../public/bmr.png'
import rep from '../../../public/1rep.png'
import bodyFat from '../../../public/bodyFat.png'
import Footer from '@/layouts/Footer'
import getFooterData, { FooterProps } from '@/lib/footer'
import Gotaquestion from '@/components/Gotaquestion'
import Head from 'next/head'

function Index(
    props:{
        footer: FooterProps
    }
) {
    return (
        <>
        <Head>
        <title>Ideaotift - fitness calculators</title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content="Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips
,fitness calculator
,meal planning services
,nutritionist consultation
,Weight loss coaching
,Online fitness classes
,Fitness training programs
,Workout routines for weight loss
,Low-calorie meal ideas
,Plant-based diet plans
,High-fiber recipes
,Gluten-free meal ideas
,Meal prep delivery services
,Healthy eating habits
,Meal replacement options
,Mindful eating techniques
,High-intensity interval training (HIIT) workouts
,Resistance training programs
,Cardiovascular exercise routines
,Nutrition education programs
,Personalized workout plans." />
        <meta name="author" content="deepak sahu" />
        </Head>
            <Navigation />
            <div className='min-h-screen w-full bg-backgroundColor text-themeColor flex max-xl:flex-row xl:flex-row max-sm:flex-col items-center justify-center pt-24 gap-4'>
            <Tools img={bmr} alt={'bmr calculator'} title={'BMR Calculator'} description={'Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.'} slug={'bmr'} initial={{ opacity: 0 }} animation={{ opacity: 1 }} transition={{ duration: 1, delay:0.4 }} whileInView={undefined}/>
            <Tools img={rep} alt={'1 Rep Max Calculator'} title={'1 Rep Max Calculator'} description={'1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.'} slug={'onerep'} initial={{ opacity: 0 }} animation={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} whileInView={undefined}/>
            <Tools img={bodyFat} alt={''} title={'Body Fat % Calculator'} description={'Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.'} slug={'bodyfat'} initial={{ opacity: 0 }} animation={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} whileInView={undefined}/>
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