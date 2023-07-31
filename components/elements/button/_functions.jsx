

import s from "./s.module.scss";

// Increase or decrease the tempCount state
export const handleTempCount = (e, tempCount, setTempCount) => {
    if (e.target.className === s.minus) tempCount > 0 && setTempCount(prev => --prev);
    else setTempCount(prev => ++prev);
}

// Zoom in and out the button on click
export const handleClickZoom = (e) => {        
    if (e.target.style.scale === "1.15") return;

    const button = e.currentTarget;
    button.style.scale = "1.15";
    setTimeout(() => button.style.scale = "1", 100);
}

