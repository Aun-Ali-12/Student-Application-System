import { useStudent } from "@/ContextApi/StudentData";
import { usePie } from "@/hooks/Dashboard/Analytics/usePie";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { DateFilter } from "./DateFilter";

export function PieCharts() {
  //usePie hook
  const { status, PieColor } = usePie();

  //usestudent context
  const { filters, setFilters } = useStudent();

  //toggle state used to toggle date filter
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        {/* Card header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Applications by Status
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Overall status distribution
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
        <div className="flex justify-center">
          <PieChart width={340} height={260}>
            <Pie
              data={status}
              cx={170}
              cy={120}
              innerRadius={60}
              outerRadius={100}
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
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12 }}
            />
          </PieChart>
        </div>
      </div>
    </>
  );
}
