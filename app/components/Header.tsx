const navLinks = [
  { label: "Mission", href: "/#mission" },
  { label: "Habitats", href: "/#explore" },
  { label: "Wildlife", href: "/#wildlife" },
];

export default function Header() {
  return (
   
<header className="sticky top-0 z-50 border-b border-stone-900/5 bg-white text-[#171816]">
    <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16">

        <a
            href="/"
            className="shrink-0 text-sm font-semibold tracking-tight"
        >
            WildTerra
        </a>

        <nav
            aria-label="Main navigation"
            className="flex items-center gap-2"
        >
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full bg-[#e8e7e2] px-4 py-2.5 text-[11px] transition-colors hover:bg-[#dedfd7]"
                >
                    {link.label}
                </a>
            ))}
        </nav>

    </div>
</header>

  );
}
