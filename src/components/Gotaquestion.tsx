import React from 'react'
import { Poppins } from '@next/font/google'
import Button from './Button'
import Link from 'next/link'

const poppins = Poppins({ weight: "700", subsets: ['latin'] })

function Gotaquestion() {
  return (
    <div className={` bg-backgroundColor text-themeColor max-w-[100vw] overflow-hidden h-fit py-4 text-center`}>
      <h1 className={`${poppins.className} font-bold`}>Got a question?</h1>
      <p>We’re happy to help!</p>
      <div className='w-full flex justify-center'>
        <Link href="/contactus" className='text-decoration-none text-inherit'>
          <Button text={'Talk to a ideatofit Expert'} />
        </Link>
      </div>
    </div>
  )
}

export default Gotaquestion