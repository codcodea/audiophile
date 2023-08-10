"use client"

import { forwardRef, useState, useMemo } from 'react';
import { Button, CartItem } from 'components'
import CartModal from '../modal'
import Image from 'next/image';
import checkMark from 'public/assets/checkout/icon-order-confirmation.svg';
import useStore from 'lib/store';
import toUSD from 'lib/toUSD';
import s from './s.module.scss';

import { Cart, OrderDetails } from 'lib/store/types/types';
type Props = { handler: () => void } // handler for the "Back to home" button


const ConfirmationPage = ({ handler }: Props, ref) => {

    // Local state for the "View More" button
    const [viewMore, setViewMore] = useState(false);

    // Store
    const cart = useStore(state => state.getCart()) as Cart;
    const { grandTotal } = useStore(state => state.getOrderDetails()) as OrderDetails;

    // Flags used for the order summary
    const [$ordersCount, $unfolds, $exactly3] = useMemo(() => {
        return [cart.length, cart.length > 3, cart.length === 3] 
    }, [cart]);
    
    // In this version we show only 3 items in the order summary
    const showCards = useMemo(() => {
        const len = $ordersCount > 3 ? 3 : $ordersCount;
        return cart.slice(0, len);
    }, [cart, $ordersCount])

    // Text
    const label = $exactly3 ? " " : $unfolds ? "View More" : "View Less";
    const items = $ordersCount >= 3 ? `3 of ${$ordersCount}` : "";

    return (
        <>
            <CartModal isOpen={true}>
                <article ref={ref} className={s.wrap}>
                    <Image className={s.logo} src={checkMark} alt="checkmark" width={64} height={64} />
                    <div>
                        <h1>Thank you</h1>
                        <h1>for your order</h1>
                    </div>

                    <p>You will receive an email confirmation shortly.</p>
                    <div className={s.summary}>
                        <div className={s.details}>
                            {showCards.map((item, index) => {
                                return <CartItem key={index} id={item.id} isSummary={true} />
                            })}
                            {($unfolds) && <div className={s.view}>
                                <hr />
                                <p> {items}</p>
                            </div>}
                        </div>
                        <div className={s.total}>
                            <div>
                                <h6> Grand Total {} </h6>
                                <p> {toUSD(grandTotal)} </p>
                            </div>
                        </div>

                    </div>
                    <div className={s.button}>
                        <Button onClick={handler} type="filled" color="orange" slug="/"> Back to home </Button>
                    </div>

                </article>
            </CartModal>
        </>
    )
}

export default forwardRef(ConfirmationPage);
