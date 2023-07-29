
import { ProductCard, Button, StatefulButtons } from 'components'
import toUSD from '/lib/toUSD';
import s from './s.module.scss';

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
            <h4>{name}</h4>
            <p> {description} </p>
            <h6> {localPrice} </h6>
            <div className={styles}>
                {!hasCounter && <Button type="filled" color="orange" slug={absSlug}> <span className="button-font">{label}</span> </Button>}
                {hasCounter && <StatefulButtons label={label} id={id} directUpdate={false} />}
            </div>
        </ProductCard>
    )
}

export default ProductItem;
