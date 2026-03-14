interface ButtonProps {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function Button ({title,onClick,variant = "primary", className = ""}: ButtonProps) {

    const baseStyle = "w-full rounded-xl border px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] cursor-pointer"
    const primaryStyle = `${baseStyle} border-[var(--primary)] bg-[var(--primary)] text-white hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]`
    const secondaryStyle = `${baseStyle} border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--primary)]`

    return(
        <button onClick={onClick} className={`${variant === "primary" ? primaryStyle : secondaryStyle} ${className}`.trim()}>
            {title}
        </button>
    )
}