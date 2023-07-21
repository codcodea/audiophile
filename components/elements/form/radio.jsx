
"use client";

import s from './s.module.css';

const Radio = ({ text, handleRadio }) => {
    return (
        <div className={s.textInput}>
            <input name="huey" type="radio" onInput={handleRadio} className={s.radio} value={text} />
            <label className={s.radioLabel} htmlFor="huey">{text}</label>
        </div>
    )
};

export default Radio;