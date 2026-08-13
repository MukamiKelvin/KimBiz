"use client";

// ============================================================
// KIMBIZ - REVENUE OVERVIEW CHART
// ============================================================
// This component displays the business revenue for each month.
//
// We are using Recharts to create the chart instead of manually
// drawing the chart ourselves.
//
// This is currently sample data.
// Later, this data will come from our database.
// ============================================================

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


// ============================================================
// REVENUE DATA
// ============================================================
// Each object represents one month.
//
// "month" is displayed on the X-axis.
// "revenue" is displayed on the Y-axis.
// ============================================================

const revenueData = [
  {
    month: "Jan",
    revenue: 85000,
  },
  {
    month: "Feb",
    revenue: 102000,
  },
  {
    month: "Mar",
    revenue: 97000,
  },
  {
    month: "Apr",
    revenue: 125000,
  },
  {
    month: "May",
    revenue: 148000,
  },
  {
    month: "Jun",
    revenue: 163000,
  },
];


// ============================================================
// REVENUE CHART COMPONENT
// ============================================================
// This component can be placed anywhere in our application.
//
// Because we added "use client" at the top, Next.js knows that
// this component needs to run in the browser.
// ============================================================

export default function RevenueChart() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* ======================================================
          CHART HEADER
          ====================================================== */}
      <div className="mb-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Revenue Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monthly revenue performance
        </p>

      </div>


      {/* ======================================================
          CHART CONTAINER
          ------------------------------------------------------
          ResponsiveContainer allows the chart to automatically
          adapt to the width of its parent container.
          ====================================================== */}

      <div className="h-80 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={revenueData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >

            {/* ==================================================
                GRID
                --------------------------------------------------
                Creates the light horizontal/vertical guide
                lines behind the chart.
                ================================================== */}

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />


            {/* ==================================================
                X AXIS
                --------------------------------------------------
                Displays the months.
                ================================================== */}

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />


            {/* ==================================================
                Y AXIS
                --------------------------------------------------
                Displays the revenue amounts.
                ================================================== */}

            <YAxis
  axisLine={false}
  tickLine={false}
  tick={{ fill: "#64748b", fontSize: 12 }}
  tickFormatter={(value) => `${value / 1000}k`}
/>


            {/* ==================================================
                TOOLTIP
                --------------------------------------------------
                When the user moves their mouse over the chart,
                Recharts displays the revenue for that month.
                ================================================== */}

            <Tooltip
              formatter={(value) => [
                `KSh ${Number(value).toLocaleString()}`,
                "Revenue",
              ]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.08)",
              }}
            />


            {/* ==================================================
                REVENUE LINE
                --------------------------------------------------
                This is the actual line connecting our monthly
                revenue values.
                ================================================== */}

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#059669"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#059669",
              }}
              activeDot={{
                r: 6,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}