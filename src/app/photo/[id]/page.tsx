import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInstagramMedia, getInstagramMediaById } from "@/lib/instagram";
import { PhotoInfo } from "@/components/photo/photo-info";
import { PhotoNav } from "@/components/photo/photo-nav";
import { FadeIn } from "@/components/ui/fade-in";
import type { Metadata } from "next";

export const revalidate = 3600;

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const photo = await getInstagramMediaById(id);
  if (!photo) return { title: "Photo Not Found" };

  return {
    title: photo.game,
    description: photo.caption?.split("#")[0].trim() || "Virtual photography",
  };
}

export default async function PhotoPage({ params }: Props) {
  const { id } = await params;
  const [photo, allPhotos] = await Promise.all([
    getInstagramMediaById(id),
    getInstagramMedia(200),
  ]);

  if (!photo) notFound();

  const currentIndex = allPhotos.findIndex((p) => p.id === id);
  const prevId = currentIndex > 0 ? allPhotos[currentIndex - 1].id : undefined;
  const nextId =
    currentIndex < allPhotos.length - 1
      ? allPhotos[currentIndex + 1].id
      : undefined;

  return (
    <div className="pt-24 lg:pt-32 pb-16 page-padding">
      <div className="content-max">
        <FadeIn>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-caption text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Gallery
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-8">
            <Image
              src={photo.imageUrl}
              alt={photo.caption || "Virtual photography"}
              width={1400}
              height={900}
              className="max-h-[80vh] w-auto h-auto object-contain rounded-sm"
              priority
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <PhotoInfo photo={photo} />
            <div className="mt-8 pt-8 border-t border-border">
              <PhotoNav prevId={prevId} nextId={nextId} />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
