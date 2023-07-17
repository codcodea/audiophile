
import TopBanner from './_topbanner';
import ProductItem from './_product';

const CategoryPage = ({ category, categoryData }) => {
    
    return (
        <>
            <TopBanner category={category}></TopBanner>

            {categoryData.reverse().map(item => {
                const { name, description, isNew, categoryImage, slug } = item;
                const props = { category, slug, name, description, isNew, src: categoryImage, isLeft: item.isLeft, hasCounter: false };
                return <ProductItem key={item.id} config={props}/>; 
            })}
        </>
    )
}

export default CategoryPage;