
import { Separator } from 'components'
import s from './s.module.css'

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