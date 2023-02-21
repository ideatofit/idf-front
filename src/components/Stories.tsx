import React from 'react'
import Image from 'next/image'
import quote from '../../public/quote.svg'

function Stories() {
  return (
    <div className='bg-[#232631] min-h-[60vh] min-w-[95vh] flex items-center justify-center rounded-[1.5rem] border-borderColor border-2'>
      <div className='h-[80%] w-[90%] rounded-xl flex flex-col'>
        <div className='flex-[33%] justify-start pt-16 pl-16'>
          <Image src={quote} alt="quote svg"/>
        </div>
        <div className='flex-[33%] text-left px-16 py-4'>
        I was never able to lose weight before. Thanks to Fooducate, I've lost 20 lbs in 6 months. An incredible, life changing app.
        </div>
        <div className='flex-[33%] text-left pl-16'>
          Janice
        </div>
      </div>
    </div>
  )
}

export default Stories