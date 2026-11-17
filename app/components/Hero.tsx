

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
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#ffffff] text-[#000000]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(28, 35, 29, 0.2) 1px, transparent 1.15px)",
        backgroundSize: "42px 42px",
      }}
    >
      {/* <div className="pointer-events-none absolute inset-0 bg-[#f5f4f0]/15" /> */}
      <div className="pointer-events-none absolute inset-y-[12%] right-[-12%] z-0 w-[78%] opacity-90 sm:right-[-5%] sm:w-[65%] lg:right-0 lg:w-[58%]">
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1800px] flex-col justify-between px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div>
          <h1 className="max-w-full text-[clamp(2.6rem,9.3vw,9.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.085em]">
            <span className="block">Wildlife needs</span>
            <span className="block text-[#879087]">room to live.</span>
          </h1>
        </div>

        <div className="relative z-10 grid items-end gap-8 pb-5 pt-20 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <p className="max-w-[900px] text-[clamp(1.45rem,3.8vw,3.5rem)] leading-[1.13] tracking-[-0.065em] text-[#8b8d86]">
            A living planet depends on{" "}
            <span className="text-[#171816]">wild places</span> and the
            communities who care for them. Together, we can make space for both.
          </p>

          <div className="relative z-10 lg:justify-self-end lg:min-w-[280px]">
            <p className="mb-3 border-b border-[#171816]/15 pb-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#777a72]">
              Our work
            </p>
            <ul className="grid grid-cols-2 gap-x-6">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="border-b border-[#171816]/10 py-2 text-[11px] tracking-tight sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/#explore"
              className="mt-5 inline-flex min-h-10 items-center gap-3 rounded-full bg-[#1d271f] px-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#385640] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d271f]"
            >
              Explore our work <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
