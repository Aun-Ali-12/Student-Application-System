import { useStudent } from "@/ContextApi/StudentData";

export function useLine() {
  const { data, filteredData, filters } = useStudent();

  const chartsData = filters.from || filters.to ? filteredData : data;
  //returns an array of object with date and value
  const timeStats = chartsData
    //reduce method to use an empty and also loop out date from chartsdata
    .reduce((acc, student) => {
      //gets date from every object and extracts only date string from it
      const date = new Date(student.created_at).toLocaleDateString("en-CA"); //2026-07-09

      //checks if acc has already the date in its array of object
      let existing = acc.find((d) => d.date === date);

      //checks if date exists, then increment value of it
      if (existing) {
        existing.value += 1;
      } else {
        //if date doesn't exist, then push an object { date variable, value: 1 }
        acc.push({ date, value: 1 });
      }

      //return acc with updated value
      return acc;
    }, [])
    //sorts date in ascending order and using date object to make it numeric for future safe
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return { timeStats };
}
