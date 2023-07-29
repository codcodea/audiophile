
import ProductItem from '../_factory/item';

const CategoryPage = ({ category, data }) => {
    return (
        <>
            {data.reverse().map(item => {
                const props = { image: item.categoryImage, isLeft: item.isLeft, category, hasCounter: false, ...item }
                return (
                    <section key={item.id}>
                        <ProductItem key={item.id} data={props} />
                    </section>
                )
            })}
        </>
    )
}

export default CategoryPage;
