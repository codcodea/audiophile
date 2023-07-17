

import s from './s.module.css';

import {Body, Headline, Subhead} from 'components';

const Features = ({ features, includes }) => {

    const bodyStyles = [s.featText, "lolita"].join(' ');

    const List = ({ list, className }) => {

        return (
            <div className={s.boxText}>
                {list.map((item) => {

                    const styles = [s.boxGrid, className].join(' ');
                    return (
                        <div key={item.itemName} className={styles}>
                            <p className={s.quantity}> {item.quantity}x </p>
                            <Body className={s.itemName} size="sm"> {item.item} </Body>
                        </div>
                    )
                }
                )}
            </div>
        )
    }


    return (
        <section className={s.section}>
            <Subhead className={s.featHead}> Features </Subhead>
            <Body className={bodyStyles} size="sm">{features}</Body>

            <Subhead className={s.boxHead}> In the box </Subhead>
            <List list={includes} />
        </section>
    )
}

export default Features;


// "includes": [
//     {
//       "quantity": 2,
//       "item": "Earphone unit"
//     },
//     {
//       "quantity": 6,
//       "item": "Multi-size earplugs"
//     },
//     {
//       "quantity": 1,
//       "item": "User manual"
//     },
//     {
//       "quantity": 1,
//       "item": "USB-C charging cable"
//     },
//     {
//       "quantity": 1,
//       "item": "Travel pouch"
//     }
//   ],