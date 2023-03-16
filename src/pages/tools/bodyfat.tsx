import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import React from 'react'

function Bodyfat(props:{
  footer: FooterProps
}) {
  return (
    <>
    <Navigation/>
    <div className='min-h-screen bg-backgroundColor'>

    </div>
    <Footer footer={props['footer']}/>
    </>
  )
}

export async function getStaticProps(){
  const footer = await getFooterData()
  return{
    props:{
      footer
    }
  }
}

export default Bodyfat