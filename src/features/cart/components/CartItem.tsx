import { type CartItem } from '../../../types';
import { IconTrash } from '@tabler/icons-react';
import { useCartStore } from '../store/cartStore';

export default function CartItem({ item }: { item: CartItem }) {

    const deleteItem = useCartStore((state) => state.deleteItem);

    return (
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md m-3 hover:shadow-xl transition-shadow duration-300 dark:hover:shadow-white/10">
            <div className="flex pl-5">
                <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.product.name}</h4>
                    <p className="text-gray-700 dark:text-gray-300">Cantidad: {item.quantity}</p>
                    <p className="text-gray-900 dark:text-white font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
            <button
                className="cursor-pointer pr-6"
                onClick={() => {
                    console.log('Deleting item', item.product.id);
                    deleteItem(item.product.id)}}><IconTrash
                className="text-red-600 hover:text-red-800"
                size={20} /></button>
        </div>
    )
}