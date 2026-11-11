"use client";
import React from 'react';
import gsap from 'gsap';

const page: React.FC = () => {
    const ctx = gsap.context(() => {
        gsap.to(".box", {
            x: "400px",
            rotate: "720",
            ease: "bounce.out",
            duration:"1"
        })
    });
    return (
        <div>
            <div className='box w-20 h-20 bg-red-700'>

            </div>
        </div>
    )
}

export default page