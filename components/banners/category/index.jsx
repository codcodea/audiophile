
import Category from './_category';
import s from './s.module.css';

import headphone from '@/assets/all/category/image-category-thumbnail-headphones.png';
import speaker from '@/assets/all/category/image-category-thumbnail-speakers.png';
import earphone from '@/assets/all/category/image-category-thumbnail-earphones.png';

const CategoryBanner = () => {
    return (
        <section className={s.wrap}>
            <Category img={headphone} text="headphones" />
            <Category img={speaker} text="speakers" />
            <Category img={earphone} text="earphones" />
        </section>
    )
}

export default CategoryBanner;