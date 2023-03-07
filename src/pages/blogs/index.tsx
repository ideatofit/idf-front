import Navigation from '@/layouts/Navigation'
import Link from 'next/link'
import React from 'react'

function Index() {
  return (
    <div className='h-screen w-full bg-backgroundColor grid place-items-center text-themeColor'>
        <Navigation/>
        <span className='text-[10rem]'>Blogs</span>
        <Link href={'/blogs/1'}>click here</Link>
    </div>
  )
}

export default Index