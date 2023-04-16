import Gotaquestion from '@/components/Gotaquestion';
import Footer from '@/layouts/Footer';
import Navigation from '@/layouts/Navigation';
import getFooterData, { FooterProps } from '@/lib/footer';
import Image from 'next/image';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { NextSeo } from 'next-seo';
import Otp from '@/components/Otp';
import { handleBcmCoach } from '@/lib/becomeacoach';


const BecomeACoach = (props: {
  footer: FooterProps
}) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);


  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if(!otpVerified){
      alert('please verify your phone number')
    }
    if (form.checkValidity() === false || !otpVerified) {
      event.stopPropagation();
    } else {
      handleBcmCoach(email, phone, countryCode, name, msg)
    }
    setValidated(true);
  };

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-backgroundColor max-sm:p-16 p-28">
        <div className=" bg-gradient-to-r from-Midnight to-MidnightOcean text-white p-8 rounded-lg shadow-md max-sm:max-w-full max-w-[70%] w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Become a Coach</h2>
          <Image
            className="w-full rounded-lg mb-4"
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Fitness"
            width={500}
            height={500} />
          <p className="text-gray-200 mb-4 text-center">
            Join our team of fitness coaches and help others achieve their goals!
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="text-white"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="text-white"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <PhoneInput
                country={'in'}
                value={countryCode}
                onChange={(value, data) => {
                  setPhone(value)
                  if ('dialCode' in data) {
                    setCountryCode(data.dialCode)
                  }
                }}
                inputProps={{
                  name: 'countryCode',
                  required: true,
                }}
                inputClass="bg-backgroundColor text-white"
                dropdownClass="bg-MidnightOcean text-black"
                {...(otpVerified && {readOnly: true})}
              />
              {otpVerified ? (
                'verified'
              ) : (
                <button type='button' className="mt-2 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSendOTP}>
                  send otp
                </button>
              )}
              <Form.Control.Feedback type="invalid">
                Please enter a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="msg">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                value={msg}
                onChange={(event) => setMsg(event.target.value)}
                className="text-white bg-transparent"
                placeholder="Enter your message here"
                maxLength={500}
                minLength={10}/>
                <Form.Control.Feedback type="invalid">
                  Please enter your message. it should be atleast 10 characters and less than 500 characters.
                  </Form.Control.Feedback>
                </Form.Group>
            <Button type="submit" className='my-3'>Submit</Button>
          </Form>
        </div>
        <Gotaquestion />
      </div>
      <Footer footer={props.footer} />
    </>
  );
};

export async function getStaticProps() {
  const footer = await getFooterData()
  return {
    props: {
      footer
    }
  }
}

export default BecomeACoach;
