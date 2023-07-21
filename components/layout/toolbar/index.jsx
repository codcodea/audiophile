
import s from './s.module.css'
import Logo from '../../elements/logo';
import Navigation from './nav'
import Hamburger from './ham';
import CartModal from './cart';
import Link from 'next/link';


const Toolbar = () => {

    return (
        <header className={s.header}>
            
            <section className={s.toolbar}>
                <div className={s.hamburger}>
                    <Hamburger />
                </div>

                <div className={s.logo}>
                    <Link href="/"> <Logo width="130" /></Link>
                </div>

                <Navigation />

                <div className={s.cart}>
                    <CartModal />
                </div>


            </section>
        </header>
    )
};

export default Toolbar;