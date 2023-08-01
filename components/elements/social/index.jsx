import s from './s.module.scss';

import { Facebook, Twitter, Instagram } from './_icons';

const Social = ({ width }) => {
    return (
        <div className={s.social}>
            <Facebook width={width} />
            <Twitter width={width} />
            <Instagram width={width} />
        </div>
    );
}

export default Social;