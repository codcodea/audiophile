import Image from "next/image";
import s from "./s.module.scss";

const Gallery = ({ images }) => {
    const { first, second, third } = images;
    
    return (
        <section className={s.section}>
            <div className={s.img1}>
                <Image fill sizes="70%" src={"/" + first.desktop} alt="headphones" />
            </div>
            <div className={s.img2}>
                <Image fill sizes="70%" src={"/" + second.desktop} alt="headphones" />
            </div>
            <div className={s.img3}>
                <Image fill sizes="70%" src={"/" + third.desktop} alt="headphones" />
            </div>
        </section>
    )
};

export default Gallery;
