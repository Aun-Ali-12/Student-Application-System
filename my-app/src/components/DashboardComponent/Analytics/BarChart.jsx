import useCourseChartData from "@/hooks/Dashboard/Analytics/useBar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function BarCharts() {
  const chartData = useCourseChartData();

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="course" />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Bar dataKey="count" fill="#4f46e5" />
    </BarChart>
  );
}
