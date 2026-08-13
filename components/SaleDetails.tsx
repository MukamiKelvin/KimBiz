// ============================================================
// KIMBIZ - SALE DETAILS
// ============================================================
// Displays complete information about a sale.
//
// The SalesTable intentionally shows only the most important
// information. This component allows the user to see everything
// recorded for a specific sale.
// ============================================================

"use client";

import { Sale } from "../types/sale";


// ============================================================
// COMPONENT PROPS
// ============================================================

interface SaleDetailsProps {
  sale: Sale;
  onClose: () => void;
  onEdit: (sale: Sale) => void;
}


// ============================================================
// SALE DETAILS COMPONENT
// ============================================================

export default function SaleDetails({
  sale,
  onClose,
  onEdit,
}: SaleDetailsProps) {

  // ==========================================================
  // CALCULATE BALANCE
  // ----------------------------------------------------------
  // Only relevant when the customer has partially paid.
  // ==========================================================

  const balance =
    sale.status === "Partially Paid"
      ? sale.amount - (sale.amountPaid ?? 0)
      : 0;


  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">


      {/* ======================================================
          DETAILS PANEL
          ====================================================== */}

      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-xl">


        {/* ====================================================
            HEADER
            ==================================================== */}

        <div className="flex items-center justify-between border-b border-slate-200 p-6">

          <div>

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Sale Details
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              {sale.id}
            </h2>

          </div>


          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900"
          >
            Close
          </button>

        </div>


        {/* ====================================================
            SALE INFORMATION
            ==================================================== */}

        <div className="p-6">

          <h3 className="text-sm font-semibold text-slate-900">
            Sale Information
          </h3>


          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">


            {/* Customer */}

            <div>

              <p className="text-xs text-slate-500">
                Customer
              </p>

              <p className="mt-1 text-sm font-medium text-slate-900">
                {sale.customer}
              </p>

            </div>


            {/* Product */}

            <div>

              <p className="text-xs text-slate-500">
                Product
              </p>

              <p className="mt-1 text-sm font-medium text-slate-900">
                {sale.product}
              </p>

            </div>


            {/* Quantity */}

            <div>

              <p className="text-xs text-slate-500">
                Quantity
              </p>

              <p className="mt-1 text-sm font-medium text-slate-900">
                {sale.quantity}
              </p>

            </div>


            {/* Total */}

            <div>

              <p className="text-xs text-slate-500">
                Total Amount
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                KSh {sale.amount.toLocaleString()}
              </p>

            </div>


            {/* Date */}

            <div>

              <p className="text-xs text-slate-500">
                Date
              </p>

              <p className="mt-1 text-sm font-medium text-slate-900">
                {sale.date}
              </p>

            </div>


            {/* Payment Method */}

            <div>

              <p className="text-xs text-slate-500">
                Payment Method
              </p>

              <p className="mt-1 text-sm font-medium text-slate-900">
                {sale.paymentMethod}
              </p>

            </div>

          </div>


          {/* ==================================================
              PAYMENT INFORMATION
              ================================================== */}

          <div className="mt-8 border-t border-slate-200 pt-6">

            <h3 className="text-sm font-semibold text-slate-900">
              Payment Information
            </h3>


            <div className="mt-4 rounded-lg bg-slate-50 p-4">


              {/* Status */}

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Status
                </span>

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

              </div>


              {/* Partially Paid */}

              {sale.status === "Partially Paid" && (

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div>

                    <p className="text-xs text-slate-500">
                      Amount Paid
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-900">
                      KSh {(sale.amountPaid ?? 0).toLocaleString()}
                    </p>

                  </div>


                  <div>

                    <p className="text-xs text-slate-500">
                      Balance
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-900">
                      KSh {balance.toLocaleString()}
                    </p>

                  </div>

                </div>

              )}


              {/* Pending */}

              {sale.status === "Pending" && sale.dueDate && (

                <div className="mt-4">

                  <p className="text-xs text-slate-500">
                    Due Date
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {sale.dueDate}
                  </p>

                </div>

              )}


              {/* Overdue */}

              {sale.status === "Overdue" && sale.overdueSince && (

                <div className="mt-4">

                  <p className="text-xs text-slate-500">
                    Overdue Since
                  </p>

                  <p className="mt-1 text-sm font-medium text-red-700">
                    {sale.overdueSince}
                  </p>

                </div>

              )}


              {/* Cancelled */}

              {sale.status === "Cancelled" && (

                <div className="mt-4 space-y-4">


                  {sale.cancellationDate && (

                    <div>

                      <p className="text-xs text-slate-500">
                        Cancellation Date
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-900">
                        {sale.cancellationDate}
                      </p>

                    </div>

                  )}


                  {sale.cancellationReason && (

                    <div>

                      <p className="text-xs text-slate-500">
                        Cancellation Reason
                      </p>

                      <p className="mt-1 text-sm text-slate-700">
                        {sale.cancellationReason}
                      </p>

                    </div>

                  )}

                </div>

              )}


              {/* Refunded */}

              {sale.status === "Refunded" && (

                <div className="mt-4 space-y-4">


                  {sale.refundAmount !== undefined && (

                    <div>

                      <p className="text-xs text-slate-500">
                        Refund Amount
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-900">
                        KSh {sale.refundAmount.toLocaleString()}
                      </p>

                    </div>

                  )}


                  {sale.refundDate && (

                    <div>

                      <p className="text-xs text-slate-500">
                        Refund Date
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-900">
                        {sale.refundDate}
                      </p>

                    </div>

                  )}


                  {sale.refundReason && (

                    <div>

                      <p className="text-xs text-slate-500">
                        Refund Reason
                      </p>

                      <p className="mt-1 text-sm text-slate-700">
                        {sale.refundReason}
                      </p>

                    </div>

                  )}

                </div>

              )}

            </div>

          </div>


          {/* ==================================================
              ACTIONS
              ================================================== */}

          <div className="mt-8 flex justify-end gap-3 border-t border-slate-200 pt-6">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Close
            </button>


            <button
              type="button"
              onClick={() => onEdit(sale)}
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Edit Sale
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}