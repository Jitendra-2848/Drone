import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Our Mission | WildTerra",
  description:
    "WildTerra protects contiguous ecological corridors and defends unfragmented habitats for keystone wildlife.",
};

const metrics = [
  { value: "1.85M+", label: "Hectares Secured", detail: "Contiguous wilderness protected across 4 trans-border biomes." },
  { value: "32", label: "Wildlife Corridors", detail: "Active bypasses connecting fragmented national sanctuaries." },
  { value: "100%", label: "Unfragmented Target", detail: "Zero roads or industrial encroachment permitted in core zones." },
  { value: "0", label: "Compromise on Habitats", detail: "Defending baseline ecosystem rights for generational survival." },
];

const pillars = [
  {
    num: "01",
    tag: "LAND INTEGRITY",
    title: "Contiguous Corridor Acquisition",
    desc: "Wildlife cannot exist in isolated islands. We secure private and public land easements that bridge fractured national parks, creating unbroken pathways for natural seasonal migrations.",
  },
  {
    num: "02",
    tag: "TROPHIC SANCTUARY",
    title: "Zero-Disturbance Baseline Sanctuaries",
    desc: "When ecosystems are left to their own balance without human engineering, natural trophic cascades restore soil vitality, freshwater purity, and prey-predator equilibrium.",
  },
  {
    num: "03",
    tag: "SENTINEL SCIENCE",
    title: "Acoustic & Genetic Monitoring",
    desc: "Deploying passive acoustic sensor networks and non-invasive genetic census techniques to measure ecosystem health without disturbing the animals we are pledged to defend.",
  },
  {
    num: "04",
    tag: "COMMUNITY ALLIANCES",
    title: "Indigenous & Local Stewardship",
    desc: "Enduring wilderness preservation succeeds only when local communities hold ancestral guardianship and economic autonomy tied directly to forest protection.",
  },
];

export default function MissionPage() {
  return (
    <ContentPage>
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
                Civilization expands outward in geometric lines. Nature survives only in unbroken circles. Our mission is holding the line.
              </p>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-normal leading-snug tracking-tight text-neutral-900">
              Wildlife is not an ornament of the planet — it is the heartbeat of a living system upon which human survival relies. We exist to secure the ground beneath their feet before the connection is severed forever.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-b border-black/10 bg-neutral-50 px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-col justify-between py-2 sm:py-3 ${
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
            <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden border border-black/10 bg-neutral-100">
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
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                FIELD SECTOR 04 / BOREAL TRANSITION
              </span>
              <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl leading-tight">
                Generational continuity requires generational territory.
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600">
                When a mother bear guides her cubs through the subalpine valleys, she relies on ancestral memory passed through thousands of seasons. A single highway or clearcut fractures that lineage permanently.
              </p>
              <div className="mt-6 border-t border-black/10 pt-5">
                <blockquote className="text-sm sm:text-base italic text-neutral-800 font-serif">
                  “We do not manage the wild. We grant it the sovereignty and physical expanse to heal itself.”
                </blockquote>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  — WildTerra Conservation Protocol, § 1.4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="border-b border-black/10 bg-white px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end border-b border-black/10 pb-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                FRAMEWORK FOR SURVIVAL
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                The Four Pillars of Action
              </h2>
            </div>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500">
              METHODOLOGY • DEPLOYMENT
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
            {pillars.map((item) => (
              <article
                key={item.num}
                className="flex flex-col justify-between border-t border-black pt-5 transition-all"
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
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                THE NEXT HORIZON
              </p>
              <h2 className="mt-4 text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Explore the terrain we defend every day.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
                Our active sanctuaries span distinct geological biomes. Discover how river systems and old-growth canopies provide the foundation for planetary survival.
              </p>
            </div>
            <Link
              href="/habitats"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-white bg-white px-7 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-neutral-200"
            >
              Explore Habitats <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
