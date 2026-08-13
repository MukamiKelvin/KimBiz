// Reusable KPI card component used throughout the dashboard.
import KpiCard from "../components/KpiCard";

// ============================================================
// KIMBIZ DASHBOARD
// ============================================================
// This is the main dashboard page of KimBiz.
//
// The dashboard gives the business owner a quick overview
// of how their business is performing.
//
// For now, we are using static/sample data.
// Later, this data will come from our database/API.
// ============================================================

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* ======================================================
          PAGE HEADER
          ------------------------------------------------------
          Introduces the dashboard and gives the user a short
          description of what they can see on this page.
          ====================================================== */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Overview of your business performance.
        </p>
      </div>

      {/* ======================================================
    KPI / SUMMARY CARDS
    ------------------------------------------------------
    These cards give the business owner important numbers
    at a quick glance.

    Each card uses the reusable KpiCard component.
    ====================================================== */}
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

  {/* Revenue */}
  <KpiCard
    title="Revenue"
    value="KSh 245,000"
    change="12.5% from last month"
    changeType="positive"
  />

  {/* Expenses */}
  <KpiCard
    title="Expenses"
    value="KSh 82,000"
    change="4.2% from last month"
    changeType="negative"
  />

  {/* Profit */}
  <KpiCard
    title="Profit"
    value="KSh 163,000"
    change="18.1% from last month"
    changeType="positive"
  />

  {/* Customers */}
  <KpiCard
    title="Customers"
    value="128"
    change="8.4% from last month"
    changeType="positive"
  />

</div>

      {/* ======================================================
          DASHBOARD CONTENT
          ------------------------------------------------------
          This section will eventually contain our charts,
          recent transactions, top products and alerts.

          We are creating the structure first before adding
          the individual components.
          ====================================================== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* ====================================================
            REVENUE OVERVIEW
            ----------------------------------------------------
            This large section will eventually contain a
            revenue/sales chart.
            ==================================================== */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Revenue Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track your revenue over time.
            </p>
          </div>

          {/* Chart placeholder.
              We will replace this with a real interactive
              chart later. */}
          <div className="flex h-64 items-center justify-center rounded-lg bg-slate-50">
            <p className="text-sm text-slate-400">
              Revenue chart coming soon...
            </p>
          </div>
        </div>

        {/* ====================================================
            RECENT ACTIVITY
            ----------------------------------------------------
            This section will show the latest activities in
            the business.
            ==================================================== */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest business activity.
            </p>
          </div>

          {/* Temporary activity items.
              These will eventually come from our database. */}
          <div className="space-y-5">

            <div>
              <p className="text-sm font-medium text-slate-900">
                New sale recorded
              </p>

              <p className="mt-1 text-xs text-slate-500">
                KSh 12,500 • 10 minutes ago
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-900">
                New customer added
              </p>

              <p className="mt-1 text-xs text-slate-500">
                John Kamau • 35 minutes ago
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-900">
                Expense recorded
              </p>

              <p className="mt-1 text-xs text-slate-500">
                KSh 4,500 • 1 hour ago
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          LOWER DASHBOARD SECTION
          ------------------------------------------------------
          These cards will eventually contain useful business
          insights such as top-selling products and inventory
          alerts.
          ====================================================== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Top Selling Products */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-900">
            Top Selling Products
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your best-performing products.
          </p>

          {/* Temporary placeholder.
              We will build the actual product list later. */}
          <div className="mt-6 rounded-lg bg-slate-50 p-5">
            <p className="text-sm text-slate-400">
              Product performance will appear here.
            </p>
          </div>
        </div>

        {/* Low Stock */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-900">
            Low Stock
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Products that may need restocking.
          </p>

          {/* Temporary placeholder.
              Later this will automatically show products
              whose inventory reaches the defined threshold. */}
          <div className="mt-6 rounded-lg bg-slate-50 p-5">
            <p className="text-sm text-slate-400">
              Inventory alerts will appear here.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}