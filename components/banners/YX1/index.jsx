
import { Button, Subhead } from 'components';
import s from './s.module.css'

const Banner_YX1 = () => {

    const slug = "earphones/yx1-earphones";

    return (
        <section>
            <article className={s.wrap}>
                <div className={s.image} />
                <div className={s.text}>
                    <Subhead color="black">YX1 Earphones </Subhead>
                    <Button type="filledDynamic" slug={slug}> SEE PRODUCT </Button>
                </div>
            </article>
        </section>
    )
}

export default Banner_YX1