import Image from 'next/image';
import { Button } from 'components';
import s from './s.module.scss'

const Category = ({ img, text }) => {
    return (
        <article className={s.wrap}>
            <div className={s.card}>
                <div className={s.text}>
                    <h6>{text}</h6>
                    <Button alignCenter={true} slug={"/" + text} type="text"> SHOP </Button>
                </div>
                <Image className={s.image} src={img} alt="category_label" />
            </div>
        </article>
    )
}

export default Category;