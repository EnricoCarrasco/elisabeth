import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center page-padding">
      <div className="text-center">
        <h1 className="font-clash text-[clamp(5rem,15vw,12rem)] font-bold text-text-primary/10 leading-none">
          404
        </h1>
        <p className="text-text-secondary mt-4 mb-8">
          This page doesn&apos;t exist in any world.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-colors text-sm tracking-[0.1em] uppercase"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
