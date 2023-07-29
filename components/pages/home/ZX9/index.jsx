import Image from 'next/image';
import { Button } from 'components';
import s from './s.module.scss';
import speaker from 'public/assets/home/desktop/image-speaker-zx9.png';



const Banner_ZX9 = () => {
    const slug = "/speakers/zx9-speaker";
    const body = "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.";

    return (
        <section className={s.section}>
            <article>
                <div className={s.textWrapper}>
                    <div className={s.textGrid}>
                        <span className="overline" />
                        <div>
                            <h4>ZX9 </h4>
                            <h4>Speaker </h4>
                        </div>
                        <p>{body}</p>
                        <Button color="black" type="filled" slug={slug}>
                            <span className="button-font"> SEE PRODUCT </span>
                        </Button>
                    </div>
                </div>
                <div className={s.imageWrapper}>
                    <Image src={speaker} alt="product_zx9" />
                </div>
            </article>
        </section>
    )
}

export default Banner_ZX9;