import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Button from './Button';
import fitnessmanbody from '../../public/fitnessmanbodyslide2-1@2x.png'
import womanfitness from '../../public/sample1.jpg'
import gym from '../../public/sample2.jpg'
import { useEffect } from 'react';
import style from '../styles/slide.module.css'

function Slide(props:{
  slide:{
    slide:[]
  }
}) {
  return (
    <Carousel pause={false} keyboard={true} style={{ maxHeight: "100vh" }} className={`max-h-screen bg-backgroundColor`}>
      {
        props.slide['slide'].map((data, i)=>{
          return(
            <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={data['img']}
              alt="First slide"
              style={{ maxHeight: '100vh', objectFit:"cover" }}
            />
     <Carousel.Caption className={`${style.caption}`}>
               <h1 className={`${style.slideh1FontSize}`}>{data['title']}</h1>
              <p className={`${style.slidepFontSize}`}>{data['description']}</p>
            </Carousel.Caption>
          </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default Slide;