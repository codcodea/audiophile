"use client"

import useStore from 'lib/store';
import toUSD from 'lib/toUSD';
import s from './cart.module.scss';
import { useRouter } from 'next/navigation';
import { Button, CartItem } from 'components'
import { Cart as CartType, OrderDetails } from 'lib/store/types';

type CartProps = {    
    setOpen: (boolean) => boolean,  // cart open open state
    isSummary?: boolean,            // cart version (summary or full)
    onClick?: () => void,           // callback handler for the checkout button, if present
}

const Cart = ({ setOpen, isSummary = false, onClick} : CartProps)  => {

    // Router
    const router = useRouter();

    // Store
    const cart = useStore(state => state.getCart()) as CartType;
    const { total, shipping, incVAT, grandTotal } = useStore(state => state.getOrderDetails()) as OrderDetails;
    const reset = useStore(state => state.reset);

    // Handlers
    const handleClick = () => (setOpen(false), router.push("/checkout"))

    // Render blocks
    const notification = `Cart(${cart.length})`;

    const header = isSummary
        ? <h6>Summary</h6>
        : (
            <>
                <h6> {notification} </h6>
                <p onClick={() => reset()}> Remove all </p>
            </>
        );

    const order = isSummary && (
        <>
            <div className={s.footer}>
                <p> SHIPPING </p>
                <h6> {toUSD(shipping)} </h6>
            </div>
            <div className={s.footer}>
                <p> VAT (INCLUDED) </p>
                <h6> {toUSD(incVAT)} </h6>
            </div>
        </>
    )

    const grandTotals = isSummary && (
        <div className={s.footer}>
            <p> GRAND TOTAL </p>
            <h6 className={s.grandTotal}> {toUSD(grandTotal)} </h6>
        </div>
    )

    const button = isSummary
        ? <Button onClick={onClick} className={s.button} type="filled" color="orange"> Continue & Pay </Button>
        : <Button onClick={handleClick} className={s.button} type="filled" color="orange"> Checkout </Button>;

    return (
        <>
            <div className={s.wrapHeader}>
                {header}
            </div>

            <div className={s.wrapItems}>
                {cart.map((item) => <CartItem key={item.id} id={item.id} isSummary={isSummary} />)}
            </div>

            <div className={s.wrapFooter}>
                <div className={s.footer}>
                    <p> TOTAL </p>
                    <h6> {toUSD(total)} </h6>
                </div>
                {order}
                {grandTotals}
            </div>

            <div className={s.buttonWrapper}>
                {button}
            </div>
        </>
    )
}

export default Cart;