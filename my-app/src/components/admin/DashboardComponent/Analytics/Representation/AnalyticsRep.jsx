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
      <div className="p-2 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">
            Overview of all student applications
          </p>
        </div>

        {/* Charts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PieCharts />
          <BarCharts />
          <LineCharts />
          {role === "super_admin" ? <CampusBarCharts /> : ""}
        </div>
      </div>
    </>
  );
}
