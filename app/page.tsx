"use client";

import React from "react";
import Page from "./shape/Page";
import Page2 from "./shape/Page2";

const page: React.FC = () => {
  return (
    <main className="min-h-svh bg-[#1d2028] px-4 py-8 text-slate-100 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 sm:mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#040808]">
            3D Model Viewer
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore the collection
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 sm:text-base">
            Rotate each model, zoom in, and adjust its appearance using the
            settings panel.
          </p>
        </header>

        <section
          aria-label="3D model collection"
          className="grid grid-cols-1 gap-6 xl:grid-cols-2"
        >
          <article className="min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-3 shadow-xl shadow-black/20 sm:p-4">
            <div className="mb-3 px-1 sm:mb-4">
              <h2 className="text-lg font-medium">Adam</h2>
              <p className="text-sm text-slate-400">Detailed character model</p>
            </div>
            <div className="relative h-[min(65svh,560px)] min-h-80 overflow-hidden rounded-xl bg-slate-950 sm:min-h-100 xl:h-[min(70svh,680px)]">
              <Page />
            </div>
          </article>

          <article className="min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-3 shadow-xl shadow-black/20 sm:p-4">
            <div className="mb-3 px-1 sm:mb-4">
              <h2 className="text-lg font-medium">Lieutenant</h2>
              <p className="text-sm text-slate-400">Character model</p>
            </div>
            <div className="relative h-[min(65svh,560px)] min-h-80 overflow-hidden rounded-xl bg-slate-950 sm:min-h-100 xl:h-[min(70svh,680px)]">
              <Page2 />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default page;