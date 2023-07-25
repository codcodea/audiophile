

import s from './s.module.css'
import Image from 'next/image'

const ProductCard = async ({ isLeft, alignCenter = false, src, children }) => {

    // join classes
    const text = isLeft ? [s.textWrapper] : [s.textWrapper, s.reverse].join(' ');
    const image = isLeft ? s.imageWrapper : [s.imageWrapper, s.reverse].join(' ');
    const textAlign = alignCenter ? [s.text, s.textAlignCenter].join(' ') : [s.text, s.textAlignLeft].join(' ');
    const gridColumn = alignCenter ? [s.wrap].join(' ') : [s.wrap, s.textAlignLeft].join(' ');

    return (
        <article className={gridColumn}>
            <div className={text}>
                <div className={textAlign}>
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
    )
}

export default ProductCard;
