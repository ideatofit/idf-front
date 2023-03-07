import Navigation from '@/layouts/Navigation'
import React from 'react'

function Index() {
    return (
        <div className='h-screen w-full bg-backgroundColor text-themeColor grid place-items-center'>
            <Navigation/>
            <span className='text-[10rem]'>Tools</span>
        </div>
    )
}

export default Index