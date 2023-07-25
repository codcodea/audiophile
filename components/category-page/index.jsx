import ProductItem from './_product';
import CategoryPage from './_category'
import db from 'lib/db'

const ProductFactory = async ({ category = null, product = null }) => {
    const isCategoryPage = !!category;

    if (isCategoryPage) { // list of product items
        const c = db.getCategoryPage(category);
        return <CategoryPage category={category} data={c} />
        

    } else { // single product item
        const p = db.getProductPage(product);
        const props = { isLeft: true, hasCounter: true, ...p }
        return (
            <section>
                <ProductItem data={props} />
            </section>
        )
    }
}

export default ProductFactory;