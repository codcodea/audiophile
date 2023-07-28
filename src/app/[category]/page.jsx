
import { TopBanner, ProductFactory, CategoryBanner, Prefooter } from "components";

export default function CategoryPage({ params }) {
    const { category } = params;

    return (
        <>
            <TopBanner category={category} />
            <main className="fadeIn">
                <ProductFactory category={category} />
                <CategoryBanner />
                <Prefooter />
            </main>
        </>

    )
}