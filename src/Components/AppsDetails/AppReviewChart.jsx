import React from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppReviewChart = () => {
  const appsData = useLoaderData();

  return (
    <div className="mt-12 p-6 bg-base-100 rounded-3xl shadow-sm border border-base-200">
      <h3 className="text-2xl font-bold mb-6 text-left">
        Ratings
      </h3>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={appsData.ratings}>
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: 14, fontWeight: "bold", fill: "#4b5563" }}
              width={80}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={(value) => [value, "Count"]}
              contentStyle={{
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />

            <Bar dataKey="count" fill="#F97316" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppReviewChart;
