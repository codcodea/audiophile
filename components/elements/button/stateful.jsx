"use client"

import { ButtonCounter } from 'components';
import useButton from './hook';
import s from './s.module.scss';

const StatefulButtons = ({ id, directUpdate = false, alignCenter = false }) => {

    const { count, tempCount, handleClick, handleCommit } = useButton(id, directUpdate);

    // join styles
    const align = alignCenter ? [s.alignCenter, "buttonWrapper"] : "buttonWrapper";
    const styles = [s.filled, s.orange, "button", "button-font"].join(' ');
   
    const props = { 
        id, 
        count: directUpdate ? count : tempCount, 
        handleClick
    };

    return (
        <div className={align}>
            <ButtonCounter {...props} />
            {!directUpdate &&
                <button id={id} onClick={handleCommit} className={styles}> 
                  <span className="button-font">{"Add to cart"}</span>
                </button>
            }
        </div>
    )
}

export default StatefulButtons