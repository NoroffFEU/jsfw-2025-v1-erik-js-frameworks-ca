import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
    productId: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (productId: string) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}



export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
    items: [],

    addItem: (productId) => set((state) => {
        const existingItem = state.items.find((item) => item.productId === productId);
        if (existingItem) {
            const updatedItems = state.items.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item);
            return { items: updatedItems };
        } else {
            const newItem = { productId, quantity: 1 };
            const updatedItems = [...state.items, newItem];
            return { items: updatedItems };
        }   
    }),

    removeItem: (productId) => set((state) => {
        const updatedItems = state.items.filter((item) => item.productId !== productId);
        return { items: updatedItems };
    }),


    updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
            get().removeItem(productId);
            return;
        }
        set((state) => {
            const updatedItems = state.items.map((item) => item.productId === productId ? { ...item, quantity } : item);
            return { items: updatedItems };
        });
    },

    clearCart: () => set({ items: [] }),
    }),
    {
        name: 'cart-storage',
    }
)
);

