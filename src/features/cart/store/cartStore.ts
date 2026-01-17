import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '../../../types'

type CartStore = {
  cartItems: Array<CartItem>
  addToCart: (product: Product) => void
  clearCart: () => void
  deleteItem: (id: number) => void
  countCartItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      
      clearCart: () => set({ cartItems: [] }),

      addToCart: (product: Product) => {
        const { cartItems } = get();
        const existingItemIndex = cartItems.findIndex(
          item => item.product.id === product.id
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...cartItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1
          };
          set({ cartItems: updatedItems });
        } else {
          set({ cartItems: [...cartItems, { product, quantity: 1 }] });
        }
      },

      deleteItem: (id: number) => {
        set((state) => ({
          cartItems: state.cartItems.filter(item => item.product.id !== id)
        }))
      },

      countCartItems: () => {
        const { cartItems } = get();
        return cartItems.length;
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)