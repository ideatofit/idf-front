import React, { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Components
import Navigation from '@/layouts/Navigation';
import Slide from '@/components/Slide';
import Transformation from '@/components/Tranformation';
import Tools from '@/components/Tools';
import Stories from '@/components/Stories';
import Footer from '@/layouts/Footer';
import Button from '@/components/Button';
import Gotaquestion from '@/components/Gotaquestion';

// Styles
import storyStyle from '../styles/Stories.module.css'

// Fonts
import { Poppins, Open_Sans, Inter } from '@next/font/google'

// Data
import { getSlideData } from '@/lib/slide';
import { getStoriesData } from '@/lib/stories';
import getTransformationData from '@/lib/transformation';
import getWellnesshubData from '@/lib/wellnesshub';
import getFooterData, { FooterProps } from '@/lib/footer';
import { getVideo } from '@/lib/video';
import { getkeywords } from '@/lib/keywords';

// Types
import { SlideProps } from '@/lib/slide';
import { StoriesProps } from '@/lib/stories';
import { TransformationProps } from '@/lib/transformation';
import { wellnesshubProps } from '@/lib/wellnesshub';

// Libs
import ScrollButton from '@/components/ScrollButton';
import Whytochooseus from '@/components/Whytochooseus';
import Videobanner from '@/components/Videobanner';
import CoachShowcase from '@/components/CoachShowcase';
import ToolsShowcase from '@/components/ToolsShowcase';
import Wellnesshub from '@/components/Wellnesshub';


const poppins = Poppins({ subsets: ['latin'], weight: '400' })
const opensans = Open_Sans({ subsets: ['latin'], weight: '400' })
const inter = Inter({ subsets: ['latin'] })

type Props = {
  slide: SlideProps
  stories: StoriesProps
  transformation: TransformationProps,
  wellnesshub: wellnesshubProps
  video: string
  footer: FooterProps
  keywords: string
  images: any
}

const Home = (props: Props) => {
  console.log(props)

  return (
    <>
      <Head>
        <title>Ideaotift - Health and Fitness Tips | Workout Plans </title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content={`Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props['keywords']}`} />
        <meta name="author" content="deepak sahu" />

        {/* open graph for social media cards */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ideaotift - Health and Fitness Tips | Workout Plans" />
        <meta property="og:description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta property="og:image" content="https://res.cloudinary.com/dyurrus9p/image/upload/v1679590456/logo_fy99df.png" />
        <meta property="og:url" content="https://www.ideatofit.com/" />

        <link rel="canonical" href="https://www.ideatofit.com/" />
        <link rel="icon" href="https://res.cloudinary.com/dyurrus9p/image/upload/v1679590456/logo_fy99df.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />

        {/* twitters open graph */}
        <meta property="twitter:card" content="Summary Large Image" />
        <meta property="twitter:title" content="Ideaotift - Health and Fitness Tips | Workout Plans" />
        <meta property="twitter:description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dyurrus9p/image/upload/c_scale,w_1200,h_675/v1679590456/logo_fy99df.png" />
      </Head>
      <ScrollButton />
      <Navigation />
      <div className='w-100vw h-fit bg-backgroundColor overflow-hidden z-0'>
        <Slide slide={props.slide} />
        <Whytochooseus/>
        <Videobanner video={props['video']}/>
        <CoachShowcase/>
        <ToolsShowcase/>
        <Wellnesshub wellnesshub={props['wellnesshub']}/>

        <Gotaquestion />
        <Footer footer={props.footer} />
      </div >
    </>
  )
};

export async function getStaticProps() {
  const [
    slide,
    stories,
    transformation,
    wellnesshub,
    video,
    footer,
    keywords,
  ] = await Promise.all([
    getSlideData(),
    getStoriesData(),
    getTransformationData(),
    getWellnesshubData(),
    getVideo(),
    getFooterData(),
    (await getkeywords()).join(", ").toLocaleLowerCase(),
  ]);
  return {
    props: { slide, stories, transformation, wellnesshub, video, footer, keywords },
    revalidate: 60
  }
}

export default Home