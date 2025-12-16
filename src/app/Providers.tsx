import { NotificationProvider } from "../shared/contexts/NotificationContext";
import ThemeContextProvider from "../shared/contexts/ThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </NotificationProvider>
  )
}