import db from 'lib/db'
import CategoryPage from '../category'
import ProductCard from './card'

const ProductFactory = async ({ category = null, product = null }) => {
    const isCategoryPage = !!category;

    if (isCategoryPage) { // list of product items
        const c = db.getCategoryPage(category);
        return <CategoryPage data={c} />

    } else { // single product item
        const p = db.getProductPage(product);
        const props = { isLeft: true, ...p }
        return <ProductCard isCategory={false} data={props} />
    }
}

export default ProductFactory;