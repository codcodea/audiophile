
import s from './s.module.css'

const Ingress = ({ color, className, children }) => {

    const h = [s.textIngress, className].join(' ');
    const b = [s[color], s.font, className].join(' ');

    return (
        <div className={h}>
             <h5 className={b}>{children}</h5>
        </div>
    )
}

export default Ingress;