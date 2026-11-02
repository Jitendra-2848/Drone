"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ComponentType } from "react";

const AdamViewer = dynamic(() => import("./Page"), {
    ssr: false,
    loading: () => <ViewerPlaceholder label="Loading Adam viewer..." />
});

const LieutenantViewer = dynamic(() => import("./Page2"), {
    ssr: false,
    loading: () => <ViewerPlaceholder label="Loading Lieutenant viewer..." />
});

function ViewerPlaceholder({ label }: { label: string }) {
    return (
        <div
            aria-live="polite"
            className="absolute inset-0 flex items-center justify-center bg-slate-950 text-sm text-slate-300"
        >
            <span className="flex items-center gap-3">
                <span
                    aria-hidden="true"
                    className="size-5 animate-spin rounded-full border-2 border-slate-600 border-t-cyan-400"
                />
                {label}
            </span>
        </div>
    );
}

function LazyViewer({
    label,
    Viewer
}: {
    label: string;
    Viewer: ComponentType;
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "250px" }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-[min(65svh,560px)] min-h-80 overflow-hidden rounded-xl bg-slate-950 sm:min-h-100 xl:h-[min(70svh,680px)]"
            aria-label={`${label} 3D model viewer`}
        >
            {shouldLoad ? (
                <Viewer />
            ) : (
                <ViewerPlaceholder label={`Preparing ${label} viewer...`} />
            )}
        </div>
    );
}

export default function ModelGallery() {
    return (
        <section
            aria-label="3D model collection"
            className="grid grid-cols-1 gap-6 xl:grid-cols-2"
        >
            <article className="min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-3 shadow-xl shadow-black/20 sm:p-4">
                <div className="mb-3 px-1 sm:mb-4">
                    <h2 className="text-lg font-medium">Adam</h2>
                    <p className="text-sm text-slate-400">Detailed character model</p>
                </div>
                <LazyViewer label="Adam" Viewer={AdamViewer} />
            </article>

            <article className="min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-3 shadow-xl shadow-black/20 sm:p-4">
                <div className="mb-3 px-1 sm:mb-4">
                    <h2 className="text-lg font-medium">Lieutenant</h2>
                    <p className="text-sm text-slate-400">Character model</p>
                </div>
                <LazyViewer label="Lieutenant" Viewer={LieutenantViewer} />
            </article>
        </section>
    );
}
