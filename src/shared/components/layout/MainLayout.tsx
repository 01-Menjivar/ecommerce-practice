import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="container mx-auto py-6 grow">
        {children}
      </main>
      <Footer/>
    </div>
  );
}