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
        <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface)]/90 backdrop-blur-xl transition-colors duration-300">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="group flex items-end gap-1 text-2xl font-semibold tracking-tight text-[var(--text)]"
                >
                    <span className="font-display text-3xl leading-none italic text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-0.5">Mi</span>
                    <span className="font-primary">Tienda</span>
                </Link>

                <div className="flex items-center gap-4 sm:gap-6">
                    <Link
                        to="/cart"
                        className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--text)]"
                    >
                        <IconShoppingCart className="h-5 w-5 text-[var(--primary)] transition-transform duration-300 group-hover:scale-105" />
                        <span className="rounded-full bg-[var(--primary-soft)] px-2 py-0.5 text-sm font-semibold text-[var(--primary-strong)]">
                            {countCartItems}
                        </span>
                    </Link>

                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-2 text-[var(--text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <IconMoon className="h-5 w-5 cursor-pointer" />
                        ) : (
                            <IconSun className="h-5 w-5 cursor-pointer" />
                        )}
                    </button>
                </div>
            </div>
        </nav>

    )
}