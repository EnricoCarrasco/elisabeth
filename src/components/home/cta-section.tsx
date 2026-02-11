"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CtaSection({ bgImage }: { bgImage?: string }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {bgImage ? (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-surface" />
      )}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center">
        <FadeIn direction="up">
          <h2 className="font-clash text-display-title text-text-primary mb-8">
            Explore the Gallery
          </h2>
          <Link href="/gallery">
            <MagneticButton className="inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors duration-300 rounded-none text-sm tracking-[0.1em] uppercase font-medium cursor-pointer">
              View All Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
