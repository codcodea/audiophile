"use client"

import { forwardRef, useState, useEffect, useMemo } from 'react';
import { Button, CartItem } from 'components'
import CartModal from '../modal'
import Image from 'next/image';
import checkMark from 'public/assets/checkout/icon-order-confirmation.svg';
import useStore from 'lib/store';
import toUSD from 'lib/toUSD';
import s from './s.module.scss';

// Types
import { Cart, OrderDetails } from 'lib/store/types';
type Props = { handler: () => void } // handler for the "Back to home" button


const ConfirmationPage = ({ handler }: Props, ref) => {

    // Local state for the "View More" button
    const [viewMore, setViewMore] = useState(false);

    // Store
    const cart = useStore(state => state.getCart()) as Cart;
    const { grandTotal } = useStore(state => state.getOrderDetails()) as OrderDetails;

    // Flags used for the order summary
    const [$ordersCount, $unfolds, $exactly3] = useMemo(() => [cart.length, cart.length > 3, cart.length === 3], [cart]);
    const label = $exactly3 ? " " : $unfolds ? "View More" : "View Less";

    const showCards = useMemo(() => {
        const len = viewMore ? $ordersCount : 3;
        return cart.map((it, ix) => {
            if (ix < len) return it;
        });
    }, [cart, $ordersCount, viewMore])

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
                            {$unfolds && <div className={s.view}>
                                <hr />
                                <p> {label}</p>
                            </div>}
                        </div>
                        <div className={s.total}>
                            <div>
                                <h6> Grand Total </h6>
                                <p> {toUSD(grandTotal)} </p>
                            </div>
                        </div>

                    </div>
                    <div className={s.button}>
                        <Button onClick={handler} className={s.button} type="filled" color="orange" slug="/"> Back to home </Button>
                    </div>

                </article>
            </CartModal>
        </>
    )
}

// Forward ref to the parent component for the ClickOutside handler
export default forwardRef(ConfirmationPage);
