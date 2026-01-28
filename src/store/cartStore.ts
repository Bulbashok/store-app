import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, CartItem } from "../types/type";

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        set((state: CartState) => {
          const existingItem = state.items.find(
            (item: CartItem) => item.id === product.id,
          );
          if (existingItem) {
            return {
              items: state.items.map((item: CartItem) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          } else {
            return {
              items: [...state.items, { ...product, quantity: 1 }],
            };
          }
        });
      },

      removeItem: (id: number) => {
        set((state: CartState) => ({
          items: state.items.filter((item: CartItem) => item.id !== id),
        }));
      },

      updateQuantity: (id: number, quantity: number) => {
        if (quantity < 1) return;
        set((state: CartState) => ({
          items: state.items.map((item: CartItem) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce(
          (sum: number, item: CartItem) => sum + item.quantity,
          0,
        ),

      totalPrice: () =>
        get().items.reduce(
          (sum: number, item: CartItem) => sum + item.price * item.quantity,
          0,
        ),
    }),
    {
      name: "fakestore-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
