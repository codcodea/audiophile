
import Image from 'next/image';
import { Button } from 'components';
import s from './s.module.css'

// One category for the categories banner

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

export default Category;