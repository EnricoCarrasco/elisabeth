"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ANIMATION_EASE } from "@/lib/constants";

const HERO_VIDEO = "/videos/hero.mp4";

export function Hero({ heroImage }: { heroImage?: string }) {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 300]);

  const handleVideoEnd = useCallback(() => {
    setVideoEnded(true);
  }, []);

  const title = "Esmee Elisabeth";
  const chars = title.split("");

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background video with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* Fallback poster image */}
        {heroImage && (
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover scale-110"
          />
        )}
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="relative h-full w-full object-cover scale-110"
        />
      </motion.div>

      {/* Gradient overlays - subtle during video, stronger after */}
      <motion.div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-bg via-transparent to-transparent"
        animate={{ opacity: videoEnded ? 0.9 : 0.6 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/30 via-transparent to-transparent" />
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.5) 100%)",
        }}
        animate={{ opacity: videoEnded ? 1 : 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Title content - hidden until video ends */}
      <div className="relative z-10 text-center px-4">
        {/* Main title - cinematic character-by-character reveal */}
        <h1 className="font-clash text-[clamp(2rem,9vw,10rem)] font-semibold tracking-[0.05em] leading-[0.95] uppercase text-text-primary" aria-label={title}>
          <span className="inline-flex flex-nowrap justify-center overflow-hidden">
            {chars.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: 80, opacity: 0, rotateX: 90 }}
                animate={
                  videoEnded
                    ? { y: 0, opacity: 1, rotateX: 0 }
                    : { y: 80, opacity: 0, rotateX: 90 }
                }
                transition={{
                  duration: 1,
                  ease: ANIMATION_EASE,
                  delay: i * 0.04,
                }}
                style={{ perspective: 600 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Gold line */}
        <motion.div
          className="mx-auto mt-6 h-px bg-accent origin-center"
          initial={{ width: 0, opacity: 0 }}
          animate={
            videoEnded
              ? { width: 64, opacity: 1 }
              : { width: 0, opacity: 0 }
          }
          transition={{
            duration: 1,
            ease: ANIMATION_EASE,
            delay: videoEnded ? 0.7 : 0,
          }}
        />

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base font-medium text-text-primary/70 mt-5 tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={
            videoEnded
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          transition={{
            duration: 0.9,
            ease: ANIMATION_EASE,
            delay: videoEnded ? 1 : 0,
          }}
        >
          Virtual Photographer
        </motion.p>
      </div>

      {/* Scroll indicator - appears after title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoEnded ? 1 : 0 }}
        transition={{ duration: 1, delay: videoEnded ? 1.4 : 0 }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
