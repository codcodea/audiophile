"use client"

import s from "../s.module.scss";
import Link from "next/link";

export const navigation = ["home", "headphones", "speakers", "earphones"];

const Navigation = ({isFooter = false}) => {

    const beat = () => {
        const elem = document.querySelector('.logo');
        elem.classList.add('restart');
        setTimeout(() => {
            elem.classList.remove('restart');
        }, 10);
      }
   
    const navClass = isFooter ? s.footerNav : s.nav;

    return (
        <nav className={navClass}>
            <ul className={s.ul}>
                {navigation.map((item, index) => {

                    const nav = item === "home" ? "/" : "/" + item;

                    return (
                        <li onClick={beat} className={s.li} key={index}>
                            <Link  href={nav} ><span>{item}</span></Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navigation;