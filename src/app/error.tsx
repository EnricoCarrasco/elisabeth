"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center page-padding">
      <div className="text-center">
        <h1 className="font-clash text-display-title text-text-primary mb-4">
          Something went wrong
        </h1>
        <p className="text-text-secondary mb-8">
          An error occurred while loading this page.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors text-sm tracking-[0.1em] uppercase cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
