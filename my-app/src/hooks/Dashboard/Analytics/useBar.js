import { useStudent } from "@/ContextApi/StudentData";
import { useMemo } from "react";

export function useCourseChartData() {
  const { data, filteredData, filters } = useStudent();

  const chartData = useMemo(() => {
    const finalData = filters.from || filters.to ? filteredData : data;

    if (!finalData || finalData.length === 0) return [];

    const counts = {};

    finalData.forEach((student) => {
      const course = student.course;
      counts[course] = (counts[course] || 0) + 1;
    });

    return Object.entries(counts).map(([course, count]) => ({
      course,
      count,
    }));
  }, [data, filteredData, filters]);

  return chartData;
}

export default useCourseChartData;
