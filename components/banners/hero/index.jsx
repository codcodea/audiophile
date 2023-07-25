
import Image from 'next/image';
import heroImg from '@/assets/all/xx99-mark-two-hero.jpg';
import s from './s.module.scss';
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
                            <div className={s.ingress}>
                                <span className="overline"> NEW PRODUCT </span>
                            </div>
                            <div className={s.head}>
                                <h1 >XX99 MARK II </h1>
                                <h1 >Headphones </h1>
                            </div>
                            <div className={s.body}>
                                <p color="gray">{hero}</p>
                            </div>
                            <div className={s.button}>
                                <Button slug={slug} color="orange" type="filled"> 
                                    <span className="button-font"> SEE PRODUCT </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <figure className={s.imageWrap}>
                        <Image priority src={heroImg} alt="XX99" />
                    </figure>
                </article>
            </section>
        </div>
    )
}

export default HeroBanner;