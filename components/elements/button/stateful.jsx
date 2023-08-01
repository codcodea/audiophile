"use client"

import { Button, ButtonCounter } from 'components';
import useButton from './hook';
import s from './s.module.scss';

const StatefulButtons = ({ id, directUpdate = false, alignCenter = false }) => {

    const { count, tempCount, handleClick } = useButton(id, directUpdate);

    const styles = alignCenter 
        ? ["buttonWrapper", s.alignCenter].join(' ') 
        : ["buttonWrapper"].join(' ');

    const props = { 
        id, 
        count: directUpdate ? count : tempCount, 
        handleClick
    };

    return (
        <div className={styles}>
            <ButtonCounter {...props} />
            {!directUpdate &&
                <Button onClick={handleClick} type="filled" color="orange">
                    <span className="button-font">{"Add to cart"}</span>
                </Button>
            }
        </div>
    )
}

export default StatefulButtons