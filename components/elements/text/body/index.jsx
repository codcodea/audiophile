

import s from "./s.module.css"


const Body = ({ color, className, size = "md", children }) => {


    const h = [s.textBody, className].join(' ');
    const b = [s[color], s[size]].join(' ');

    return (
        <span className={h}>
            <p className={b}>{children}</p>
        </span>
    )
}

export default Body;
