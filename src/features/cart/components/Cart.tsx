// import { useCart } from "../Context/CartContext";
import Button from "../../../shared/components/ui/Button";
import CartItem from "./CartItem";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";


export default function Cart() {

    // const {cartItems, clearCart} = useCart();

    const cartItems = useCartStore((state) => state.cartItems);
    const clearCart = useCartStore((state) => state.clearCart);


    if (cartItems?.length === 0) {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-2xl border border-(--border) bg-(--surface) px-6 py-8 text-center shadow-(--shadow)">
                <h2 className="mb-2 text-3xl font-display text-(--text)">Tu carrito esta vacio</h2>
                <p className="text-(--text-muted)">Agrega productos para comenzar tu compra.</p>
            </div>
        )
    }

    return (
        <div className="page-enter">
            <h2 className="mb-5 text-4xl font-display text-(--text)">Tu Carrito</h2>
            <ul>
                {cartItems?.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                ))}
            </ul>
            <div className="mt-4 flex items-center gap-3.5 max-sm:flex-col">
                <Link to="/" className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]">Seguir comprando</Link>
                <Button title="Limpiar carrito" variant="primary" onClick={clearCart} className="mt-0" />
            </div>
        </div>
    )
}