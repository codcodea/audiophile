
import { Button, Subhead } from 'components';
import s from './s.module.css'

const Banner_ZX7 = () => {

    const slug = "/speakers/zx7-speaker";

    return (
        <section>
            <div className={s.wrap}>
                <div className={s.text}>
                    <Subhead color="black">ZX7 Speaker </Subhead>
                    <Button type="filledDynamic" slug={slug}> SEE PRODUCT </Button>
                </div>
            </div>
        </section>
    )
}

export default Banner_ZX7