"use client"

import { forwardRef, useEffect } from 'react';
import { Modal, stickyToolbar, Button } from 'components'

import Image from 'next/image';
import checkMark from 'public/assets/checkout/icon-order-confirmation.svg';

import useStore from '/lib/store';
import toUSD from '/lib/toUSD';
import s from './s.module.css';

function Confirmation({ onClick }, ref) {

    const cart = useStore(state => state.getCart());
    const grandTotal = useStore(state => state.getGrandTotal());

    const cartLength = cart.length;
    const firstInCart = cartLength > 0 && cart[0] || false;

    useEffect(() => {
        stickyToolbar(true)
        return () => stickyToolbar(false)
    }, [])

    return (
        <>
            <Modal>
                <article ref={ref} className={s.wrap}>
                    <Image className={s.logo} src={checkMark} alt="checkmark" width={64} height={64} />
                    <div>
                        <h1>Thank you</h1>
                        <h1>for your order</h1>
                    </div>

                    <p>You will receive an email confirmation shortly.</p>
                    <div className={s.summary}>
                        <div className={s.details}>
                            {/* {firstInCart && (
                                    <div className={s.itemWrapper}>
                                        <CartItem isSummary={true} item={firstInCart} />
                                    </div>
                                )} */}
                        </div>
                        <div className={s.total}>
                            <div className={s.inner}>
                                <h6> Grand Total </h6>
                                <p> {toUSD(grandTotal)} </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.button}>
                        <Button onClick={onClick} className={s.button} type="filled" color="orange" slug="/"> Back to home </Button>
                    </div>

                </article>

            </Modal>

        </>
    )
}

export default forwardRef(Confirmation);
