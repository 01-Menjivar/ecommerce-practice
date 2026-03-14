interface NotificationProps {
    message: string;
    isVisible: boolean;
}

export default function Notification({ message, isVisible }: NotificationProps) {
    if (!isVisible) return null;

    return (
        <div
            className="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-xl border border-[var(--primary)] bg-[var(--surface)] px-5 py-3 text-[var(--text)] shadow-[var(--shadow)]"
            style={{ animation: "toast-in 260ms ease-out both" }}
        >
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--success)" 
                strokeWidth="2"
            >
                <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="font-semibold">{message}</span>
        </div>
    )
}