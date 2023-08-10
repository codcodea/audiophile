import { produce } from "immer";
import { create } from "zustand";
import db from "../db";
import { ERROR, SHIPPING_FEE } from "./constants";
import Store from "./types/types";

const useStore = create<Store>((set, get) => ({

    // The cart
    cart: [],

    // Get the cart with items with counts
    getCart: () => get().cart.filter(item => item.count > 0),

    // Get the by id
    getCartId: (id) => get().cart.find((item) => item.id === id),

    // Set the cart by id, tempCount is used on the product page
    setCartId: (id, tempCount) => {
        set(produce((state) => {
            const index = state.cart.findIndex((item) => item.id === id);
            if (index === -1)
                state.cart.push({ id, tempCount })
            else
                state.cart[index].tempCount = tempCount;
        }))
    },

    // Set the cart to tempCount (used on the product page)
    setCommitCount: (id) => {
        set(produce((state) => {
            const index = state.cart.findIndex((item) => item.id === id);
            if (index === -1) get().setCartId(id, 0);
            else state.cart[index].count = state.cart[index].tempCount;
        }))
    },

    // Get the cart item
    getCartItem: (id) => {
        const { name, image, price } = db.getCartProduct(id);
        return { id, name, image, price }
    },

    // Calculate and return the order details
    getOrderDetails: () => {
        const cart = get().cart;
        return cart.reduce((acc, { id, count }) => {
            if (count === 0) return acc;
            const { price } = get().getCartItem(id);
            if (!price) throw ERROR();

            acc.total += price * count;
            acc.shipping += SHIPPING_FEE * count;
            acc.incVAT += acc.total * 0.2;
            acc.grandTotal = acc.total + acc.shipping;

            return acc;
        }, { total: 0, shipping: 0, incVAT: 0, grandTotal: 0 })
    },

    // Reset the cart
    reset: () => set({ cart: [] }),
}))

export default useStore;