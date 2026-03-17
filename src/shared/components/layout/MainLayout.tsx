import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen page-enter flex flex-col text-(--text)">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl grow px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}