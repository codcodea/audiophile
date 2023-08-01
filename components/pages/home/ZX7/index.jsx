import { Button, Subhead } from 'components';
import s from './s.module.scss'

const Banner_ZX7 = () => {
    const slug = "/speakers/zx7-speaker";

    return (
        <section className={s.section}>
            <div className={s.wrap}>
                <div className={s.text}>
                    <h4 color="black">ZX7 Speaker </h4>
                    <Button color="black" type="filledDynamic" slug={slug}> 
                            <span className="button-font"> SEE PRODUCT </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Banner_ZX7