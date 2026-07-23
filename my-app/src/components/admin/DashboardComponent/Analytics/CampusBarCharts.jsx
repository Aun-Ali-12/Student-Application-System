"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DateFilter } from "./DateFilter";
import { useCampusBar } from "@/hooks/Dashboard/Analytics/useCampusBar";
import { useStudent } from "@/ContextApi/StudentData";

export function CampusBarCharts({ role }) {
  const { campusStats } = useCampusBar();
  const { filters, setFilters } = useStudent();
  if (role !== "super_admin") return null;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Applications by Campus
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Campus wise distribution
          </p>
        </div>
        <DateFilter filters={filters} setFilters={setFilters} />
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={campusStats}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4F6"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 10, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #E5E7EB",
              fontSize: 12,
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
            }}
            cursor={{ fill: "#DCFCE7" }}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12 }}
          />
          <Bar
            dataKey="value"
            fill="#22c55e"
            name="Applications"
            barSize={36}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
