import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentPage from "../components/ContentPage";
import PageMotionWrapper from "../components/PageMotionWrapper";
import IsometricBiomeCube from "../components/IsometricBiomeCube";
import KineticBlurText from "../components/KineticBlurText";

export const metadata: Metadata = {
  title: "Habitats & Biomes — Protected Wilderness",
  description:
    "Explore the glacial river basins, old-growth canopies, and subalpine granite passes guarded under the WildTerra conservation framework.",
  alternates: {
    canonical: "/habitats",
  },
  openGraph: {
    title: "Habitats & Biomes | WildTerra",
    description:
      "Explore the glacial river basins, old-growth canopies, and mountain passes guarded under WildTerra.",
    url: "https://wildterra.org/habitats",
    images: [{ url: "/images/3.png", width: 1200, height: 630, alt: "Glacial river habitat sanctuary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habitats & Biomes | WildTerra",
    description:
      "Explore the glacial river basins, old-growth canopies, and mountain passes guarded under WildTerra.",
    images: ["/images/3.png"],
  },
};

const biomes = [
  {
    num: "BIOME 01",
    name: "Riparian Salmon Basins",
    subtitle: "Rivers, Salmon & the Food Chain",
    description:
      "Each autumn, tens of thousands of salmon fight their way upstream from the ocean. When they die in the shallows, their bodies feed the forest. Bears drag them into the trees. Nutrients seep into roots hundreds of years old. It all starts with a healthy river.",
    image: "/images/3.png",
    alt: "Grizzly bear capturing salmon in a rapid glacial river torrent",
    specs: [
      { label: "Elevation", value: "180m – 720m" },
      { label: "Water Purity", value: "Class 1 Glacial" },
      { label: "Key Dynamic", value: "Nutrient Cascade" },
      { label: "Threat Level", value: "Dam & Runoff Risks" },
    ],
  },
  {
    num: "BIOME 02",
    name: "Subalpine Cataracts & Ridge Fronts",
    subtitle: "High Country & Mountain Streams",
    description:
      "High above the valley floor, cold water pours off sheer rock faces into deep ravines. The mist keeps these places perpetually cool and damp. The steep terrain keeps people out. That is exactly why bears, wolves, and mountain lions use them as refuge.",
    image: "/images/2.png",
    alt: "Brown bear surveying water flow from a boulder in a rushing mountain waterfall",
    specs: [
      { label: "Elevation", value: "850m – 2,100m" },
      { label: "Terrain", value: "Sheared Plutonic Rock" },
      { label: "Key Dynamic", value: "Thermal Refuge" },
      { label: "Threat Level", value: "Acoustic Disturbance" },
    ],
  },
];

const habitatLayers = [
  {
    layer: "01 / THE OLD-GROWTH CANOPY",
    role: "Temperature Control & Carbon Storage",
    text: "The tallest trees in the forest act like a roof. They keep the ground cool in summer, trap moisture during dry spells, and store enormous amounts of carbon. Some of these trees are over 500 years old. When they fall to logging, everything beneath them is exposed.",
  },
  {
    layer: "02 / THE GRAVEL SHORELINES",
    role: "Where Salmon Come to Breed",
    text: "Salmon need specific gravel beds in cold, clear water to lay their eggs. If a river is dammed, dredged, or silted over with runoff from cleared land nearby, an entire generation of fish never hatches.",
  },
  {
    layer: "03 / THE PERIPHERAL CORRIDORS",
    role: "Movement Corridors",
    text: "Animals need to move. They follow food, they find mates, they respond to seasons. If a road cuts through the forest, it splits the population in two. We protect wide forested strips that let wildlife move safely between mountain ranges and coastlines.",
  },
];

export default function HabitatsPage() {
  return (
    <ContentPage>
      <PageMotionWrapper>
        {/* Hero Header with Kinetic Blur Text */}
        <section className="border-b border-black/10 px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
           

            <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
              <div>
                <h1 className="max-w-4xl text-[clamp(2.4rem,8vw,6.5rem)] font-medium uppercase leading-[0.92] tracking-[-0.06em]">
                  Every terrain
                  <br />
                  <span className="font-normal italic lowercase font-serif text-neutral-400">
                    holds a living architecture.
                  </span>
                </h1>
              </div>
              <div className="max-w-md lg:border-l lg:border-black/10 lg:pl-8">
                <KineticBlurText
                  text="A wild place is a living system. Rivers, soil, trees, and animals all depend on each other in ways we are only starting to understand. Protect the land and everything else has a chance."
                  mode="trigger"
                  className="text-xs sm:text-sm leading-relaxed text-neutral-600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3D Interactive Planetary Sanctuary Survey */}
        <section className="border-b border-white/10 bg-black">
          <IsometricBiomeCube />
        </section>

        {/* Featured Biomes Section with ScrollTrigger Reveals */}
        <section className="border-b border-black/10 px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="space-y-20 sm:space-y-28">
              {biomes.map((biome, idx) => (
                <article
                  key={biome.num}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                    idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="reveal-scale relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden border border-black/10 bg-neutral-100 will-change-[transform,opacity,filter]">
                      <Image
                        src={biome.image}
                        alt={biome.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        decoding="async"
                        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className={`reveal-item flex flex-col justify-center will-change-[transform,opacity,filter] ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400">
                      {biome.num}
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-black">
                      {biome.name}
                    </h2>
                    <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {biome.subtitle}
                    </p>
                    <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-neutral-700">
                      {biome.description}
                    </p>

                    <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 border-t border-black/10 pt-5 sm:pt-6">
                      {biome.specs.map((spec) => (
                        <div key={spec.label} className="border-l border-black/15 pl-3 sm:pl-4">
                          <p className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
                            {spec.label}
                          </p>
                          <p className="mt-0.5 sm:mt-1 text-xs font-medium text-black">
                            {spec.value}
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

        {/* Habitat Structural Layers with Staggered ScrollTrigger */}
        <section className="border-b border-black/10 bg-neutral-50 px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="reveal-item border-b border-black/10 pb-6 sm:pb-8 will-change-[transform,opacity,filter]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                HOW HABITATS WORK
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
                Three Things Every Habitat Needs
              </h2>
            </div>

            <div className="reveal-group mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
              {habitatLayers.map((layer) => (
                <div
                  key={layer.layer}
                  className="reveal-child flex flex-col justify-between border-t border-black pt-5 sm:pt-6 will-change-[transform,opacity,filter] hover:-translate-y-1 transition-transform duration-200"
                >
                  <div>
                    <p className="font-mono text-xs text-neutral-400">
                      {layer.layer}
                    </p>
                    <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-medium tracking-tight">
                      {layer.role}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs leading-relaxed text-neutral-600">
                      {layer.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA to Wildlife */}
        <section className="bg-black px-4 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
          <div className="reveal-item mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end will-change-[transform,opacity,filter]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                THE INHABITANTS
              </p>
              <h2 className="mt-3 sm:mt-4 max-w-3xl text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Without animals, wild land is just scenery.
              </h2>
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
                The animals that live here are what make these places worth protecting. See who they are and how we keep track of them.
              </p>
            </div>
            <Link
              href="/wildlife"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-white bg-white px-7 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-neutral-200 active:scale-95"
            >
              <span>Meet the Wildlife</span>
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
