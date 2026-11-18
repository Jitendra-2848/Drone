'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import GoalPage from './y/goal-page'
import Animal from './components/Animal'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './components/Header'

gsap.registerPlugin(ScrollTrigger)

const portals = [
    {
        num: "01",
        label: "OUR MISSION",
        title: "Why We Exist",
        desc: "Animals need connected land to survive. We buy, protect, and defend the corridors that let wildlife move freely between wild areas.",
        href: "/mission",
        cta: "Read Our Mission",
    },
    {
        num: "02",
        label: "HABITATS",
        title: "Where They Live",
        desc: "From glacier-fed rivers to ancient mountain ridges — the places we guard and the reasons each one matters.",
        href: "/habitats",
        cta: "Explore Habitats",
    },
    {
        num: "03",
        label: "WILDLIFE",
        title: "Who We Protect",
        desc: "Elk, deer, grizzlies — and the smaller creatures nobody notices. We track them, study them, and stay out of their way.",
        href: "/wildlife",
        cta: "Meet the Animals",
    },
];

const Page = () => {
    const pageRef = useRef<HTMLDivElement | null>(null)
    const imageSection = useRef<HTMLElement | null>(null)
    const wildlifeText = useRef<HTMLParagraphElement | null>(null)
    const pinRef = useRef<HTMLElement | null>(null)
    const paragraph =
        "When we lose wild land, we lose everything that depends on it — clean rivers, clean air, and creatures that have lived here far longer than we have. This is about keeping what remains."

    useEffect(() => {
        const page = pageRef.current
        const imageSectionElement = imageSection.current
        const wildlifeTextElement = wildlifeText.current
        const pinElement = pinRef.current

        if (!page || !imageSectionElement || !wildlifeTextElement || !pinElement) {
            throw new Error('Page animation elements are missing')
        }

        const lenis = new Lenis({
            autoRaf: true,
        })

        lenis.on('scroll', ScrollTrigger.update)

        const ctx = gsap.context(() => {
            // Image Blur To Clear Animation
            gsap.fromTo(
                '.reveal-img',
                {
                    filter: 'blur(18px)',
                    opacity: 0.1,
                    scale: 1.06,
                    y: 40,
                },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: imageSectionElement,
                        start: 'top 85%',
                        end: 'top 20%',
                        scrub: 1,
                    }
                }
            )

            // Cinematic Word By Word Blur & Opacity scrub
            gsap.fromTo(
                '.word',
                {
                    opacity: 0.05,
                    filter: 'blur(12px)',
                    y: 18,
                    scale: 0.98,
                },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    scale: 1,
                    stagger: 0.16,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: wildlifeTextElement,
                        start: 'top 80%',
                        end: 'bottom 55%',
                        scrub: 1,
                    }
                }
            )

            ScrollTrigger.create({
                trigger: pinElement,
                start: 'top top',
                end: () => `+=${window.innerHeight}`,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            })
        }, page)

        ScrollTrigger.refresh()

        return () => {
            ctx.revert()
            lenis.destroy()
        }

    }, [])

    return (
        <div ref={pageRef} className="w-full overflow-x-clip bg-white text-black">
            <Header /> 
            <Hero />

            {/* Image Section */}
            <section
                ref={imageSection}
                id="explore"
                className="w-full min-h-screen flex flex-col items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4 py-8"
            >
                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="relative w-full sm:w-1/2 h-[38vh] sm:h-[50vh] overflow-hidden bg-neutral-100">
                        <Image
                            src="/images/1.png"
                            alt="Wildlife in sanctuary"
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            loading="lazy"
                            decoding="async"
                            className="reveal-img object-cover will-change-[filter,transform,opacity]"
                        />
                    </div>

                    <div className="relative w-full sm:w-1/2 h-[38vh] sm:h-[50vh] overflow-hidden bg-neutral-100">
                        <Image
                            src="/images/2.png"
                            alt="Forest river sanctuary"
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            loading="lazy"
                            decoding="async"
                            className="reveal-img object-cover will-change-[filter,transform,opacity]"
                        />
                    </div>
                </div>

                <div className="relative w-full h-[55vh] sm:h-[80vh] overflow-hidden bg-neutral-100">
                    <Image
                        src="/images/3.png"
                        alt="Unbroken nature"
                        fill
                        sizes="100vw"
                        loading="lazy"
                        decoding="async"
                        className="reveal-img object-cover will-change-[filter,transform,opacity]"
                    />
                </div>
            </section>

            {/* Wildlife Text Section with Cinematic Blur-to-Sharp Scrub */}
            <section id="mission" className="min-h-[70vh] sm:min-h-screen w-full flex items-center justify-center px-6 md:px-24 py-24 sm:py-32">
                <p
                    ref={wildlifeText}
                    className="max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.25] text-center tracking-tight"
                >
                    {paragraph.split(' ').map((word, index) => (
                        <span
                            key={index}
                            className="word inline-block mr-[0.25em] will-change-[filter,transform,opacity]"
                            style={{ opacity: 0.08, filter: 'blur(12px)' }}
                        >
                            {word}
                        </span>
                    ))}
                </p>
            </section>

            {/* Final Section */}
            <section
                ref={pinRef}
                id="future"
                className="protect-bar relative z-0 h-screen flex items-center justify-center bg-black text-white px-4 text-center"
            >
                <div className="max-w-3xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-neutral-400">
                        A SIMPLE TRUTH
                    </p>
                    <h1 className="mt-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium uppercase tracking-[-0.05em]">
                        Protect Nature.
                    </h1>
                </div>
            </section>

            <GoalPage />

            {/* Animal Silhouette Spiral Section */}
            <div id="wildlife">
                <Animal />
            </div>

            {/* Combined Pillars Gateway with Subtle Magnetic Border Lift */}
            <section className="border-t border-black/10 bg-neutral-50 px-4 py-20 sm:px-8 sm:py-28 lg:px-16">
                <div className="mx-auto max-w-[1400px]">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end border-b border-black/10 pb-8">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
                                WHAT WE DO
                            </p>
                            <h2 className="mt-2 text-3xl font-medium uppercase tracking-tight sm:text-5xl lg:text-6xl">
                                Go Deeper
                            </h2>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
                        {portals.map((portal) => (
                            <Link
                                key={portal.num}
                                href={portal.href}
                                className="group flex flex-col justify-between border border-black/10 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-black hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs text-neutral-400">
                                            {portal.num}
                                        </span>
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-black">
                                            {portal.label}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 text-2xl font-medium tracking-tight text-black group-hover:underline">
                                        {portal.title}
                                    </h3>
                                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
                                        {portal.desc}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-black">
                                    <span>{portal.cta}</span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
                                        ↗
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Page
