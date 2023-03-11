import React, { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { Public_Sans } from '@next/font/google'
import { motion } from 'framer-motion'

const publicsans = Public_Sans({ weight: ['400', '800', '300'], subsets: ['latin'] })

function UserInfoForm() {
    const [step, setStep] = useState(1)

    const handleNextButton = () => {
        if (step < 6) {
            setStep(step + 1);
        }
    };

    const handleBackButton = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className={`h-fit max-sm:w-full w-[80%] flex flex-col gap-4 items-center rounded-xl bg-MidnightOcean border-2 border-borderColor max-sm:p-6 p-8`}>
             <div className=' w-full h-16 flex flex-row justify-between items-center '>
                <div className={`min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center max-sm:mx-1 ${step !== 1 && 'opacity-70'}`}>1</div>
                <div className={`border-2 border-borderColor w-[14%] max-sm:w-full`}></div>
                <div className={`min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center ${step !== 2 && 'opacity-70'} max-sm:mx-1`}>2</div>
                <div className={`border-2 border-borderColor w-[14%] max-sm:w-full`}></div>
                <div className={`min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center ${step !== 3 && 'opacity-70'} max-sm:mx-1`}>3</div>
                <div className={`border-2 border-borderColor w-[14%] max-sm:w-full`}></div>
                <div className={`min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center ${step !== 4 && 'opacity-70'} max-sm:mx-1`}>4</div>
                <div className={`border-2 border-borderColor w-[14%] max-sm:w-full`}></div>
                <div className={`min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center ${step !== 5 && 'opacity-70'} max-sm:mx-1`}>5</div>
                <div className={`border-2 border-borderColor w-[14%] max-sm:w-full`}></div>
                <div className={`min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center ${step !== 6 && 'opacity-70'} max-sm:mx-1`}>6</div>
            </div>
            <motion.div initial='initial' animate="animate" variants={{
                // initial: {
                //     opacity: 1,
                //     x: 0
                // },
                // animate: {
                //     opacity: 0,
                //     x: -100
                // }
            }} transition={{ duration: 2, ease: 'easeOut' }} className='flex justify-center'>
                <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                    <span className={`font-[400]`}>step 1 of 6</span>
                    <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your fitness goal?</h1>
                    <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                    <div className='flex flex-col gap-4 w-full h-fit'>
                        <p className={`font-[300]`}>Choose any one</p>
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                        <Checkbox />
                    </div>
                </div>
            </motion.div> 
            <div className='w-[78%] h-fit flex flex-row justify-between'>
                <button className='bg-[#1D202C] h-12 w-24 rounded-lg' onClick={handleBackButton}>&larr; Back</button>
                <button className='bg-[#1D202C] h-12 w-24 rounded-lg' onClick={handleNextButton}>Next &rarr;</button>
            </div>
        </div>
    )
}

export default UserInfoForm