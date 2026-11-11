'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const galleryImages = [
    { src: '/images/1.png', alt: 'Wildlife in its natural habitat' },
    { src: '/images/2.png', alt: 'Forest landscape' },
    { src: '/images/3.png', alt: 'Nature and wildlife' },
    { src: '/images/4.png', alt: 'Wildlife conservation' },
    { src: '/images/5.png', alt: 'Protected natural habitat' },
]

export default function GoalPage() {
    const sectionRef = useRef<HTMLElement | null>(null)
    const viewportRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section = sectionRef.current
        const viewport = viewportRef.current
        const track = trackRef.current

        if (!section || !viewport || !track) {
            throw new Error('Goal gallery elements are missing')
        }

        const images = Array.from(track.querySelectorAll<HTMLImageElement>('.goal-image'))
        const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth)

        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
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

            timeline.to(
                track,
                {
                    x: () => -getDistance(),
                    duration: 1,
                    ease: 'none',
                },
                0,
            )

            images.forEach((image, index) => {
                const revealAt = images.length > 1
                    ? 0.04 + (index / (images.length - 1)) * 0.1
                    : 0.01

                timeline.to(
                    image,
                    {
                        filter: 'blur(0px)',
                        opacity: 1,
                        scale: 1,
                        duration: 0.2,
                        ease: 'none',
                    },
                    revealAt,
                )
            })
        }, section)

        ScrollTrigger.refresh()

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
                <h1 className="mb-8 px-6 text-center text-4xl font-bold md:mb-12 md:px-16 md:text-7xl">
                    Our Goal to Protect
                </h1>

                <div ref={viewportRef} className="w-full overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex w-max gap-4 px-6 md:gap-8 md:px-16"
                    >
                        {galleryImages.map((image) => (
                            <figure
                                key={image.src}
                                className="w-[82vw] max-w-[42rem] flex-none md:w-[60vw] lg:w-[48vw]"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="goal-image aspect-[4/3] w-full rounded-sm object-cover"
                                    style={{
                                        filter: 'blur(10px)',
                                        opacity: 0.7,
                                        transform: 'scale(0.97)',
                                    }}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-24">
                <h2 className="text-5xl font-bold md:text-7xl">Our Future</h2>
            </section>
        </>
    )
}
