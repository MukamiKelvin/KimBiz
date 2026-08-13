// ============================================================
// KIMBIZ - SALES TABLE
// ============================================================
// Displays the latest sales transactions.
//
// The sales data is received from the parent component.
//
// This component provides:
// 1. View action
// 2. Edit action
//
// View → Opens complete sale details.
// Edit → Opens the sale in the editing form.
// ============================================================


// ============================================================
// SALE TYPE
// ============================================================

import { Sale } from "../types/sale";
import { Eye } from "lucide-react";


// ============================================================
// SALES TABLE PROPS
// ============================================================

interface SalesTableProps {
  sales: Sale[];

  // Opens the selected sale in the details view.
  onView: (sale: Sale) => void;

  // Opens the selected sale in edit mode.
  onEdit: (sale: Sale) => void;
}


// ============================================================
// SALES TABLE COMPONENT
// ============================================================

export default function SalesTable({
  sales,
  onView,
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
          ====================================================== */}

      <div className="overflow-x-auto">

        <table className="w-full min-w-[850px]">


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


              {/* Actions */}

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Actions
              </th>

            </tr>

          </thead>


          {/* ==================================================
              TABLE BODY
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
                    ================================================== */}

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      sale.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : sale.status === "Pending"
                        ? "bg-amber-100 text-amber-700"
                        : sale.status === "Partially Paid"
                        ? "bg-blue-100 text-blue-700"
                        : sale.status === "Overdue"
                        ? "bg-red-100 text-red-700"
                        : sale.status === "Cancelled"
                        ? "bg-slate-200 text-slate-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {sale.status}
                  </span>

                </td>


                {/* ==================================================
                    ACTIONS
                    --------------------------------------------------
                    View → Opens complete sale information.
                    Edit → Opens the sale in edit mode.
                    ================================================== */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-2">


                    {/* ==================================================
                        VIEW
                        ================================================== */}

                    <button
  type="button"
  onClick={() => onView(sale)}
  title="View sale details"
  aria-label={`View details for ${sale.id}`}
  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
>
  <Eye size={18} />
</button>


                    {/* ==================================================
                        EDIT
                        ================================================== */}

                    <button
                      type="button"
                      onClick={() => onEdit(sale)}
                      className="rounded-lg px-3 py-1.5 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
                    >
                      Edit
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}