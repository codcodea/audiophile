
"use client"

import { useRouter } from 'next/navigation';
import s from './s.module.css';

import useStore from 'lib/store';
import toUSD from 'lib/toUSD';
import { Button, CartItem } from 'components'


const Cart = ({ setOpen, isSummary = false, onClick = false }) => {

    const cart = useStore(state => state.getCart);
    const reset = useStore(state => state.reset);

    const total = useStore(state => state.getTotal());
    const shipping = useStore(state => state.getShipping());
    const incVAT = useStore(state => state.getIncVAT());
    const grandTotal = useStore(state => state.getGrandTotal());

    const router = useRouter()
    const notification = `Cart(${cart().length})`;

    const handleClick = () => {
        setOpen(false);
        router.push("/checkout");
    }

    const header = isSummary
        ? <h6>Summary</h6>
        : (
            <>
                <h6> {notification} </h6>
                <p onClick={() => reset()} className={s.remove}> Remove all </p>
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
                {cart().map((item) => <CartItem key={item.id} item={item} isSummary={isSummary} />)}
            </div>

            <div className={s.wrapFooter}>
                <div className={s.footer}>
                    <p> TOTAL </p>
                    <h6> {toUSD(total)} </h6>
                </div>

                {order}
                {grandTotals}
            </div>

            {button}
        </>
    )
}

export default Cart;