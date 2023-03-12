import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import veg from '../../public/veg.svg'
import nonveg from '../../public/nonveg.svg'
import Link from 'next/link';
import { Poppins } from '@next/font/google';

const poppins = Poppins({weight: '400', subsets:['latin']})

function Recipecard(props: {
  img: string,
  title: string
  description: string
  vegeterian: boolean
  slug: string
}) {
  return (
    <Link href={`/diets/${props['slug']}`} className='text-decoration-none text-inherit'>
    <Card bg='transparent' border='8' className={`max-w-[363px] min-h-[20rem] ${poppins.className} text-[1rem]`}>
      <Image src={props['img']} alt={''} width={363} height={194}  className='aspect-16/9'/>
      <Card.Body className='p-0 pt-3'>
        <div className='flex items-center w-full gap-2'>
          <Image src={props['vegeterian'] ? veg : nonveg} alt={''} width={30} height={30}/>
          <Card.Title>{props['title']}</Card.Title>
        </div>
        <Card.Text>
          {props['description']}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default Recipecard;