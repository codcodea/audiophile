import Image from 'next/image';
import logo from '@/assets/shared/desktop/logo.svg'
import s from './s.module.scss'

const Logo = ({ width }) => {
    return (
        <div className={s.logoWrapper}>
            <Image className={s.logo} src={logo} alt="logo" width={width} />;
        </div>
    )
};

export default Logo;
