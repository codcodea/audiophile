import s from './s.module.css';

const Subhead = ({ color, className, children }) => {
    const h = [s.textSubhead, className].join(' '); 
    const b = [s[color], s.font, className].join(' ');

    return (
        <div className={h}>
             <h6 className={b}>{children}</h6>
        </div>
    )
}

export default Subhead;