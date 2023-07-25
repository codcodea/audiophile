"use client"

import s from './s.module.scss';
import { Modal, stickyToolbar, Cart } from 'components'
import { useEffect, useState } from 'react';
import { useClickAway } from "@uidotdev/usehooks";

const CartModal = () => {

    const [isOpen, setOpen] = useState(false);

    const ref = useClickAway((e) => {
        if (e.target.id == "cart") return;
        else setOpen(false)
    });

    useEffect(() => stickyToolbar(isOpen), [isOpen])

    const handleClick = () => setOpen(state => !state);

    return (
        <>
            {isOpen && (
                <Modal>
                    <article ref={ref} className={s.wrap}>
                        <Cart setOpen={setOpen} isSummary={false} />
                    </article>
                </Modal>
            )}
            <aside id="cart" onClick={handleClick} className={s.cartIcon} />
        </>

    )
}

export default CartModal;


