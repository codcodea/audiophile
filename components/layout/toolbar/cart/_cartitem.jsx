
"use client"

import Image from 'next/image';

import s from './s.module.scss';
import db from '/lib/db';
import toUSD from '/lib/toUSD';
import useStore from '/lib/store';

import { useState } from 'react';
import { ButtonCounter } from 'components'

const CartItem = ({ item, isSummary = false}) => {

    const { name, image, price } = db.getCartProduct(item.id);
    
    const [count, setCount] = useState(item.count);
    const upsert = useStore(state => state.upsert);

    const handleUpdate = () => upsert({ id: item.id, count, price });

    return (
        <div className={s.cartItem}>
            <div className={s.imageWrapper}>
                <Image className={s.image} fill sizes="10%" src={image} alt="" />
            </div>

            <div className={s.data}>
                <h6 className={s.model}>{name}</h6>
                <p className={s.price}> {toUSD(price)} </p>
            </div>

            <div className={s.button}>
               {!isSummary && <ButtonCounter directUpdate={true} count={count} setCount={setCount} update={handleUpdate} />}
               {isSummary && <p className={s.count}> {"x" + count} </p>}
            </div>
        </div>
    )
}

export default CartItem;