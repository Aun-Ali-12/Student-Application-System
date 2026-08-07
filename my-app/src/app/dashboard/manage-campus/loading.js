import { Skeleton } from "@/components/admin/loader/Dashboard/Skeleton";

export default function CampusLoading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-4 w-64 bg-gray-100" />
      </div>

      {/* Add campus form card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <Skeleton className="h-4 w-32" />
        <div className="flex gap-3">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>
      </div>

      {/* Existing campuses card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        {/* Card header */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>

        {/* Campus rows */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-4 py-3 border border-gray-100 rounded-xl"
          >
            <Skeleton className="h-4 w-32" />
            <div className="flex gap-2">
              <Skeleton className="h-7 w-14 rounded-full" />
              <Skeleton className="h-7 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
