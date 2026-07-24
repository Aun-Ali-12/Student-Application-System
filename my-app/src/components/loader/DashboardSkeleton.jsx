import { Skeleton } from "./Skeleton";

export const DashboardSkeleton = () => {
  return (
    <>
      <div className="p-1 space-y-6">
        {/* Header */}
        <div>
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-56 mt-2" />
        </div>

        {/* Filters row */}
        <Skeleton className="h-10 w-full rounded-xl" />

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>

        {/* Pagination */}
        <Skeleton className="h-8 w-64 mx-auto" />
      </div>
    </>
  );
};
