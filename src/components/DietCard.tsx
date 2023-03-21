import Card from 'react-bootstrap/Card';
import paneer from '../../public/AsianNoodleSaladwithTofu.png'
import Image from 'next/image';

function DietCard() {
    return (
        <Card className="bg-dark text-white">
            <Image src={paneer} alt={''}/>
            <Card.ImgOverlay>
                <Card.Title style={{ color: "black" }}>Card title</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default DietCard;