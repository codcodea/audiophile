
import { ProductCard, Ingress, Headline, Body, Button, StatefulButtons } from 'components'
import toUSD from '/lib/toUSD';
import s from './s.module.css';

const ProductItem = ({ data }) => {

    const { id, isLeft, image, name, description, isNew, hasCounter, price, slug, category } = data;

    const localPrice = toUSD(price);
    const label = price ? "Add to cart" : "See product";
    const absSlug = "/" + category + "/" + slug;

    return (
        <ProductCard isLeft={isLeft} src={image}>
            {isNew && <Ingress color="orange"> New Product </Ingress>}
            <Headline>{name}</Headline>
            <Body> {description} </Body>
            <h6> {localPrice} </h6>
            <div className={s.button}>
                {!hasCounter && <Button type="filled" color="orange" slug={absSlug}> {label} </Button>}
                {hasCounter && <StatefulButtons slug={absSlug} label={label} id={id} price={price} />}
            </div>
        </ProductCard>
    )
}

export default ProductItem;
