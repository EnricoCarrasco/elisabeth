import { getInstagramMedia } from "@/lib/instagram";
import { getAllGames } from "@/lib/parse-game";
import { Hero } from "@/components/home/hero";
import { IntroSection } from "@/components/home/intro-section";
import { FeaturedScroll } from "@/components/home/featured-scroll";
import { GameWorlds } from "@/components/home/game-worlds";
import { CtaSection } from "@/components/home/cta-section";

export const revalidate = 3600;

export default async function HomePage() {
  const photos = await getInstagramMedia(50);

  const featured = photos.slice(0, 8);

  const gameNames = getAllGames(photos);
  const gameWorlds = gameNames
    .map((name) => {
      const photo = photos.find((p) => p.game === name);
      return photo ? { name, photo } : null;
    })
    .filter(Boolean) as { name: string; photo: (typeof photos)[0] }[];

  const heroImage = photos[0]?.imageUrl;
  const ctaImage = photos[Math.min(5, photos.length - 1)]?.imageUrl;

  return (
    <>
      <Hero heroImage={heroImage} />
      <IntroSection />
      <FeaturedScroll photos={featured} />
      <GameWorlds games={gameWorlds} />
      <CtaSection bgImage={ctaImage} />
    </>
  );
}
