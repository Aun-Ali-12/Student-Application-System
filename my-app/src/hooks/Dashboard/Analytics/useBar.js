import { useStudent } from "@/ContextApi/StudentData";

export function useCourseBarChart() {
  const { data, filteredData, filters } = useStudent();

  const chartsData = filters.from || filters.to ? filteredData : data;
  console.log(chartsData);

  // extracting courses using map method and then apply Set to remove duplicate values and then making it an array using spread operator
  const courses = [...new Set(chartsData.map((c) => c.course))];

  //map on courses to take out unique course and give it as value of key named as "name"
  const courseStats = courses.map((course) => ({
    name: course,
    value: chartsData.filter((c) => c.course === course).length, //filters out unique course in whole data and find length using .length
  }));

  return { courseStats };
}
