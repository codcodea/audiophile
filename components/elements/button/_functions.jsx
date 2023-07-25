

import s from "./s.module.scss";

// Increase or decrease the count
export const handleClick = (e, count, setCount, directUpdate) => {
    if (e.target.className === s.minus) count > 0 && setCount(prev => prev - 1);
    else setCount(prev => prev + 1);
}

// Zoom in and out the button on click
export const handleClickZoom = (e) => {        
    if (e.target.style.scale === "1.15") return;

    const button = e.currentTarget;
    button.style.scale = "1.15";
    setTimeout(() => button.style.scale = "1", 100);
}
