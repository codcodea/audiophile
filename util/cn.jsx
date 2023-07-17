


/**
 * This function joins strings to form a jsx class name
 */

const cn = (...args) => {
    let str = '';
    for (let arg of args) {
        str += arg + " ";
    }

    return str.trim();
};

export default cn;