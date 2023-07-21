
"use client"

import s from './s.module.css';

import { useState } from 'react';
import { ButtonCounter, Button } from 'components'
import useStore from 'lib/store';

const StatefulButtons = ({ slug, label, id, price }) => {

    const [count, setCount] = useState(0);
    const upsert = useStore(state => state.upsert);
    const handleclick = () => upsert({ id, count, price });

    return (
        <>
            <ButtonCounter count={count} setCount={setCount} />
            <Button onClick={handleclick} type="filled" color="orange" slug={slug}> {label} </Button>
        </>
    )


}

export default StatefulButtons