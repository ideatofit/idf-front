import Link from 'next/link';
import dynamic from "next/dynamic";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import logo from '../../public/logo.svg'
import cart from '../../public/cart.png'
import profile from '../../public/profile.png'

function Header() {
  return (
    <>
      <Navbar bg="transparent" className='fixed-top' expand="lg">
        <Container>
          <Navbar.Brand>
            <Image src={logo}
              alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto w-[80%] flex justify-evenly">
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white'>Home</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white'>Store</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white'>Diet</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white'>Tools</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white'>Blogs</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white'>Donate</Nav.Link></Link>
            </Nav>
            <div className='d-flex'>
              <Image src={cart} alt="cart" width={30} className='cursor-pointer mx-4 hover:opacity-[0.7]' />
              <Image src={profile} alt="cart" width={30} className='cursor-pointer mx-4 hover:opacity-[0.7]' />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false })