
import { Body } from 'components';
import s from './s.module.css';

const List = ({ list, className }) => {
    
    const inTheBox = list.map((item) => {

        const styles = [s.boxGrid, className].join(' ');
        return (
            <div key={item.itemName} className={styles}>
                <p className={s.quantity}> {item.quantity}x </p>
                <Body className={s.itemName} size="sm"> {item.item} </Body>
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
