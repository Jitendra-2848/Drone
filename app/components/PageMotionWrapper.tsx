"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PageMotionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageMotionWrapper({
  children,
  className = "",
}: PageMotionWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Reveal single items (translateY + blur to sharp focus)
      const revealItems = container.querySelectorAll(".reveal-item");
      revealItems.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 28,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // 2. Reveal staggered groups (.reveal-group parent, .reveal-child elements)
      const revealGroups = container.querySelectorAll(".reveal-group");
      revealGroups.forEach((group) => {
        const children = group.querySelectorAll(".reveal-child");
        if (children.length === 0) return;

        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 32,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // 3. Subtle image scale reveal (.reveal-scale)
      const scaleItems = container.querySelectorAll(".reveal-scale");
      scaleItems.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0.2,
            scale: 1.06,
            filter: "blur(14px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
