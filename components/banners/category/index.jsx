
import s from './s.module.css';
import Button from 'components/elements/button';
import Image from 'next/image';

import headphones from '@/assets/all/category/image-category-thumbnail-headphones.png';
import speakers from '@/assets/all/category/image-category-thumbnail-speakers.png';
import earphones from '@/assets/all/category/image-category-thumbnail-earphones.png';

const Category = ({ img, text }) => {
    return (
        <div className={s.categoryWrapper}>
            <div className={s.categoryBackground}>
                <Image className={s.image} src={img} alt="category_label" />
                <h6>{text}</h6>
                <Button type="text"> SHOP &gt;</Button>
            </div>
        </div>
    )
}


const CategoryBanner = () => {
    return (
        <section className={s.categoryBannerWrapper}>
            <Category img={headphones} text="headphones" />
            <Category img={speakers} text="speakers" />
            <Category img={earphones} text="earphones" />
        </section>
    )
}

export default CategoryBanner;