import { type CartItem } from '../../../types';
import { IconTrash } from '@tabler/icons-react';
import { useCartStore } from '../store/cartStore';

export default function CartItem({ item }: { item: CartItem }) {

    const deleteItem = useCartStore((state) => state.deleteItem);

    return (
        <div className="ui-card mb-4 flex items-center justify-between p-4">
            <div className="flex items-center pl-2 sm:pl-4">
                <img src={item.product.image} alt={item.product.name} className="mr-4 h-16 w-16 rounded-lg border border-[var(--border)] object-cover" />
                <div>
                    <h4 className="text-lg font-semibold text-[var(--text)]">{item.product.name}</h4>
                    <p className="text-[var(--text-muted)]">Cantidad: {item.quantity}</p>
                    <p className="font-bold text-[var(--text)]">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
            <button
                className="cursor-pointer rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-2 text-[var(--danger)] transition-colors duration-300 hover:border-[var(--danger)] hover:bg-red-50 dark:hover:bg-red-950/30"
                onClick={() => {
                    console.log('Deleting item', item.product.id);
                    deleteItem(item.product.id)}}><IconTrash
                className="text-[var(--danger)]"
                size={20} /></button>
        </div>
    )
}