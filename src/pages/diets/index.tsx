import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import React from 'react'

function index(props: {
  footer: FooterProps
}) {
  return (
    <div className='h-screen w-full bg-backgroundColor text-themeColor'>
      <Navigation />
      <Footer footer={props['footer']} />
    </div>
  )
}

export async function getStaticProps() {
  const footer = await getFooterData()
  return {
    props: {
      footer
    }
  }
}

export default index