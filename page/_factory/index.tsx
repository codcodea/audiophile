import db from 'lib/db'
import ProductCard from './card'
import { Category, Product } from 'lib/db/types/DB'

const ProductFactory = async ({ category = null, product = null }) => {

    const isCategoryPage = !!category;

    if (isCategoryPage) { // list of product items
        const c = db.getCategoryPage(category) as Category;
        const products = c.reverse().map(item => <ProductCard key={item.id} isCategory={true} data={item} />);
        return products;

    } else { // single product item
        const p = db.getProductPage(product) as Product;
        return <ProductCard isCategory={false} data={p} />
    }
}

export default ProductFactory;