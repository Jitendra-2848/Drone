import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WildTerra — Sovereign Land & Wildlife Protection",
    short_name: "WildTerra",
    description:
      "Protecting connected wilderness corridors and defending untouched habitats for keystone wildlife.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/1.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/1.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
