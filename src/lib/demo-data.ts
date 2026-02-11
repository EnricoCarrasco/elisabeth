import type { ParsedPhoto } from "@/types/instagram";

/**
 * Demo photos scraped from @esmeeelisabethh's public Instagram profile.
 * Used as fallback when no real Instagram API tokens are configured.
 *
 * Order matters: photos[0] is the hero image, photos[5] is the CTA background.
 * Place the most cinematic shots in those positions.
 */
const DEMO_PHOTOS: ParsedPhoto[] = [
  {
    id: "demo-001",
    imageUrl: "/images/demo/post-01.jpg",
    caption:
      "In the course of a lifetime, a man will see uncountable meetings and partings #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DF7i7b9I9vL/",
    timestamp: "2025-02-11T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-002",
    imageUrl: "/images/demo/post-02.jpg",
    caption:
      "The world is beautiful and worth fighting for #horizonforbiddenwest #VirtualPhotography #photomode #ps5",
    game: "Horizon Forbidden West",
    permalink: "https://www.instagram.com/p/DHae0EeIS8e/",
    timestamp: "2025-03-20T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-003",
    imageUrl: "/images/demo/post-03.jpg",
    caption:
      "A warrior's resolve is forged in the storm #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DQRt7HpiKHx/",
    timestamp: "2025-10-26T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-004",
    imageUrl: "/images/demo/post-04.jpg",
    caption:
      "Between light and shadow, the truth reveals itself #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DUkwG1hCIDc/",
    timestamp: "2026-02-10T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-005",
    imageUrl: "/images/demo/post-05.jpg",
    caption:
      "Silence speaks louder than words #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DUh1qlXCLBt/",
    timestamp: "2026-02-08T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-006",
    imageUrl: "/images/demo/post-06.jpg",
    caption:
      "Every journey has a beginning, but not every beginning has an end #clairobscurexpedition33 #expedition33 #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DTVXfK4CK4T/",
    timestamp: "2026-01-10T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-007",
    imageUrl: "/images/demo/post-07.jpg",
    caption:
      "The expedition continues through the unknown #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DTSRZ9SiFqk/",
    timestamp: "2026-01-09T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-008",
    imageUrl: "/images/demo/post-08.jpg",
    caption:
      "As long as even one of us stands, our fight is not over #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DTN9qyaiAWo/",
    timestamp: "2026-01-07T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-009",
    imageUrl: "/images/demo/post-09.jpg",
    caption:
      "Courage is not the absence of fear, but the triumph over it #clairobscurexpedition33 #expedition33 #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DTFbKGXCHLn/",
    timestamp: "2026-01-04T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-010",
    imageUrl: "/images/demo/post-10.jpg",
    caption:
      "New year, new adventures ahead #clairobscurexpedition33 #expedition33 #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DS-PfUMCOu7/",
    timestamp: "2026-01-01T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-011",
    imageUrl: "/images/demo/post-11.jpg",
    caption:
      "In the eye of the storm, find your peace #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DSzXuUViCk6/",
    timestamp: "2025-12-28T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-012",
    imageUrl: "/images/demo/post-12.jpg",
    caption:
      "Some paths are only revealed in darkness #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DSZpFxXiM3r/",
    timestamp: "2025-12-18T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-013",
    imageUrl: "/images/demo/post-13.jpg",
    caption:
      "The blade remembers what the mind forgets #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DSU0BOzCLXw/",
    timestamp: "2025-12-16T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-014",
    imageUrl: "/images/demo/post-14.jpg",
    caption:
      "Where shadows gather, heroes emerge #clairobscurexpedition33 #expedition33 #clairobscur #VirtualPhotography #ps5",
    game: "Clair Obscur: Expedition 33",
    permalink: "https://www.instagram.com/p/DSSM_uniJ8-/",
    timestamp: "2025-12-15T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-015",
    imageUrl: "/images/demo/post-15.jpg",
    caption:
      "Honor is not given, it is earned through sacrifice #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DRB8_maiOte/",
    timestamp: "2025-11-14T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-016",
    imageUrl: "/images/demo/post-16.jpg",
    caption:
      "The wind carries whispers of the fallen #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DPqckr9iOyT/",
    timestamp: "2025-10-11T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-017",
    imageUrl: "/images/demo/post-17.jpg",
    caption:
      "A new land awaits, but the spirit of the warrior endures #ghostofyotei #VirtualPhotography #photomode #ps5",
    game: "Ghost of Yotei",
    permalink: "https://www.instagram.com/p/DPjnRwcCMwd/",
    timestamp: "2025-10-08T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-018",
    imageUrl: "/images/demo/post-18.jpg",
    caption:
      "Steel and soul, one and the same #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DPgzR9jCE60/",
    timestamp: "2025-10-07T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-019",
    imageUrl: "/images/demo/post-19.jpg",
    caption:
      "Even the strongest storms must pass #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DPdf0t-iCE7/",
    timestamp: "2025-10-06T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-020",
    imageUrl: "/images/demo/post-20.jpg",
    caption:
      "Beneath the snow, the mountain remembers #ghostofyotei #VirtualPhotography #photomode #ps5",
    game: "Ghost of Yotei",
    permalink: "https://www.instagram.com/p/DPcI-PFiAPg/",
    timestamp: "2025-10-05T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-021",
    imageUrl: "/images/demo/post-21.jpg",
    caption:
      "A moment of stillness in the chaos of war #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DPZIssICPgF/",
    timestamp: "2025-10-04T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-022",
    imageUrl: "/images/demo/post-22.jpg",
    caption:
      "The path of the ghost is a lonely one #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DPWivJEiC1J/",
    timestamp: "2025-10-03T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-023",
    imageUrl: "/images/demo/post-23.jpg",
    caption:
      "Legends are born from the ashes of sacrifice #ghostoftsushima #VirtualPhotography #photomode #ps5",
    game: "Ghost of Tsushima",
    permalink: "https://www.instagram.com/p/DPUCNWwCFM3/",
    timestamp: "2025-10-02T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-024",
    imageUrl: "/images/demo/post-24.jpg",
    caption:
      "The forbidden west holds secrets beyond imagination #horizonforbiddenwest #VirtualPhotography #photomode #ps5",
    game: "Horizon Forbidden West",
    permalink: "https://www.instagram.com/p/DPQt-HTCGJ-/",
    timestamp: "2025-10-01T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-025",
    imageUrl: "/images/demo/post-25.jpg",
    caption:
      "Nature reclaims what machines once took #horizonforbiddenwest #VirtualPhotography #photomode #ps5",
    game: "Horizon Forbidden West",
    permalink: "https://www.instagram.com/p/DOjBKs_iDSH/",
    timestamp: "2025-09-13T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-026",
    imageUrl: "/images/demo/post-26.jpg",
    caption:
      "Night City never sleeps, but sometimes it dreams #cyberpunk2077 #cyberpunk #nightcity #VirtualPhotography #photomode",
    game: "Cyberpunk 2077",
    permalink: "https://www.instagram.com/p/DOa59BGiKoa/",
    timestamp: "2025-09-10T18:00:00+0000",
    mediaType: "IMAGE",
  },
  {
    id: "demo-027",
    imageUrl: "/images/demo/post-27.jpg",
    caption:
      "Aloy's journey continues through uncharted lands #horizonforbiddenwest #forbiddenwest #VirtualPhotography #photomode #ps5",
    game: "Horizon Forbidden West",
    permalink: "https://www.instagram.com/p/DOYyY64iCQt/",
    timestamp: "2025-09-09T18:00:00+0000",
    mediaType: "IMAGE",
  },
];

export function getDemoPhotos(limit: number): ParsedPhoto[] {
  return DEMO_PHOTOS.slice(0, limit);
}

export function getDemoPhotoById(id: string): ParsedPhoto | null {
  return DEMO_PHOTOS.find((p) => p.id === id) ?? null;
}
