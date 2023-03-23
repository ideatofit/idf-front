import Card from 'react-bootstrap/Card';
import paneer from '../../public/AsianNoodleSaladwithTofu.png'
import Image from 'next/image';
import { Poppins } from '@next/font/google';
import Link from 'next/link';

const poppins = Poppins({weight: "400", subsets:['latin']})

function DietCard(props:{
    title: string
    link: string
    img: string
}) {
    return (
        <>
        <Link href={props['link'] ?? ''} className='text-decoration-none'>
        <div className='h-fit w-[18rem] max-h-full max-w-[18rem] overflow-hidden cursor-pointer text-themeColor'>
            <h4 className='mb-3'>{props['title']}</h4>
            <Image src={props['img']} alt={''} width={300} height={150} className='z-10'/>
        </div>
        </Link>
        </>
    );
}

export default DietCard;