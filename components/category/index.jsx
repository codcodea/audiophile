
import db from 'lib/db'

import ProductItem from './_product';
import CategoryPage from './_category'

const ProductFactory = async ({ category = null, product = null }) => {

    const isCategoryPage = !!category;

    if (isCategoryPage) { // list of product items
        const cat = db.getCategoryPage(category);
        return <CategoryPage category={category} categoryData={cat} />

    } else { // single product item
        const { id, image, name, description, isNew, price } = db.getProductPage(product);
        const props = {id, isLeft: true, src: image, name, price, description, isNew, hasCounter: true};
        return <ProductItem config={props}/>;
    }
}

export default ProductFactory;