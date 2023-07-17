

import { Category, CategoryBanner, Prefooter } from "components";


export default function CategoryHeadphones({params}) {

    const { category } = params;

    return (
        <main>
            <Category category={category} />
            <CategoryBanner />
            <Prefooter />
        </main>
    )
}