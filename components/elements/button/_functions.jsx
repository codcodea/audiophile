
// Click feedback on counter buttons
export const handleClickZoom = (e) => {        
    if (e.target.style.scale === "1.15") return;

    const button = e.currentTarget;
    button.style.scale = "1.15";
    setTimeout(() => button.style.scale = "1", 100);
}

