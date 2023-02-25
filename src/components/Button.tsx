import React from 'react'
import style from '../styles/button.module.css'

function Button(props:{
  text: string
}) {
  return (
    <button className={`${style.btn} text-[0.7rem]`}>
      {props.text}
    </button>
  )
}

export default Button