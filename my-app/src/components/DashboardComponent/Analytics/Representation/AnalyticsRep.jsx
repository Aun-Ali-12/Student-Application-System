"use client";
import { useEffect } from "react";
import { PieCharts } from "../PieCharts";
import { useStudent } from "@/ContextApi/StudentData";
import { BarCharts } from "../BarCharts";
import { LineCharts } from "../LineCharts";

export function AnalyticsRep({ studentData }) {
  const { setData } = useStudent();

  useEffect(() => {
    setData(studentData || []);
  }, []);

  return (
    <>
      <PieCharts />
      <BarCharts />
      <LineCharts />
    </>
  );
}
