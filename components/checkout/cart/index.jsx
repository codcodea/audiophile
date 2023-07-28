"use client"

import { useState } from 'react';
import CartIcon from './parts/icon';
import Cart from './parts/cart';
import CartModal from '../modal'
import s from './s.module.scss';
import { useClickAway } from "@uidotdev/usehooks";


const CartComponent = () => {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(prev => !prev);

    const ref = useClickAway((e) => {
        if (e.target.id == "cart") return;
        setOpen(false)
    });

    return (
        <>
            <CartModal isOpen={isOpen} >
                <section className={s.section}>
                    <article ref={ref} className={s.wrap}>
                        <Cart setOpen={setOpen} isSummary={false} />
                    </article>
                </section>
            </CartModal>

            <CartIcon handleOpen={handleOpen} />
        </>
    )
}

export default CartComponent;


