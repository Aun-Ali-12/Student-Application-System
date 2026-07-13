"use client";
import { useEffect } from "react";
import { PieCharts } from "../PieCharts";
import { useStudent } from "@/ContextApi/StudentData";
import { BarCharts } from "../BarChart";

export function AnalyticsRep({ studentData }) {
  const { setData } = useStudent();

  useEffect(() => {
    setData(studentData || []);
  }, []);

  return (
    <>
      <PieCharts />
      <BarCharts />
    </>
  );
}
