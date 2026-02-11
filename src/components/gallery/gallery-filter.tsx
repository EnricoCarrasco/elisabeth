"use client";

import { motion } from "motion/react";

interface GalleryFilterProps {
  games: string[];
  activeGame: string | null;
  onFilter: (game: string | null) => void;
}

export function GalleryFilter({
  games,
  activeGame,
  onFilter,
}: GalleryFilterProps) {
  return (
    <div className="sticky top-16 lg:top-20 z-30 page-padding py-4 transition-all duration-300 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="content-max">
        <div className="flex gap-2 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
          <FilterPill
            label="All"
            active={activeGame === null}
            onClick={() => onFilter(null)}
          />
          {games.map((game) => (
            <FilterPill
              key={game}
              label={game}
              active={activeGame === game}
              onClick={() => onFilter(game)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-shrink-0 px-4 py-2 rounded-full text-label transition-colors duration-300 cursor-pointer ${
        active
          ? "text-bg"
          : "text-text-secondary hover:text-accent border border-border hover:border-accent"
      }`}
    >
      {active && (
        <motion.span
          layoutId="activeFilter"
          className="absolute inset-0 bg-accent rounded-full"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
