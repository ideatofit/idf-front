import Link from 'next/link';
import dynamic from "next/dynamic";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import logo from '../../public/images/whitelogo.svg'
// import cart from '../../public/cart.svg'
import profile from '../../public/profile.svg'

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Header() {
  const { data: session, status } = useSession()

  const router = useRouter()

  return (
    <>
      <Navbar style={{ background: "linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100.56%)" }} className='fixed-top z-30' expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href={'/'}>
              <Image src={logo}
                alt="logo" className=' w-[7.5rem]' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} />
          <Navbar.Collapse id="navbarScroll" className='max-sm:flex max-sm:flex-col max-sm:p-4 max-sm:gap-4 max-sm:rounded-xl'>
            <Nav className="me-auto w-[80%] flex justify-evenly">
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Home</Link>
              <Link href="/store" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Store</Link>
              <Link href="/diets" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Diet</Link>
              <Link href="/tools" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Tools</Link>
              <Link href="/blogs" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>Blogs</Link>
              <Link href="/aboutus" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7] text-white antialiased'>About us</Link>
            </Nav>
            <div className='d-flex'>
              {/* <Image src={cart} alt="cart" width={30} className='cursor-pointer mx-4 hover:opacity-[0.7]' /> */}
              {session ? <Image src={session?.user?.image ?? ''} alt="cart" width={35} height={35} className='cursor-pointer mx-4 hover:opacity-[0.7] rounded-full' />
                : <span className='text-white hover:opacity-70 cursor-pointer' onClick={() => {
                  router.push('/login')
                }}>Login</span>}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false })