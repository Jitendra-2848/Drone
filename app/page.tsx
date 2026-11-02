import ModelGallery from "./shape/ModelGallery";

export default function Page() {
  return (
    <main className="min-h-svh bg-[#c8c98b] px-4 py-8 text-slate-100 sm:px-6 sm:py-12">
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
        <ModelGallery />
      </div>
    </main>
  );
}