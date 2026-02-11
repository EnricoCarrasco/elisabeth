"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { lerp } from "@/lib/utils";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  const animate = useCallback(() => {
    setPosition((prev) => ({
      x: lerp(prev.x, targetRef.current.x, 0.1),
      y: lerp(prev.y, targetRef.current.y, 0.1),
    }));
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return position;
}
