import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Button from './Button';
import fitnessmanbody from '../../public/fitnessmanbodyslide2-1@2x.png'
import womanfitness from '../../public/sample1.jpg'
import gym from '../../public/sample2.jpg'

function Slide() {
  return (
    <Carousel pause={false} style={{maxHeight:"100vh", overflow:'hidden'}} className='max-h-screen bg-backgroundColor'>
      <Carousel.Item>
        <Image
          className="max-h-full"
          src={fitnessmanbody}
          alt="First slide"
          style={{maxHeight:'100vh'}}
        />
        <Carousel.Caption>
          <h1>India’s no.1<br/>fitness website</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100 max-h-screen"
          src={fitnessmanbody}
          alt="First slide"
          style={{maxHeight:'100vh'}}
          />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100 max-h-screen"
          src={fitnessmanbody}
          alt="First slide"
          style={{maxHeight:'100vh'}}
          />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;