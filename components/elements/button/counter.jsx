
"use client"

import s from './s.module.scss';
import { handleClick, handleClickZoom } from './_functions';

const ButtonCounter = ({ type = "counter", color = "gray", count, setCount, directUpdate = false, update = null }) => {

    // button on product page update state via button "Add to cart"
    const h = (e) => handleClick(e, count, setCount, directUpdate);
    const i = (e) => handleClickZoom(e);
 
    // button inside cart update state directly
    if(directUpdate) {
       update();
    }

    const styles = [s[type], s[color], s.font].join(' ');

    return <div onClick={i} className={styles}>
        <span onClick={h} className={s.minus}> - </span>
        <span className={s.number}>{count}</span>
        <span onClick={h} className={s.plus}> + </span>
    </div>
}

export default ButtonCounter;