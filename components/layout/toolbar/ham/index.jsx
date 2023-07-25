"use client"

import s from './s.module.scss';   

import { useState } from 'react';
import { useClickAway } from "@uidotdev/usehooks";         
import { navigation } from '../nav';           
import Link from 'next/link';

const Menu = ({ open = false}) => {
    let hamClass = open ? s.hamburgerOpen : s.hamburgerClosed;
    const styles = [s.hamburgerMenu, hamClass].join(' ');

    return (
        <div className={styles}>
            <div className={s.pointer}></div>
            <nav className={s.hamburgerNav}>
                <ul>
                    {navigation.map((item, index) => {
                         const nav = item === "home" ? "/" : "/" + item;
                         return <Link key={index} href={nav}> <li>{item}</li></Link>
                    })}
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
        <div ref={ref} onClick={handleClick} className={s.hamburger}>
            <Menu open={open} />
        </div>
    );
}

export default Hamburger;