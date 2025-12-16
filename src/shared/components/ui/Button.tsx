interface ButtonProps {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: "primary" | "secondary";
}

export default function Button ({title,onClick,variant = "primary"}: ButtonProps) {

    const primaryStyle = "mt-4 w-full bg-blue-600 dark:bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
    const secondaryStyle = "mt-4 w-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer"

    return(
        <button onClick={onClick} className={variant === "primary" ? primaryStyle : secondaryStyle}>
            {title}
        </button>
    )
}