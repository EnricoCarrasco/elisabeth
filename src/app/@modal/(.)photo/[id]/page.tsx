import { getInstagramMedia, getInstagramMediaById } from "@/lib/instagram";
import { PhotoLightbox } from "@/components/photo/photo-lightbox";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PhotoModal({ params }: Props) {
  const { id } = await params;
  const [photo, allPhotos] = await Promise.all([
    getInstagramMediaById(id),
    getInstagramMedia(200),
  ]);

  if (!photo) return null;

  const currentIndex = allPhotos.findIndex((p) => p.id === id);
  const prevId = currentIndex > 0 ? allPhotos[currentIndex - 1].id : undefined;
  const nextId =
    currentIndex < allPhotos.length - 1
      ? allPhotos[currentIndex + 1].id
      : undefined;

  return <PhotoLightbox photo={photo} prevId={prevId} nextId={nextId} />;
}
