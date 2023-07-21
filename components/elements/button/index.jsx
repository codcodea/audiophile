
import s from './s.module.css';
import Link from 'next/link';

const Button = ({ type, color, className, slug = "/", onClick = null, children }) => {

    const styles = [s[type], s[color], s.font, s.button, className].join(' ');

    const button = onClick == null
        ? <Link href={slug}> <button className={styles}> {children} </button></Link>
        : <button id="butti" onClick={onClick} className={styles}> {children} </button>;

    return button;
}

export default Button;