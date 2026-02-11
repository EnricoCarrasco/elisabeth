import { Suspense } from "react";
import { getInstagramMedia } from "@/lib/instagram";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { FadeIn } from "@/components/ui/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse the full collection of virtual photography captures.",
};

export const revalidate = 3600;

export default async function GalleryPage() {
  const photos = await getInstagramMedia(200);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Background title */}
      <div className="page-padding pt-16 pb-4">
        <div className="content-max relative">
          <h1 className="font-clash text-[clamp(5rem,12vw,12rem)] font-bold uppercase leading-none text-text-primary/[0.04] select-none">
            Gallery
          </h1>
          <FadeIn className="absolute bottom-4 left-0">
            <p className="text-label text-text-muted">
              {photos.length} Captures
            </p>
          </FadeIn>
        </div>
      </div>

      <Suspense>
        <GalleryGrid photos={photos} />
      </Suspense>
    </div>
  );
}
