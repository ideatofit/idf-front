import { useState } from 'react'
import Checkbox from '@/components/Checkbox'
import { Public_Sans } from '@next/font/google'
import getFooterData, { FooterProps } from '@/lib/footer'
import { GoalProps, getGoals, submitData } from '@/lib/userinfo'
import Navigation from '@/layouts/Navigation'
import Footer from '@/layouts/Footer'
import Select from '@/components/Select'
import { Form, Row, Col } from 'react-bootstrap';
import { faPhone, faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn, useSession } from 'next-auth/react'
import { Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Otp from '@/components/Otp'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { NextSeo } from 'next-seo'

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
    const [ step, setStep ] = useState(1)
    const [ goalId, setGoalId ] = useState([7])
    const [ height, setHeight ] = useState(0)
    const [ weight, setWeight ] = useState(0)
    const [ age, setAge ] = useState(0)
    const [ gender, setGender ] = useState(1)
    const [ email, setEmail ] = useState('')
    const [ name, setName ] = useState('')
    const [ validated, setValidated ] = useState(false);
    const [ submitted, setSubmitted ] = useState(false)
    const [ otpVerified, setOtpVerified ] = useState(false);
    const [ showOtpInput, setShowOtpInput ] = useState(false);
    const [ phone, setPhone ] = useState('');
    const [ countryCode, setCountryCode ] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        submitData(payload, session)
        setValidated(true);
    };

    const payload: Payload = {
        goal: {
            connect: goalId
        },
        height,
        age,
        weight,
        gender: {
            connect: [gender]
        }
    }

    const { data: session, status } = useSession()

    const handleNextButton = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect');

        if (step >= 1 && step < 5) {
            setStep(step + 1);
            scrollTo(0, 0)
        }

        if (step === 5) {
            if (redirect) {
                window.location.href = redirect;
            } else {
                setStep(6)
                scrollTo(0, 0)
            }
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

        else if (name === 'name') {
            setName(value)
        }

        else if (name === 'email') {
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

    const handleSendOTP = async () => {
        try {
            const res = await fetch('/api/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ countryCode, phone }),
            });
            const response = await res.json()
            console.log(response)
            if (res.ok) {
                setShowOtpInput(true)
            } else {
                alert('oops! something went wrong try again in sometime')
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Navigation />
            <NextSeo noindex={true} />
            {showOtpInput && (
                <Otp
                    onVerify={() => {
                        setOtpVerified(true);
                        setShowOtpInput(false);
                    }}
                    countryCode={countryCode}
                    phone={phone}
                />
            )}
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
                            <span className={`font-[400]`}>step 1 of {step}</span>
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
                            <span className={`font-[400]`}>step 1 of {step}</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your height?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-fit'>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Height</Form.Label>
                                        <Form.Control
                                            name="height"
                                            type="number"
                                            placeholder="Height in cm"
                                            className="h-16 w-full border-white border-2 rounded p-3 text-white"
                                            value={height}
                                            onChange={handleInputChange}
                                            required
                                            isInvalid={validated && (height < 50 || height > 300)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid height between 50 and 300 cm.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div> }
                        { step === 3 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of {step}</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your weight?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-fit'>
                                <Form noValidate validated={validated} onChange={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Weight</Form.Label>
                                        <Form.Control
                                            name="weight"
                                            type="number"
                                            placeholder="Weight in kg"
                                            className="h-16 w-full text-white border-2 rounded p-3"
                                            value={ weight }
                                            onChange={ handleInputChange }
                                            required
                                            isInvalid={validated && (weight < 1 || weight > 500)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid weight between 1 and 500 kg.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div> }
                        { step === 4 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of {step}</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your age?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-fit'>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            name="age"
                                            type="number"
                                            placeholder="Age"
                                            className="h-16 w-full border-2 rounded p-3 text-white"
                                            value={age}
                                            onChange={handleInputChange}
                                            required
                                            isInvalid={validated && (age < 18 || age > 120)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid age between 18 and 120.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div> }
                        { step === 5 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of {step}</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>what is your Gender?</h1>
                            <p className={`font-[400]`}>This will help us understand your fitness needs better</p>
                            <div className='flex flex-col gap-4 w-full h-16'>
                                <Select placeholder={'Gender'} options={genderOptions} width={100} error={''} onChange={handleGenderChange} />
                            </div>
                        </div> }
                        { step === 6 && <div className={`${publicsans.className} h-fit max-sm:w-full w-[90%] rounded-xl max-sm:p-8 p-12 flex flex-col items-start justify-center bg-Midnight border-2 border-[#DFE3E8]`}>
                            <span className={`font-[400]`}>step 1 of {step}</span>
                            <h1 className={`max-sm:text-[2.8rem] text-[3.2rem] font-[800]`}>We are almost there</h1>
                            <p className={`font-[400]`}>Share your contact details and our expert will call you back and help you unlock a happier, healthier life!</p>
                            <div className='flex flex-col gap-4 w-full h-fit px-16 py-12'>
                                { !submitted ?
                                        <Form noValidate validated={validated} onChange={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Full name</Form.Label>
                                                <Form.Control name='name' type="text" placeholder="Full Name" className='text-white h-12' required isInvalid={validated && name.trim() === ''} onChange={(e) => setName(e.target.value)} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your full name.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control name='email' type="email" placeholder="name@example.com" className='text-white h-12' required isInvalid={validated && !email.includes('@')} onChange={(e) => setEmail(e.target.value)} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter a valid email address.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                md={12}
                                                lg={6}
                                                controlId="formPhone"
                                                className="my-3"
                                            >
                                                <Form.Label>Phone</Form.Label>
                                                <Row>
                                                    <Col xs={5}>
                                                        <PhoneInput
                                                            country={'in'}
                                                            value={countryCode}
                                                            onMount={(value) => setCountryCode(value)}
                                                            onChange={(value) => setCountryCode(value)}
                                                            inputProps={{
                                                                name: 'countryCode',
                                                                required: true,
                                                            }}
                                                            inputClass="bg-white"
                                                            dropdownClass="bg-white text-black"
                                                        />
                                                    </Col>
                                                    <Col xs={7}>
                                                        <Form.Control
                                                            type="tel"
                                                            placeholder="Enter your phone number"
                                                            className="bg-white h-12 min-w-16"
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please enter a valid phone number.
                                                        </Form.Control.Feedback>
                                                    </Col>
                                                </Row>
                                                { otpVerified ? (
                                                    'verified'
                                                ) : (
                                                    <button type='button' className="mt-2 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSendOTP} >
                                                        send otp
                                                    </button>
                                                )}
                                            </Form.Group>
                                            <Button type='submit' onClick={handleSubmit}>Submit</Button>
                                        </Form>
                                        : <motion.div
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <h2>Hurray! 🎉</h2>
                                            <p>Thank you for submitting the form. We will contact you soon.</p>
                                        </motion.div> }
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
                        </div> }
                    </div>
                    <div className='w-[78%] h-fit flex flex-row justify-between'>
                        <button className='bg-[#1D202C] h-12 w-24 rounded-lg' onClick={handleBackButton}>&larr; Back</button>
                        <button className='bg-[#1D202C] h-12 w-24 rounded-lg' onClick={handleNextButton} >Next &rarr;</button>
                    </div>
                </div>
            </div>
            <Footer footer={props['footer']} />
        </>
    )
}

export async function getStaticProps() {
    // const footer = await getFooterData()
    // const goals = await getGoals()
    const [footer, goals] = await Promise.all([getFooterData(), getGoals()])
    return {
        props: { footer, goals }
    }
}

export default Index