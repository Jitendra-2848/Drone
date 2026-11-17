"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const species = [
    {
        name: "bear",
        path: "M8 32 10 20 17 14 21 9 27 9 31 13 40 14 48 19 52 27 50 35 45 39 42 46 37 46 36 38 29 39 27 47 22 47 21 39 15 38 13 45 8 45 9 37 5 35 5 31z",
    },
    {
        name: "dog",
        path: "M10 28 15 20 26 18 34 21 40 17 43 20 41 25 48 26 54 23 57 25 54 30 47 32 43 30 42 40 38 40 36 31 26 32 24 41 20 41 20 31 14 34 11 39 7 37 10 32 6 30z",
    },
    {
        name: "cat",
        path: "M8 24 15 18 17 9 24 16 32 15 39 9 40 18 47 23 48 31 44 36 42 45 38 45 37 35 27 36 25 45 21 45 20 35 14 33 10 29z M46 25c7-1 7-10 4-11-3-1-2 5-7 6",
    },
    {
        name: "rabbit",
        path: "M20 31 15 11 18 8 26 28 29 9 33 8 34 30 41 31 47 37 47 43 40 46 31 43 24 47 17 44 16 38z",
    },
    {
        name: "elephant",
        path: "M6 22 13 17 31 16 39 20 44 17 51 18 55 23 54 31 49 34 48 45 43 45 42 33 37 34 36 45 31 45 30 34 19 34 18 45 13 45 12 33 8 31z M46 24c-1 5 0 8 3 8 3 0 3-4 3-7l-3-4",
    },
    {
        name: "fox",
        path: "M7 29 3 20 13 23 20 17 31 18 37 22 43 17 52 16 49 24 56 27 52 34 45 35 41 44 37 44 36 35 26 35 24 44 20 44 19 34 13 35z",
    },
    {
        name: "deer",
        path: "M11 25 17 20 30 20 37 23 43 21 49 23 51 27 48 30 45 28 44 39 40 39 39 30 28 30 26 40 22 40 21 30 15 31 12 37 8 36 10 30 6 28z M44 22 42 15 38 12 39 9 43 13 44 8 47 7 46 13 51 10 53 12 48 16 49 21 46 23",
    },
    {
        name: "horse",
        path: "M8 25 17 18 30 19 37 22 43 18 48 20 45 26 50 29 46 34 42 32 41 43 37 43 35 33 25 33 23 43 19 43 18 32 13 33 10 40 6 39 9 32 5 29z M39 21 42 14 48 12 50 16 47 20",
    },
    {
        name: "lion",
        path: "M28 10 36 12 42 17 46 24 46 32 42 39 35 43 27 43 20 39 16 32 16 24 20 17z M25 19 33 18 40 22 43 28 41 34 35 38 27 38 21 34 19 28 21 23z M42 26 51 24 55 27 53 31 46 32 45 40 41 40 39 33",
    },
    {
        name: "pig",
        path: "M8 25 14 20 36 19 43 22 49 21 53 25 52 30 48 32 46 41 42 41 41 33 25 34 23 42 19 42 18 33 12 32 8 29z M47 25 53 24 56 27 54 30 48 30z",
    },
    {
        name: "cow",
        path: "M9 23 16 19 39 19 45 23 52 23 55 27 51 31 47 30 46 41 42 41 41 32 27 32 25 41 21 41 20 32 14 32 12 40 8 40 9 30 5 28z M16 20 12 15 15 14 20 18 43 19 48 14 51 15 47 21",
    },
    {
        name: "sheep",
        path: "M14 25 12 21 16 17 21 18 24 14 29 16 33 13 38 16 43 15 46 20 50 21 50 27 47 30 45 40 41 40 40 32 28 32 26 41 22 41 21 32 15 32 13 39 9 39 10 30 7 27z",
    },
    {
        name: "wolf",
        path: "M8 27 5 17 15 22 22 16 35 18 42 21 48 18 55 20 51 26 56 30 50 34 44 33 41 43 37 43 36 34 25 34 23 43 19 43 18 33 13 34 10 40 6 39 9 32 5 30z",
    },
    {
        name: "rhinoceros",
        path: "M6 25 14 19 34 19 42 22 48 21 51 18 55 16 53 22 58 26 54 31 49 32 47 42 43 42 42 33 28 34 26 43 22 43 21 34 15 33 13 41 9 41 10 32 6 30z",
    },
    {
        name: "giraffe",
        path: "M12 25 18 21 29 22 32 18 33 7 36 5 39 7 38 19 42 22 47 22 51 25 49 30 45 31 43 43 39 43 38 30 28 29 26 42 22 42 21 30 15 31 12 38 8 37 10 30 6 28z M34 6 33 3 35 2 37 5 40 3 42 5 39 8",
    },
    {
        name: "zebra",
        path: "M8 25 15 19 31 19 38 22 43 20 49 22 53 26 50 30 46 31 44 42 40 42 39 32 29 32 27 42 23 42 22 32 16 32 14 40 10 40 11 31 6 29z M38 22 43 15 49 16 52 20 48 20 46 24",
    },
    {
        name: "monkey",
        path: "M16 21 22 17 30 19 35 24 34 30 30 34 35 40 31 44 25 37 20 45 16 43 21 34 16 30 14 25z M34 23c7-7 16-4 14 3-1 4-7 4-7 1 0-2 4-2 4 0",
    },
    {
        name: "kangaroo",
        path: "M22 29 19 15 22 12 28 25 31 12 34 12 35 28 43 31 47 37 46 42 41 44 34 40 28 43 21 40 16 35 10 36 4 34 5 31 15 32z M38 34 45 35 49 42 46 44 42 40 36 39",
    },
];

