"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "motion/react";
import { GalleryFilter } from "./gallery-filter";
import { GalleryCard } from "./gallery-card";
import { getAllGames } from "@/lib/parse-game";
import { MagneticButton } from "@/components/ui/magnetic-button";
import type { ParsedPhoto } from "@/types/instagram";

const PAGE_SIZE = 24;

export function GalleryGrid({ photos }: { photos: ParsedPhoto[] }) {
  const searchParams = useSearchParams();
  const initialGame = searchParams.get("game");

  const [activeGame, setActiveGame] = useState<string | null>(initialGame);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const games = useMemo(() => getAllGames(photos), [photos]);

  const filtered = useMemo(
    () =>
      activeGame
        ? photos.filter((p) => p.game === activeGame)
        : photos,
    [photos, activeGame]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilter = (game: string | null) => {
    setActiveGame(game);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <GalleryFilter
        games={games}
        activeGame={activeGame}
        onFilter={handleFilter}
      />

      <div className="page-padding section-gap">
        <div className="content-max">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            <AnimatePresence mode="popLayout">
              {visible.map((photo, i) => (
                <GalleryCard key={photo.id} photo={photo} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {hasMore && (
            <div className="flex justify-center mt-16">
              <MagneticButton
                className="px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors duration-300 text-sm tracking-[0.1em] uppercase font-medium cursor-pointer"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              >
                Load More
              </MagneticButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
