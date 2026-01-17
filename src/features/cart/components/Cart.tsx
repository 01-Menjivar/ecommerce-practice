// import { useCart } from "../Context/CartContext";
import Button from "../../../shared/components/ui/Button";
import CartItem from "./CartItem";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";

export default function Cart(){

    // const {cartItems, clearCart} = useCart();

    const cartItems = useCartStore((state) => state.cartItems);
    const clearCart = useCartStore((state) => state.cleartCart);


    if(cartItems?.length === 0){
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tu carrito está vacío</h2>
            </div>
        )
    }

    return(
        <div className="container mx-auto px-4 py-8">
            <ul>
                    {cartItems?.map((item) => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                </ul>
                <div className="flex gap-3.5">
                <Link to="/" className="mt-4 w-full text-black bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded border border-gray-300 cursor-pointer text-center">Seguir comprando</Link>
                <Button title="Limpiar carrito" variant="primary" onClick={clearCart}/>
                </div>
        </div>
    )
}