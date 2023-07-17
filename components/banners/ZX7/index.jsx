

import s from './s.module.css'
import { Button, Subhead } from 'components';

const Banner_ZX7 = () => {

    const slug = "/speakers/zx7-speaker";

    return (
        <section  id="test">
            <div className={s.wrapper}>
                {/* <Image className={s.image} src={desktop} alt="zx7" /> */}

                <div className={s.text}>
                    <Subhead color="black">ZX7 Speaker </Subhead>
                    <Button type="filledDynamic" slug={slug}> SEE PRODUCT </Button>
                </div>



            </div>
        </section>
    )
}

export default Banner_ZX7