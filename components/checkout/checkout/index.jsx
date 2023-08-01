"use client"

import { useEffect } from 'react';

import Form from './parts/form';
import Summary from './parts/summary';
import s from './s.module.scss';
import sideEffect from './sideEffects';

const Checkout = () => {

    useEffect(() => sideEffect(),[])

    return (
        <div className={s.wrap}>
            <section>
                <article>
                    <Form />
                    <Summary />
                </article>
            </section>
        </div>
    )
}


export default Checkout;