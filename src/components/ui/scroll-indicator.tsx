"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <span className="text-label text-text-secondary">Scroll</span>
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-accent"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M4 7L10 13L16 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
