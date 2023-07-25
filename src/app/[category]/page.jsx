
import { ProductFactory, CategoryBanner, Prefooter } from "components";

export default function CategoryPage({params}) {
    const { category } = params;

    return (
        <>
            <ProductFactory category={category} />
            <CategoryBanner />
            <Prefooter />
        </>
    )
}