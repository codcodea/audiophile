
import Image from "next/image";
import s from "./s.module.css";

const Gallery = ({ images }) => {

    const { first, second, third } = images;

    return (
        <section className={s.section}>
            <div className={s.img1}>
                <Image fill sizes="50%" src={"/" + first.tablet} alt="headphones" />
            </div>
            <div className={s.img2}>
                <Image fill sizes="50%" src={"/" + second.tablet} alt="headphones" />
            </div>
            <div className={s.img3}>
                <Image fill sizes="50%" src={"/" + third.tablet} alt="headphones" />
            </div>
        </section>
    )
};

export default Gallery;
