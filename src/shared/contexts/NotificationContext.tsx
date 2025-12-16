import { createContext, useContext, useState } from "react";
import Notification from "../components/ui/Notification";

interface NotificationContextType {
    showNotification: (message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [notification, setNotification] = useState({ 
        message: "", 
        isVisible: false 
    });

    const showNotification = (message: string, duration = 3000) => {
        setNotification({ message, isVisible: true });
        setTimeout(() => {
            setNotification({ message: "", isVisible: false });
        }, duration);
    };

    return (
        <NotificationContext value={{ showNotification }}>
            {children}
            <Notification 
                message={notification.message} 
                isVisible={notification.isVisible} 
            />
        </NotificationContext>
    );
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within NotificationProvider");
    }
    return context;
};