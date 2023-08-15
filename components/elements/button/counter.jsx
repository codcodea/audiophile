"use client"

import c from './c.module.scss';
import { handleClickZoom } from './_functions';

const ButtonCounter = ({ count, handleClick }) => {
    
    const styles = [c["counter"], c["gray"], "button-font"].join(' ');

    return (
        <div className={styles} onClick={(e) => handleClickZoom(e)} >
            <span className={c.minus} onClick={handleClick} > - </span>
            <span className={c.number}>{count}</span>
            <span className={c.plus} onClick={handleClick} > + </span>
        </div>
    )
}

export default ButtonCounter;