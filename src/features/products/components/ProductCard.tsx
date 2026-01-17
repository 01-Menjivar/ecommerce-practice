import { useNavigate } from "react-router-dom";
import type { Product } from "../../../types";
import { useCartStore } from "../../cart/store/cartStore";
import { useNotification } from "../../../shared/contexts/NotificationContext";
import Button from "../../../shared/components/ui/Button";


interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    const navigate = useNavigate();
    // const { addToCart } = useCart();
    const addToCart = useCartStore((state) => state.addToCart);

    const { showNotification } = useNotification();

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        addToCart(product);
        showNotification(`${product.name} agregado al carrito`);
    };

    const handleClickDetails = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigate(`/product/${product.id}`);
    }

    return (
        <div
            onClick={handleClickDetails}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md dark:hover:shadow-blue-900 hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded shrink-0" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">{product.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 grow line-clamp-3">{product.description}</p>
            <div className="mt-auto">
                <span className="text-lg font-bold text-gray-900 dark:text-white block mb-2">${product.price.toFixed(2)}</span>
                <Button title="Agregar al carrito" onClick={handleAddToCart} variant="primary" />
                <Button title="Ver detalles" onClick={handleClickDetails} variant="secondary" />
            </div>
        </div>
    )
}