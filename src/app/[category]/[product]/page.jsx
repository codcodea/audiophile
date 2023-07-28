
import { ProductPage } from 'components';

export default function Products({ params }) {
    return (
        <>
            <main className="fadeIn">
                <ProductPage params={params} />
            </main>
        </>

    )
};
