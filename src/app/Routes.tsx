import { createBrowserRouter } from "react-router-dom"
import NotFoundPage from "../pages/NotFoundPage"
import Products from "../features/products/components/Products"
import MainLayout from "../shared/components/layout/MainLayout"
import Cart from "../features/cart/components/Cart"
import ProductDetail from "../features/products/components/ProductDetail"

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <Products /> },
            { path: "/cart", element: <Cart /> },
            { path: "/product/:id", element: <ProductDetail /> },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
])

export default router