
"use client"

import s from './sss.module.css';
import { useState } from 'react';
import { TextField, Radio, CheckoutFooter } from '..';
import p from './_placeholder'

const Form = () => {

    const [payment, setPayment] = useState("e-money");

    const handleRadio = (e) => setPayment(e.target.value);

    const paymentMethod = payment == "e-money"
        ? (
            <>
                <div className={s.double}>
                    <TextField label="e-money Number" placeholder={p.enum} />
                    <TextField label="e-money PIN" placeholder={p.epin} />
                </div>
            </>
        )
        : <CheckoutFooter />;

    return (

        <form autoComplete="off" className={s.form}>
            <h4> Checkout</h4>

            <p className="subtitle">Billing details</p>
            <div className={s.double}>
                <TextField label="Name" placeholder={p.name} />
                <TextField label="Email Adress" placeholder={p.email} />
            </div>
            <TextField label="Phone Number" placeholder={p.phone} />

            <p className="subtitle">Shipping info</p>
            <TextField label="Name" placeholder={p.address} />
            <div className={s.double}>
                <TextField label="Zip Code" placeholder={10001} />
                <TextField label="City" placeholder={p.city} />
                <TextField label="Country" placeholder={p.country} />
            </div>
   
            <p className="subtitle">Payment details</p>
            <div className={s.double}>
                <label className={s.label}>Payment method</label>
                <Radio text={"e-money"} handleRadio={handleRadio} />
                <label></label>
                <Radio text={"Cash on Delivery"} handleRadio={handleRadio} />
            </div>
            {paymentMethod}
        </form>

    )
}

export default Form;