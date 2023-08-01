import Image from 'next/image';
import { Button } from 'components';
import s from './s.module.scss';
import speaker from 'public/assets/home/desktop/image-speaker-zx9.png';



const Banner_ZX9 = () => {
    const slug = "/speakers/zx9-speaker";
    const body = "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.";

    return (
        <section className={s.section}>
            <div className={s.circle}></div>
            <article>
                <div className={s.textWrapper}>
                    <h1>ZX9 Speaker</h1>
                    <p>{body}</p>
                    <Button color="black" type="filled" alignCenter={false} slug={slug}>
                        <span className="button-font"> See product</span>
                    </Button>
                </div>
                <div className={s.imageWrapper}>
                    <Image className={s.image} src={speaker} alt="product_zx9" />
                </div>
            </article>
        </section>
    )
}

export default Banner_ZX9;