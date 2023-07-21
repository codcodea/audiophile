

import s from './sss.module.css';
import Form from './_form';
import Summary from './_summary';

const Checkout = () => {
    return (
        <main className={s.main}>
            <section className={s.section}>
                <article className={s.wrap}>
                    <Form />
                    <Summary />
                </article>
            </section>
        </main>

    )
}


export default Checkout;