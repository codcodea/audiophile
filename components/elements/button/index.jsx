
import s from './s.module.css';
import Link from 'next/link';

const Button = ({ type, color, className, slug = "/", children }) => {

    const styles = [s[type], s[color], s.font, s.button, className].join(' ');
    return <Link href={slug}> <button className={styles}> {children} </button></Link>
}

export default Button;