"use client"

import { ButtonCounter, Button } from 'components'
import { useEffect, useState } from 'react';
import useStore from '/lib/store';

import s from './s.module.scss';

const StatefulButtons = ({ id, directUpdate = false }) => {

    const tempCount = useStore(state => state.getCartId(id)?.tempCount || 0);
    const count = useStore(state => state.getCartId(id)?.count || 0);
    const setCartId = useStore(state => state.setCartId);
    const setCommitCount = useStore(state => state.setCommitCount);
 
   
    const h = (e) => {

        if(e.target.innerHTML === "Add to cart") return setCommitCount(id);
    
        if(directUpdate) {
            if (e.target.className === s.minus) count > 0 && setCartId(id, count - 1);
            else setCartId(id, count + 1);
            setCommitCount(id);
        } else {
            if (e.target.className === s.minus) tempCount > 0 && setCartId(id, tempCount - 1);
            else setCartId(id, tempCount + 1);
        }
    }

    const props = { id, count: directUpdate ? count : tempCount, h };

    return (
        <>
            <ButtonCounter {...props} />
            {!directUpdate &&
                <Button onClick={h} type="filled" color="orange">
                    <span className="button-font">{"Add to cart"}</span>
                </Button>
            }
        </>
    )
}

export default StatefulButtons