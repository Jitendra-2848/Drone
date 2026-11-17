'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
    { src: '/images/1.png', alt: 'Wildlife in its natural habitat' },
    { src: '/images/2.png', alt: 'Forest landscape and river' },
    { src: '/images/3.png', alt: 'Grizzly salmon run' },
    { src: '/images/4.png', alt: 'Wildlife conservation sanctuary' },
    { src: '/images/5.png', alt: 'Protected natural habitat' },
]

// Single source of truth for the hidden state, so the SSR inline styles and
// the animation's "from" values can never drift apart.
const HIDDEN = { filter: 'blur(10px)', opacity: 0.7, scale: 0.97 }

export default function GoalPage() {
    const sectionRef = useRef<HTMLElement | null>(null)
    const viewportRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        const viewport = viewportRef.current
        const track = trackRef.current

        if (!section || !viewport || !track) return

        const images = Array.from(track.querySelectorAll<HTMLImageElement>('.goal-image'))
        const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth)

        const ctx = gsap.context(() => {
            const scrollTween = gsap.to(track, {
                x: () => -getDistance(),
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${getDistance()}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            })

            images.forEach((image) => {
                gsap.fromTo(
                    image,
                    { filter: HIDDEN.filter, opacity: HIDDEN.opacity, scale: HIDDEN.scale },
                    {
                        filter: 'blur(0px)',
                        opacity: 1,
                        scale: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: image,
                            containerAnimation: scrollTween,
                            start: 'left 85%',
                            end: 'left 55%',
                            scrub: true,
                        },
                    },
                )
            })
        }, section)

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <>
            <section
                ref={sectionRef}
                className="relative z-10 flex min-h-screen w-full flex-col justify-center overflow-hidden bg-white py-12 md:py-16"
            >
                <div className="mb-8 px-6 text-center md:mb-12 md:px-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
                        CONTINUOUS EXPEDITIONS
                    </p>
                    <h2 className="mt-2 text-3xl font-medium uppercase tracking-tight sm:text-5xl lg:text-7xl">
                        Our Goal to Protect
                    </h2>
                </div>

                <div ref={viewportRef} className="w-full overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex w-max gap-4 px-4 sm:px-6 md:gap-8 md:px-16"
                    >
                        {galleryImages.map((image) => (
                            <figure
                                key={image.src}
                                className="w-[84vw] max-w-2xl flex-none sm:w-[65vw] md:w-[60vw] lg:w-[48vw]"
                            >
                                <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-neutral-100">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={900}
                                        height={675}
                                        loading="lazy"
                                        decoding="async"
                                        className="goal-image aspect-4/3 w-full object-cover"
                                        style={{
                                            filter: HIDDEN.filter,
                                            opacity: HIDDEN.opacity,
                                            transform: `scale(${HIDDEN.scale})`,
                                        }}
                                    />
                                </div>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex min-h-[70vh] sm:min-h-screen w-full items-center justify-center bg-black text-white px-6 py-20 text-center">
                <div className="max-w-4xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
                        ENDURING HORIZON
                    </p>
                    <h2 className="mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium uppercase tracking-tight">
                        Our Future In The Wild.
                    </h2>
                </div>
            </section>
        </>
    )
}
