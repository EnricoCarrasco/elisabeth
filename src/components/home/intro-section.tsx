"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function IntroSection() {
  return (
    <section className="page-padding section-gap">
      <div className="content-max grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn delay={0} direction="left">
          <div className="relative pl-6 border-l border-accent">
            <p className="font-clash text-display-sub text-text-primary italic leading-relaxed">
              &ldquo;Capturing cinematic moments in digital worlds&rdquo;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} direction="right">
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
            Virtual photography transforms video games into a canvas for artistic
            expression. Through careful composition, lighting, and post-processing,
            each screenshot becomes a cinematic still — a frozen moment of beauty
            in worlds crafted by the finest digital artists.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
