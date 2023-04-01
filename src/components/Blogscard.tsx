import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import veg from '../../public/veg.svg'
import nonveg from '../../public/nonveg.svg'
import Link from 'next/link';

function Blogscard(props: {
  img: string,
  title: string
  description: string
  slug: string
  publishedOn: string
}) {
  return (
    <Link href={`/blogs/${props['slug']}`} className='relative z-10 w-[24rem] text-decoration-none text-inherit '>
    <Card bg='transparent' className='relative z-0 h-full w-full border-0'>
      <Image src={props['img']} alt={''} width={363} height={194}  className='aspect-16/9 w-full rounded-lg'/>
      <Card.Body className='p-0 pt-3'>
        <div className='flex items-center w-full gap-2'>
          <Card.Title>
            {props['title']}</Card.Title>
        </div>
        <Card.Text>
          {props['description']}
        </Card.Text>
        <div className='w-full'>
          <p>{props['publishedOn']}</p>
        </div>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default Blogscard;