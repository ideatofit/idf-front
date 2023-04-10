import Footer from '@/layouts/Footer';
import Navigation from '@/layouts/Navigation';
import getFooterData, { FooterProps } from '@/lib/footer';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { postInquiry } from '@/lib/inquiry';
import Otp from '@/components/Otp';

function Contactus(props: {
  footer: FooterProps;
}) {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [message, setMessage] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);

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
      setShowOtpInput(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false && otpVerified) {
      event.stopPropagation();
    } else {
      const payload = {
        data: {
          name: `${firstName} ${lastName}`,
          email: email,
          phone: phone,
          countryCode: Number(countryCode),
          message: message,
        },
      };
      postInquiry(payload);
    }
    setValidated(true);
  };

  return (
    <>
      <Navigation />
      {showOtpInput && (
        <Otp
          onVerify={() => {
            setOtpVerified(true);
            setShowOtpInput(false);
          }}
          countryCode={countryCode}
          phone = {phone}
        />
      )}
      <main className="min-h-[100vh] w-[100vw] bg-backgroundColor grid place-items-center text-themeColor z-0">
        <div
          style={{
            background:
              'linear-gradient(90deg, #454958 0%, #232631 100%, #232631 100%)',
          }}
          className="max-xl:min-h-[65vh] xl:max-h-fit max-xl:max-h-fit xl:min-h-[65vh] max-lg:h-fit max-lg:py-8 max-xl:w-[80%] xl:w-[80%] max-lg:w-[90%] flex max-xl:flex-row xl:flex-row max-xl:items-center xl:items-center justify-center rounded-xl border-2 border-borderColor p-4"
        >
          <Form
            className="w-[70%]"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form>
              <Row>
                <Form.Group
                  as={Col}
                  md={12}
                  lg={6}
                  controlId="formFirstName"
                  className="my-3"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    className="bg-white h-12"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your first name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md={12}
                  lg={6}
                  controlId="formLastName"
                  className="my-3"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    className="bg-white h-12"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your last name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
            <Form>
              <Row>
                <Form.Group
                  as={Col}
                  md={12}
                  lg={6}
                  controlId="formEmail"
                  className="my-3"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
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
                    <Col xs={4}>
                      <PhoneInput
                        country={'us'}
                        value={countryCode}
                        onChange={(value) => setCountryCode(value)}
                        inputProps={{
                          name: 'countryCode',
                          required: true,
                        }}
                        inputClass="bg-white"
                        dropdownClass="bg-white text-black"
                      />
                    </Col>
                    <Col xs={8}>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-white h-12"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid phone number.
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  {otpVerified ? (  
                    'verified'
                  ) : (
                    <p className="text-sky-400 m-1 cursor-pointer" onClick={handleSendOTP}>
                      send otp
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Form>
            <Form.Group controlId="formMessage" className="my-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                className="bg-transparent text-white "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </main>
      <Footer footer={props['footer']} />
    </>
  );
}

export async function getStaticProps() {
  const footer = await getFooterData();
  return {
    props: {
      footer,
    },
  };
}

export default dynamic(() => Promise.resolve(Contactus), { ssr: false });