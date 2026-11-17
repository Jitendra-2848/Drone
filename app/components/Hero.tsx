const expertise = [
  "Wildlife protection",
  "Habitat restoration",
  "Field research",
  "Community action",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-white text-black"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1.15px)",
        backgroundSize: "42px 42px",
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1800px] flex-col justify-between px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div>
          <h1 className="max-w-full text-[clamp(2.6rem,9.3vw,9.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.085em]">
            <span className="block text-black">Wildlife needs</span>
            <span className="block text-neutral-400">room to live.</span>
          </h1>
        </div>

        <div className="relative z-10 grid items-end gap-8 pb-5 pt-20 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <p className="max-w-[900px] text-[clamp(1.45rem,3.8vw,3.5rem)] leading-[1.13] tracking-[-0.065em] text-neutral-500">
            A living planet depends on{" "}
            <span className="text-black">wild places</span> and the
            communities who care for them. Together, we can make space for both.
          </p>

          <div className="relative z-10 lg:justify-self-end lg:min-w-[280px]">
            <p className="mb-3 border-b border-black/15 pb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-400">
              Our core work
            </p>
            <ul className="grid grid-cols-2 gap-x-6">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 py-2 text-[11px] font-medium tracking-tight text-neutral-800 sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/habitats"
              className="mt-5 inline-flex min-h-10 items-center gap-3 rounded-full bg-black px-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              Explore our sanctuaries <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
