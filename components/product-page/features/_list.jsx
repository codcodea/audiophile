
import { Body } from 'components';
import s from './s.module.scss';

const List = ({ list, className }) => {
    
    const inTheBox = list.map((item) => {

        const styles = [s.boxGrid, className].join(' ');
        return (
            <div key={item.itemName} className={styles}>
                <p className={s.quantity}> {item.quantity}x </p>
                <p className={s.itemName}> {item.item} </p>
            </div>
        )
    })
   
    return (
        <div className={s.boxText}>
            {inTheBox}
        </div>
    )
}

export default List;
