import type { GameName } from "./constants";

const HASHTAG_MAP: Record<string, GameName> = {
  "#cyberpunk2077": "Cyberpunk 2077",
  "#cyberpunk": "Cyberpunk 2077",
  "#nightcity": "Cyberpunk 2077",
  "#clairobscur": "Clair Obscur: Expedition 33",
  "#clairobscurexpedition33": "Clair Obscur: Expedition 33",
  "#expedition33": "Clair Obscur: Expedition 33",
  "#horizonforbiddenwest": "Horizon Forbidden West",
  "#forbiddenwest": "Horizon Forbidden West",
  "#horizonzerodawn": "Horizon Zero Dawn",
  "#zerodawn": "Horizon Zero Dawn",
  "#horizon": "Horizon Forbidden West",
  "#ghostoftsushima": "Ghost of Tsushima",
  "#tsushima": "Ghost of Tsushima",
  "#ghostofyotei": "Ghost of Yotei",
  "#yotei": "Ghost of Yotei",
  "#stellarblade": "Stellar Blade",
  "#sifu": "Sifu",
  "#spiderman2": "Spider-Man 2",
  "#spiderman": "Spider-Man 2",
  "#marvelsspiderman2": "Spider-Man 2",
  "#virtualphotography": undefined as unknown as GameName,
  "#vp": undefined as unknown as GameName,
  "#photomode": undefined as unknown as GameName,
};

export function parseGameFromCaption(caption?: string): GameName {
  if (!caption) return "Unknown";

  const lower = caption.toLowerCase();
  const hashtags = lower.match(/#\w+/g) || [];

  for (const tag of hashtags) {
    const game = HASHTAG_MAP[tag];
    if (game) return game;
  }

  const textPatterns: [RegExp, GameName][] = [
    [/cyberpunk\s*2077/i, "Cyberpunk 2077"],
    [/clair\s*obscur/i, "Clair Obscur: Expedition 33"],
    [/expedition\s*33/i, "Clair Obscur: Expedition 33"],
    [/horizon\s*forbidden\s*west/i, "Horizon Forbidden West"],
    [/horizon\s*zero\s*dawn/i, "Horizon Zero Dawn"],
    [/ghost\s*of\s*tsushima/i, "Ghost of Tsushima"],
    [/ghost\s*of\s*yotei/i, "Ghost of Yotei"],
    [/stellar\s*blade/i, "Stellar Blade"],
    [/spider.?man\s*2/i, "Spider-Man 2"],
    [/sifu/i, "Sifu"],
  ];

  for (const [pattern, game] of textPatterns) {
    if (pattern.test(lower)) return game;
  }

  return "Unknown";
}

export function getAllGames(
  photos: { game: string }[]
): string[] {
  const games = new Set<string>();
  for (const photo of photos) {
    if (photo.game !== "Unknown") {
      games.add(photo.game);
    }
  }
  return Array.from(games).sort();
}
