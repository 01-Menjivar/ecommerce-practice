import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen page-enter flex flex-col text-[var(--text)]">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl grow px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer/>
    </div>
  );
}