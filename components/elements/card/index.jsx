

import s from './s.module.css'
import Image from 'next/image'

const ProductCard = async ({ isLeft, src, children }) => {

    // join classes
    const text = isLeft ? s.textWrapper : [s.textWrapper, s.reverse].join(' ');
    const image = isLeft ? s.imageWrapper : [s.imageWrapper, s.reverse].join(' ');

    return (
        <section className={s.section}>
            <article className={s.wrap}>
                <div className={text}>
                    <div className={s.text}>
                        {children}
                    </div>
                </div>
                <div className={image}>
                    <Image className={s.image} src={src}
                        fill={true}
                        sizes="50%"
                        alt="product_image"
                    />
                </div>
            </article>
        </section>
    )
}

export default ProductCard;
