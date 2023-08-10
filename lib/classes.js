
// join classnames with space
export default function c(...args){
    return args.map(item => {
        if (typeof item === 'object') {
            return Object.values(item)[0] == true ? Object.keys(item) : null;
        }        
        return item;
    }).join(' ');
}

// test case
const s = {
    flex: 'flex',
    flexRow: 'flex-row',
    flexCol: 'flex-col',
    flexWrap: 'flex-wrap',
    flexWrapReverse: 'flex-wrap-reverse',
}

const test = c(s.flex, s.flexRow, { [s.flexWrapReverse]: true} , {[s.flexWrap]: false })






