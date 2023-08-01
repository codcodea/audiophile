import useStore from '/lib/store';
import s from './s.module.scss';

const useButton = (id, directUpdate) => {
    
    const tempCount = useStore(state => state.getCartId(id)?.tempCount || 0);
    const count = useStore(state => state.getCartId(id)?.count || 0);
    const setCartId = useStore(state => state.setCartId);
    const setCommitCount = useStore(state => state.setCommitCount);

    const handleCommit = (e) => {
        if(e.currentTarget.id == id) setCommitCount(id);
    }

    const handleClick = (e) => {
        if(directUpdate) {
            if (e.target.className === s.minus) count > 0 && setCartId(id, count - 1);
            else setCartId(id, count + 1);
            setCommitCount(id);
        } else {
            if (e.target.className === s.minus) tempCount > 0 && setCartId(id, tempCount - 1);
            else setCartId(id, tempCount + 1);
        }
    }

    return {
        count,
        tempCount,
        handleClick,
        handleCommit
    }
}

export default useButton;