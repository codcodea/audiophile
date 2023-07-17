
"use client"

import s from './s.module.css';
import { useState } from 'react';

import { handleClick, handleClickZoom } from './_functions';

const ButtonCounter = ({ type = "counter", color = "gray" }) => {

    const [count, setCount] = useState(0);

    const h = (e) => handleClick(e, count, setCount);
    const i = (e) => handleClickZoom(e);
 
    const styles = [s[type], s[color], s.font].join(' ');

    return <div onClick={i} className={styles}>
        <span onClick={h} className={s.minus}> - </span>
        <span className={s.number}>{count}</span>
        <span onClick={h} className={s.plus}> + </span>
    </div>
}

export default ButtonCounter;