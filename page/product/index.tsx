import Features from './features'
import Gallery from './gallery'
import Others from './others'
import { Prefooter, CategoryBanner, ProductFactory, GoBack } from 'components'
import db from 'lib/db'

type PageProps = {
    params: {
        category: string,
        product: string
    }
}

const ProductPage = async ({ params } : PageProps) => {
    const { product } = params;   
    const { features, includes, gallery, others } = db.getProductExtras(product);
    
    return (
        <>
            <GoBack />
            <ProductFactory product={product} />
            <Features features={features} includes={includes}/>
            <Gallery images={gallery} />
            <Others others={others} />
            <CategoryBanner />
            <Prefooter />
        </>
    )
}

export default ProductPage;