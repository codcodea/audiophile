
"use client"

import s from './sss.module.css'
import { Cart } from '..';

import { useState } from 'react';
import Confirmation from './confirmation';
import useStore from 'lib/store';
import { useRouter } from 'next/navigation';
import { useClickAway } from "@uidotdev/usehooks";

const Summary = () => {

    const router = useRouter();

    const [isOpen, setOpen] = useState(false);
    const reset = useStore(state => state.reset);

    const ref = useClickAway((e) => {
        console.log(e.target.id)
        setOpen(false)
    });

    const handleOpen = () => setOpen(state => !state);

    const handleCommit = (e) => {
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
                {isOpen && <Confirmation ref={ref} onClick={handleCommit}/>}
            </aside>
        </>

    )
}

export default Summary;