import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      
<main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-white px-6 py-8 text-black sm:px-12 sm:py-10 lg:px-20">

    {/* Main content */}
    <section className="relative my-auto flex w-full items-start py-20">

        <h1 className="text-[clamp(10rem,30vw,25rem)] font-semibold leading-[0.7] tracking-[-0.1em]">
            404
        </h1>

        <div className="mt-12 max-w-xl sm:ml-[12%] lg:ml-[20%]">
            <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                This path doesn't
                <br />
                lead anywhere.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-black/50">
                The page you're looking for doesn't exist or may have been moved.
            </p>

            <Link
                href="/"
                className="group mt-8 inline-flex items-center gap-5 border-b border-black pb-3 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-50"
            >
                Back to home
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                </span>
            </Link>
        </div>
    </section>
</main>

      <Footer />
    </>
  );
}
