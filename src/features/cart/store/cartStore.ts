import {create} from 'zustand'
import type { CartItem, Product } from '../../../types'

type cartStore = {
cartItems: Array<CartItem>
addToCart: (product : Product) => void
cleartCart: () => void
deleteItem: (id: number) => void
countCartItems: () => number
}

export const useCartStore = create<cartStore>()((set,get)=>({
    cartItems: [],
    
    cleartCart: () => set({cartItems: []}),

    addToCart: (product: Product) => {
        const { cartItems } = get();
        const existingItemIndex = cartItems.findIndex(
            item => item.product.id === product.id
        );

        if (existingItemIndex > -1) {
            // Si existe, incrementar cantidad
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + 1
            };
            set({ cartItems: updatedItems });
        } else {
            // Si no existe, agregarlo
            set({ cartItems: [...cartItems, { product, quantity: 1 }] });
        }
    },

    deleteItem: (id: number) => {
        set((state) =>({
            cartItems: state.cartItems.filter(item => item.product.id !== id)
        }))
    },

    countCartItems: () => {
        const { cartItems } = get();
        return cartItems.length;
    }




}))