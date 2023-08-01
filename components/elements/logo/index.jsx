"use client"

import Image from 'next/image';
import logo from '@/assets/shared/desktop/logo.svg'
import './logo.css'

const Logo = ({ width }) => {

    const styles = ["logo", "pulse"].join(" ");

    return (
        <div className={"logoWrapper"}>
            <Image className={styles} src={logo} alt="logo" width={width} />;
        </div>
    )
};

export default Logo;
