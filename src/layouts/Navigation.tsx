import Link from 'next/link';
import dynamic from "next/dynamic";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import logo from '../../public/logo.svg'
import cart from '../../public/cart.svg'
import profile from '../../public/profile.svg'

import { useSession, signIn, signOut } from 'next-auth/react';

function Header() {
  const {data: session, status} = useSession()
  return (
    <>
      <Navbar style={{background:"linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100.56%)"}} className='fixed-top' expand="lg">
        <Container>
          <Navbar.Brand>
            <Image src={logo}
              alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: "rgba(255, 255, 255, 0.9)"}}/>
          <Navbar.Collapse id="navbarScroll" className='flex flex-col p-4 gap-4 bg-backgroundColor rounded-xl'>
            <Nav className="me-auto w-[80%] flex justify-evenly">
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Home</Link>
              <Link href="/store" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Store</Link>
              <Link href="/diets" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Diet</Link>
              <Link href="/tools" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Tools</Link>
              <Link href="/blogs" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Blogs</Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Donate</Link>
            </Nav>
            <div className='d-flex'>
              {/* <Image src={cart} alt="cart" width={30} className='cursor-pointer mx-4 hover:opacity-[0.7]' /> */}
              <Image src={session ? `${session?.user?.image}` : profile} alt="cart" width={35} height={35} className='cursor-pointer mx-4 hover:opacity-[0.7] rounded-full' onClick={()=>{
                signIn()
              }}/>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false })