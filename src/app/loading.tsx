export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 border border-accent border-t-transparent rounded-full animate-spin" />
        <span className="text-label text-text-muted">Loading</span>
      </div>
    </div>
  );
}
