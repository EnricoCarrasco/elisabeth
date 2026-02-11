"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedText } from "@/components/ui/animated-text";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero({ heroImage }: { heroImage?: string }) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 400]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        {heroImage ? (
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover scale-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-surface via-bg to-bg" />
        )}
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-bg via-transparent to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/50 via-transparent to-transparent" />
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.6) 100%)"
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <AnimatedText
          text="Esmee Elisabeth"
          as="h1"
          className="font-clash text-display-hero text-text-primary"
          staggerDelay={0.03}
          splitBy="char"
        />

        {/* Gold line */}
        <FadeIn delay={0.8} direction="none" duration={0.8}>
          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={1.2} direction="up" distance={10}>
          <p className="text-label text-text-secondary mt-5 tracking-[0.2em]">
            Virtual Photographer
          </p>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </section>
  );
}
