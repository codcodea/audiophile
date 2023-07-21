
import s from './s.module.css';
import { Button } from 'components';
import Image from 'next/image';

import hed from '@/assets/all/category/image-category-thumbnail-headphones.png';
import spe from '@/assets/all/category/image-category-thumbnail-speakers.png';
import ear from '@/assets/all/category/image-category-thumbnail-earphones.png';

const Category = ({ img, text }) => {
    return (
        <article className={s.innerWrap}>
            <div className={s.card}>
                <Image className={s.image} src={img} alt="category_label" />
                <h6>{text}</h6>
                <Button type="text"> SHOP &gt;</Button>
            </div>
        </article>
    )
}


const CategoryBanner = () => {
    return (
        <section className={s.wrap}>
            <Category img={hed} text="headphones" />
            <Category img={spe} text="speakers" />
            <Category img={ear} text="earphones" />
        </section>
    )
}

export default CategoryBanner;