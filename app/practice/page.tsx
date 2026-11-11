
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Page: React.FC = () => {

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.to(".box", {
                x: 400,
                rotate: 720,
                ease: "bounce.out",
                duration: 1
            });

        }, container);

        return () => ctx.revert();

    }, []);

    return (
        <div ref={container}>
            <div className="box w-20 h-20 bg-red-700">
            </div>
        </div>
    );
};

export default Page;
