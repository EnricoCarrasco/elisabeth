import "server-only";
import type {
  InstagramMedia,
  InstagramMediaResponse,
  ParsedPhoto,
} from "@/types/instagram";
import { parseGameFromCaption } from "./parse-game";

const INSTAGRAM_API = "https://graph.instagram.com/v21.0";
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN!;
const USER_ID = process.env.INSTAGRAM_USER_ID!;

function parseMedia(media: InstagramMedia): ParsedPhoto {
  return {
    id: media.id,
    imageUrl: media.thumbnail_url || media.media_url,
    caption: media.caption || "",
    game: parseGameFromCaption(media.caption),
    permalink: media.permalink,
    timestamp: media.timestamp,
    mediaType: media.media_type,
  };
}

export async function getInstagramMedia(
  limit = 50
): Promise<ParsedPhoto[]> {
  const fields =
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

  const allMedia: InstagramMedia[] = [];
  let url = `${INSTAGRAM_API}/${USER_ID}/media?fields=${fields}&limit=${Math.min(limit, 100)}&access_token=${ACCESS_TOKEN}`;

  while (url && allMedia.length < limit) {
    const res = await fetch(url, {
      next: { revalidate: 3600, tags: ["instagram"] },
    });

    if (!res.ok) {
      console.error("Instagram API error:", res.status, await res.text());
      return [];
    }

    const data: InstagramMediaResponse = await res.json();
    allMedia.push(...data.data);

    url =
      data.paging?.next && allMedia.length < limit ? data.paging.next : "";
  }

  return allMedia
    .slice(0, limit)
    .filter((m) => m.media_type !== "VIDEO")
    .map(parseMedia);
}

export async function getInstagramMediaById(
  id: string
): Promise<ParsedPhoto | null> {
  const fields =
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

  const res = await fetch(
    `${INSTAGRAM_API}/${id}?fields=${fields}&access_token=${ACCESS_TOKEN}`,
    { next: { revalidate: 3600, tags: ["instagram"] } }
  );

  if (!res.ok) return null;

  const media: InstagramMedia = await res.json();
  return parseMedia(media);
}

export async function refreshAccessToken(): Promise<{
  access_token: string;
  expires_in: number;
} | null> {
  const res = await fetch(
    `${INSTAGRAM_API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${ACCESS_TOKEN}`
  );

  if (!res.ok) return null;
  return res.json();
}
