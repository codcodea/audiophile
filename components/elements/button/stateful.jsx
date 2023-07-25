"use client"

import useStore from 'lib/store';
import { useState } from 'react';
import { ButtonCounter, Button } from 'components'

const StatefulButtons = ({ slug, label, id, price }) => {
    const [count, setCount] = useState(0);
    const upsert = useStore(state => state.upsert);
    const handleclick = () => upsert({ id, count, price });

    return (
        <>
            <ButtonCounter count={count} setCount={setCount} />
            <Button onClick={handleclick} type="filled" color="orange" slug={slug}>
                <span className="button-font">{label}</span>
            </Button>
        </>
    )
}

export default StatefulButtons