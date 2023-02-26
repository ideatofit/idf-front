import Carousel from 'react-bootstrap/Carousel';
;
import Button from './Button';
// import fitnessmanbody from '../../public/fitnessmanbodyslide2-1@2x.png'
// import womanfitness from '../../public/sample1.jpg'
import gym from '../../public/sample2.jpg'
import { useEffect } from 'react';
import style from '../styles/slide.module.css'

function Slide() {
  return (
    <Carousel keyboard={true} style={{ maxHeight: "100vh" }} className={`max-h-screen bg-backgroundColor`}>
      <Carousel.Item>
       <img
          className="d-block w-100"
          src={'../../public/fitnessmanbodyslide2-1@2x.png'}
          alt="First slide"
          style={{ maxHeight: '100vh', objectFit:"cover" }}
        />
        <Carousel.Caption>
          <div className='flex flex-col items-center '>
          <h1 className={`${style.slideh1FontSize}`}>India’s no.1 fitness website</h1>
          <p className={`${style.slidepFontSize}`}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button text='START YOUR IDEATOFIT JOURNEY'/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img
          className="d-block w-100"
          src={'../../public/fitnessmanbodyslide2-1@2x.png'}
          alt="First slide"
          style={{ maxHeight: '100vh', objectFit:"cover" }}
        />
        <Carousel.Caption>
          <h1 className={`${style.slideh1FontSize}`}>Second slide label</h1>
          <p className={`${style.slidepFontSize}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img
          className="d-block w-100"
          src={'../../public/fitnessmanbodyslide2-1@2x.png'}
          alt="First slide"
          style={{ maxHeight: '100vh', objectFit:"cover" }}
        />
        <Carousel.Caption>
          <h1 className={`${style.slideh1FontSize}`}>Third slide label</h1>
          <p className={`${style.slidepFontSize}`}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;