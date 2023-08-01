import ProductCard from "../_factory/card"

const CategoryPage = ({ data }) => {
    return (
        <>
            {data.reverse().map(item => {
                return <ProductCard key={item.id} isCategory={true} data={item} />
            })}
        </>
    )
}

export default CategoryPage;
