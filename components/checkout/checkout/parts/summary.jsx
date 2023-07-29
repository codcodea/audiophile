"use client"

import Confirmation from '../../confirmation';
import useStore from 'lib/store';
import { useClickAway } from "@uidotdev/usehooks";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Cart } from '../../..';
import s from '../s.module.scss';

const Summary = () => {
    const router = useRouter();

    const [isOpen, setOpen] = useState(false);
    const reset = useStore(state => state.reset);

    const ref = useClickAway(() => setOpen(false));
    const handleOpen = () => setOpen(state => !state);

    const handleCommit = () => {
        reset();
        setOpen(state => !state);
        router.push('/');
    }

    return (
        <>
            <div className={s.summary}>
                <Cart onClick={handleOpen} isSummary={true} />
            </div>
            <aside>
                {isOpen && <Confirmation ref={ref} handler={handleCommit}/>}
            </aside>
        </>
    )
}

export default Summary;