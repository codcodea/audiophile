
"use client"

import s from './s.module.scss'

const TextField = ({ label, placeholder }) => {

    const handleBlur = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    return (
        <div className={s.textWrapper}>
            <label>{label}</label>
            <input autoComplete="off" spellCheck={false} onBlur={handleBlur} className={s.textInput} type="text" placeholder={placeholder} />
        </div>
    )
}

export default TextField;