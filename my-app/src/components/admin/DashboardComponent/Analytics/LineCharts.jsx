"use client";

import { useLine } from "@/hooks/Dashboard/Analytics/useLine";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { DateFilter } from "./DateFilter";
import { useStudent } from "@/ContextApi/StudentData";
import { useState } from "react";

export function LineCharts() {
  const { timeStats } = useLine();
  const { filters, setFilters } = useStudent();
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm lg:col-span-2">
        {/* Card header */}
        <div className="flex items-center justify-between mb-6">
          <div className="mb-6">
            <h2 className="text-base font-semibold text-gray-900">
              Applications Over Time
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Daily application trends
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
        <LineChart
          width={860}
          height={260}
          data={timeStats}
          margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
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
            strokeWidth={2}
            dot={{ fill: "#5B4FCF", r: 4 }}
            activeDot={{ r: 6 }}
            name="Applications"
          />
        </LineChart>
      </div>
    </>
  );
}
