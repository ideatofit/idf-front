import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ComingSoon() {
    const {slug} = useRouter().query
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginTop: '50px' }}>
                {/* <Image src="/freepik-graphic.svg" width={600} height={400} /> */}
            </div>
            <h1 style={{ fontSize: '36px', textAlign: 'center', marginTop: '50px' }}>
                <b>{slug}</b><br/><br/>
                Feature Coming Soon
            </h1>
            <p style={{ fontSize: '24px', textAlign: 'center', marginTop: '30px', maxWidth: '600px' }}>
                We&apos;re working hard to bring you this amazing new feature. Stay tuned for updates!
            </p>
        </div>
    );
}
