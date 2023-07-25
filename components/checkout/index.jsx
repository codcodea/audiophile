
import s from './s.module.scss';
import Form from './_form';
import Summary from './_summary';

const Checkout = () => {
    return (
        <main className={s.main}>
            <section>
                <article>
                    <Form />
                    <Summary />
                </article>
            </section>
        </main>
    )
}


export default Checkout;