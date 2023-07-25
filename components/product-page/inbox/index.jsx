



import s from './inbox.module.css';

const Inbox = ({includes}) => {

    return (
        <div className={s.wrapper}style={{"width": "100%"}}>
            <h1 className={s.headline}>In the box</h1>
            <div className={s.listGrid}>
                <div className={s.quantity}> 2x </div>
                <div className={s.item}> Replacement earcups </div>
            </div>
        </div>
    )
}

export default Inbox;


// "includes": [
//     {
//       "quantity": 1,
//       "item": "Headphone unit"
//     },
//     {
//       "quantity": 2,
//       "item": "Replacement earcups"
//     },
//     {
//       "quantity": 1,
//       "item": "User manual"
//     },
//     {
//       "quantity": 1,
//       "item": "3.5mm 5m audio cable"
//     }
//   ],