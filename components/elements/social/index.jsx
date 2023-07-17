
import s from './s.module.css';

import { Facebook, Twitter, Instagram } from './_icons';

const Social = ({ width }) => {

    return (
        <div className={s.social}>
            <Facebook className={s.svg} width={width} />
            <Twitter className={s.svg} width={width} />
            <Instagram className={s.svg} width={width} />
        </div>
    );
}

export default Social;