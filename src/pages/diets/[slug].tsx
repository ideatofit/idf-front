import { Router, useRouter } from 'next/router'
import { getDietData, getDietDataBySlug } from '@/lib/diet'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import Navigation from '@/layouts/Navigation'
import Footer from '@/layouts/Footer'
import getFooterData, { FooterProps } from '@/lib/footer'
import { DietDataBySlug } from '@/lib/diet'
import Image from 'next/image'
import Recipecard from '@/components/Recipecard'
import { useEffect, useLayoutEffect } from 'react'
import font from '../../styles/font.module.css'

function Diets(props: {
  recipe: DietDataBySlug,
  footer: FooterProps
}) {
  const { slug } = useRouter().query
  return (
    <>
      <Head>
        <title>{`ideatofit-${props['recipe']['recipe']['title']}`}</title>
      </Head>
      <Navigation />
      <div className={`${font.gotham} min-h-screen w-full bg-backgroundColor xl:p-36 max-xl:p-36 max-sm:p-4 max-sm:pt-24 text-themeColor`}>
        <div className={`max-h-[50vh] w-full text-themeColor rounded-lg overflow-hidden`}>
          <Image src={props['recipe']['recipe']['img']} alt={''} height={360} width={1130} className='h-full w-full object-cover' />
        </div>
        <div className='flex flex-col gap-1 py-4'>
          <h5>{props['recipe']['recipe']['title']}</h5>
          <span>{props['recipe']['recipe']['date']}</span>
        </div>
        <div className={`text-themeColor py-8`} dangerouslySetInnerHTML={{ __html: props['recipe']['recipe']['content'] ?? "<h1>No post are available</h1>" }}></div>
        <div className='min-h-fit w-full border-borderColor border-t-2 text-themeColor'>0 views   comments</div>
        <div className='flex flex-col'>

        </div>
        <h2 className='text-themeColor my-4'>Related Recipes</h2>
        <div className='w-full h-fit flex flex-row justify-start gap-3 overflow-auto'>
          {
            props['recipe']['recipe']['relations'].map((data, i) => {
              return <Recipecard key={`recipeCard${i}`} img={data['img']} title={data['title']} description={data['description']} vegeterian={false} slug={data['slug']} />
            })
          }
        </div>
      </div>
      <Footer footer={props['footer']} />
    </>
  )
}

export async function getStaticPaths() {
  const slug = (await getDietData()).recipes.map((data) => {
    return data['slug']
  })
  return {
    paths: slug.map((data) => {
      return {
        params: {
          slug: data
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps(context: Params) {
  const { slug } = await context.params
  const recipe = await getDietDataBySlug(slug)
  const footer = await getFooterData()
  return {
    props: {
      recipe, footer
    },
    revalidate: 60
  }
}

export default Diets