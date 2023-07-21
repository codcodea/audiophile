
import TopBanner from './_topbanner';
import ProductItem from './_product';

const CategoryPage = ({ category, data }) => {
    return (
        <>
            <TopBanner category={category}></TopBanner>
            {data.reverse().map(item => {
                const props = { image: item.categoryImage, isLeft: item.isLeft, category, hasCounter: false, ...item };
                return <ProductItem key={item.id} data={props} />;
            })}
        </>
    )
}

export default CategoryPage;
