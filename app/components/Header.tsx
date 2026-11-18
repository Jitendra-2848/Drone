"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Mission", href: "/mission" },
  { label: "Habitats", href: "/habitats" },
  { label: "Wildlife", href: "/wildlife" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md text-black">
      <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-xl font-bold uppercase tracking-[0.22em] transition-opacity hover:opacity-70"
        >
          {/* <span className="inline-block h-2 w-2 rounded-full  bg-black group-hover:scale-125 transition-transform" /> */}
          WildTerra
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1.5 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[11px] font-medium tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white shadow-xs"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
