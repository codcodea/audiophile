
import Portal from './_portal';
import s from './s.module.scss';

const Modal = ({ children }) => {
    return (
        <Portal>
            <div className={s.overlay}>
                {children}
            </div>
        </Portal>
    )
}

export default Modal;