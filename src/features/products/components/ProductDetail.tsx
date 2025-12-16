import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import ProductDetailSkeleton from "./ProductDetailSkeleton";


export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const {data: product, isLoading} = useProduct(Number(id));

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
        </div>
    );
}