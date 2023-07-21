
import Image from 'next/image';
import heroImg from '@/assets/all/xx99-mark-two-hero.jpg';
import s from './s.module.css';
import { hero } from 'lib/db/footer';
import { Ingress, Headline, Body, Button, Separator } from 'components';

const HeroBanner = () => {
    return (
        <div className={s.wrap}>
            <Separator />
            <section className={s.section}>
                <article className={s.grid}>
                    <div className={s.textWrap}>
                        <div className={s.text}>
                            <div className={s.ingressWrap}>
                                <Ingress color="gray"> NEW PRODUCT </Ingress>
                            </div>

                            <div className={s.headWrap}>
                                <Headline color="white">XX99 MARK II </Headline>
                                <Headline color="white">Headphones </Headline>
                            </div>

                            <div className={s.bodyWrap}>
                                <Body color="gray">{hero}</Body>
                            </div>

                            <div className={s.buttonWrap}>
                                <Button slug="/headphones/xx99-mark-one-headphones" color="orange" type="filled"> SEE PRODUCT </Button>
                            </div>
                        </div>
                    </div>
                    <figure className={s.imageWrap}>
                        <Image priority className={s.image} src={heroImg} alt="XX99" />
                    </figure>
                </article>
            </section>
        </div>
    )
}

export default HeroBanner;