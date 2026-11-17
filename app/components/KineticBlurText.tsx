"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface KineticBlurTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  mode?: "scrub" | "trigger";
  stagger?: number;
  blurAmount?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export default function KineticBlurText({
  text,
  as: Component = "p",
  className = "",
  mode = "trigger",
  stagger = 0.035,
  blurAmount = 14,
  highlightWords = [],
  highlightClass = "font-normal italic font-serif text-neutral-400",
}: KineticBlurTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".kinetic-word");
    if (words.length === 0) return;

    const ctx = gsap.context(() => {
      if (mode === "scrub") {
        gsap.fromTo(
          words,
          {
            filter: `blur(${blurAmount}px)`,
            opacity: 0.08,
            y: 16,
            scale: 0.98,
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 55%",
              scrub: 1,
            },
          }
        );
      } else {
        gsap.fromTo(
          words,
          {
            filter: `blur(${blurAmount}px)`,
            opacity: 0,
            y: 24,
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            stagger,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [mode, blurAmount, stagger]);

  const words = text.split(" ");

  return (
    // @ts-expect-error dynamic component type
    <Component ref={containerRef} className={`${className} inline-block`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord
        );

        return (
          <span
            key={i}
            className={`kinetic-word inline-block mr-[0.28em] will-change-[filter,transform,opacity] ${
              isHighlight ? highlightClass : ""
            }`}
            style={{ filter: `blur(${blurAmount}px)`, opacity: 0.08 }}
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
}

