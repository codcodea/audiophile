import person from '@/assets/shared/tablet/image-best-gear.jpg';
import { prefooter } from "/lib/db/data/texts"
import { Image } from 'components';

import s from './s.module.scss'

const Prefooter = () => {
    const headline =
        <>
            {"Bringin you the"} <span>best</span> {"audio gear"}
        </>

    return (
        <section className={s.section}>
            <Image className={s.image} isCategory={true} autoSizeBypass={true} src={person} alt="" />
            <div className={s.text}>
                <h4> {headline} </h4>
                <p> {prefooter} </p>
            </div>
        </section >
    )
}

export default Prefooter