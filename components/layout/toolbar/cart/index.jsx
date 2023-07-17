"use client"

import s from './s.module.css';
import { useEffect, useState } from 'react';
import { useClickAway } from "@uidotdev/usehooks";
import { stickyToolbar } from './_functions'  // hook for click outside 

import { Button } from 'components'
import Modal from './_modal'
import Image from 'next/image';

const CartItems = ({ ref }) => {
    return (
        <Modal>
            <div ref={ref} className={s.overlay}>
                <div className={s.cartWrapper}>

                    <div className={s.cartHeader}>
                        <h6 className={s.cartTitle}> Cart (3) </h6>
                        <p className={s.remove}> Remove all </p>
                    </div>

                    <div className={s.cartItems}>
                        <div className={s.cartItem}>
                            <div className={s.imageWrapper}>
                                <Image className={s.image} fill sizes="10%" src={"/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"} alt="" />
                            </div>

                            <div className={s.data}>
                                <h6 className={s.model}>XX59</h6>
                                <p className={s.price}> $ 899 </p>
                            </div>

                            <div className={s.button}>
                                <Button type="counter" color="counter" /> 
                            </div>
                        </div>

                        <div className={s.cartItem}>
                            <div className={s.imageWrapper}>
                                <Image className={s.image} fill sizes="10%" src={"/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"} alt="" />
                            </div>

                            <div className={s.data}>
                                <h6 className={s.model}>XX59</h6>
                                <p className={s.price}> $ 899 </p>
                            </div>

                            <div className={s.button}>
                                <Button type="counter" color="counter" /> 
                            </div>
                        </div>

                        <div className={s.cartItem}>
                            <div className={s.imageWrapper}>
                                <Image className={s.image} fill sizes="10%" src={"/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"} alt="" />
                            </div>

                            <div className={s.data}>
                                <h6 className={s.model}>XX59</h6>
                                <p className={s.price}> $ 899 </p>
                            </div>

                            <div className={s.button}>
                                <Button type="counter" color="counter" /> 
                            </div>

                        </div>
                    </div>



                    <div className={s.cardFooter}>
                        <p className={s.totalStr}> Total </p>
                        <h6 className={s.total}> $ 1,999 </h6>
                    </div>

                    <Button className={s.button} type="filled" color="orange" slug="/checkout"> Checkout </Button>
                </div>
            </div>
        </Modal>
    )
}

const Cart = () => {


    const [isOpen, setOpen] = useState(true);
    const ref = useClickAway(() => setOpen(true));

    useEffect(() => stickyToolbar(isOpen), [isOpen])

    const handleClick = () => setOpen(state => !state)

    return (

        <aside onClick={handleClick} className={s.cartIcon} >
            <div id="modal"></div>
            {isOpen && <CartItems />}
        </aside>

    )
}

export default Cart;


