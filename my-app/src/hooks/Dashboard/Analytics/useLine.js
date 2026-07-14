import { useStudent } from "@/ContextApi/StudentData";

export function useLine() {
  const { data, filteredData, filters } = useStudent();

  const chartsData = filters.from || filters.to ? filteredData : data;

  const timeStats = chartsData
    .reduce((acc, students) => {
      const date = new Date(students.created_at).toLocaleDateString("en-CA");

      let existing = acc.find((d) => d.date === date);

      if (existing) {
        existing.value += 1;
      } else {
        acc.push({ date, value: 1 });
      }
      return acc;
    }, [])
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return { timeStats };
}
