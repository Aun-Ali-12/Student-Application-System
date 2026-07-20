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

export function LineCharts() {
  const { timeStats } = useLine();

  return (
    <>
      <div>
        <h2>Applications Over Time</h2>
        <LineChart width={600} height={300} data={timeStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            name="Applications"
          />
        </LineChart>
      </div>
    </>
  );
}
