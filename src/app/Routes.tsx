import { Routes, Route } from "react-router-dom"
import NotFoundPage from "../pages/NotFoundPage"
import ProductsPage from "../features/products/pages/ProductsPage"
import ProductDetailPage from "../features/products/pages/ProductDetailPage"
import CartPage from "../features/cart/pages/CartPage"

export default function AppRoutes(){
    return(
        <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductDetailPage/>} />
                <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}