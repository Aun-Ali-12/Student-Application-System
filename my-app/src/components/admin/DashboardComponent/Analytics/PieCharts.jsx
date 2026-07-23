"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DateFilter } from "./DateFilter";
import { useStudent } from "@/ContextApi/StudentData";
import { usePie } from "@/hooks/Dashboard/Analytics/usePie";

export function PieCharts() {
  const { filters, setFilters } = useStudent();
  const { status, PieColor } = usePie();
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            Applications by Status
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Overall status breakdown
          </p>
        </div>
        <DateFilter filters={filters} setFilters={setFilters} />
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={status}
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={95}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
            labelLine={false}
          >
            {status.map((entry, index) => (
              <Cell key={index} fill={PieColor[index]} />
            ))}
          </Pie>
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
            iconSize={12}
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
