import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import style from '../styles/slide.module.css'
import { SlideProps } from '@/lib/slide';

function Slide(props: {
  slide: SlideProps
}) {
  return (
    <Carousel pause={false} style={{ maxHeight: "100vh" }} className={`max-h-screen bg-backgroundColor`}>
      {
        props.slide['slide'].map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <Image
                className="d-block w-100"
                src={data['img']}
                alt="First slide"
                width={2880}
                height={1620}
                style={{ maxHeight: '100vh', objectFit: "cover" }}
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