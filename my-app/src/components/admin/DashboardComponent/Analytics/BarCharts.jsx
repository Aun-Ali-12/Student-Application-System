import { useCourseBarChart } from "@/hooks/Dashboard/Analytics/useBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { useStudent } from "@/ContextApi/StudentData";
import { useState } from "react";
import { DateFilter } from "./DateFilter";

export function BarCharts() {
  const { courseStats } = useCourseBarChart();
  const { filters, setFilters } = useStudent();
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      {/* Card header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Applications by Campus
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Campus wise distribution
          </p>
        </div>

        {/* Date filter — same as pie chart */}
        <DateFilter
          filters={filters}
          setFilters={setFilters}
          show={show}
          setShow={setShow}
        />
      </div>

      {/* Chart */}
      <BarChart
        width={440}
        height={260}
        data={courseStats}
        margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
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
          }}
          cursor={{ fill: "#EEEDFE" }}
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
          barSize={40}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
