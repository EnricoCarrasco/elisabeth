"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ANIMATION_EASE } from "@/lib/constants";

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
    <div className="sticky top-16 lg:top-20 z-30 page-padding py-4 lg:py-5 transition-all duration-300 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="content-max">
        {/* Mobile: dropdown */}
        <div className="lg:hidden">
          <MobileFilterDropdown
            games={games}
            activeGame={activeGame}
            onFilter={onFilter}
          />
        </div>

        {/* Desktop: pills */}
        <div className="hidden lg:flex gap-3 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
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

function MobileFilterDropdown({
  games,
  activeGame,
  onFilter,
}: GalleryFilterProps) {
  const [open, setOpen] = useState(false);
  const activeLabel = activeGame ?? "All Games";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 border border-border-hover rounded-sm text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 cursor-pointer hover:border-accent"
      >
        <span className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-text-primary">{activeLabel}</span>
        </span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-text-secondary"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border-hover rounded-sm overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: ANIMATION_EASE }}
          >
            <DropdownItem
              label="All Games"
              active={activeGame === null}
              onClick={() => {
                onFilter(null);
                setOpen(false);
              }}
            />
            {games.map((game) => (
              <DropdownItem
                key={game}
                label={game}
                active={activeGame === game}
                onClick={() => {
                  onFilter(game);
                  setOpen(false);
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownItem({
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
      className={`w-full text-left px-4 py-3 text-sm font-medium tracking-[0.05em] uppercase transition-colors duration-200 cursor-pointer flex items-center gap-3 ${
        active
          ? "bg-accent/10 text-accent"
          : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
      }`}
    >
      {active && (
        <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
      )}
      <span className={active ? "" : "ml-[18px]"}>{label}</span>
    </button>
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
      className={`relative flex-shrink-0 px-5 py-2 rounded-sm text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300 cursor-pointer ${
        active
          ? "text-bg"
          : "text-text-secondary hover:text-text-primary border border-border-hover hover:border-accent"
      }`}
    >
      {active && (
        <motion.span
          layoutId="activeFilter"
          className="absolute inset-0 bg-accent rounded-sm"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
