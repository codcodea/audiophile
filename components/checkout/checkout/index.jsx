
import s from './s.module.scss';
import Form from './parts/form';
import Summary from './parts/summary';

const Checkout = () => {
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