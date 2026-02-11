export default function GalleryLoading() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="page-padding pt-16 pb-4">
        <div className="content-max">
          <div className="h-32 bg-surface animate-pulse rounded" />
        </div>
      </div>
      <div className="page-padding py-8">
        <div className="content-max">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-4 bg-surface animate-pulse rounded-lg"
                style={{ height: `${250 + (i % 3) * 100}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
