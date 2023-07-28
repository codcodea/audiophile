
"use client";

import s from './s.module.scss';

const Radio = ({ text, handleRadio }) => {
    return (
        <div className={s.radioWrapper}>
            <input id={text} className={s.radio} onInput={handleRadio} type="radio" name="paymentMethod" value={text}/>
            <label className={s.radioLabel} htmlFor={text}>{text}</label>
        </div>
    )
};

export default Radio;