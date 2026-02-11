"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useSpring, useTransform } from "motion/react";

export function CountUp({
  target,
  decimals = 0,
}: {
  target: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReduced = useReducedMotion();

  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => v.toFixed(decimals));

  if (isInView) {
    spring.set(target);
  }

  if (prefersReduced) {
    return (
      <span className="font-clash text-display-sub text-text-primary">
        {target.toFixed(decimals)}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className="font-clash text-display-sub text-text-primary tabular-nums"
    >
      {display}
    </motion.span>
  );
}
