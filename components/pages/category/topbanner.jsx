import { Separator } from 'components'
import s from './s.module.scss'

const TopBanner = ({ category }) => {
    return (
        <>
            <Separator />
            <div className={s.topbanner}>
                <h4> {category} </h4>
            </div>
        </>
    )
}

export default TopBanner