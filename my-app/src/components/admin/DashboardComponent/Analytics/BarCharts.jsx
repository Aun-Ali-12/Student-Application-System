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

export function BarCharts() {
  const { courseStats } = useCourseBarChart();

  return (
    <div>
      <h2>Applications by Course</h2>
      {/* takes data  */}
      <BarChart width={500} height={300} data={courseStats}>
        {/* bg lines  */}
        <CartesianGrid strokeDasharray="3 3" />
        {/* label names */}
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        {/* auto show numbers of data  */}
        <YAxis />
        {/* shows details on hover  */}
        <Tooltip />
        {/* color explaination  */}
        <Legend />
        <Bar
          dataKey="value"
          fill="#6366f1"
          name="Application by courses"
          barSize="40"
        />
      </BarChart>
    </div>
  );
}
