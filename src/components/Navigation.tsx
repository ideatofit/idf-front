import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../public/logo.svg'
import cart from '../../public/cart.svg'
import profile from '../../public/profile.svg'
import dynamic from 'next/dynamic';

function Header() {
  return (
    <>
      <Navbar style={{background:"linear-gradient(180deg, #252525 0%, rgba(37, 37, 37, 0) 100.56%)"}} className='fixed-top' expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={'../../public/logo.svg'}
              alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto w-[80%] flex justify-evenly">
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white antialiased'>Home</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white antialiased'>Store</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white antialiased'>Diet</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white antialiased'>Tools</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white antialiased'>Blogs</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] decoration-transparent hover:opacity-[0.7]'><Nav.Link className='text-white antialiased'>Donate</Nav.Link></Link>
            </Nav>
            <div className='d-flex'>
              <img src={"../../public/cart.svg"} alt="cart" width={30} className='cursor-pointer mx-4 hover:opacity-[0.7]' />
              <img src={'../../public/profile.svg'} alt="cart" width={30} className='cursor-pointer mx-4 hover:opacity-[0.7]' />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default dynamic(() => Promise.resolve(Header), { ssr: false })