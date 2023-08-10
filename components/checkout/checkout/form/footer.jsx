import s from './s.module.scss';
import { footer } from 'lib/db/data/texts';
import footerIcon from '/public/assets/checkout/icon-cash-on-delivery.svg'
import Image from 'next/image';

const CheckoutFooter = () => {
    return (
        <footer className={s.footer}>
            <Image src={footerIcon} alt="cash_on_delivery" width={35} height={35} />
            <p>{footer}</p>
        </footer>
    )
}

export default CheckoutFooter;