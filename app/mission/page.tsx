import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentPage from "../components/ContentPage";
import PageMotionWrapper from "../components/PageMotionWrapper";
import KineticBlurText from "../components/KineticBlurText";

export const metadata: Metadata = {
  title: "Our Mission — Defending Unbroken Habitats",
  description:
    "WildTerra protects connected land corridors and defends untouched wilderness so wildlife can move, hunt, and endure without human interference.",
  keywords: [
    "conservation mission",
    "wildlife corridors",
    "unfragmented land",
    "land easements",
    "acoustic monitoring",
    "indigenous stewardship",
  ],
  alternates: {
    canonical: "/mission",
  },
  openGraph: {
    title: "Our Mission | WildTerra",
    description:
      "WildTerra protects connected land corridors and defends untouched wilderness so wildlife can move and endure.",
    url: "https://wildterra.org/mission",
    images: [{ url: "/images/4.png", width: 1200, height: 630, alt: "WildTerra conservation field station" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Mission | WildTerra",
    description:
      "WildTerra protects connected land corridors and defends untouched wilderness so wildlife can move and endure.",
    images: ["/images/4.png"],
  },
};

const metrics = [
  { value: "1.85M+", label: "Hectares Protected", detail: "Unbroken wilderness across four regions, free from roads and development." },
  { value: "32", label: "Wildlife Crossings", detail: "Safe passages linking national parks that were once cut off from each other." },
  { value: "100%", label: "No Road Policy", detail: "No roads or industrial access allowed inside our core protected zones." },
  { value: "0", label: "Exceptions Made", detail: "We hold the line. No logging, no drilling, no compromise." },
];

const pillars = [
  {
    num: "01",
    tag: "LAND",
    title: "Buying and Holding Land",
    desc: "Wildlife cannot survive in small, isolated patches. We buy land that connects national parks and wild areas, so animals can move, breed, and find food the way they always have.",
  },
  {
    num: "02",
    tag: "NO DISTURBANCE",
    title: "Leaving Nature Alone",
    desc: "The best thing we can do for a healthy ecosystem is simply stop interfering. When we remove pressure, rivers clean themselves, forests grow back, and predator and prey find their balance again.",
  },
  {
    num: "03",
    tag: "SCIENCE",
    title: "Quiet, Careful Monitoring",
    desc: "We use microphones and non-invasive DNA sampling to understand how wildlife populations are doing — without trapping, tagging, or disturbing a single animal.",
  },
  {
    num: "04",
    tag: "PEOPLE",
    title: "Working with Local Communities",
    desc: "Long-term conservation only works when the people who live near the land benefit from protecting it. We work with indigenous and local communities who have always known how to care for these places.",
  },
];

export default function MissionPage() {
  return (
    <ContentPage>
      <PageMotionWrapper>
        {/* Hero Section */}
        <section className="border-b border-black/10 px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            

            <h1 className="mt-6 max-w-5xl text-[clamp(2.4rem,8vw,6.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.06em]">
              A future where
              <br />
              <span className="font-normal italic lowercase font-serif text-neutral-400">
                the wild has room to endure.
              </span>
            </h1>

            <div className="mt-10 grid gap-6 border-t border-black/10 pt-8 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pt-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                  The Directive
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600 max-w-xs">
                  Development expands. Wild land shrinks. Our job is to hold the line before the last connections are cut.
                </p>
              </div>
              <KineticBlurText
                text="Wildlife is not decoration. It is proof that an ecosystem is working. When the animals are healthy, the water is clean, the soil holds, and the air does too. We exist to keep that going."
                mode="trigger"
                className="text-xl sm:text-2xl lg:text-3xl font-normal leading-snug tracking-tight text-neutral-900"
              />
            </div>
          </div>
        </section>

        {/* Metrics Section with Staggered ScrollTrigger */}
        <section className="border-b border-black/10 bg-neutral-50 px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-group grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`reveal-child flex flex-col justify-between py-2 sm:py-3 will-change-[transform,opacity,filter] ${
                    i !== 0 ? "lg:border-l lg:border-neutral-200 lg:pl-8" : ""
                  }`}
                >
                  <div>
                    <span className="text-3xl font-light tracking-tight sm:text-5xl text-black">
                      {m.value}
                    </span>
                    <h3 className="mt-2 sm:mt-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-black">
                      {m.label}
                    </h3>
                  </div>
                  <p className="mt-2 sm:mt-3 text-xs leading-relaxed text-neutral-600">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Feature: Field Station */}
        <section className="border-b border-black/10 px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
              <div className="reveal-scale relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden border border-black/10 bg-neutral-100 will-change-[transform,opacity,filter]">
                <Image
                  src="/images/4.png"
                  alt="Mother grizzly bear and cubs in an open wilderness meadow"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                  loading="lazy"
                  decoding="async"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="reveal-item flex flex-col justify-center will-change-[transform,opacity,filter]">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  FIELD SECTOR 04 / BOREAL ZONE
                </span>
                <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl leading-tight">
                  A bear cub needs to know where it is safe to go.
                </h2>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600">
                  A mother bear teaches her cubs which valleys are safe, which rivers hold food, and which paths lead home. That knowledge only gets passed down if the land stays intact. One new road through the wrong valley can break that chain permanently.
                </p>
                <div className="mt-6 border-t border-black/10 pt-5">
                  <blockquote className="text-sm sm:text-base italic text-neutral-800 font-serif">
                    “We don’t manage the wild. We give it enough space to manage itself.”
                  </blockquote>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    — WildTerra Field Protocol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Pillars with Staggered ScrollTrigger */}
        <section className="border-b border-black/10 bg-white px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-item flex flex-col justify-between gap-3 md:flex-row md:items-end border-b border-black/10 pb-6 will-change-[transform,opacity,filter]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  FRAMEWORK FOR ACTION
                </p>
                <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                  The Four Pillars of Action
                </h2>
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500">
                HOW WE WORK
              </p>
            </div>

            <div className="reveal-group mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
              {pillars.map((item) => (
                <article
                  key={item.num}
                  className="reveal-child flex flex-col justify-between border-t border-black pt-5 transition-all will-change-[transform,opacity,filter] hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{item.num}</span>
                      <span className="text-[9px] uppercase tracking-wider font-sans font-semibold text-black">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg sm:text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dark Manifesto Section */}
        <section className="bg-black px-4 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
          <div className="reveal-item mx-auto max-w-[1400px] will-change-[transform,opacity,filter]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                  WHERE WE WORK
                </p>
                <h2 className="mt-4 text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                  See the land we protect.
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
                  Our sanctuaries range from glacier-fed river valleys to ancient mountain ridges. Each one is different. Each one matters.
                </p>
              </div>
              <Link
                href="/habitats"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-white bg-white px-7 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-neutral-200 active:scale-95"
              >
                <span>Explore Habitats</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>
      </PageMotionWrapper>
    </ContentPage>
  );
}
