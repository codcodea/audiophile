import Link from 'next/link';
import s from './s.module.scss';

const Button = ({ id = null, type, color, className = null, isCategory = false, alignCenter = false, slug = "/", onClick = null, children }) => {

    const styles = [s[type], s[color], s.button, className, "button"].join(' ');
    const align = isCategory || alignCenter ? ["buttonWrapper", s.alignCenter].join(' ') : "buttonWrapper";

    const inner = <span className="button-font"> {children} </span>;

    const button = onClick == null
        ? <div className={align}><Link href={slug}> <button className={styles}> {inner} </button></Link></div>
        : <div className={align}><button id={id} onClick={onClick} className={styles}> {inner} </button></div>;

    return button;
}

export default Button;