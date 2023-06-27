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
import Slide from '@/components/Slide'
import { SlideProps } from '@/lib/slide'
import { Carousel, CarouselItem } from 'react-bootstrap'

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
        <meta name="keywords" content={` Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips, ${props.keywords}`} />
        <meta name="author" content="deepak sahu" />
      </Head>
      <div className='w-full max-w-full flex flex-col bg-backgroundColor text-themeColor overflow-hidden z-10 scroll-smooth'>
        <Header />
          <Carousel pause={false} style={{ maxHeight: "100vh" }} className={`max-h-screen bg-backgroundColor`}>
            {
              props.store?.slides?.map((data, i) => {
                return (
                  <Carousel.Item key={`storeCarousel${i}`}>
                    <Link href={data?.link ?? ''}>
                    <Image
                      className="d-block w-100"
                      src={data?.img?.url ?? ''}
                      alt={''}
                      width={data?.img?.width ?? 0}
                      height={data?.img?.height ?? 0}
                      priority={true}
                      style={{ maxHeight: '70vh', objectFit: "cover" }}
                    />
                    </Link>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
          <div className='h-fit min-w-full text-center'>
            <h1 className={`${poppins.className} text-[2rem] font-bold pt-4`}>Shop by Categories</h1>
            <div id='products' className='w-full h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-2 place-items-center'>
              {
                props['store']?.['sections']?.map((data, i) => {
                  return <CategoryCard key={i} img={data?.img ?? ''} alt={''} title={data?.title ?? ''} min-price={0} redirectToId={data?.title ?? ''} />
                })
              }
            </div>
          </div>
          {
            props?.['store']?.['sections']?.map((data, i) => {
              return (
                <div id={`${data['title']}`} className='h-fit min-w-full text-center' key={`productsCard${i}`}>
                  <h1 className={`${poppins.className} text-[2rem] font-bold pt-4`}>{data['title']}</h1>
                  {
                    data['sub-category']?.map((data, i)=>{
                      return (
                        <div className='text-left' key={`sub-category${i}`}>
                          <h4 className='m-4'>{data['category']}</h4>
                        <div className='w-[100vw] h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 place-items-center'>
                          {data['products']?.map((data, i) => {
                            return (
                              <Link key={`products${i}`} href={data['affiliate']?.[0]?.link ?? ''} className='text-inherit text-decoration-none'>
                                <ProductsCard title={data['name']} price={data['price']} stars={data['stars']} img={data['img']} key={`ProductsCards${i}`} affiliate={data['affiliate']} />
                              </Link>
                            )
                          })}
                        </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
      </div>
      <Gotaquestion />
      <Footer footer={props?.footer ?? {}} />
    </>
  )
}

export async function getStaticProps() {
  // const store = await getStoreData()
  // const footer = await getFooterData()
  // const keywords = await getkeywords()
  const [store, footer, keywords] = await Promise.all([
    getStoreData(),
    getFooterData(),
    (await getkeywords()).join(", ").toLocaleLowerCase()
  ])
  return {
    props: { store, footer, keywords },
    revalidate: 60
  }
}

export default Store
