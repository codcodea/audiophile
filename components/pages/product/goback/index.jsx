"use client"

import s from './s.module.scss'
import { Button } from 'components'

const GoBack = () => {
    return (
        <section className={s.section}>
            <div>
                <p onClick={() => history.back()}>Go Back</p>
            </div>
        </section>
    )
}

export default GoBack;