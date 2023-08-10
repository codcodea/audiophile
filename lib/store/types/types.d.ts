import { CartProduct } from "../../db/types/DB";

type CartItem = {
    id: number;
    count: number;
    tempCount: number;
}

type Cart = CartItem[];

type OrderDetails = {
    total: number;
    shipping: number;
    incVAT: number;
    grandTotal: number;
}

interface Store {
    cart: Cart;
    getCart: () => Cart;
    getCartId: (id: number) => CartItem;
    setCartId: (id: number, tempCount: number) => void;
    setCommitCount: (id: number) => void;
    getCartItem: (id: number) => CartProduct;
    getOrderDetails: () => OrderDetails;
    reset: () => void
}

export {
    Store as default,
    CartItem,
    Cart,
    OrderDetails,
};
