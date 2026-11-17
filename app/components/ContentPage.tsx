import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ContentPage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}
