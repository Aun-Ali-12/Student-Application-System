import { useStudent } from "@/ContextApi/StudentData";
import { useCampusBar } from "@/hooks/Dashboard/Analytics/useCampusBar";
import { useState } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { DateFilter } from "./DateFilter";

export function CampusBarCharts() {
  const { filters, setFilters } = useStudent();
  const [show, setShow] = useState(false);
  const { campusStats } = useCampusBar();
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        {/* Card header */}
        <div className="flex items-center justify-between mb-6">
          <div className="mb-6">
            <h2 className="text-base font-semibold text-gray-900">
              Applications by Course
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Which courses are most popular
            </p>
          </div>

          {/* Date filter*/}
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
          data={campusStats}
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
            fill="#5B4FCF"
            name="Applications"
            barSize={40}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </div>
    </>
  );
}