const TOTAL_ANIMALS = 100;
const STEP = 48;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const animals = Array.from({ length: TOTAL_ANIMALS }, (_, index) => {
    const radius = STEP * Math.sqrt(index);
    const angle = index * GOLDEN_ANGLE;

    return {
        index,
        species: species[index % species.length],
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        flip: index % 2 ? -1 : 1,
        baseScale: 0.78 + (index % 3) * 0.06,
    };
});

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const easeOutBack = (value: number) =>
    1 +
    2.70158 * (value - 1) ** 3 +
    1.70158 * (value - 1) ** 2;

const captions = [
    { at: 0, text: "It starts with one." },
    { at: 0.1, text: "Then there are ten. The spiral begins." },
    {
        at: 0.45,
        text: "The crowd spreads — every birth is a black shape appearing beside the others.",
    },
    { at: 0.8, text: "By the end, the white field is full." },
];

const pageStyles = `
  .population-page, .population-page * { box-sizing: border-box; }
  .population-page {
    min-height: 100vh;
    background: #fff;
    color: #080808;
    font-family: Arial, Helvetica, sans-serif;
  }
  .population-runway { position: relative; height: 700vh; }
  .population-stage {
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    min-height: 420px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #fff;
  }
  .population-scene {
    display: block;
    width: min(92vw, 900px);
    height: 66vh;
    overflow: visible;
    flex: none;
  }
  .population-hud {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 7px;
    pointer-events: none;
  }
  .population-top-left { top: clamp(24px, 5vh, 52px); left: clamp(24px, 5vw, 64px); }
  .population-top-right {
    top: clamp(22px, 4vh, 44px);
    right: clamp(24px, 5vw, 64px);
    align-items: flex-end;
    gap: 1px;
  }
  .population-title, .population-subtitle, .population-label,
  .population-scroll-hint {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: .14em;
  }
  .population-title { font-size: 11px; font-weight: 700; }
  .population-subtitle { color: #777; font-size: 10px; letter-spacing: .08em; }
  .population-count {
    min-width: 2ch;
    font-size: clamp(34px, 5vw, 56px);
    font-variant-numeric: tabular-nums;
    font-weight: 400;
    letter-spacing: -.07em;
    line-height: 1;
    text-align: right;
  }
  .population-label { color: #777; font-size: 9px; }
  .population-caption {
    position: absolute;
    z-index: 2;
    right: 24px;
    bottom: clamp(72px, 11vh, 104px);
    left: 24px;
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(16px, 2vw, 22px);
    font-style: italic;
    line-height: 1.35;
    text-align: center;
    pointer-events: none;
  }
  .population-scroll-hint {
    position: absolute;
    bottom: 43px;
    left: 50%;
    color: #555;
    font-size: 9px;
    transform: translateX(-50%);
    pointer-events: none;
    transition: opacity .2s linear;
  }
  .population-progress-track {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 3px;
    background: #ededed;
  }
  .population-progress {
    width: 0;
    height: 100%;
    background: #080808;
  }
  @media (max-width: 600px) {
    .population-scene { width: 96vw; height: 62vh; }
    .population-title { font-size: 9px; }
    .population-subtitle { font-size: 9px; }
    .population-caption { right: 36px; left: 36px; bottom: 88px; }
    .population-scroll-hint { bottom: 42px; }
  }
`;

