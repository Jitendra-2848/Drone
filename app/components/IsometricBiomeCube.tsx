"use client";

import { useState, useRef } from "react";

export default function IsometricBiomeCube() {
  const [exploded, setExploded] = useState(false);
  const [rotation, setRotation] = useState({ x: 60, z: -45 });
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({
      x: 60 - y * 25,
      z: -45 + x * 35,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 60, z: -45 });
    setActiveLayer(null);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center overflow-hidden border border-black/10 bg-neutral-50 px-4 py-16 sm:px-8 sm:py-24"
    >
      {/* HUD Header */}
      <div className="flex w-full max-w-[1400px] flex-col justify-between gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
              ISOMETRIC BIOME OPTICAL STRATA • 1 KM³ VOLUMETRIC SLICE
            </p>
          </div>
          <h3 className="mt-2 text-2xl font-medium uppercase tracking-tight sm:text-3xl text-black">
            The Sovereign Biome Cube
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setExploded(!exploded)}
            className="group flex items-center gap-2.5 rounded-full border border-black bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black shadow-xs transition-all hover:bg-black hover:text-white"
          >
            <span>{exploded ? "Collapse Monolith" : "Explode Strata"}</span>
            <span className="font-mono text-xs transition-transform group-hover:rotate-45">
              {exploded ? "×" : "+"}
            </span>
          </button>
        </div>
      </div>

      {/* 3D Isometric Viewport */}
      <div className="relative my-12 flex h-[380px] w-full max-w-lg items-center justify-center sm:h-[460px] perspective-[1200px]">
        {/* Shadow plane */}
        <div
          className="absolute h-64 w-64 rounded-full bg-black/5 blur-2xl transition-all duration-700"
          style={{
            transform: `scale(${exploded ? 1.4 : 1}) translateY(140px)`,
          }}
        />

        {/* 3D Isometric Root */}
        <div
          className="relative h-56 w-56 transition-transform duration-500 ease-out transform-3d"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg)`,
          }}
        >
          {/* LAYER 03: Bedrock & Glacial Aquifer (Bottom) */}
          <div
            onMouseEnter={() => setActiveLayer(3)}
            className="absolute inset-0 cursor-pointer border-2 border-black/40 bg-neutral-900 shadow-xl transition-all duration-700 ease-out hover:border-black"
            style={{
              transform: `translateZ(${exploded ? -90 : 0}px)`,
            }}
          >
            <div className="flex h-full w-full flex-col justify-between p-4 text-white">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-neutral-400">
                <span>STRATA 03</span>
                <span>-340M</span>
              </div>
              <div className="space-y-1">
                <div className="h-0.5 w-full bg-white/20" />
                <div className="h-0.5 w-3/4 bg-white/40" />
                <div className="h-0.5 w-1/2 bg-white/60" />
              </div>
              <p className="text-[8px] font-mono uppercase tracking-wider text-neutral-400">
                Glacial Aquifer • Tectonic Granite
              </p>
            </div>
          </div>

          {/* LAYER 02: Alluvial Riverbed & Nutrient Highway (Middle) */}
          <div
            onMouseEnter={() => setActiveLayer(2)}
            className="absolute inset-0 cursor-pointer border-2 border-black bg-white shadow-xl transition-all duration-700 ease-out hover:bg-neutral-100"
            style={{
              transform: `translateZ(${exploded ? 0 : 28}px)`,
            }}
          >
            {/* Topographic river lines */}
            <svg
              className="absolute inset-0 h-full w-full p-2 opacity-80"
              viewBox="0 0 100 100"
            >
              <path
                d="M10,20 Q30,50 60,40 T90,80"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              <path
                d="M20,10 Q40,40 70,30 T100,70"
                fill="none"
                stroke="#888"
                strokeWidth="1.5"
              />
              <circle cx="60" cy="40" r="3" fill="#000" />
            </svg>
            <div className="relative flex h-full w-full flex-col justify-between p-4 text-black">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-neutral-500">
                <span>STRATA 02</span>
                <span>0M GROUND</span>
              </div>
              <p className="text-[8px] font-mono uppercase tracking-wider text-neutral-600">
                Riparian Spawning Basin
              </p>
            </div>
          </div>

          {/* LAYER 01: Topographic Alpine Canopy (Top) */}
          <div
            onMouseEnter={() => setActiveLayer(1)}
            className="absolute inset-0 cursor-pointer border-2 border-black bg-white shadow-2xl transition-all duration-700 ease-out hover:bg-neutral-50"
            style={{
              transform: `translateZ(${exploded ? 90 : 56}px)`,
            }}
          >
            {/* Isometric contour elevation rings */}
            <svg
              className="absolute inset-0 h-full w-full p-3"
              viewBox="0 0 100 100"
            >
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="42"
                fill="none"
                stroke="#ddd"
                strokeWidth="1"
              />
              <ellipse
                cx="50"
                cy="48"
                rx="30"
                ry="30"
                fill="none"
                stroke="#bbb"
                strokeWidth="1"
              />
              <ellipse
                cx="52"
                cy="45"
                rx="18"
                ry="18"
                fill="none"
                stroke="#666"
                strokeWidth="1.5"
              />
              <ellipse
                cx="53"
                cy="44"
                rx="7"
                ry="7"
                fill="#000"
              />
            </svg>

            <div className="relative flex h-full w-full flex-col justify-between p-4 text-black">
              <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-neutral-600">
                <span>STRATA 01</span>
                <span>+860M PEAK</span>
              </div>
              <div className="text-right">
                <span className="inline-block rounded-xs bg-black px-1.5 py-0.5 text-[8px] font-bold font-mono text-white">
                  APEX SENTINEL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer Telemetry Readout */}
      <div className="w-full max-w-[1400px] border-t border-black/10 pt-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div
            className={`border-l-2 p-3 transition-all ${
              activeLayer === 1 || !activeLayer
                ? "border-black bg-white shadow-xs"
                : "border-neutral-200 text-neutral-400"
            }`}
          >
            <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">
              SURFACE ELEVATION • +860M
            </p>
            <h4 className="mt-1 text-sm font-bold uppercase tracking-tight text-black">
              Canopy & Ridge Line
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              500-year-old ancient conifer buffer regulating thermal evaporation and wildlife passability.
            </p>
          </div>

          <div
            className={`border-l-2 p-3 transition-all ${
              activeLayer === 2
                ? "border-black bg-white shadow-xs"
                : "border-neutral-200 text-neutral-400"
            }`}
          >
            <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">
              HYDROLOGICAL BASIN • 0M
            </p>
            <h4 className="mt-1 text-sm font-bold uppercase tracking-tight text-black">
              Alluvial Salmon Run
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Continuous unchannelized glacial stream transporting nitrogen deep into the forest root systems.
            </p>
          </div>

          <div
            className={`border-l-2 p-3 transition-all ${
              activeLayer === 3
                ? "border-black bg-white shadow-xs"
                : "border-neutral-200 text-neutral-400"
            }`}
          >
            <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">
              DEEP STRATA • -340M
            </p>
            <h4 className="mt-1 text-sm font-bold uppercase tracking-tight text-black">
              Glacial Aquifer & Bedrock
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Impervious crystalline granite bedrock holding millions of liters of pristine subterranean meltwater.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

