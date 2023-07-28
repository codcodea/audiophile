
import s from './s.module.scss';
import { Social, Logo, Navigation } from 'components';
import Text from './_text';
import Link from 'next/link';

const Copyright = () => {
    return (
        <div className={s.copyrightWrapper}>
            <p className={s.text}>Copyright 2023. All Rights Reserved</p>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className={s.footerWrapper}>
            <section className={s.section}>
                <div className={s.logo}>
                    <Link href="/"><Logo width={130} /></Link>
                </div>
                <div className={s.social}>
                    <Social width={18} />
                </div>
               <div className={s.copy}>
                    <Copyright />
               </div>
                <div className={s.text}>
                    <Text />
                </div>
                <div className={s.nav}>
                    <Navigation isFooter={true} />
                </div>
            </section>
        </footer>
    );

};

export default Footer;