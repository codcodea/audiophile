"use client"

import s from './s.module.scss'

const TextField = ({ label, placeholder }) => {

    const handleBlur = (e) => {
        e.preventDefault();

    }

    const attrMap = { "Email Adress": "email", "Phone Number": "tel" }
    const type = attrMap[label] || "text";
    const isEmail = type === "email";
    const regexEmail = type === "email" ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g : null;

    return (
        <div className={s.textWrapper}>
            <label>{label}</label>
            <input autoComplete="off" spellCheck="false" onBlur={handleBlur} className={s.textInput} type={type} pattern={regexEmail} placeholder={placeholder} />
            {isEmail && <span className={s.err}>Wrong Format</span>}
        </div>
    )
}

export default TextField;