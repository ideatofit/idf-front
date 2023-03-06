import React from 'react'
import style from '../styles/button.module.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({weight:"400", subsets:['latin']})

function Button(props:{
  text: string
}) {
  return (
    <button className={`${style.btn} ${poppins.className} text-[1.2rem]`}>
      {props.text}
    </button>
  )
}

export default Button