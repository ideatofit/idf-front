import Gotaquestion from '@/components/Gotaquestion';
import Footer from '@/layouts/Footer';
import Navigation from '@/layouts/Navigation';
import getFooterData, { FooterProps } from '@/lib/footer';
import Image from 'next/image';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const BecomeACoach = (props:{
    footer: FooterProps
}) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // handle form submission here
    }
    setValidated(true);
  };

  return (
    <>
        <Navigation/>
    <div className="min-h-screen max-sm:flex-col flex items-center justify-center bg-backgroundColor p-8">
      <div className=" bg-gradient-to-r from-Midnight to-MidnightOcean text-white p-8 rounded-lg shadow-md max-sm:max-w-full max-w-[70%] w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Become a Coach</h2>
        <Image
          className="w-full rounded-lg mb-4"
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Fitness"
        />
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
            <Form.Control
              required
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="text-white"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className='my-3'>Submit</Button>
        </Form>
      </div>
      <Gotaquestion/>
    </div>
      <Footer footer={props.footer}/>
      </>
  );
};

export async function getStaticProps(){
    const footer = await getFooterData()
    return{
        props:{
            footer
        }
    }
}

export default BecomeACoach;
