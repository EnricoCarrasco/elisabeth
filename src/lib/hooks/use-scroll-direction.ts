"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const threshold = 10;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (Math.abs(currentY - lastScrollY.current) < threshold) return;

      setDirection(currentY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { direction, scrolled };
}
