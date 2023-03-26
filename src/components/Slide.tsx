import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import style from '../styles/slide.module.css'
import { SlideProps } from '@/lib/slide';
import Button from './Button';
import Link from 'next/link';
import { useEffect } from 'react';

function Slide(props: {
  slide: SlideProps
  images: {
    alt: string;
    blurDataURL: string;
    src: string;
    type?: string | undefined;
}[]
}) {

  return (
    <Carousel pause={false} style={{ maxHeight: "100vh" }} className={`max-h-screen bg-backgroundColor`}>
      {
        props.slide['slide'].map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <Image
                className="d-block w-100"
                src={props.images[i].src}
                alt={props.images[i].alt}
                blurDataURL={props.images[i].blurDataURL}
                placeholder="blur" 
                width={2880}
                height={1620}
                priority={true}
                style={{ maxHeight: '100vh', objectFit: "cover", aspectRatio: "16 / 9" }}
              />
              <Carousel.Caption className={`${style.caption}`}>
                <h1 className={`${style.slideh1FontSize}`}>{data['title']}</h1>
                <p className={`${style.slidepFontSize}`}>{data['description']}</p>
                {data['button'] && data['link'] !== "" && <div className='flex items-center justify-center'><Link className='relative text-decoration-none text-themeColor hover:text-themeColor' href={data['link']}><Button text={data['textonbutton']}/></Link></div>}
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default Slide;