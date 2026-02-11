"use client";

import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll";
import { type ReactNode } from "react";

export function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  useSmoothScroll();
  return <>{children}</>;
}
