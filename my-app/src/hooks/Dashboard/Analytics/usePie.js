import { useStudent } from "@/ContextApi/StudentData";

export function usePie() {
  const { data, filteredData, filters } = useStudent();

  //Charts (Pie chart)
  const PieColor = ["#f59e0b", "#ef4444", "#22c55e"];
  const chartsData = filters.from || filters.to ? filteredData : data;
  const status = [
    {
      name: "pending",
      value: chartsData.filter((s) => s.status === "pending").length,
    },
    {
      name: "rejected",
      value: chartsData.filter((s) => s.status === "rejected").length,
    },
    {
      name: "approved",
      value: chartsData.filter((s) => s.status === "accepted").length,
    },
  ];

  return { status, PieColor };
}
