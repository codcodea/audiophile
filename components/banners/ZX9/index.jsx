
import s from './s.module.css';
import speaker from 'public/assets/home/desktop/image-speaker-zx9.png';
import Image from 'next/image';

import { Ingress, Headline, Body, Button } from 'components';

const Banner_ZX9 = () => {

    const slug = "/speakers/zx9-speaker";
    
    return (
        <section>
            <div className={s.orangeBanner}>

                <div className={s.textWrapper}>
                    <div className={s.textGrid}>

                        <Ingress color="white">  </Ingress>
                        
                        <div className={s.textGroup}>
                            <Headline color="white">ZX9 </Headline>
                            <Headline color="white">Speaker </Headline>
                        </div>

                        <Body color="white">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Body>
                        <Button color="black" type="filled" slug={slug}> SEE PRODUCT </Button>
                    </div>
                </div>

                <div className={s.imageGrid}>
                    <Image className={s.image} src={speaker} alt="product_zx9" />
                </div>
            </div>
        </section>
    )
}

export default Banner_ZX9;