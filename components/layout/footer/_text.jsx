
import s from './s.module.css'
import footer from 'lib/db/footer.json'

const Text = () => {
    return (
        <div className={s.textWrapper}>
            <p className={s.text}>{footer.text}</p>
        </div>
    );
}

export default Text;