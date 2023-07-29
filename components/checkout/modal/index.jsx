"use client";

import { useEffect } from 'react';
import Portal from './portal';
import s from './s.module.scss';
import stickyToolbar from './sticky';

const CartModal = ({ isOpen, children }) => {

    useEffect(() => {
        stickyToolbar(isOpen)
        return () => stickyToolbar(false)
    }, [isOpen])

    if (!isOpen) return;

    return (
        <Portal>
            <div className={s.overlay}>
                {children}
            </div>
        </Portal>
    )
}

export default CartModal;