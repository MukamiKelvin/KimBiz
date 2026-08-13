// ============================================================
// KIMBIZ - SALES TABLE
// ============================================================
// Displays the latest sales transactions.
//
// The sales data is received from the parent component.
//
// This component also provides an Edit action for each sale.
// When Edit is clicked, the selected sale is sent back to the
// parent component through the onEdit function.
// ============================================================


// ============================================================
// SALE TYPE
// ============================================================
// Imports the Sale interface that defines the structure
// and data types of every sale.
// ============================================================

import { Sale } from "../types/sale";


// ============================================================
// SALES TABLE PROPS
// ============================================================
// Defines the information and functions that this component
// receives from its parent.
//
// sales  → The list of sales displayed in the table.
//
// onEdit → A function supplied by the parent component.
//          It receives the sale that the user wants to edit.
// ============================================================

interface SalesTableProps {
  sales: Sale[];
  onEdit: (sale: Sale) => void;
}


// ============================================================
// SALES TABLE COMPONENT
// ============================================================

export default function SalesTable({
  sales,
  onEdit,
}: SalesTableProps) {

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">


      {/* ======================================================
          TABLE HEADER
          ====================================================== */}

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Recent Sales
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest sales transactions.
        </p>

      </div>


      {/* ======================================================
          TABLE
          ------------------------------------------------------
          overflow-x-auto allows the table to scroll horizontally
          on smaller screens instead of breaking the layout.
          ====================================================== */}

      <div className="overflow-x-auto">

        <table className="w-full min-w-[800px]">


          {/* ==================================================
              TABLE HEAD
              ================================================== */}

          <thead className="border-b border-slate-200 bg-slate-50">

            <tr>

              {/* Sale ID */}

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sale ID
              </th>


              {/* Customer */}

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Customer
              </th>


              {/* Date */}

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Date
              </th>


              {/* Amount */}

              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Amount
              </th>


              {/* Payment */}

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Payment
              </th>


              {/* Status */}

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>


              {/* ==================================================
                  ACTIONS
                  --------------------------------------------------
                  Contains actions that can be performed on a sale.
                  ================================================== */}

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Actions
              </th>

            </tr>

          </thead>


          {/* ==================================================
              TABLE BODY
              --------------------------------------------------
              .map() loops through the sales array and creates
              one table row for every sale.
              ================================================== */}

          <tbody>

            {sales.map((sale) => (

              <tr
                key={sale.id}
                className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
              >


                {/* ==================================================
                    SALE ID
                    ================================================== */}

                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {sale.id}
                </td>


                {/* ==================================================
                    CUSTOMER
                    ================================================== */}

                <td className="px-6 py-4 text-sm text-slate-600">
                  {sale.customer}
                </td>


                {/* ==================================================
                    DATE
                    ================================================== */}

                <td className="px-6 py-4 text-sm text-slate-600">
                  {sale.date}
                </td>


                {/* ==================================================
                    AMOUNT
                    ================================================== */}

                <td className="px-6 py-4 text-right text-sm font-medium text-slate-900">
                  KSh {sale.amount.toLocaleString()}
                </td>


                {/* ==================================================
                    PAYMENT METHOD
                    ================================================== */}

                <td className="px-6 py-4 text-sm text-slate-600">
                  {sale.paymentMethod}
                </td>


                {/* ==================================================
                    STATUS
                    --------------------------------------------------
                    The badge changes depending on the sale status.
                    ================================================== */}

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      sale.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {sale.status}
                  </span>

                </td>


                {/* ==================================================
                    EDIT ACTION
                    --------------------------------------------------
                    Sends the selected sale back to the parent
                    component so it can be opened in edit mode.
                    ================================================== */}

                <td className="px-6 py-4">

                  <button
                    type="button"
                    onClick={() => onEdit(sale)}
                    className="rounded-lg px-3 py-1.5 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
                  >
                    Edit
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}