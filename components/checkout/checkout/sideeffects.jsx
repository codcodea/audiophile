import stickyToolbar from '../modal/sticky';

// Set sticky toolbar and body background color on the checkout page
const sideEffect = () => {
    try {
        stickyToolbar(true)
        document.body.style.backgroundColor = "#eaeaea";
    } catch (error) { 
        // ignored
    } finally {
        return () => {
            stickyToolbar(false);
            document.body.style.backgroundColor = "initial";
        }
    }
}

export default sideEffect;