'use client';

import { useCartStore } from '../store';
import { useProducts } from '../../products/hooks';
import CartItem from './CartItem';

export const ListCartItems = () => {
const cartItems = useCartStore((state) => state.items);
const removeItem = useCartStore((state) => state.removeItem);
const updateQuantity = useCartStore((state) => state.updateQuantity);
const { data: products } = useProducts();

return (
    <div className="space-y-4">
        {cartItems.map((item) => {
            const product = products?.find((p) => p.id === item.productId);
            if (!product) return null;
            return (
                <CartItem
                    key={item.productId}
                    product={product}
                    quantity={item.quantity}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
                />
            );
        })}
    </div>
);
};