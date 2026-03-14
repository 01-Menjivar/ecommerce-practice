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
        return <p className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-[var(--danger)]">Producto no encontrado.</p>;
    }

    return (
        <div className="ui-card mx-auto max-w-4xl overflow-hidden p-5 md:p-6">
            <img src={product.image} alt={product.name} className="mb-5 h-96 w-full rounded-xl object-cover border border-[var(--border)]"/>
            <h1 className="mb-2 text-4xl font-display leading-tight text-[var(--text)]">{product.name}</h1>
            <p className="mb-5 text-[var(--text-muted)]">{product.description}</p>
            <span className="text-2xl font-bold text-[var(--text)]">${product.price.toFixed(2)}</span>
            <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/" className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]">Volver</Link>
                <button
                onClick={() => addToCart(product)}
                className="cursor-pointer rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]">Agregar al carrito</button>
            </div>
        </div>
    );
}