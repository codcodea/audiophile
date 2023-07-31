
import s from './s.module.scss';
import Link from 'next/link';

const Button = ({ type, color, className, isCategory = false, alignCenter = false, slug = "/", onClick = null, children }) => {

    const styles = [s[type], s[color], s.button, className, "button", "button-font"].join(' ');
    const align = isCategory || alignCenter ? [s.buttonWrapper, s.alignCenter].join(' ') : s.buttonWrapper;

    const button = onClick == null
        ? <div className={align}><Link href={slug}> <button className={styles}> {children} </button></Link></div>
        : <div className={align}><button onClick={onClick} className={styles}> {children} </button></div>;

    return button;
}

export default Button;