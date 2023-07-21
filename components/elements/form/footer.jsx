
import s from './s.module.css';
import footerText from 'lib/db/footer';
import footerIcon from '/public/assets/checkout/icon-cash-on-delivery.svg'
import Image from 'next/image';

const CheckoutFooter = () => {
    return (
        <footer className={s.footer}>
        <Image src={footerIcon} alt="cash_on_delivery" width={35} height={35}/>
        <p>{footerText.checkout}</p>
    </footer>
    )
}

export default CheckoutFooter;