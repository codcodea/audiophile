
import man from '@/assets/shared/desktop/image-best-gear.jpg';
import { ProductCard, Body } from 'components'
import { prefooter } from "/lib/db/texts"

import s from './s.module.scss'

const Prefooter = () => {

    const headline =
        <>
            {"Bringin you the"} <span>best</span> {"audio gear"}
        </>

    return (
        <section className={s.section}>
            <ProductCard isLeft={false} alignCenter={true} src={man} >
                <h1> {headline} </h1>
                <p> {prefooter} </p>
            </ProductCard>
        </section>

    )
}

export default Prefooter