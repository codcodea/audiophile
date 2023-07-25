
import { Button, Subhead } from 'components';
import s from './s.module.scss'

const Banner_YX1 = () => {

    const slug = "earphones/yx1-earphones";

    return (
        <section>
            <article className={s.wrap}>
                <div className={s.image} />
                <div className={s.text}>
                    <h4>YX1 Earphones </h4>
                    <Button color="black" type="filledDynamic" slug={slug}> 
                            <span className="button-font"> SEE PRODUCT </span>
                    </Button>
                </div>
            </article>
        </section>
    )
}

export default Banner_YX1