import s from './icon.module.scss'
import useStore from '/lib/store';

const CartIcon = ({handleOpen}) => {
    const cart = useStore(state => state.getCart());
    const cartItems = cart.reduce((acc, it) => acc + it.count, 0);

    return (
        <aside id="cart" onClick={handleOpen} className={s.cartIcon} >
            {cartItems > 0 && <span className={s.cartCount}> {cartItems} </span>}
        </aside>
    )
}

export default CartIcon;