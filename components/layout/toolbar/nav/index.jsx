

import s from "../s.module.css";
export const navigation = ["home", "headphones", "speakers", "earphones"];

import Link from "next/link";


const Navigation = ({isFooter = false}) => {
   
    const navClass = isFooter ? s.footerNav : s.nav;

    return (
        <nav className={navClass}>
            <ul className={s.ul}>
                {navigation.map((item, index) => {

                    const nav = item === "home" ? "/" : "/" + item;

                    return (
                        <li className={s.li} key={index}>
                            <Link href={nav} ><span>{item}</span></Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navigation;