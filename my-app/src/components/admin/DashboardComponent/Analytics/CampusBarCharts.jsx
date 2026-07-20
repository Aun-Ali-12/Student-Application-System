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

export function CampusBarCharts() {
  const { filters, setFilters } = useStudent();
  const { campusStats } = useCampusBar();
  const [show, setShow] = useState(false);
  return (
    <>
      Application by campuses:
      <div className="relative">
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Select by Date
        </button>
        {show && (
          <div className="absolute top-full left-0 z-1 ">
            From
            <input
              type="date"
              value={filters.from}
              onChange={(e) => {
                setFilters((prev) => ({ ...prev, from: e.target.value }));
              }}
              name=""
              id=""
            />
            To
            <input
              type="date"
              name=""
              id=""
              value={filters.to}
              onChange={(e) => {
                setFilters((prev) => ({ ...prev, to: e.target.value }));
              }}
            />
          </div>
        )}
      </div>
      <BarChart width={500} height={300} data={campusStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          fill="#22c55e"
          name="Applications by campuses"
          barSize="40"
        />
      </BarChart>
    </>
  );
}
