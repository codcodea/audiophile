

import s from './s.module.scss';
import { Button, Image } from 'components';

import db from '/lib/db';
import toUSD from 'lib/toUSD';
import { StatefulButtons } from 'components';


const Page = () => {

    isCategory = false;
    
    const c = db.getCategoryPage("headphones")
    const p = db.getProductPage("xx99-mark-one-headphones")

    const { isLeft, image, name, description, isNew, price, slug, category } = p;

    // join classes
    const wrapping = isCategory ? s.wrap : null; 
    const section = isCategory ? [s.section, wrapping].join(' ') : [s.section].join(' ');
    const imgStyles = isLeft ? s.imgWrap : [s.imgWrap, s.reverse].join(' ');
    const textStyles = isLeft ? [s.txtWrap, wrapping].join(' ') : [s.txtWrap, s.reverse, wrapping].join(' ');

    // Text fields 
    const isNewProduct = isNew ? "New Product" : "";
    const relslug = "/" + category + "/" + slug;
    const localPrice = toUSD(price);

    // Button type
    const button = isCategory
        ? <Button type="filled" color="orange" isCategory={isCategory} slug={relslug}> SEE PRODUCT </Button>
        : <StatefulButtons directUpdate={false}> SEE PRODUCT </StatefulButtons>

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

export default Page;