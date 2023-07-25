"use client"

import s from './s.module.css'
import { Button } from 'components'

const GoBack = () => {
    return (
        <section className={s.section}>
            <Button type="text" onClick={() => history.back()}>
                <p>Go Back</p>
            </Button>
        </section>
    )
}

export default GoBack;