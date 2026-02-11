export const SITE_NAME = "Esmee Elisabeth";
export const SITE_DESCRIPTION =
  "Virtual photography portfolio — capturing cinematic moments in digital worlds.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    handle: "@esmeeelisabethh",
    url: "https://instagram.com/esmeeelisabethh",
  },
  {
    name: "X / Twitter",
    handle: "@esmeeelisabeth",
    url: "https://x.com/esmeeelisabeth",
  },
  {
    name: "Threads",
    handle: "@esmeeelisabethh",
    url: "https://threads.net/@esmeeelisabethh",
  },
  {
    name: "Bluesky",
    handle: "@esmeeelisabeth",
    url: "https://bsky.app/profile/esmeeelisabeth.bsky.social",
  },
] as const;

export const GAME_LIST = [
  "Cyberpunk 2077",
  "Clair Obscur: Expedition 33",
  "Horizon Forbidden West",
  "Horizon Zero Dawn",
  "Ghost of Tsushima",
  "Ghost of Yotei",
  "Stellar Blade",
  "Sifu",
  "Spider-Man 2",
] as const;

export type GameName = (typeof GAME_LIST)[number] | "Unknown";

export const ANIMATION_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
