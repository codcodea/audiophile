
import s from './s.module.css';
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
            <section className={s.sectionWrapper}>
                <div className={s.logoWrapper}>
                    <Link href="/"><Logo width={130} /></Link>
                </div>
                <div className={s.socialWrapper}>
                    <Social width={18} />
                </div>
               <div className={s.copyWrapper}>
                    <Copyright />
               </div>
                <div className={s.textWrapper}>
                    <Text />
                </div>
                <div className={s.navWrapper}>
                    <Navigation isFooter={true} />
                </div>
            </section>
        </footer>
    );

};

export default Footer;