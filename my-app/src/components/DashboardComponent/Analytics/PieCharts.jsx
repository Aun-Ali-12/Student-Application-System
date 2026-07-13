import { useStudent } from "@/ContextApi/StudentData";
import { usePie } from "@/hooks/Dashboard/Analytics/usePie";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export function PieCharts() {
  //usePie hook
  const { status, PieColor } = usePie();

  //usestudent context
  const { filters, setFilters } = useStudent();

  //toggle state used to toggle date filter
  const [show, setShow] = useState(false);

  return (
    <>
      <h1> Applications by Status</h1>
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
      <div>
        <PieChart width={400} height={300}>
          <Pie
            data={status}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {status.map((entry, index) => (
              <Cell key={index} fill={PieColor[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </>
  );
}
