import React, { useState } from 'react'
import option from '../../public/option.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Select(props: {
    placeholder: string
    options: string[]
    onChange: (value: string)=> void
    width: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | number
    error: string | ''
}) {
    const [select, setSelect] = useState(false)
    const [value, setValue] = useState('')

    const handleValueSubmit = (e: any) => {
        const text: string = e.target.innerText
        setValue(text)
        setSelect(false)
        props.onChange(text)
    }

    const animationin = {
        initial: {
            rotate: 0
        },
        animate: {
            rotate: 180
        }
    }

    const animationout = {
        initial: {
            rotate: 0
        },
        animate: {
            rotate: 360
        }
    }
    return (
        <div className={`relative w-[${props.width}%] h-full rounded-xl border-2 ${props['error'] === '' ? 'border-white' : 'border-red-800'} text-themeColor flex justify-between items-center cursor-pointer`} onClick={() => setSelect(!select)}>
            <div className='mx-2'>{value === '' ? props['placeholder'] : value}</div>
            <motion.div initial='initial' animate='animate' variants={select ? animationin : animationout} className='hover:cursor-pointer'>
                <Image src={option} alt={''} className='mx-2 cursor-pointer h-full'/>
            </motion.div>
            {select && <div className='absolute top-[105%] h-fit w-full bg-white rounded-md flex flex-col p-2 transition z-50'>
                {props['options'].map((data, i) => {
                    return (<div key={`option${i}`} className='p-2 text-left hover:bg-slate-300 text-black rounded-md hover:cursor-pointer' onClick={handleValueSubmit}>{data}</div>)
                })}
            </div>}
        </div>
    )
}

export function unitSelect() {
    return (
        <h1>hello</h1>
    )
}

export default Select