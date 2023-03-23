import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import shoelace from '../../../public/shoelace.png'
import Header from '../../layouts/Navigation'
import { Open_Sans, Poppins } from '@next/font/google'
import CategoryCard from '@/components/CategoryCard'
import getProducts from '@/lib/product'
import { ProductsProps } from '@/lib/product'
import ProductsCard from '@/components/ProductsCard'
import { motion } from 'framer-motion'
import Footer from '@/layouts/Footer'
import Gotaquestion from '@/components/Gotaquestion'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@/components/Button'

const opensans = Open_Sans({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "500" })

function Store(props: {
  products: ProductsProps,
  footer: FooterProps
}) {

  return (
    <>
      <Head>
        <title>Ideaotift - Store</title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content="Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips
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
      <div className='w-[100vw] max-w-[100vw] flex flex-col bg-backgroundColor text-themeColor overflow-hidden z-10 scroll-smooth'>
        <Header />
        <motion.div initial={'initial'} animate={'animate'} variants={{
          initial: {
            scale: 1.2,
            opacity: 0.6
          },
          animate: {
            scale: 1,
            opacity: 1
          }
        }} transition={{
          ease: 'easeInOut', duration: 0.3, scale: {
            type: 'spring',
            damping: 14
          }
        }} className='relative h-fit max-w-[100vw]'>
          <Image className='relative max-w-[100vw] w-full' style={{ maxWidth: "100vw", aspectRatio: "16 / 9" }} src={shoelace} alt={'shoelace typing women'} />
        </motion.div>
        <div className={`absolute z-50 max-sm:h-[35%] xl:pr-[35%] max-sm:w-full h-full w-full max-w-full flex flex-col items-start justify-center ${opensans.className} max-sm:pl-8 max-xl:pl-[5rem] xl:pl-[5rem]`}>
          <h1 className={`max-xl:text-[4rem] xl:text-[4rem] max-sm:text-[1.3rem] ${poppins.className}`}>STAY HEALTHY AND WEIGHTLESS</h1>
          <p className='pr-24 max-sm:text-[0.8rem]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
          <Link href="#products" className='text-decoration-none text-white'><Button text={'VIEW ALL PRODUCTS'} /></Link>
        </div>
        <div className='h-fit min-w-full text-center'>
          <h1 className={`${poppins.className} text-[2.4rem] font-bold pt-4`}>Shop by Categories</h1>
          <div id='products' className='w-full h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 place-items-center'>
            {
              props['products']['categories'].map((data, i) => {
                return <CategoryCard key={i} img={''} alt={''} title={data['title']} id={`#${data['title']}`} />
              })
            }
          </div>
        </div>
        {
          props['products']['categories'].map((data, i) => {
            return (
              <div id={`${data['title']}`} className='h-fit min-w-full text-center' key={`productsCard${i}`}>
                <h1 className={`${poppins.className} text-[2.4rem] font-bold pt-4`}>{data['title']}</h1>
                <div className='w-[100vw] h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 place-items-center'>
                  {data['products'].map((data) => {
                    return (
                      <ProductsCard title={data['title']} price={data['price']} stars={data['stars']} img={data['img']} key={`${Math.ceil(Math.random() * 1.22)}`} />
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
      <Gotaquestion />
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  const footer = await getFooterData()
  return {
    props: { products, footer },
    revalidate: 60
  }
}

export default Store