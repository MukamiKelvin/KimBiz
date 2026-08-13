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
"use client";

import { useState } from "react";

import KpiCard from "../../components/KpiCard";

// Displays recent sales transactions.
import SalesTable from "../../components/SalesTable";

import RecordSaleForm from "../../components/RecordSaleForm";

import { Sale } from "../../types/sale";


// ============================================================
// SALES PAGE COMPONENT
// ============================================================

export default function SalesPage() {

      // ==========================================================
  // RECORD SALE FORM VISIBILITY
  // ----------------------------------------------------------
  // Controls whether the Record Sale form is visible.
  //
  // false = form hidden
  // true  = form visible
  // ==========================================================

  const [showRecordSaleForm, setShowRecordSaleForm] = useState(false);

  // ==========================================================
// SALES DATA
// ----------------------------------------------------------
// The Sales page now owns the sales data.
//
// Later, this state will be replaced with data retrieved
// from our database.
// ==========================================================

const [sales, setSales] = useState<Sale[]>([
  {
    id: "#SALE001",
    customer: "John Kamau",
    product: "Laptop",
    date: "Aug 13, 2026",
    quantity: 1,
    amount: 12500,
    paymentMethod: "M-Pesa",
    status: "Paid",
  },

  {
    id: "#SALE002",
    customer: "Mary Wanjiku",
    product: "Keyboard",
    date: "Aug 13, 2026",
    quantity: 2,
    amount: 8500,
    paymentMethod: "Cash",
    status: "Paid",
  },

  {
    id: "#SALE003",
    customer: "Brian Mwangi",
    product: "Monitor",
    date: "Aug 12, 2026",
    quantity: 1,
    amount: 15000,
    paymentMethod: "Card",
    status: "Pending",
  },

  {
    id: "#SALE004",
    customer: "Grace Njeri",
    product: "Mouse",
    date: "Aug 11, 2026",
    quantity: 3,
    amount: 6200,
    paymentMethod: "M-Pesa",
    status: "Paid",
  },
]);

// ==========================================================
// ADD NEW SALE
// ----------------------------------------------------------
// Receives a newly created sale from RecordSaleForm and
// adds it to the beginning of our existing sales array.
// ==========================================================

function handleSaleCreated(newSale: Sale) {
  setSales((currentSales) => [
    newSale,
    ...currentSales,
  ]);

  // Close the Record Sale form after submission.
  setShowRecordSaleForm(false);
}

  return (
    <main>

      {/* ======================================================
    PAGE HEADER
    ------------------------------------------------------
    Contains the Sales page title and the button used to
    open the Record Sale form.
    ====================================================== */}

<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

  <div>

    <h1 className="text-2xl font-bold text-slate-900">
      Sales
    </h1>

    <p className="mt-1 text-sm text-slate-500">
      Manage your sales and transactions.
    </p>

  </div>


  {/* ====================================================
      RECORD SALE BUTTON
      ==================================================== */}

  <button
    type="button"
    onClick={() => setShowRecordSaleForm(!showRecordSaleForm)}
    className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
  >
    {showRecordSaleForm ? "Close Form" : "+ Record Sale"}
  </button>

</div>

  {/* ======================================================
    RECORD SALE FORM
    ------------------------------------------------------
    The form only appears when showRecordSaleForm is true.
    ====================================================== */}

{showRecordSaleForm && (
  <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

    <div className="mb-6">

      <h2 className="text-lg font-semibold text-slate-900">
        Record New Sale
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Enter the details of the new transaction.
      </p>

    </div>

    <RecordSaleForm onSaleCreated={handleSaleCreated} />

  </div>
)}


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
  <SalesTable sales={sales} />
</div>

    </main>
  );
}