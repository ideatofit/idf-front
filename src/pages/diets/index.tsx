import Navigation from '@/layouts/Navigation'
import React from 'react'

function index() {
  return (
    <div className='h-screen w-full bg-backgroundColor text-themeColor'>
        <Navigation/>
        <div className='h-screen w-full grid place-items-center'>
            <span className='text-[10rem]'>Diet</span>
        </div>
    </div>
  )
}

export default index