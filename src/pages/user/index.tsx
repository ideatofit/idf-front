import { useState } from 'react'
import Checkbox from '@/components/Checkbox'
import { Public_Sans } from '@next/font/google'
import getFooterData, { FooterProps } from '@/lib/footer'
import { GoalProps, getGoals, submitData } from '@/lib/userinfo'
import Navigation from '@/layouts/Navigation'
import Footer from '@/layouts/Footer'
import Select from '@/components/Select'
import Form from 'react-bootstrap/Form';
import { faPhone, faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn, useSession } from 'next-auth/react'


type Payload = {
    goal: {
        connect: number[]
    },
    height: number,
    age: number,
    weight: number,
    gender: {
        connect: [number]
    }
}

const publicsans = Public_Sans({ weight: ['400', '800', '300'], subsets: ['latin'] })

function Index(props: {
    footer: FooterProps,
    goals: GoalProps,
}) {
    const genderOptions = ['Male', 'Female']
    const [step, setStep] = useState(1)
    const [goalId, setGoalId] = useState([7])
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState(1)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const payload: Payload = {
        goal: {
            connect: goalId
        },
        height,
        age,
        weight,
        gender:{
            connect: [gender]
        }
    }

    const { data: session, status } = useSession()

    const handleNextButton = () => {
        if (step < 6) {
            const currentUrl = window.location.href
            if (status === 'unauthenticated') {
                signIn('google', { callbackUrl: currentUrl })
            }
            setStep(step + 1);
        }

        if (step === 6) {
            submitData(payload, session)
        }

    };

    const handleBackButton = () => {
        if (step > 1) {
            const currentUrl = window.location.href
            if (status === 'unauthenticated') {
                signIn('google', { callbackUrl: currentUrl })
            }
            setStep(step - 1);
        }
    };

    const handleCheckboxChange = (id: number) => {
        // Update the goals state variable based on which checkbox was checked or unchecked
        // For example:
        if (goalId.includes(id)) {
            // Remove id from goals
            setGoalId(goalId.filter(item => item !== id));
            console.log(payload)
        } else {
            // Add id to goals
            setGoalId([...goalId, id]);
            console.log(payload)

        }
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Update the state variables based on the name and value of the input field that changed
        // For example:
        if (name === 'height') {
            setHeight(parseInt(value));
            console.log(payload)

        } else if (name === 'age') {
            setAge(parseInt(value));
            console.log(payload)

        } else if (name === 'weight') {
            setWeight(parseInt(value));
            console.log(payload)

        } else if (name === 'gender') {
            setGender(value === 'Male' ? 1 : 2);
            console.log(payload)

        }

        else if (name === 'name'){
            setName(value)
        }

        else if(name === 'email'){
            setEmail(value)
        }
    }

    const handleGenderChange = (value: string) => {
        // Update the payload based on which option was selected
        // For example:
        if (value === 'Male') {
            setGender(0)
        } else if (value === 'Female') {
            setGender(1)
        }
    }

    return (
        <>
            <Navigation />
            <div className='h-fit max-w-[100vw] bg-backgroundColor text-themeColor grid place-items-center py-24'>
                <div className={`h-fit max-sm:w-full w-[80%] flex flex-col gap-4 items-center rounded-xl bg-MidnightOcean border-2 border-borderColor max-sm:p-6 p-8`}>
                    <div className=' w-full h-16 flex flex-row justify-between items-center '>
                        <div className={`relative min-h-[1.7rem] min-w-[1.7rem] rounded-full bg-themeColor text-black grid place-items-center max-sm:mx-1 ${step !== 1 && 'opacity-70'}`}>1</div>
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
                    <div className='flex justify-center'>
                        {step === 1 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of 6</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your fitness goal?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-fit'>
                                <p className={`font-[300]`}>Choose any one</p>
                                {
                                    props['goals'].map((data, i) => {
                                        return <Checkbox key={`checkbox${i}`} text={data['goals']} id={data['id']} onSelect={handleCheckboxChange} />
                                    })
                                }
                            </div>
                        </div>}
                        {step === 2 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of 6</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your height?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-fit'>
                                <input type="number" name='height'  className='h-16 w-full border-white border-2 rounded p-3' placeholder='height in cm' onChange={handleInputChange} />
                            </div>
                        </div>}
                        {step === 3 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of 6</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your weight?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-fit'>
                                <input type="number" name='weight' placeholder='weight in kg' className='h-16 w-full border-white border-2 rounded p-3' onChange={handleInputChange} />
                            </div>
                        </div>}
                        {step === 4 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of 6</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your age?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-fit'>
                                <input type="number" name='age' placeholder='age' className='h-16 w-full border-white border-2 rounded p-3' onChange={handleInputChange} />
                            </div>
                        </div>}
                        {step === 5 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of 6</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your Gender?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-16'>
                                <Select placeholder={'Gender'} options={genderOptions} width={100} error={''} onChange={handleGenderChange} />
                            </div>
                        </div>}
                        {step === 6 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of 6</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>We are almost there</h1>
                            <p className={`font-[400]`}>Share your contact details and our expert will call you back and help you unlock a happier, healthier life!</p>
                            <div className='flex flex-col gap-4 w-full h-fit px-16 py-12'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control name='name' type="text" placeholder="Full Name" className='text-white h-12' />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control name='email' type="email" placeholder="name@example.com" className='text-white h-12' />
                                    </Form.Group>
                                </Form>
                                <div className='h-fit flex justify-evenly items-center'>
                                    <div className="h-12 w-full flex justify-center">
                                        <FontAwesomeIcon icon={faPhone} className='h-6 w-6' />
                                        <span className='text-[0.65rem] pb-1 pl-2'>we will call you in a 1 - 2 business days</span>
                                    </div>
                                    <div className="h-12 w-full flex justify-center">
                                        <FontAwesomeIcon icon={faCircleExclamation} className='h-6 w-6' />
                                        <span className='text-[0.65rem] pl-2 pt-1'>personalized solution</span>
                                    </div>
                                    <div className="h-12 w-full flex justify-center">
                                        <FontAwesomeIcon icon={faCircleQuestion} className='h-6 w-6' />
                                        <span className='text-[0.65rem] pl-2 pt-1'>get your doubts solved</span>
                                    </div>
                                </div>
                                <div className='h-fit border-t-2 border-borderColor text-[0.9rem]'>By proceeding you&apos;re allowing ideatofit team to contact you</div>
                            </div>
                        </div>}
                    </div>
                    <div className='w-[78%] h-fit flex flex-row justify-between'>
                        <button className='bg-[#1D202C] h-12 w-24 rounded-lg' onClick={handleBackButton}>&larr; Back</button>
                        <button className='bg-[#1D202C] h-12 w-24 rounded-lg' onClick={handleNextButton}>Next &rarr;</button>
                    </div>
                </div>
            </div>
            <Footer footer={props['footer']} />
        </>
    )
}

export async function getStaticProps() {
    const footer = await getFooterData()
    const goals = await getGoals()
    return {
        props: { footer, goals }
    }
}

export default Index