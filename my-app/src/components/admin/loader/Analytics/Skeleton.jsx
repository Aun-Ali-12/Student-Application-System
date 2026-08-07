// src/components/ui/SkeletonCard.jsx

export function SkeletonCard({ height = "h-[300px]" }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl p-5 shadow-sm animate-pulse ${height}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="space-y-2">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-3 w-28 bg-gray-100 rounded" />
        </div>
        <div className="h-7 w-24 bg-gray-100 rounded-lg" />
      </div>
      {/* Body */}
      <div className="h-full bg-gray-100 rounded-xl" />
    </div>
  );
}
