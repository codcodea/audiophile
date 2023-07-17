

import s from './s.module.css'
import { Separator } from 'components'

const TopBanner = ({ category }) => {
    
    return (
        <>
            <Separator />
            <div className={s.topbanner}>
                <h4 className={s.h1override}> {category} </h4>
            </div>
        </>
    )
}

export default TopBanner