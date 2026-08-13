// ============================================================
// KIMBIZ - SALES PAGE
// ============================================================
// Main page for the Sales module.
//
// This page currently contains:
// 1. Sales page header
// 2. Record Sale / Edit Sale form
// 3. Sales KPI cards
// 4. Sales transactions table
//
// The Sales page owns the sales data and controls both
// creating and editing sales.
// ============================================================

"use client";

import { useState } from "react";

import KpiCard from "../../components/KpiCard";

import SalesTable from "../../components/SalesTable";

import RecordSaleForm from "../../components/RecordSaleForm";

import { Sale } from "../../types/sale";


// ============================================================
// SALES PAGE COMPONENT
// ============================================================

export default function SalesPage() {


  // ==========================================================
  // RECORD SALE FORM VISIBILITY
  // ==========================================================

  const [showRecordSaleForm, setShowRecordSaleForm] = useState(false);


  // ==========================================================
  // SALES DATA
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
  // SALE CURRENTLY BEING EDITED
  // ----------------------------------------------------------
  // null = creating a new sale
  // sale object = editing that specific sale
  // ==========================================================

  const [editingSale, setEditingSale] = useState<Sale | null>(null);


  // ==========================================================
  // ADD NEW SALE
  // ==========================================================

  function handleSaleCreated(newSale: Sale) {

    setSales((currentSales) => [
      newSale,
      ...currentSales,
    ]);

    setShowRecordSaleForm(false);

    setEditingSale(null);
  }


  // ==========================================================
  // START EDITING A SALE
  // ----------------------------------------------------------
  // Called when the user clicks Edit inside SalesTable.
  // ==========================================================

  function handleEditSale(sale: Sale) {

    // Store the selected sale.
    setEditingSale(sale);

    // Open the form.
    setShowRecordSaleForm(true);

  }


  // ==========================================================
  // UPDATE EXISTING SALE
  // ----------------------------------------------------------
  // Receives the edited sale from RecordSaleForm.
  //
  // We locate the original sale using its ID and replace it
  // with the updated version.
  // ==========================================================

  function handleSaleUpdated(updatedSale: Sale) {

    setSales((currentSales) =>
      currentSales.map((sale) =>
        sale.id === updatedSale.id
          ? updatedSale
          : sale
      )
    );


    // Exit edit mode.
    setEditingSale(null);

    // Close the form.
    setShowRecordSaleForm(false);


    // Helpful debugging message.
    console.log(
      "Sale updated successfully:",
      updatedSale
    );

  }


  // ==========================================================
  // CLOSE FORM
  // ----------------------------------------------------------
  // Used when the user clicks Close Form.
  //
  // We also clear editingSale so the next time the form opens
  // it behaves like a new sale.
  // ==========================================================

  function handleCloseForm() {

    setShowRecordSaleForm(false);

    setEditingSale(null);

  }


  return (

    <main>


      {/* ======================================================
          PAGE HEADER
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
            RECORD / EDIT BUTTON
            ==================================================== */}

        <button
          type="button"
          onClick={
            showRecordSaleForm
              ? handleCloseForm
              : () => setShowRecordSaleForm(true)
          }
          className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
        >

          {showRecordSaleForm
            ? "Close Form"
            : "+ Record Sale"}

        </button>

      </div>


      {/* ======================================================
          RECORD / EDIT SALE FORM
          ====================================================== */}

      {showRecordSaleForm && (

        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">


          {/* ==================================================
              FORM HEADER
              ================================================== */}

          <div className="mb-6">

            <h2 className="text-lg font-semibold text-slate-900">

              {editingSale
                ? "Edit Sale"
                : "Record New Sale"}

            </h2>


            <p className="mt-1 text-sm text-slate-500">

              {editingSale
                ? "Update the details of this transaction."
                : "Enter the details of the new transaction."}

            </p>

          </div>


          {/* ==================================================
              RECORD SALE FORM
              ================================================== */}

          <RecordSaleForm
            onSaleCreated={handleSaleCreated}
            editingSale={editingSale}
            onSaleUpdated={handleSaleUpdated}
          />

        </div>

      )}


      {/* ======================================================
          SALES KPI CARDS
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
          Displays the latest sales.
          ====================================================== */}

      <div className="mt-6">

        <SalesTable
          sales={sales}
          onEdit={handleEditSale}
        />

      </div>


    </main>
  );
}