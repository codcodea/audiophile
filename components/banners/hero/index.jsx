
import Image from 'next/image';
import heroImg from '@/assets/all/xx99-mark-two-hero.jpg';
import s from './s.module.css';
import { hero } from 'lib/db/texts';
import { Ingress, Headline, Body, Button, Separator, ProductFactory } from 'components';

const HeroBanner = () => {

    const slug = "/headphones/xx99-mark-one-headphones";

    return (
        <div className={s.wrap}>
            <Separator />
            <section className={s.section}>
                <article className={s.grid}>
                    <div className={s.textWrap}>
                        <div className={s.text}>
                            <div className={s.ingressWrap}>
                                <span className="overline"> NEW PRODUCT </span>
                            </div>
                            <div className={s.headWrap}>
                                <h1 >XX99 MARK II </h1>
                                <h1 >Headphones </h1>
                            </div>
                            <div className={s.bodyWrap}>
                                <p color="gray">{hero}</p>
                            </div>
                            <div className={s.buttonWrap}>
                                <Button slug={slug} color="orange" type="filled"> 
                                    <span className="button-font"> SEE PRODUCT </span>
                                </Button>
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