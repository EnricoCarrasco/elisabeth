"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import { PhotoInfo } from "./photo-info";
import type { ParsedPhoto } from "@/types/instagram";

interface PhotoLightboxProps {
  photo: ParsedPhoto;
  prevId?: string;
  nextId?: string;
}

export function PhotoLightbox({ photo, prevId, nextId }: PhotoLightboxProps) {
  const router = useRouter();

  const close = useCallback(() => router.back(), [router]);

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      const id = direction === "prev" ? prevId : nextId;
      if (id) router.push(`/photo/${id}`, { scroll: false });
    },
    [router, prevId, nextId]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [close, navigate]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={close}
      />

      {/* Close button */}
      <button
        onClick={close}
        className="absolute top-6 right-6 z-10 p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Navigation areas */}
      {prevId && (
        <button
          onClick={() => navigate("prev")}
          className="absolute left-0 top-0 bottom-0 w-1/4 z-10 cursor-w-resize flex items-center justify-start pl-6 opacity-0 hover:opacity-100 transition-opacity"
          aria-label="Previous photo"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {nextId && (
        <button
          onClick={() => navigate("next")}
          className="absolute right-0 top-0 bottom-0 w-1/4 z-10 cursor-e-resize flex items-center justify-end pr-6 opacity-0 hover:opacity-100 transition-opacity"
          aria-label="Next photo"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-secondary">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 max-h-[95vh] px-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] max-w-[85vw]">
          <Image
            src={photo.imageUrl}
            alt={photo.caption || "Virtual photography"}
            width={1200}
            height={800}
            className="max-h-[75vh] w-auto h-auto object-contain rounded-sm"
            priority
          />
        </div>
        <PhotoInfo photo={photo} />
      </motion.div>
    </motion.div>
  );
}
