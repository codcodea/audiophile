"use client"

import Image from 'next/image';
import useStore from '/lib/store';
import toUSD from '/lib/toUSD';
import s from './item.module.scss';
import { StatefulButtons } from 'components'

const CartItem = ({ id, isSummary = false }) => {
    const count = useStore(state => state.getCartId(id)?.count);
    const { price, image, name } = useStore(state => state.getCartItem(id));
    
    if(count === 0) return null;

    return (
        <div className={s.itemWrapper}>
            <div className={s.imageWrapper}>
                <Image className={s.image} fill sizes="10%" src={image} alt="" />
            </div>

            <div className={s.data}>
                <h6>{name}</h6>
                <p> {toUSD(price)} </p>
            </div>

            <div className={s.cartButton}>
                {!isSummary && <StatefulButtons id={id} directUpdate={true}/>}
                {isSummary && <p className={s.count}> {"x" + count} </p>}
            </div>
        </div>
    )
}

export default CartItem;