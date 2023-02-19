import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Slide from '@/components/slide';
import Navigation from '@/components/Navigation';
import img2 from '../../public/transformationindividual04webp@2x.png'
import img3 from '../../public/transformationindividual05webp@2x.png'
import Testimonial from '@/components/Testimonial';


const Home: React.FC = () => {

  return(
  <>
  <Head>
    <link rel="stylesheet" href="./Home.css" />
  </Head>
    <Navigation />
    <Slide />
    <Testimonial/>
  </>
  )
};

export default Home