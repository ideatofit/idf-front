import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import shoelace from '../../../public/shoelace.png'
import Header from '../../layouts/Navigation'
import { Open_Sans, Poppins } from '@next/font/google'
import CategoryCard from '@/components/CategoryCard'
import getStoreData from '@/lib/storedata'
import ProductsCard from '@/components/ProductsCard'
import { motion } from 'framer-motion'
import Footer from '@/layouts/Footer'
import Gotaquestion from '@/components/Gotaquestion'
import getFooterData, { FooterProps } from '@/lib/footer'
import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@/components/Button'
import { getkeywords } from '@/lib/keywords'
import { StoreProps } from '@/types/store'

const opensans = Open_Sans({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "500" })

function Store(props: {
  footer: FooterProps
  keywords: string[]
  store: StoreProps
}) {

  return (
    <>
      <Head>
        <title>Ideaotift - Store</title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content={` Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props.keywords.join(", ").toLocaleLowerCase()}`} />
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
          <Image className='relative max-w-[100vw] w-full' height={props['store']['banner']['height']} width={props['store']['banner']['width']} style={{ maxWidth: "100vw", aspectRatio: "16 / 9" }} src={props['store']['banner']['coverimage']} alt={props['store']['banner']['alt']} />
        </motion.div>
        <div className={`absolute z-50 max-sm:h-[35%] xl:pr-[35%] max-sm:w-full h-full w-full max-w-full flex flex-col items-start justify-center ${opensans.className} max-sm:pl-8 max-xl:pl-[5rem] xl:pl-[5rem]`}>
          <h1 className={`max-xl:text-[4rem] xl:text-[4rem] max-sm:text-[1.3rem] ${poppins.className} pr-[10%]`}>{props['store']['banner']['title']}</h1>
          { props['store']['banner']['button'] && <Link href={props['store']['banner']['target']} className='text-decoration-none text-white'><Button text={props['store']['banner']['textonbutton']} /></Link>}        
          </div>
        <div className='h-fit min-w-full text-center'>
          <h1 className={`${poppins.className} text-[2.4rem] font-bold pt-4`}>Shop by Categories</h1>
          <div id='products' className='w-full h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 place-items-center'>
            {
              props['store']['sections'].map((data, i) => {
                return <CategoryCard key={i} img={''} alt={''} title={data['title']} id={`#${data['title']}`} />
              })
            }
          </div>
        </div>
        {
          props['store']['sections'].map((data, i) => {
            return (
              <div id={`${data['title']}`} className='h-fit min-w-full text-center' key={`productsCard${i}`}>
                <h1 className={`${poppins.className} text-[2.4rem] font-bold pt-4`}>{data['title']}</h1>
                <div className='w-[100vw] h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 place-items-center'>
                  {data['products'].map((data, i) => {
                    return (
                      <Link key={`products${i}`} href={data['affiliate'][0]['link']} className='text-inherit text-decoration-none'><ProductsCard title={data['name']} price={data['price']} stars={data['stars']} img={data['img']} key={`ProductsCards${i}`} /></Link>
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
  const store = await getStoreData()
  const footer = await getFooterData()
  const keywords = await getkeywords()
  return {
    props: { store, footer, keywords },
    revalidate: 60
  }
}

export default Store