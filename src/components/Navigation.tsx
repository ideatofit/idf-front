import Link from 'next/link';
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
            <Link href="/" className='text-[1.5rem] text-white decoration-transparent hover:opacity-[0.7]'><Nav.Link>Home</Nav.Link></Link>
            <Link href="/" className='text-[1.5rem] text-white decoration-transparent hover:opacity-[0.7]'> <Nav.Link>Store</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] text-white decoration-transparent hover:opacity-[0.7]'><Nav.Link>Diet</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] text-white decoration-transparent hover:opacity-[0.7]'><Nav.Link>Tools</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] text-white decoration-transparent hover:opacity-[0.7]'><Nav.Link>Blogs</Nav.Link></Link>
              <Link href="/" className='text-[1.5rem] text-white decoration-transparent hover:opacity-[0.7]'><Nav.Link>Donate</Nav.Link></Link>
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

export default Header;