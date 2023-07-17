"use client"

import s from './s.module.css';   

import { useState } from 'react';
import { useClickAway } from "@uidotdev/usehooks";  // hook for click outside                // css module
import { navigation } from '../nav';           // navigation array

const Menu = ({ open = false}) => {

    let hamClass = open ? s.hamburgerOpen : s.hamburgerClosed;
    const styles = [s.hamburgerMenu, hamClass].join(' ');

    return (
        <div className={styles}>
            <div className={s.pointer}></div>
            <nav className={s.hamburgerNav}>
                <ul>
                    {navigation.map((item, index) => <li key={index} >{item}</li>)}
                </ul>
            </nav>
        </div>
    )
}

function Hamburger () {
    
    const [open, setOpen] = useState(true);
    const ref = useClickAway(() => setOpen(false));

    const handleClick = () => setOpen(state => !state)

    return (
        <div ref={ref} onClick={handleClick} className={s.hamburgerIcon}>
            <Menu open={open} />
        </div>
    );
}

export default Hamburger;