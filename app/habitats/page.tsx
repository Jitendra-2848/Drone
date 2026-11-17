import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentPage from "../components/ContentPage";
import IsometricBiomeCube from "../components/IsometricBiomeCube";
import KineticBlurText from "../components/KineticBlurText";

export const metadata: Metadata = {
  title: "Habitats & Biomes | WildTerra",
  description:
    "Explore the geological biomes, riparian corridors, and ancient forests guarded under the WildTerra conservation framework.",
};

const biomes = [
  {
    num: "BIOME 01",
    name: "Riparian Salmon Basins",
    subtitle: "Hydrological Arteries & Seasonal Food Webs",
    description:
      "Glacial rivers and freshwater tributaries act as the planetary circulatory system. In late summer, hundreds of thousands of anadromous salmon ascend these currents, infusing ocean-derived nitrogen and phosphorous deep into old-growth root systems.",
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
    subtitle: "Granite Precipices & Cold-Water Sanctuaries",
    description:
      "Where high mountain runoffs crash over sheared granite escarpments, microclimates of constant mist and oxygenation form. These steep ravines provide impassable natural barriers against human incursions, creating secluded staging grounds for apex predators.",
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
    role: "Atmospheric & Thermal Shield",
    text: "Ancient Sitka spruce and redcedars exceeding 500 years buffer ground-level temperatures, retain moisture during arid spells, and sequester up to 800 metric tons of carbon per hectare.",
  },
  {
    layer: "02 / THE GRAVEL SHORELINES",
    role: "Aquatic Spawning Beds",
    text: "Unchannelized river bends with undisturbed alluvial gravel provide exact gravel sizes and cold upwellings required for millions of salmon eggs to overwinter safely.",
  },
  {
    layer: "03 / THE PERIPHERAL CORRIDORS",
    role: "Trans-Continental Bridges",
    text: "Continuous forested strips minimum 2.5 kilometers wide allowing genetic exchange between interior mountain ranges and coastal basins without crossing roads.",
  },
];

export default function HabitatsPage() {
  return (
    <ContentPage>
      {/* Hero Header with Kinetic Blur Text */}
      <section className="border-b border-black/10 px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              WILDTERRA / SANCTUARIES & BIOMES
            </p>
          </div>

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
                text="A habitat is not an empty stage. It is an intricate web of hydrology, mineral soil, ancient canopy microclimates, and migration corridors. Without the land intact, species cannot persist."
                mode="trigger"
                className="text-xs sm:text-sm leading-relaxed text-neutral-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Isometric Biome Optical Illusion */}
      <section className="border-b border-black/10 bg-white">
        <IsometricBiomeCube />
      </section>

      {/* Featured Biomes Section */}
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
                  <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden border border-black/10 bg-neutral-100">
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

                <div className={`flex flex-col justify-center ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
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

      {/* Habitat Structural Layers */}
      <section className="border-b border-black/10 bg-neutral-50 px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-b border-black/10 pb-6 sm:pb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              ECOLOGICAL ANATOMY
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
              Three Crucial Stratas of Protection
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
            {habitatLayers.map((layer) => (
              <div
                key={layer.layer}
                className="flex flex-col justify-between border-t border-black pt-5 sm:pt-6"
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
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
              THE INHABITANTS
            </p>
            <h2 className="mt-3 sm:mt-4 max-w-3xl text-3xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              A habitat without its sentinels is an empty cathedral.
            </h2>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
              Explore the keystone fauna that roam these watersheds, regulate prey populations, and maintain the ancient cycle of these lands.
            </p>
          </div>
          <Link
            href="/wildlife"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-white bg-white px-7 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-neutral-200"
          >
            Meet the Wildlife <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </ContentPage>
  );
}
