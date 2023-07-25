import s from './s.module.scss'

const Ingress = ({ color, className, children }) => {
    const h = [s.textIngress, className].join(' ');
    const b = [s[color], className, "overline"].join(' ');

    return (
        <div className={h}>
             <span className={b}>{children}</span>
        </div>
    )
}

export default Ingress;