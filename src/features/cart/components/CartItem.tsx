'use client';

import { Product } from '../../products/types';

interface CartItemProps {
  product: Product;
  quantity: number;
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
}

function CartItem({ product, quantity, onRemove, onUpdateQuantity }: CartItemProps) {
    return (
        <div className="flex items-center justify-between p-4 border rounded shadow">
            <div>
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">Quantity: {quantity}</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    -
                </button>
                <button
                    onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    +
                </button>
                <button
                    onClick={() => onRemove(product.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Remove
                </button>   
            </div>  
        </div>
    );
}

export default CartItem;