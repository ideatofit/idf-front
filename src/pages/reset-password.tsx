import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [seePassword, setSeePassword] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || password !== confirmPassword) {
      event.stopPropagation();
    } else {
      
    }
    setValidated(true);
  };

  return (
    <div className='h-screen w-full bg-backgroundColor grid place-items-center'>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="h-1/2 w-1/3 bg-MidnightOcean p-4 rounded-lg shadow-lg text-white flex flex-col gap-3">
      <Form.Group controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <div className='relative'>
        <Form.Control
          type={seePassword ? 'text' : 'password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="border-borderColor text-white"
          required
        />
        <FontAwesomeIcon icon={faEye} className='absolute h-4 w-4 bottom-1/3 right-2 text-white cursor-pointer' onMouseDown={()=>setSeePassword(true)} onMouseUp={()=>setSeePassword(false)} onMouseLeave={()=>setSeePassword(false)}/>
        </div>
        <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={confirmPassword}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
          className="border-borderColor text-white"
          required
          isInvalid={password !== confirmPassword}
        />
        <Form.Control.Feedback type="invalid">{password === confirmPassword ? 'Please confirm your password.' : 'Passwords do not match.'}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" className="w-full mt-4">
        Reset Password
      </Button>
    </Form>
    </div>
  );
};

export default ResetPassword;