import Logo from '../logo';
import Navigation from './nav'
import Hamburger from './ham';
import CartComponent from '../../checkout/cart';
import Link from 'next/link';
import s from './s.module.scss'

const Toolbar = () => {
    return (
        <header className={s.header}>
            <section>
                <div className={s.hamburger}>
                    <Hamburger />
                </div>

                <div className={s.logo}>
                    <Link href="/"> <Logo width="130" /></Link>
                </div>

                <Navigation />

                <div className={s.cart}>
                    <CartComponent />
                </div>
            </section>
        </header>
    )
};

export default Toolbar;