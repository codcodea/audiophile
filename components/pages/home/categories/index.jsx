import Category from './category';
import s from './s.module.scss';

import headphone from '@/assets/all/category/image-category-thumbnail-headphones.png';
import speaker from '@/assets/all/category/image-category-thumbnail-speakers.png';
import earphone from '@/assets/all/category/image-category-thumbnail-earphones.png';

const CategoryBanner = () => {
    return (
        <section className={s.section}>
            <Category img={headphone} text="headphones" />
            <Category img={speaker} text="speakers" />
            <Category img={earphone} text="earphones" />
        </section>
    )
}

export default CategoryBanner;