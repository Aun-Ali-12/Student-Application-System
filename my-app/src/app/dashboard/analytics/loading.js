import { SkeletonCard } from "@/components/admin/loader/Analytics/Skeleton";

export default function AnalyticsLoading() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="animate-pulse space-y-2">
        <div className="h-7 w-40 bg-gray-200 rounded-lg" />
        <div className="h-4 w-64 bg-gray-100 rounded-lg" />
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkeletonCard height="h-[320px]" />
        <SkeletonCard height="h-[320px]" />
        <SkeletonCard height="h-[320px] md:col-span-2" />
        <SkeletonCard height="h-[320px]" />
      </div>
    </div>
  );
}
