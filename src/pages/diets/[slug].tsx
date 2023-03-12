import { Router, useRouter } from 'next/router'
import { getDietData, getDietDataBySlug } from '@/lib/diet'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'

function Diets(props:{
  slugData: any
}) {
  const { slug } = useRouter().query
  return (
    <>
    <Head>
      <title>hello</title>
    </Head>
    <div>{slug}</div>
    <div>{JSON.stringify(props['slugData'])}</div>
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
  const slugData = await getDietDataBySlug(slug)
  return {
    props: {
      slugData
    },
    revalidate: 60
  }
}

export default Diets