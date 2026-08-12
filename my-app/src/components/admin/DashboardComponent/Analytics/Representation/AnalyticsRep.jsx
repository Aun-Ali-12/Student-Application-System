// AnalyticsRep.jsx
"use client";
import { useEffect } from "react";
import { useStudent } from "@/ContextApi/StudentData";
import { PieCharts } from "../PieCharts";
import { LineCharts } from "../LineCharts";
import { CampusBarCharts } from "../CampusBarCharts";
import { BarCharts } from "../BarCharts";

export function AnalyticsRep({ studentData, role }) {
  const { setData } = useStudent();

  useEffect(() => {
    setData(studentData || []);
  }, []);

  return (
    <div className="mt-10 p-10 space-y-5 md:mt-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of all student applications
        </p>
      </div>

      {/* Charts grid — responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
        <LineCharts /> {/* md:col-span-2 already inside */}
        <PieCharts />
        <BarCharts />
        <CampusBarCharts role={role} />
      </div>
    </div>
  );
}
