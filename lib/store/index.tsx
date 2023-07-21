
import { create } from "zustand";

type ProductItem = {
    id: number;
    price: number;
    count: number;
}

type Cart = ProductItem[];

interface Store {
    cart: Cart;
    getShipping: () => number;
    getIncVAT: () => number;
    getGrandTotal: () => number;
    getCart: () => Cart;
    upsert: (product: ProductItem) => void // update with insert if not exists
    getTotal: () => number;
    reset: () => void
}

const useStore = create<Store>((set, get) => ({
    cart: [],
    getShipping: () => get().cart.length * 10,
    getIncVAT: () => (get().getTotal() + get().getShipping()) * 0.2,
    getGrandTotal: () => get().getTotal() + get().getShipping(),
    getCart: () => get().cart,
    upsert: (product) => set((state) => ({ cart: state.cart.some((item) => item.id === product.id) ? state.cart.map((item) => item.id === product.id ? product : item) : [...state.cart, product] })),
    getTotal: () => useStore.getState().cart.reduce((acc, item) => acc + item.price * item.count, 0),
    reset: () => set({ cart: [] }),
}))

export default useStore;