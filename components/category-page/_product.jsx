
import { ProductCard, Ingress, Headline, Body, Button, StatefulButtons } from 'components'
import toUSD from '/lib/toUSD';
import s from './s.module.css';

const ProductItem = ({ data }) => {

    const { id, isLeft, image, name, description, isNew, hasCounter, price, slug, category } = data;

    const isCategory = !!price ? false : true;
    const label = isCategory ? "See product" : "Add to cart";
    const styles = isCategory ? s.textAlignCenter : s.textAlignLeft

    const localPrice = toUSD(price);
    const absSlug = "/" + category + "/" + slug;

    return (
        <ProductCard isLeft={isLeft} src={image} alignCenter={isCategory}>
            {isNew && <span className="overline"> New Product </span>}
            <h1>{name}</h1>
            <p> {description} </p>
            <h6> {localPrice} </h6>
            <div className={styles}>
                {!hasCounter && <Button type="filled" color="orange" slug={absSlug}> <span className="button-font">{label}</span> </Button>}
                {hasCounter && <StatefulButtons slug={absSlug} label={label} id={id} price={price} />}
            </div>
        </ProductCard>
    )
}

export default ProductItem;
