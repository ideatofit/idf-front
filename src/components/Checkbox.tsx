import React, { useState } from 'react'
import Image from 'next/image'
import check from '../../public/check.png'

function Checkbox(props: {
    text: string
    id: number
    onSelect: (value: number) => void
}) {
    const [checked, setChecked] = useState(false)
    return (
        <div className='border-2 border-lightBorderColor flex flex-row items-center justify-start gap-4 p-4 rounded-lg'>
            <div className={`h-7 w-7 rounded-md border-lightBorderColor border-2 p-1 ${checked ? 'bg-white' : ''}`} onClick={() => {
                setChecked(!checked)
                props.onSelect(props.id);
            }}>
                {checked && <Image src={check} alt={''} />}
            </div>
            <span>{props['text']}</span>
        </div>
    )
}

export default Checkbox