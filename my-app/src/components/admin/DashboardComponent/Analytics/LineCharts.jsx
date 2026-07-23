"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLine } from "@/hooks/Dashboard/Analytics/useLine";

export function LineCharts() {
  const { timeStats } = useLine();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm md:col-span-2">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-sm font-semibold text-gray-900">
          Applications Over Time
        </h2>
        <p className="text-xs text-gray-400 mt-0.5">Daily application trends</p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          data={timeStats}
          margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4F6"
            vertical={false}
          />
          <XAxis
            dataKey="date"
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
          />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12 }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#5B4FCF"
            strokeWidth={2.5}
            dot={{ fill: "#5B4FCF", r: 4, strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
            name="Applications"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