export default function Animal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const runwayRef = useRef<HTMLElement>(null);
    const animalRefs = useRef<(SVGGElement | null)[]>([]);
    const counterRef = useRef<HTMLSpanElement>(null);
    const captionRef = useRef<HTMLParagraphElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const scrollHintRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.to(".box", {
                x: 400,
                rotate: 720,
                ease: "bounce.out",
                duration: 1,
            });
        }, containerRef);

        return () => context.revert();
    }, []);

    useEffect(() => {
        const runway = runwayRef.current;
        if (!runway) return;

        let targetProgress = 0;
        let smooth = 0;
        let frame = 0;

        const readProgress = () => {
            const runwayTop = runway.getBoundingClientRect().top + window.scrollY;
            const scrollableDistance = runway.offsetHeight - window.innerHeight;
            targetProgress = clamp01(
                scrollableDistance > 0 ? (window.scrollY - runwayTop) / scrollableDistance : 0,
            );
        };

        const render = () => {
            const head = smooth * (TOTAL_ANIMALS + 8);
            let population = 0;

            animals.forEach((animal) => {
                const element = animalRefs.current[animal.index];
                if (!element) return;

                const t =
                    animal.index === 0
                        ? 1
                        : clamp01((head - animal.index) / 6);
                const scale = animal.baseScale * easeOutBack(t);
                const y = animal.y - (1 - t) * 20;
                const signedScale = scale * animal.flip;

                element.setAttribute(
                    "transform",
                    `translate(${animal.x.toFixed(2)} ${y.toFixed(2)}) scale(${signedScale.toFixed(4)} ${scale.toFixed(4)}) translate(-30 -25)`,
                );
                element.style.opacity = String(Math.min(1, t * 2));

                if (t > 0.5) population += 1;
            });

            if (counterRef.current) counterRef.current.textContent = String(population);
            if (progressRef.current) {
                progressRef.current.style.width = `${(smooth * 100).toFixed(2)}%`;
                if(progressRef.current.style.width == '100.00%'){   
                    progressRef.current.style.visibility = 'hidden';
                }
            }
            if (scrollHintRef.current) {
                scrollHintRef.current.style.opacity = smooth > 0.01 ? "0" : "1";
            }

            const activeCaption = [...captions]
                .reverse()
                .find((caption) => smooth >= caption.at);
            if (captionRef.current && activeCaption) {
                captionRef.current.textContent = activeCaption.text;
            }
        };

        const animate = () => {
            smooth += (targetProgress - smooth) * 0.09;
            if (Math.abs(targetProgress - smooth) < 0.0001) {
                smooth = targetProgress;
            }
            render();
            frame = window.requestAnimationFrame(animate);
        };

        readProgress();
        render();
        window.addEventListener("scroll", readProgress, { passive: true });
        window.addEventListener("resize", readProgress);
        frame = window.requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", readProgress);
            window.removeEventListener("resize", readProgress);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <>
            <main className="population-page">
                <style>{pageStyles}</style>
                <section
                    className="population-runway"
                    ref={runwayRef}
                    aria-label="Population growth visualization"
                >
                    <div className="population-stage">

                        <div className="population-hud population-top-right" aria-live="polite">
                        </div>

                        <svg
                            className="population-scene"
                            viewBox="-510 -510 1020 1020"
                            role="img"
                            aria-label="Black silhouettes of animals multiplying in a spiral"
                        >
                            {animals.map((animal) => (
                                <g
                                    key={animal.index}
                                    aria-label={animal.species.name}
                                    ref={(element) => {
                                        animalRefs.current[animal.index] = element;
                                    }}
                                    opacity={animal.index === 0 ? 1 : 0}
                                >
                                    <path d={animal.species.path} fill="#000" />
                                </g>
                            ))}
                        </svg>

                        <p className="population-caption" ref={captionRef}>
                            It starts with one.
                        </p>
                        <p className="population-scroll-hint" ref={scrollHintRef}>
                            Scroll ↓
                        </p>
                        <div className="population-progress-track" aria-hidden="true">
                            <div className={`population-progress `} ref={progressRef} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
