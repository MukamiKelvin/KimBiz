// ============================================================
// KIMBIZ DASHBOARD
// ============================================================
// Main dashboard page for KimBiz.
//
// This page brings together the reusable dashboard components:
// - KPI cards
// - Revenue chart
// - Recent activity
// - Top selling products
// - Low stock
//
// At this stage, we are using sample/static data.
// Later, these values will come from our database.
// ============================================================

import KpiCard from "../components/KpiCard";

// Reusable revenue chart.
import RevenueChart from "../components/RevenueChart";

// Reusable recent activity component.
import RecentActivity from "../components/RecentActivity";

// Displays the products generating the most revenue.
import TopSellingProducts from "../components/TopSellingProducts";

// Displays products that need inventory attention.
import LowStock from "../components/LowStock";


// ============================================================
// DASHBOARD COMPONENT
// ============================================================

export default function Dashboard() {
  return (
    <main>

      {/* ======================================================
          DASHBOARD INTRODUCTION
          ====================================================== */}

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back to KimBiz
        </p>
      </div>


      {/* ======================================================
          KPI CARDS
          ------------------------------------------------------
          These cards provide a quick overview of the most
          important business numbers.
          ====================================================== */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <KpiCard
          title="Revenue"
          value="KSh 245,000"
          change="12.5% from last month"
          changeType="positive"
        />

        <KpiCard
          title="Expenses"
          value="KSh 82,000"
          change="4.2% from last month"
          changeType="negative"
        />

        <KpiCard
          title="Profit"
          value="KSh 163,000"
          change="18.1% from last month"
          changeType="positive"
        />

        <KpiCard
          title="Customers"
          value="128"
          change="8.4% from last month"
          changeType="positive"
        />

      </div>


      {/* ======================================================
    REVENUE OVERVIEW
    ------------------------------------------------------
    Displays the business revenue trend across the months.
    ====================================================== */}

<div className="mt-6">
  <RevenueChart />
</div>


{/* ======================================================
    RECENT ACTIVITY
    ------------------------------------------------------
    Displays the latest activities recorded in the business.
    ====================================================== */}

<div className="mt-6">
  <RecentActivity />
</div>


{/* ======================================================
    PRODUCTS AND INVENTORY
    ------------------------------------------------------
    Displays our top-performing products alongside products
    that need inventory attention.
    ====================================================== */}

<div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">


  {/* ====================================================
      TOP SELLING PRODUCTS
      ----------------------------------------------------
      Displays products generating the most revenue.
      ==================================================== */}

  <TopSellingProducts />


  {/* ====================================================
      LOW STOCK
      ----------------------------------------------------
      Displays products that are running low in inventory.
      ==================================================== */}

  <LowStock />


</div>


</main>
  );
}