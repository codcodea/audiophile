

import { Category, CategoryBanner, Prefooter } from "components";

export default function CategoryPage({params}) {

    const { category } = params;

    return (
        <>
            <Category category={category} />
            <CategoryBanner />
            <Prefooter />
        </>
    )
}