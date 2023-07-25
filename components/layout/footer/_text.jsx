
import s from './s.module.css'
import { footer } from 'lib/db/texts'

const Text = () => {
    return (
        <div className={s.textWrapper}>
            <p className={s.text}>{footer}</p>
        </div>
    );
}

export default Text;