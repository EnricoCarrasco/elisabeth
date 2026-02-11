"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { ANIMATION_EASE } from "@/lib/constants";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  staggerDelay?: number;
  splitBy?: "char" | "word";
  once?: boolean;
}

export function AnimatedText({
  text,
  className = "",
  as: Tag = "h1",
  staggerDelay = 0.03,
  splitBy = "char",
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const units = splitBy === "char" ? text.split("") : text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <span ref={ref} className="inline-flex flex-wrap overflow-hidden">
        {units.map((unit, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: ANIMATION_EASE,
              delay: i * staggerDelay,
            }}
          >
            {unit === " " ? "\u00A0" : unit}
            {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
