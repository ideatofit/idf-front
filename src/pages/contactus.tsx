import Footer from '@/layouts/Footer'
import Navigation from '@/layouts/Navigation'
import getFooterData, { FooterProps } from '@/lib/footer'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import LoginPage from './login'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function Contactus(props: {
    footer: FooterProps
}) {
    const [validated, setValidated] = useState(false)
    const submitted = () => {
        console.log('hello')
    }
    return (
        <>
            <Navigation />
            <main className='min-h-[100vh] w-[100vw] bg-backgroundColor grid place-items-center text-themeColor'>
                <div style={{ background: 'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)' }} className='max-xl:min-h-[65vh] xl:max-h-fit max-xl:max-h-fit xl:min-h-[65vh] max-lg:h-fit max-lg:py-8 max-xl:w-[80%] xl:w-[80%] max-lg:w-[90%] flex max-xl:flex-row xl:flex-row max-xl:items-center xl:items-center justify-center rounded-xl border-2 border-borderColor p-4'>
                    <Form className='w-[70%]' noValidate validated={validated} onSubmit={submitted}>
                        <Form>
                            <Row>
                                <Form.Group as={Col} md={12} lg={6} controlId="formFirstName" className='my-3'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" className='bg-white h-12' />
                                </Form.Group>
                                <Form.Group as={Col} md={12} lg={6} controlId="formLastName" className='my-3'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" className='bg-white h-12' />
                                </Form.Group>
                            </Row>
                        </Form>
                        <Form>
                            <Row>
                                <Form.Group as={Col} md={12} lg={6} controlId="formEmail" className='my-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" className='bg-white h-12' />
                                </Form.Group>
                                <Form.Group as={Col} md={12} lg={6} controlId="formPhone" className='my-3'>
                                    <Form.Label>Phone</Form.Label>
                                    <PhoneInput
                                        country={'us'}
                                        enableAreaCodes={true}
                                        inputClass='bg-white'
                                        dropdownClass='bg-white text-black'
                                        inputProps={{
                                            name: 'phone',
                                            required: true
                                        }}
                                    />
                                </Form.Group>
                            </Row>
                        </Form>
                        <Form.Group controlId="formMessage" className='my-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter your message" className='bg-transparent text-white ' />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </main>
            <Footer footer={props['footer']} />
        </>
    )
}

export async function getStaticProps() {
    const footer = await getFooterData()

    return {
        props: {
            footer
        }
    }
}

export default dynamic(() => Promise.resolve(Contactus), { ssr: false })