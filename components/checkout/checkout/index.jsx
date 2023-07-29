"use client"

import { useEffect } from 'react';
import stickyToolbar from '../modal/sticky';
import Form from './parts/form';
import Summary from './parts/summary';
import s from './s.module.scss';

const Checkout = () => {

    useEffect(() => {
        stickyToolbar(true)
        return () => stickyToolbar(false)
    },[])

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