import { getInstagramMedia } from "@/lib/instagram";
import { getAllGames } from "@/lib/parse-game";
import { SOCIAL_LINKS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";
import { CountUp } from "@/components/about/count-up";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind the lens — Esmee Elisabeth, virtual photographer.",
};

export const revalidate = 3600;

export default async function AboutPage() {
  const photos = await getInstagramMedia(200);
  const games = getAllGames(photos);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] flex items-end overflow-hidden">
        {photos[2] && (
          <img
            src={photos[2].imageUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="relative z-10 page-padding pb-12">
          <h1 className="font-clash text-display-hero text-text-primary/10">About</h1>
        </div>
      </section>

      {/* Bio */}
      <section className="page-padding section-gap">
        <div className="content-max grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <FadeIn>
              <h2 className="font-clash text-display-sub text-text-primary mb-8">
                The Photographer
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-base lg:text-lg text-text-secondary leading-relaxed">
                <p>
                  Esmee Elisabeth is a Dutch virtual photographer who transforms
                  video game worlds into breathtaking cinematic imagery. Using the
                  photo modes built into PlayStation 5 titles, she composes,
                  captures, and curates screenshots that rival traditional
                  photography in their emotional depth and visual storytelling.
                </p>
                <p>
                  Her process blends artistic intuition with technical skill.
                  Each capture begins in-game — finding the perfect angle, the
                  right light, the decisive moment — then moves through careful
                  post-processing in Adobe Lightroom and Photoshop to achieve her
                  signature cinematic aesthetic.
                </p>
                <p>
                  From the neon-drenched streets of Night City to the lush
                  landscapes of the Forbidden West, Esmee finds beauty in every
                  digital world she explores. Her work celebrates the artistry of
                  game developers while adding her own creative vision on top.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              {photos[1] && (
                <div className="relative rounded-lg overflow-hidden border-l-2 border-accent">
                  <img
                    src={photos[1].imageUrl}
                    alt="Featured virtual photography"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="page-padding py-12 border-y border-border">
        <div className="content-max flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-accent/30">
          <StatItem value={photos.length} suffix="+" label="Captures" />
          <StatItem value={games.length} label="Game Worlds" />
          <StatItem value={2.6} suffix="K" label="Community" decimals={1} />
        </div>
      </section>

      {/* Tools */}
      <section className="page-padding section-gap">
        <div className="content-max">
          <FadeIn>
            <h2 className="text-label text-text-secondary mb-8">Tools & Platform</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {["PlayStation 5", "Adobe Lightroom", "Adobe Photoshop", ...games.slice(0, 7)].map(
                (tool) => (
                  <div
                    key={tool}
                    className="px-4 py-3 bg-surface border border-border rounded-lg text-caption text-text-secondary text-center"
                  >
                    {tool}
                  </div>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social */}
      <section className="page-padding section-gap border-t border-border">
        <div className="content-max max-w-2xl">
          <FadeIn>
            <h2 className="text-label text-text-secondary mb-8">Connect</h2>
          </FadeIn>
          <div className="flex flex-col">
            {SOCIAL_LINKS.map((social, i) => (
              <FadeIn key={social.name} delay={i * 0.05}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-border hover:border-accent transition-colors"
                >
                  <div>
                    <span className="text-lg text-text-primary group-hover:text-accent transition-colors">
                      {social.name}
                    </span>
                    <span className="ml-4 text-caption text-text-muted">
                      {social.handle}
                    </span>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-text-muted group-hover:text-accent transition-colors"
                  >
                    <path
                      d="M5 15L15 5M15 5H8M15 5V12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({
  value,
  suffix = "",
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div className="flex flex-col items-center gap-1 sm:px-12">
      <div className="flex items-baseline">
        <CountUp target={value} decimals={decimals} />
        {suffix && (
          <span className="font-clash text-display-sub text-accent">{suffix}</span>
        )}
      </div>
      <span className="text-label text-text-muted">{label}</span>
    </div>
  );
}
