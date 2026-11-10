
'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
    const imageSection = useRef(null)
    const wildlifeText = useRef(null)

    const paragraph =
        "Wildlife is the heartbeat of our planet. From the deepest oceans to the tallest forests, every living creature plays a vital role in maintaining the delicate balance of nature. Protecting wildlife means protecting our future."

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        })

        lenis.on('scroll', ScrollTrigger.update)

        const ctx = gsap.context(() => {

            // Image Blur To Clear Animation
            gsap.fromTo(
                '.reveal-img',
                {
                    filter: 'blur(15px)',
                    opacity: 0.2,
                    scale: 1.1,
                    y: 60,
                },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    stagger: 0.2,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: imageSection.current,
                        start: 'top 85%',
                        end: 'top 20%',
                        scrub: 1,
                    }
                }
            )

            // Word By Word Opacity Animation
            gsap.fromTo(
                '.word',
                {
                    opacity: 0.15,
                },
                {
                    opacity: 1,
                    stagger: 0.08,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: wildlifeText.current,
                        start: 'top 85%',
                        end: 'bottom 45%',
                        scrub: 1,
                    }
                }
            )

        })

        ScrollTrigger.refresh()

        return () => {
            ctx.revert()
            lenis.destroy()
        }

    }, [])

    return (
        <div className="w-full overflow-hidden bg-white">

            {/* First Section */}
            <section className="h-screen flex items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-bold">
                    Scroll Down
                </h1>
            </section>


            {/* Image Section */}
            <section
                ref={imageSection}
                className="w-full min-h-screen flex flex-col items-center justify-center gap-3 px-2"
            >

                <div className="w-full flex gap-3">

                    <img
                        src="/images/1.jpg"
                        className="reveal-img w-1/2 h-[50vh] object-cover"
                        alt="Wildlife"
                    />

                    <img
                        src="/images/2.png"
                        className="reveal-img w-1/2 h-[50vh] object-cover"
                        alt="Forest"
                    />

                </div>

                <div className="w-full">
                    <img
                        src="/images/3.png"
                        className="reveal-img w-full h-[80vh] object-cover"
                        alt="Nature"
                    />
                </div>

            </section>


            {/* Wildlife Text Section */}
            <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-24 py-32">

                <p
                    ref={wildlifeText}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] text-center"
                >
                    {paragraph.split(' ').map((word, index) => (
                        <span
                            key={index}
                            className="word inline-block mr-[0.25em]"
                            style={{ opacity: 0.15 }}
                        >
                            {word}
                        </span>
                    ))}
                </p>

            </section>


            {/* Final Section */}
            <section className="h-screen flex items-center justify-center bg-black text-white">

                <h1 className="text-5xl md:text-7xl font-bold">
                    Protect Nature.
                </h1>

            </section>

        </div>
    )
}

export default Page
