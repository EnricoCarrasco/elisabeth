import type { Metadata } from "next";
import { clashDisplay, inter, jetbrainsMono } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { Vignette } from "@/components/ui/vignette";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Virtual Photographer`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} — Virtual Photographer`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Virtual Photographer`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text-primary font-inter antialiased">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          {modal}
          <Footer />
          <NoiseOverlay />
          <Vignette />
          <CursorGlow />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
