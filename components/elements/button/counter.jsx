"use client"

import s from './s.module.scss';
import { handleClickZoom } from './_functions';

const ButtonCounter = ({ count, handleClick }) => {

    const styles = [s["counter"], s["gray"], "button-font"].join(' ');

    return (
        <div className={styles} onClick={(e) => handleClickZoom(e)} >
            <span className={s.minus} onClick={handleClick} > - </span>
            <span className={s.number}>{count}</span>
            <span className={s.plus} onClick={handleClick} > + </span>
        </div>
    )
}

export default ButtonCounter;