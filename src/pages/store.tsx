import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import shoelace from '../../public/shoelace.png'
import Header from '../layouts/Navigation'
import { Open_Sans, Poppins } from '@next/font/google'
import CategoryCard from '@/components/CategoryCard'
import getProducts from '@/lib/product'
import { ProductsProps } from '@/lib/product'
import ProductsCard from '@/components/ProductsCard'
import { motion } from 'framer-motion'

const opensans = Open_Sans({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "700" })

function store(props: {
  products: ProductsProps
}) {

  return (
    <>
      <Head>
        <title>store</title>
      </Head>
      <div className='w-[100vw] max-w-[100vw] flex flex-col bg-backgroundColor text-themeColor overflow-hidden'>
        <Header />
        <motion.div initial={'initial'} animate={'animate'} variants={{
          initial:{
            scale: 1.2,
            opacity: 0.6
          },
          animate:{
            scale: 1,
            opacity: 1
          }
        }} transition={{ease: 'easeInOut', duration: 0.3, scale:{
          type: 'spring',
          damping: 14
        }}}>
          <Image className='max-w-[100vw] w-full' src={shoelace} alt={'shoelace typing women'}/>
        </motion.div>
        <div className={`absolute h-full w-full max-w-full flex items-center justify-start ${opensans.className} pl-[5rem]`}>
          <h1 className='text-[4rem]'>shivam</h1>
        </div>
        <div className='h-fit min-w-full text-center'>
          <h1 className={`${poppins.className} text-[2.4rem] font-bold pt-4`}>Shop by Categories</h1>
          <div className='w-full h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 place-content-center p-4 gap-4'>
            {
              props['products']['categories'].map((data, i) => {
                return <CategoryCard key={i} img={''} alt={''}/>
              })
            }
          </div>
        </div>
        {
          props['products']['categories'].map((data) => {
            return (
              <div className='h-fit min-w-full text-center' key={`${Math.ceil(Math.random())}`}>
                <h1 className={`${poppins.className} text-[2.4rem] font-bold pt-4`}>{data['title']}</h1>
                <div className='w-full h-fit grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 items-center p-4 gap-4'>
                  {data['products'].map((data)=>{
                    return(
                      <ProductsCard title={data['title']} price={data['price']} stars={data['stars']} img={data['img']}  key={`${Math.ceil(Math.random()*1.22)}`}/>
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  return {
    props: { products },
    revalidate: 120
  }
}

export default store