import Link from "next/link";

interface PhotoNavProps {
  prevId?: string;
  nextId?: string;
}

export function PhotoNav({ prevId, nextId }: PhotoNavProps) {
  return (
    <div className="flex items-center justify-between">
      {prevId ? (
        <Link
          href={`/photo/${prevId}`}
          className="flex items-center gap-2 text-caption text-text-secondary hover:text-accent transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Previous
        </Link>
      ) : (
        <span />
      )}
      {nextId ? (
        <Link
          href={`/photo/${nextId}`}
          className="flex items-center gap-2 text-caption text-text-secondary hover:text-accent transition-colors"
        >
          Next
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
