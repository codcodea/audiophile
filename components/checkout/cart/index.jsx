"use client"

import { useClickAway } from "@uidotdev/usehooks";
import { useState } from 'react';
import CartModal from '../modal';
import Cart from './parts/cart';
import CartIcon from './parts/icon';
import s from './s.module.scss';

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


