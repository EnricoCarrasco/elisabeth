"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ParsedPhoto } from "@/types/instagram";

export function GalleryCard({
  photo,
  index,
}: {
  photo: ParsedPhoto;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.03,
      }}
      className="break-inside-avoid mb-4"
    >
      <Link href={`/photo/${photo.id}`} scroll={false} className="group block">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={photo.imageUrl}
            alt={photo.caption || "Virtual photography"}
            width={600}
            height={800}
            className="w-full h-auto object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-110 group-hover:-translate-y-1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[inset_0_0_0_1px_#c9a84c] rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <span className="text-label text-accent">{photo.game}</span>
            {photo.caption && (
              <p className="text-caption text-text-secondary mt-1 line-clamp-2">
                {photo.caption.split("#")[0].trim()}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
