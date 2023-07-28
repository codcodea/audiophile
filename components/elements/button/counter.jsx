
"use client"

import s from './s.module.scss';
import { handleClickZoom } from './_functions';

const ButtonCounter = ({ count, h }) => {

    const i = (e) => handleClickZoom(e);

    const styles = [s["counter"], s["gray"], s.font].join(' ');

    return <div onClick={i} className={styles}>
        <span onClick={h} className={s.minus}> - </span>
        <span className={s.number}>{count}</span>
        <span onClick={h} className={s.plus}> + </span>
    </div>
}

export default ButtonCounter;