import { useStudent } from "@/ContextApi/StudentData";

export function useCampusBar() {
  const { data, filteredData, filters } = useStudent();
  const chartsData = filters.from || filters.to ? filteredData : data;

  //takes out unqiue campus names
  const campusNames = [...new Set(chartsData.map((c) => c.campuses?.name))];

  //creates an array of object of all unique campus and their values
  const campusStats = campusNames.map((c) => ({
    name: c,
    value: chartsData.filter((camp) => camp.campuses.name === c).length,
  }));

  return { campusStats };
}
