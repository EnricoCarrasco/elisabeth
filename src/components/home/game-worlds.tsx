"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ANIMATION_EASE } from "@/lib/constants";
import type { ParsedPhoto } from "@/types/instagram";

interface GameWorldsProps {
  games: { name: string; photo: ParsedPhoto }[];
}

export function GameWorlds({ games }: GameWorldsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="page-padding section-gap">
      <div className="content-max" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.slice(0, 6).map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: ANIMATION_EASE,
                delay: i * 0.1,
              }}
            >
              <Link
                href={`/gallery?game=${encodeURIComponent(game.name)}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={game.photo.imageUrl}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-clash text-xl lg:text-2xl font-semibold tracking-wider uppercase text-text-primary text-center px-4">
                    {game.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
