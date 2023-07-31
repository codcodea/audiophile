import { ProductPage } from 'components';
import db from 'lib/db';
import Link from 'next/link';


export default function Products({ params }) {

    const { product } = params;
    const slugs = db.getSlugs();

    if (!slugs.includes(product)) {
        return (
            <main className="fadeIn">
                <section>
                    <h5>Page unavailable</h5>
                    <br />
                    <Link href="/"> Home </Link>
                </section>
            </main>
        )
    }

    return (
        <>
            <main className="fadeIn">
                <ProductPage params={params} />
            </main>
        </>
    )
};
