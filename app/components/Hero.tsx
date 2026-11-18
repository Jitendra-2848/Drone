"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const expertise = [
  "Land Protection",
  "Wildlife Tracking",
  "Habitat Restoration",
  "Local Partnerships",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement | null>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Headline lines glide up with lens de-blur
      tl.fromTo(
        headlineLine1Ref.current,
        { y: 55, opacity: 0, filter: "blur(12px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.25 }
      )
        .fromTo(
          headlineLine2Ref.current,
          { y: 50, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 },
          "-=0.9"
        )
        // 2. Lead paragraph reveal
        .fromTo(
          paragraphRef.current,
          { y: 30, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.0 },
          "-=0.7"
        )
        // 3. Sidebar items reveal
        .fromTo(
          sidebarRef.current,
          { y: 25, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
          "-=0.6"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-white text-black"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1.15px)",
        backgroundSize: "42px 42px",
      }}
    >
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1800px] flex-col justify-between px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="overflow-hidden">
          <h1 className="max-w-full text-[clamp(2.6rem,9.3vw,9.5rem)] font-medium uppercase leading-[0.86] tracking-[-0.085em]">
            <span
              ref={headlineLine1Ref}
              className="hero-anim-line1 block text-black will-change-[transform,opacity,filter]"
              style={{ opacity: 0, transform: "translateY(55px)", filter: "blur(12px)" }}
            >
              Wildlife needs
            </span>
            <span
              ref={headlineLine2Ref}
              className="hero-anim-line2 block text-neutral-400 will-change-[transform,opacity,filter]"
              style={{ opacity: 0, transform: "translateY(50px)", filter: "blur(10px)" }}
            >
              room to live.
            </span>
          </h1>
        </div>

        <div className="relative z-10 grid items-end gap-8 pb-5 pt-16 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <p
            ref={paragraphRef}
            className="hero-anim-p max-w-[900px] text-[clamp(1.4rem,3.4vw,3.2rem)] leading-[1.14] tracking-[-0.055em] text-neutral-500 will-change-[transform,opacity,filter]"
            style={{ opacity: 0, transform: "translateY(30px)", filter: "blur(8px)" }}
          >
            A living planet depends on{" "}
            <span className="text-black font-medium">connected land</span>. When wild places shrink and break apart, everything that lives in them disappears. We protect what remains.
          </p>

          <div
            ref={sidebarRef}
            className="hero-anim-sidebar relative z-10 lg:justify-self-end lg:min-w-[280px] will-change-[transform,opacity,filter]"
            style={{ opacity: 0, transform: "translateY(25px)", filter: "blur(6px)" }}
          >
            <p className="mb-3 border-b border-black/15 pb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Core Mandate
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
            <Link
              href="/habitats"
              className="group mt-5 inline-flex min-h-10 items-center gap-3 rounded-full bg-black px-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-neutral-800 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span>Explore our sanctuaries</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
