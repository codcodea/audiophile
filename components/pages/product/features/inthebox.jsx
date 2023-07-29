
import s from './s.module.scss';

const List = ({ list, className }) => {
    return (
        <div className={s.boxText}>
            {list.map((item) => {
                const styles = [s.boxGrid, className].join(' ');
                return (
                    <div key={item.item} className={styles}>
                        <p className={s.quantity}> {item.quantity}x </p>
                        <p className={s.itemName}> {item.item} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default List;
