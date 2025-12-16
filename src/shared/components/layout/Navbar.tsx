import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { IconSun } from '@tabler/icons-react';
import { IconMoon } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';
import { useCartStore } from "../../../features/cart/store/cartStore";

export default function Navbar() {

    const countCartItems = useCartStore((state) => state.countCartItems());
    // const { countCartItems } = useCart();
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-primary font-extrabold text-gray-800 dark:text-white"
                >
                    Mi Tienda
                </Link>

                <div className="flex gap-12 items-center">
                    <Link
                        to="/cart"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    >
                        <IconShoppingCart className="w-6 h-6" />
                        <span className="font-medium">{countCartItems}</span>
                    </Link>

                    <button
                        onClick={toggleTheme}
                        className="text-gray-800 dark:text-white hover:opacity-80"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <IconMoon className="w-6 h-6 cursor-pointer" />
                        ) : (
                            <IconSun className="w-6 h-6 cursor-pointer" />
                        )}
                    </button>
                </div>
            </div>
        </nav>

    )
}