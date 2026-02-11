"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import { FadeIn } from "@/components/ui/fade-in";
import { ANIMATION_EASE } from "@/lib/constants";
import type { ParsedPhoto } from "@/types/instagram";

export function FeaturedScroll({ photos }: { photos: ParsedPhoto[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="section-gap overflow-hidden">
      <div className="page-padding content-max mb-10">
        <FadeIn direction="up">
          <div className="flex items-center gap-6">
            <h2 className="text-label text-text-secondary whitespace-nowrap">
              Latest Work
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </FadeIn>
      </div>

      <div className="pl-[clamp(1.5rem,5vw,6rem)]">
        <HorizontalScroll>
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="flex-shrink-0 w-[300px] sm:w-[400px]"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: ANIMATION_EASE,
                delay: i * 0.08,
              }}
            >
              <Link href={`/photo/${photo.id}`} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.caption || "Virtual photography"}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ring-1 ring-inset ring-accent rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-label text-accent">{photo.game}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="flex-shrink-0 w-4" aria-hidden="true" />
        </HorizontalScroll>
      </div>
    </section>
  );
}
