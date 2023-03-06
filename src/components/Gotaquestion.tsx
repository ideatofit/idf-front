import React from 'react'
import { Poppins } from '@next/font/google'
import Button from './Button'

const poppins = Poppins({weight: "700", subsets:['latin']})

function Gotaquestion() {
  return (
    <div className={` bg-backgroundColor text-themeColor w-full h-fit py-4 text-center`}>
    <h1 className={`${poppins.className} font-bold`}>Got a question?</h1>
    <p>We’re happy to help!</p>
    <div className='w-full flex justify-center'>
    <Button text={'Contact us'}/>
    </div>
  </div>
  )
}

export default Gotaquestion