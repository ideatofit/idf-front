import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MotionProps, motion } from 'framer-motion';

const Tools = (props: {
 img: StaticImageData,
  alt: string,
  title: string,
  description: string
  slug: string,
  initial: any,
  whileInView: any,
  transition: any,
  animation: any
}) => {
  return (
    <motion.div initial={props['initial']} animate={props['animation']} whileInView={props['whileInView']} transition={props['transition']} className='w-[27%] min-h-[25.5rem] max-sm:w-[90%] border-2 border-borderColor rounded-xl overflow-hidden'>
      <Card style={{ width: '100%', border: 'none' }}>
        <div className='relative w-full'>
          <Image src={props.img} alt={props.alt} />
        </div>
        <Card.Body className='text-center text-themeColor bg-backgroundColor'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Link href={`/tools/${props['slug']}`}>
          <Button style={{ background: 'rgba(255, 255, 255, 0.9)', color: '#252525', border: 'none', width: '50%' }}>
            Calculate
          </Button>
          </Link>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default Tools;