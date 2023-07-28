
import Store from "./types";
import db from "../db";
import { create } from "zustand";
import { produce } from "immer";
import { SHIPPING_FEE, ERROR } from "./constants";

const useStore = create<Store>((set, get) => ({
    cart: [],

    getCart: () => get().cart.filter(item => item.count > 0),

    getCartId: (id) => get().cart.find((item) => item.id === id),

    setCartId: (id, tempCount) => {
        set(produce((state) => {
            const index = state.cart.findIndex((item) => item.id === id);
            if (index === -1)
                state.cart.push({ id, tempCount })
            else
                state.cart[index].tempCount = tempCount;
        }))
    },

    setCommitCount: (id) => {
        set(produce((state) => {
            const index = state.cart.findIndex((item) => item.id === id);
            if (index === -1) throw ERROR();
            state.cart[index].count = state.cart[index].tempCount;
        }))
    },

    getCartItem: (id) => {
        const { name, image, price } = db.getCartProduct(id);
        return { id, name, image, price }
    },

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

    reset: () => set({ cart: [] }),
}))

export default useStore;