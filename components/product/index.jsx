
import Category from 'components/category'
import Features from './features'
import Gallery from './gallery'
import Others from './others'
import { Prefooter, CategoryBanner } from 'components'

import db from 'db/db.ts'

const Product = async ({ params }) => {

    const { category, product } = params;   

    const { features, includes, gallery, others } = db.getProductPage(product);

    return (
        <>
            <Category product={product} />
            <Features features={features} includes={includes}/>
            <Gallery images={gallery} />
            <Others others={others} category={category}/>
            <CategoryBanner />
            <Prefooter />
        </>
    )
}

export default Product;