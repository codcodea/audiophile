
import s from "./s.module.scss";

const stickyToolbar = (open) => {
    const header = document?.querySelector("header");
    if(!header) return;     

    if (open) {
        header.classList.add(s.sticky);
        document.body.style.overscrollBehavior = "none";       
    } else {
        header.classList.remove(s.sticky);
        document.body.style.overscrollBehavior = "auto";
    }
}

export default stickyToolbar;