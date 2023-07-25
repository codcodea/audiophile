import s from "./s.module.scss"

const Headline = ({ color, className, children }) => {
    const h = [s.textHeadline, className].join(' ');
    const b = [s[color], s.font].join(' ');
    
    return (
        <div className={h}>
            <h1 className={b}>{children}</h1>
        </div>
    )
}

export default Headline;
