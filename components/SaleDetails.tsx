// ============================================================
// KIMBIZ - SALE DETAILS
// ============================================================
// Displays complete information about a selected sale.
//
// This component is opened when the user clicks the eye icon
// in the SalesTable.
//
// It displays information that may not be visible in the
// main sales table, including payment details, cancellation
// information, refund information, and activity timestamps.
// ============================================================

"use client";

import { Sale } from "../types/sale";


// ============================================================
// SALE DETAILS PROPS
// ============================================================

interface SaleDetailsProps {
  sale: Sale;

  // Closes the details modal.
  onClose: () => void;

  // Opens the selected sale in edit mode.
  onEdit: (sale: Sale) => void;
}


// ============================================================
// DATE + TIME FORMATTER
// ============================================================

function formatDateTime(value?: string) {

  if (!value) {
    return "Not available";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
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
  // STATUS BADGE
  // ==========================================================

  const statusClass =
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
      : "bg-purple-100 text-purple-700";


  // ==========================================================
  // REMAINING BALANCE
  // ==========================================================

  const amountPaid = sale.amountPaid ?? 0;

  const remainingBalance =
    sale.amount - amountPaid;


  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >

      {/* ====================================================
          MODAL
          ==================================================== */}

      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >


        {/* ==================================================
            HEADER
            ================================================== */}

        <div className="flex items-start justify-between border-b border-slate-200 p-6">

          <div>

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Sale Details
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              {sale.id}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete information about this transaction.
            </p>

          </div>


          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sale details"
            className="rounded-lg px-3 py-2 text-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>

        </div>


        {/* ==================================================
            CONTENT
            ================================================== */}

        <div className="space-y-6 p-6">


          {/* ==================================================
              SALE INFORMATION
              ================================================== */}

          <section>

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Sale Information
            </h3>


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


              <div>
                <p className="text-xs text-slate-500">
                  Sale ID
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {sale.id}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500">
                  Customer
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {sale.customer}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500">
                  Product
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {sale.product}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500">
                  Quantity
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {sale.quantity}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500">
                  Sale Date
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {sale.date}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500">
                  Total Amount
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  KSh {sale.amount.toLocaleString()}
                </p>
              </div>

            </div>

          </section>


          {/* ==================================================
              PAYMENT INFORMATION
              ================================================== */}

          <section className="border-t border-slate-200 pt-6">

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Payment Information
            </h3>


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


              <div>
                <p className="text-xs text-slate-500">
                  Payment Method
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {sale.paymentMethod}
                </p>
              </div>


              <div>
                <p className="text-xs text-slate-500">
                  Status
                </p>

                <span
                  className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}
                >
                  {sale.status}
                </span>
              </div>


              {/* PARTIALLY PAID */}

              {sale.status === "Partially Paid" && (
                <>
                  <div>
                    <p className="text-xs text-slate-500">
                      Amount Paid
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-900">
                      KSh {amountPaid.toLocaleString()}
                    </p>
                  </div>


                  <div>
                    <p className="text-xs text-slate-500">
                      Remaining Balance
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      KSh {Math.max(remainingBalance, 0).toLocaleString()}
                    </p>
                  </div>
                </>
              )}


              {/* PENDING */}

              {sale.status === "Pending" && sale.dueDate && (
                <div>
                  <p className="text-xs text-slate-500">
                    Due Date
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    {sale.dueDate}
                  </p>
                </div>
              )}


              {/* OVERDUE */}

              {sale.status === "Overdue" && sale.overdueSince && (
                <div>
                  <p className="text-xs text-slate-500">
                    Overdue Since
                  </p>

                  <p className="mt-1 text-sm font-medium text-red-600">
                    {sale.overdueSince}
                  </p>
                </div>
              )}

            </div>

          </section>


          {/* ==================================================
              CANCELLATION INFORMATION
              ================================================== */}

          {sale.status === "Cancelled" && (
            <section className="border-t border-slate-200 pt-6">

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Cancellation Information
              </h3>


              <div className="space-y-4">


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

                    <div className="mt-1 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                      {sale.cancellationReason}
                    </div>
                  </div>
                )}

              </div>

            </section>
          )}


          {/* ==================================================
              REFUND INFORMATION
              ================================================== */}

          {sale.status === "Refunded" && (
            <section className="border-t border-slate-200 pt-6">

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Refund Information
              </h3>


              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


                {sale.refundAmount !== undefined && (
                  <div>
                    <p className="text-xs text-slate-500">
                      Refund Amount
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
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
                  <div className="sm:col-span-2">

                    <p className="text-xs text-slate-500">
                      Refund Reason
                    </p>

                    <div className="mt-1 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                      {sale.refundReason}
                    </div>

                  </div>
                )}

              </div>

            </section>
          )}


          {/* ==================================================
              ACTIVITY
              ================================================== */}

          <section className="border-t border-slate-200 pt-6">

            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Activity
            </h3>


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


              {/* CREATED */}

              <div>

                <p className="text-xs text-slate-500">
                  Recorded
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {formatDateTime(sale.createdAt)}
                </p>

              </div>


              {/* UPDATED */}

              <div>

                <p className="text-xs text-slate-500">
                  Last Updated
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {formatDateTime(sale.updatedAt)}
                </p>

              </div>

            </div>

          </section>

        </div>


        {/* ==================================================
            FOOTER
            ================================================== */}

        <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 p-6">


          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
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
  );
}