
import s from './s.module.css';
import { TwoGrid, Ingress, Headline, Body, Button, ButtonCounter } from 'components'


const ProductItem = ({ config }) => {

    const { isLeft, src, name, description, isNew, hasCounter, price, slug, category } = config;

    const localPrice = price?.toLocaleString('en-US',
        {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    
    const label = price ? "Add to cart" : "See product";

    const absSlug = "/" + category + "/" + slug;

    return (
        <TwoGrid isLeft={isLeft} src={src}>
            {isNew && <Ingress color="orange"> New Product </Ingress>}
            <Headline>{name}</Headline>
            <Body> {description} </Body>
            <h6> {localPrice} </h6>
            <div className={s.button}>
                {hasCounter && <ButtonCounter />}
                <Button type="filled" color="orange" slug={absSlug}> {label} </Button>
            </div>
        </TwoGrid>
    )
}

export default ProductItem;
