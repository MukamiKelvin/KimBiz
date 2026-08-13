// ============================================================
// KIMBIZ - SALES PAGE
// ============================================================
// Main page for the Sales module.
//
// This page currently contains:
// 1. Sales page header
// 2. Sales KPI cards
//
// The values below are temporary sample data.
// Later, they will come from our database.
// ============================================================

import KpiCard from "../../components/KpiCard";

// Displays recent sales transactions.
import SalesTable from "../../components/SalesTable";


// ============================================================
// SALES PAGE COMPONENT
// ============================================================

export default function SalesPage() {
  return (
    <main>

      {/* ======================================================
          PAGE HEADER
          ====================================================== */}

      <div className="mb-6">

        <h1 className="text-2xl font-bold text-slate-900">
          Sales
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your sales and transactions.
        </p>

      </div>


      {/* ======================================================
          SALES KPI CARDS
          ------------------------------------------------------
          These cards provide a quick overview of sales
          performance.
          ====================================================== */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">


        {/* ====================================================
            TOTAL SALES
            ==================================================== */}

        <KpiCard
          title="Total Sales"
          value="KSh 245,000"
          change="+12.5%"
          positive
        />


        {/* ====================================================
            TOTAL TRANSACTIONS
            ==================================================== */}

        <KpiCard
          title="Transactions"
          value="128"
          change="+8.2%"
          positive
        />


        {/* ====================================================
            AVERAGE SALE
            ==================================================== */}

        <KpiCard
          title="Average Sale"
          value="KSh 1,914"
          change="+4.3%"
          positive
        />

      </div>


      {/* ======================================================
    SALES TRANSACTIONS
    ------------------------------------------------------
    Displays the latest sales made by the business.
    ====================================================== */}

<div className="mt-6">
  <SalesTable />
</div>

    </main>
  );
}