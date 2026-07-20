"use client";
import { useEffect } from "react";
import { PieCharts } from "../PieCharts";
import { useStudent } from "@/ContextApi/StudentData";
import { BarCharts } from "../BarCharts";
import { LineCharts } from "../LineCharts";
import { CampusBarCharts } from "../CampusBarCharts";

export function AnalyticsRep({ studentData, role }) {
  const { setData } = useStudent();

  useEffect(() => {
    setData(studentData || []);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <PieCharts />
        <BarCharts />
        <LineCharts />
        {role === "super_admin" ? <CampusBarCharts /> : ""}
      </div>
    </>
  );
}
