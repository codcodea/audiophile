
import { Button, Image, StatefulButtons } from 'components';
import toUSD from 'lib/toUSD';
import s from './s.module.scss';

const ProductCard = ({ data, isCategory }) => {

    let { id, isLeft, image, name, description, isNew, price, slug, category } = data;

    isLeft = isCategory ? isLeft : true;

    // join classes
    const isWrapping = isCategory ? s.wrap : null; 
    const section = isCategory ? [s.section, isWrapping].join(' ') : [s.section].join(' ');
    const imgStyles = isLeft ? s.imgWrap : [s.imgWrap, s.reverse].join(' ');
    const textStyles = isLeft ? [s.txtWrap, isWrapping].join(' ') : [s.txtWrap, s.reverse, isWrapping].join(' ');

    // Text fields 
    const isNewProduct = isNew ? "New Product" : "";
    const relslug = "/" + category + "/" + slug;
    const localPrice = toUSD(price);

    // Button type
    const button = isCategory
        ? <Button type="filled" color="orange" alignCenter={isCategory} slug={relslug}> SEE PRODUCT </Button>
        : <StatefulButtons id={id} directUpdate={false}> SEE PRODUCT </StatefulButtons>

    return (
        <section className={section}>
            <article className={imgStyles}>
                <Image aspect="square" src={image} isCategory={isCategory} alt="dummy" />
            </article>
            <article className={textStyles}>
                <div className={s.card}>
                    <span className="overline">{isNewProduct}</span>
                    <h2>{name}</h2>
                    <p>{description} </p>
                    {!isCategory && <h6>{localPrice}</h6>}
                    {button}
                </div>
            </article>
        </section>
    );
}

export default ProductCard;