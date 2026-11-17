const Footer = () => (
    <footer className=" px-6 pb-8 pt-16 text-[#18221b] sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col justify-between gap-10 border-b border-stone-900/15 pb-12 md:flex-row md:items-end">
                <div>
                    <a
                        href="/"
                        className="text-sm uppercase font-extrabold tracking-[0.18em]"
                    >
                        WildTerra
                    </a>
                    <p className="mt-4 max-w-md text-3xl leading-tight sm:text-4xl">
                        For a world where the wild still has room.
                    </p>
                </div>
                <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
                    {[
                        ["Our mission", "/#mission"],
                        ["Habitats", "/#explore"],
                        ["Wildlife", "/#wildlife"],
                    ].map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            className="text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-600 transition hover:text-emerald-900"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="flex justify-start border-b border-stone-900/15 py-6">
                <a
                    href="/hero"
                    className="inline-flex min-h-11 items-center gap-3 rounded-full bg-[#1d271f] px-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#385640]"
                >
                    Explore the habitat <span aria-hidden="true">↗</span>
                </a>
            </div>
            <div className="flex flex-col justify-between gap-3 pt-5 text-[9px] font-medium uppercase tracking-[0.14em] text-stone-500 sm:flex-row">
                <p>Care for the living world.</p>
                <p>WildTerra Conservation</p>
            </div>
        </div>
    </footer>
);

export default Footer;
