import { formatDate } from "@/lib/utils";
import type { ParsedPhoto } from "@/types/instagram";

export function PhotoInfo({ photo }: { photo: ParsedPhoto }) {
  const cleanCaption = photo.caption.split("#")[0].trim();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 bg-accent/10 text-accent text-label rounded">
          {photo.game}
        </span>
        <span className="font-mono text-caption text-text-muted">
          {formatDate(photo.timestamp)}
        </span>
      </div>

      {cleanCaption && (
        <p className="text-base text-text-secondary leading-relaxed max-w-xl">
          {cleanCaption}
        </p>
      )}

      <a
        href={photo.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-caption text-text-muted hover:text-accent transition-colors mt-1"
      >
        View on Instagram
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
