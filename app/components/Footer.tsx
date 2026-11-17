import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-neutral-900 bg-black text-white px-6 pb-12 pt-20 sm:px-10 md:px-16 lg:px-24">
    <div className="mx-auto max-w-[1400px]">
      <div className="flex flex-col justify-between gap-12 border-b border-neutral-800 pb-16 md:flex-row md:items-end">
        <div className="max-w-xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-neutral-300 hover:text-white transition-colors"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            WildTerra
          </Link>
          <h2 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-5xl leading-[1.05]">
            For a world where the wild still has room.
          </h2>
          <p className="mt-4 text-xs font-normal text-neutral-400 max-w-md leading-relaxed">
            Securing continuous ecological corridors, baseline biodiversity monitoring, and sovereign wild habitats.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Navigation
          </p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              ["Our Mission", "/mission"],
              ["Habitats", "/habitats"],
              ["Wildlife", "/wildlife"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-300 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/habitats"
            className="mt-4 inline-flex items-center gap-3 rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-white hover:text-black"
          >
            Explore Sanctuaries <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 pt-8 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500 sm:flex-row">
        <p>© 2026 WildTerra Ecological Initiative. All rights reserved.</p>
        <p className="text-neutral-400">Pure Preservation • Zero Disturbance</p>
      </div>
    </div>
  </footer>
);

export default Footer;
