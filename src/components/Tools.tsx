import Image, { StaticImageData } from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Tools = (props: {
  img: StaticImageData,
  alt: string,
  title: string,
  description: string
}) => {
  return (
    <div className='w-[27%] max-sm:w-[90%] border-2 border-borderColor rounded-xl overflow-hidden'>
      <Card style={{ width: '100%', border: 'none' }}>
        <div className='relative w-full'>
          <Image src={props.img} alt={props.alt} />
        </div>
        <Card.Body className='text-center text-themeColor bg-backgroundColor'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button style={{ background: 'rgba(255, 255, 255, 0.9)', color: '#252525', border: 'none', width: '50%' }}>
            Calculate
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tools;