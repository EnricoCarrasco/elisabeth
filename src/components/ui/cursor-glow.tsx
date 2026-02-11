"use client";

import { useMousePosition } from "@/lib/hooks/use-mouse-position";

export function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9997] hidden transition-none [@media(hover:hover)]:block"
      aria-hidden="true"
    >
      <div
        className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: x,
          top: y,
          background:
            "radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
