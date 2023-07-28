

import useStore from 'lib/store';

const useBanana = (id) => {

    const cart = useStore(state => state.getCart);
    const getCartId = useStore(state => state.getCartId(id));
    const setCartId = useStore(state => state.setCartId);
    const setCommitCount = useStore(state => state.setCommitCount);
    const getCartItem = useStore(state => state.getCartItem(id));
    const getOrderDetails = useStore(state => state.getOrderDetails);
    const reset = useStore(state => state.reset);

    // Number of items in the cart
    const cartItems = cart().reduce((acc, it) => acc + it.count, 0);



    return {
        cart,
        cartItems,
        getCartId,
        setCartId,
        setCommitCount,
        getCartItem,
        getOrderDetails,
        reset
    };
}

const useCart = (id) => {
  
    const cart = useStore(state => state.getCart);
    const getCartId = useStore(state => state.getCartId(id));
}

export default useBanana;
