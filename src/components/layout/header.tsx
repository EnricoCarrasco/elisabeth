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
          backgroundColor: scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        }}
      >
        <nav className="content-max flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="font-clash text-lg lg:text-xl font-semibold tracking-[0.15em] uppercase text-text-primary hover:text-accent transition-colors duration-300"
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
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="block w-6 h-px bg-text-primary origin-center"
                animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-px bg-text-primary origin-center"
                animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-clash text-3xl font-semibold tracking-[0.1em] uppercase text-text-primary hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
