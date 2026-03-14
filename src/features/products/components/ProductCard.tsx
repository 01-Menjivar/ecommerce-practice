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
            className="ui-card group cursor-pointer overflow-hidden p-4 flex h-full flex-col">
            <div className="overflow-hidden rounded-xl border border-(--border)">
                <img src={product.image} alt={product.name} className="h-48 w-full shrink-0 object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="mb-2 mt-4 line-clamp-2 text-xl font-semibold text-(--text)">{product.name}</h3>
            <p className="ui-muted mb-4 grow line-clamp-3">{product.description}</p>
            <div className="mt-auto">
                <span className="mb-2 block text-lg font-bold text-(--text)">${product.price.toFixed(2)}</span>
                <Button title="Agregar al carrito" onClick={handleAddToCart} variant="primary" className="mt-4" />
                <Button title="Ver detalles" onClick={handleClickDetails} variant="secondary" className="mt-3" />
            </div>
        </div>
    )
}