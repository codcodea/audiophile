
"use client"

import s from './s.module.scss';
import { handleClickZoom } from './_functions';

const ButtonCounter = ({ count, handleClick }) => {

    const i = (e) => handleClickZoom(e);

    const styles = [s["counter"], s["gray"], "button-font"].join(' ');

    return <div onClick={i} className={styles}>
        <span onClick={handleClick} className={s.minus}> - </span>
        <span className={s.number}>{count}</span>
        <span onClick={handleClick} className={s.plus}> + </span>
    </div>
}

export default ButtonCounter;