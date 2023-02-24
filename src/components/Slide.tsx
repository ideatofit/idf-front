import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Button from './Button';
import fitnessmanbody from '../../public/fitnessmanbodyslide2-1@2x.png'
import womanfitness from '../../public/sample1.jpg'
import gym from '../../public/sample2.jpg'
import { useEffect } from 'react';
import style from '../styles/slide.module.css'

function Slide() {
  useEffect(()=>{
    const interval =  setInterval(()=>{
     let el = document.getElementsByClassName('carousel-indicators')
      if(window.innerWidth < 700){
        el[0]?.setAttribute('class', 'carousal-indicators-display')
      return
      }
    }, 1000)
    return(()=>{
      clearInterval(interval)
    })
  },[])
  return (
    <Carousel pause={false} style={{ maxHeight: "100vh" }} className={`max-h-screen bg-backgroundColor`}>
      <Carousel.Item>
        <Image
          className="d-block w-100 h6"
          src={fitnessmanbody}
          alt="First slide"
          style={{ maxHeight: '100vh', objectFit:"cover" }}
        />
        <Carousel.Caption>
          <h1 className={`${style.slideh1FontSize}`}>India’s no.1 fitness website</h1>
          <p className={`${style.slidepFontSize}`}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 h6"
          src={fitnessmanbody}
          alt="First slide"
          style={{ maxHeight: '100vh', objectFit:"cover" }}
        />
        <Carousel.Caption>
          <h1 className={`${style.slideh1FontSize}`}>Second slide label</h1>
          <p className={`${style.slidepFontSize}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 h6"
          src={fitnessmanbody}
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