"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollDirection } from "@/lib/hooks/use-scroll-direction";
import { SOCIAL_LINKS, ANIMATION_EASE } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Header() {
  const { direction, scrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const hidden = direction === "down" && scrolled && !mobileOpen;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 page-padding transition-colors duration-300"
        initial={false}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: ANIMATION_EASE }}
        style={{
          backgroundColor: mobileOpen ? "transparent" : scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
          backdropFilter: mobileOpen ? "none" : scrolled ? "blur(24px)" : "none",
          borderBottom: mobileOpen ? "1px solid transparent" : scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        }}
      >
        <nav className="content-max flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className={`font-clash text-lg lg:text-xl font-semibold tracking-[0.15em] uppercase text-text-primary hover:text-accent transition-colors duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
            onClick={() => setMobileOpen(false)}
          >
            Esmee
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-8">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-accent opacity-50" />
                )}
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <div className="flex flex-col gap-[6px]">
              <motion.span
                className="block w-6 h-[2px] bg-text-primary origin-center"
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: ANIMATION_EASE }}
              />
              <motion.span
                className="block w-4 h-[2px] bg-accent origin-center"
                animate={mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-text-primary origin-center"
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: ANIMATION_EASE }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-end page-padding pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Name + Nav grouped together */}
            <div className="flex-1 flex flex-col justify-center">
              {/* Typewriter name */}
              <div className="flex flex-wrap mb-6">
                {"Esmee Elisabeth".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="font-clash text-sm font-medium tracking-[0.25em] uppercase text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.05, delay: 0.3 + i * 0.06 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="h-px w-10 bg-accent/40 mb-10"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.5, delay: 1.2, ease: ANIMATION_EASE }}
              />

              {/* Nav links */}
              <nav className="flex flex-col gap-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    className="overflow-hidden"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.6,
                      ease: ANIMATION_EASE,
                      delay: 1.3 + i * 0.12,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="font-clash text-[3.5rem] font-semibold tracking-[0.04em] uppercase text-text-primary hover:text-accent transition-colors duration-300 block leading-none"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Social links at bottom */}
            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <div className="h-px w-full bg-border" />
              <div className="flex items-center gap-6 flex-wrap">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.15em] uppercase text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
