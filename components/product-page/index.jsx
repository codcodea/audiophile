
import Features from './features'
import Gallery from './gallery'
import Others from './others'
import { Prefooter, CategoryBanner, ProductFactory, GoBack } from 'components'

import db from 'lib/db'

const ProductPage = async ({ params }) => {

    const { category, product } = params;   

    const { id, features, includes, gallery, others } = db.getProductPage(product);

    return (
        <>
            <GoBack />
            <ProductFactory product={product} />
            <Features features={features} includes={includes}/>
            <Gallery images={gallery} />
            <Others others={others} category={category}/>
            <CategoryBanner />
            <Prefooter />
        </>
    )
}

export default ProductPage;