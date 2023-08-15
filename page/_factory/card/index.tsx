import { Button, Image, StatefulButtons } from 'components';
import { Product } from 'lib/db/types/DB';
import toUSD from 'lib/toUSD';
import s from './s.module.scss';
import c from 'lib/classes';

type Props = { data: Product, isCategory: boolean }

const ProductCard = ({ data, isCategory }: Props) => {

    const { id, isLeft, img, name, description, isNew, price, slug, category } = data;

    // Conditional styles
    const sStyles= c(s.section, { [s.wrap]: isCategory });
    const iStyles = c(s.imgWrap, { [s.reverse]: !isLeft });
    const tStyles = c(s.txtWrap, { [s.reverse]: !isLeft}, {[s.wrap]: isCategory });

    // Text fields 
    const isNewProduct = isNew ? "New Product" : "";
    const relslug = "/" + category + "/" + slug;
    const localPrice = toUSD(price);

    // Button type
    const button = isCategory
        ? <Button type="filled" color="orange" alignCenter={isCategory} slug={relslug}> See product </Button>
        : <StatefulButtons id={id} directUpdate={false} />

    return (
        <section className={sStyles}>
            <article className={iStyles}>
                <Image src={"/" + img} isCategory={isCategory} alt={""} />
            </article>
            <article className={tStyles}>
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