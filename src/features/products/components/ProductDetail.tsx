import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import { Link } from "react-router-dom";
import { useCartStore } from "../../cart/store/cartStore";


export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const {data: product, isLoading} = useProduct(Number(id));
    const addToCart = useCartStore((state) => state.addToCart);

    if (isLoading) {
        return <ProductDetailSkeleton />;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded mb-4"/>
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{product.name}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
            <div className="mt-4 flex space-x-4">
                <Link to="/" className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer">Volver</Link>
                <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Agregar al carrito</button>
            </div>
        </div>
    );
}