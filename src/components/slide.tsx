import Carousel from 'react-bootstrap/Carousel';
import fitnessmanbody from '../../public/fitnessmanbodyslide2-1@2x.png'
import Image from 'next/image';
import Button from './Button';

function Slide() {
  return (
    <Carousel pause={false}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={fitnessmanbody}
          alt="First slide"
        />
          <Button/>
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={fitnessmanbody}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={fitnessmanbody}
          alt="First slide"
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