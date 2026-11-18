import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentPage from "../components/ContentPage";
import PageMotionWrapper from "../components/PageMotionWrapper";
import KineticBlurText from "../components/KineticBlurText";

export const metadata: Metadata = {
  title: "Wildlife & Keystone Species",
  description:
    "Discover the keystone fauna—from Rocky Mountain elk to interior grizzly bears—tracked, monitored, and protected across WildTerra sanctuaries.",
  keywords: [
    "keystone wildlife",
    "grizzly bear conservation",
    "Rocky Mountain elk",
    "black-tailed deer",
    "GPS telemetry",
    "fauna census",
    "predator protection",
  ],
  alternates: {
    canonical: "/wildlife",
  },
  openGraph: {
    title: "Wildlife & Keystone Species | WildTerra",
    description:
      "Discover the keystone species tracked, monitored, and protected across WildTerra sanctuaries.",
    url: "https://wildterra.org/wildlife",
    images: [{ url: "/images/6.png", width: 1200, height: 630, alt: "Grizzly bear protected in WildTerra sanctuary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildlife & Keystone Species | WildTerra",
    description:
      "Discover the keystone species tracked, monitored, and protected across WildTerra sanctuaries.",
    images: ["/images/6.png"],
  },
};

const speciesDossiers = [
  {
    commonName: "Rocky Mountain Elk",
    scientificName: "Cervus canadensis nelsoni",
    status: "Keystone Herbivore",
    statusBadge: "Stabilized",
    image: "/images/1.png",
    alt: "Close-up portrait of an elk head alertly surveying the forest from behind a ridge",
    tagline: "The Sentinel of the Understory",
    narrative:
      "Constantly scanning acoustic reverberations across subalpine valleys, elk act as the primary warning network of the temperate forest. Their selective foraging directs riverbank shrub density and stabilizes alluvial soil channels.",
    stats: [
      { label: "Home Range", value: "65 – 180 km²" },
      { label: "Dietary Role", value: "Primary Grazer" },
      { label: "Acoustic Band", value: "1.2 kHz bugle" },
      { label: "Census Trend", value: "+4.2% YoY" },
    ],
  },
  {
    commonName: "Coastal Black-Tailed Deer",
    scientificName: "Odocoileus hemionus columbianus",
    status: "Canopy-Edge Resident",
    statusBadge: "Monitored",
    image: "/images/5.png",
    alt: "Tender close-up portrait of two deer resting together with heads nuzzled",
    tagline: "The Pulse of the Forest Floor",
    narrative:
      "Forming deep matriarchal bonds along dense forest margins, black-tailed deer maintain the delicate balance of herbaceous forest clearings and seed distribution across old-growth groves without disrupting seedling regeneration.",
    stats: [
      { label: "Home Range", value: "8 – 24 km²" },
      { label: "Social Model", value: "Matriarchal Bands" },
      { label: "Winter Refuge", value: "Low-Snow Conifer Boughs" },
      { label: "Census Trend", value: "Stable" },
    ],
  },
  {
    commonName: "Interior Grizzly Bear",
    scientificName: "Ursus arctos horribilis",
    status: "Apex Trophic Regulator",
    statusBadge: "Vulnerable",
    image: "/images/6.png",
    alt: "Dramatic close-up portrait of a dark grizzly bear in deep shadow with detailed fur texture",
    tagline: "The Architect of the Watershed",
    narrative:
      "As apex consumers, grizzlies disperse salmon carcasses deep into the forest interior, delivering marine nitrogen to trees hundreds of feet tall. Their seasonal foraging habits aerate mountain soils and regulate ungulate populations.",
    stats: [
      { label: "Home Range", value: "450 – 1,400 km²" },
      { label: "Caloric Need", value: "20,000 kcal/day (Autumn)" },
      { label: "Trophic Impact", value: "Nitrogen Vector" },
      { label: "Census Trend", value: "Recovering" },
    ],
  },
];

const censusData = [
  { metric: "142", label: "Radio-Collared Sentinels", detail: "Active real-time GPS telemetry tracks" },
  { metric: "0.0", label: "Conflict Rate in Core", detail: "Zero negative human encounters in 24 months" },
  { metric: "86.4%", label: "Calf & Cub Fledging", detail: "Year-one generational survival across sanctuaries" },
  { metric: "24/7", label: "Acoustic Bio-Listening", detail: "Autonomous forest microphones analyzing calls" },
];

export default function WildlifePage() {
  return (
    <ContentPage>
      <PageMotionWrapper>
        {/* Hero Section */}
        <section className="border-b border-black/10 px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            

            <h1 className="mt-6 max-w-5xl text-[clamp(2.4rem,8vw,6.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.06em]">
              Wild lives.
              <br />
              <span className="font-normal italic lowercase font-serif text-neutral-400">
                worth protecting.
              </span>
            </h1>

            <div className="mt-10 grid gap-6 border-t border-black/10 pt-8 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pt-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                  The Living Barometer
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600 max-w-xs">
                  An ecosystem cannot lie. When keystone fauna disappear, the collapse of clean water, forest density, and carbon balance is never far behind.
                </p>
              </div>
              <KineticBlurText
                text="Every animal tracked in our sanctuaries is both an inhabitant and an architect. We document their migrations, defend their birth grounds, and respect their sovereignty without interference."
                mode="trigger"
                className="text-xl sm:text-2xl lg:text-3xl font-normal leading-snug tracking-tight text-neutral-900"
              />
            </div>
          </div>
        </section>

        {/* Species Profiles with ScrollTrigger Reveals */}
        <section className="border-b border-black/10 px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="space-y-24 sm:space-y-32">
              {speciesDossiers.map((species, i) => (
                <article
                  key={species.commonName}
                  className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14"
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="reveal-scale relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden border border-black/10 bg-neutral-100 will-change-[transform,opacity,filter]">
                      <Image
                        src={species.image}
                        alt={species.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        decoding="async"
                        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className={`reveal-item flex flex-col justify-center will-change-[transform,opacity,filter] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4">
                      <span className="font-mono text-xs text-neutral-400">
                        PROFILE 0{i + 1}
                      </span>
                      <span className="rounded-full border border-black/20 bg-neutral-100 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black">
                        {species.statusBadge}
                      </span>
                    </div>

                    <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-black">
                      {species.commonName}
                    </h2>
                    <p className="mt-0.5 sm:mt-1 font-serif text-xs sm:text-sm italic text-neutral-500">
                      {species.scientificName}
                    </p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                      {species.tagline}
                    </p>

                    <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed text-neutral-700">
                      {species.narrative}
                    </p>

                    <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 border-t border-black/10 pt-5 sm:pt-6">
                      {species.stats.map((s) => (
                        <div key={s.label} className="border-l border-black/15 pl-3 sm:pl-4">
                          <p className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
                            {s.label}
                          </p>
                          <p className="mt-0.5 sm:mt-1 text-xs font-medium text-black">
                            {s.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Field Census Data Section with Staggered Reveals */}
        <section className="border-b border-black/10 bg-neutral-50 px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-item flex flex-col justify-between gap-3 md:flex-row md:items-end border-b border-black/10 pb-6 sm:pb-8 will-change-[transform,opacity,filter]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  FIELD TELEMETRY RADAR
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
                  Annual Census & Sentinel Monitoring
                </h2>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>TELEMETRY ONLINE • 24/7 SENSING</span>
              </div>
            </div>

            <div className="reveal-group mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {censusData.map((d, idx) => (
                <div
                  key={d.label}
                  className={`reveal-child flex flex-col justify-between py-2 sm:py-4 will-change-[transform,opacity,filter] ${
                    idx !== 0 ? "lg:border-l lg:border-neutral-200 lg:pl-8" : ""
                  }`}
                >
                  <div>
                    <span className="text-3xl sm:text-5xl font-light tracking-tight text-black">
                      {d.metric}
                    </span>
                    <h3 className="mt-2 sm:mt-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-black">
                      {d.label}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark Closing Call to Action */}
        <section className="bg-black px-4 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
          <div className="reveal-item mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end will-change-[transform,opacity,filter]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                THE CONSERVATION PLEDGE
              </p>
              <h2 className="mt-3 sm:mt-4 max-w-3xl text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Keep the ground beneath their feet intact.
              </h2>
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
                Every acre we secure as contiguous wild space directly guarantees that these lineages endure undisturbed for centuries to come.
              </p>
            </div>
            <Link
              href="/mission"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-white bg-white px-7 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-neutral-200 active:scale-95"
            >
              <span>Review our Mission</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </section>
      </PageMotionWrapper>
    </ContentPage>
  );
}
