import {  Router, useRouter } from 'next/router'
import { getDietData, getDietDataById } from '@/lib/diet'
import { useEffect } from 'react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

function Diets(props:{
  slugData: any
}) {
  const router = useRouter()
  const {slug} = router.query
  return (
    <div>{slug}</div>
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

export async function getStaticProps(context: Params){
  const {slug} = await context.params
  const slugData = await getDietDataById(slug)
  return{
    props:{
      slugData
    }
  }
}

export default Diets