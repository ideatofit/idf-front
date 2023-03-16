import React from 'react'

function Checkbox(props:{
    text: string
}) {
    return (
        <div className='border-2 border-lightBorderColor flex flex-row items-center justify-start gap-4 p-4 rounded-lg'>
            <div className='h-7 w-7 rounded-md border-lightBorderColor border-2'>
                <div className='h-full w-full bg-white'></div>
            </div>
            <span>{props['text']}</span>
        </div>
    )
}

export default Checkbox