import Image from 'next/image';
import { Button } from 'components';
import s from './s.module.css'

const Category = ({ img, text }) => {
    return (
        <article className={s.wrap}>
            <div className={s.card}>
                <Image className={s.image} src={img} alt="category_label" />
                <h6>{text}</h6>
                <Button slug={"/" + text} type="text"> SHOP &gt;</Button>
            </div>
        </article>
    )
}

export default Category;