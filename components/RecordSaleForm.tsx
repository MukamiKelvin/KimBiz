// ============================================================
// KIMBIZ - RECORD SALE FORM
// ============================================================
// This component allows a business to:
//
// 1. Record a new sale.
// 2. Edit an existing sale.
//
// Later, the form will send the sale to our backend/database.
// ============================================================

"use client";

import { useEffect, useState } from "react";

import { Sale } from "../types/sale";


// ============================================================
// RECORD SALE FORM PROPS
// ============================================================

interface RecordSaleFormProps {
  onSaleCreated: (sale: Sale) => void;
  editingSale?: Sale | null;
  onSaleUpdated?: (sale: Sale) => void;
}


// ============================================================
// RECORD SALE FORM
// ============================================================

export default function RecordSaleForm({
  onSaleCreated,
  editingSale = null,
  onSaleUpdated,
}: RecordSaleFormProps) {


  // ==========================================================
  // CUSTOMER
  // ==========================================================

  const [customer, setCustomer] = useState("");


  // ==========================================================
  // PRODUCT
  // ==========================================================

  const [product, setProduct] = useState("");


  // ==========================================================
  // QUANTITY
  // ==========================================================

  const [quantity, setQuantity] = useState(1);


  // ==========================================================
  // UNIT PRICE
  // ==========================================================

  const [unitPrice, setUnitPrice] = useState(0);


  // ==========================================================
  // PAYMENT METHOD
  // ==========================================================

  const [paymentMethod, setPaymentMethod] = useState("M-Pesa");


  // ==========================================================
  // PAYMENT STATUS
  // ==========================================================

  const [paymentStatus, setPaymentStatus] = useState<
    Sale["status"]
  >("Paid");


  // ==========================================================
  // ADDITIONAL PAYMENT INFORMATION
  // ==========================================================

  const [amountPaid, setAmountPaid] = useState(0);

  const [dueDate, setDueDate] = useState("");

  const [overdueSince, setOverdueSince] = useState("");

  const [cancellationDate, setCancellationDate] = useState("");

  const [cancellationReason, setCancellationReason] = useState("");

  const [refundAmount, setRefundAmount] = useState(0);

  const [refundDate, setRefundDate] = useState("");

  const [refundReason, setRefundReason] = useState("");


  // ==========================================================
  // LOAD EXISTING SALE WHEN EDITING
  // ==========================================================

  useEffect(() => {

    if (!editingSale) {
      return;
    }


    // --------------------------------------------------------
    // BASIC SALE INFORMATION
    // --------------------------------------------------------

    setCustomer(editingSale.customer);

    setProduct(editingSale.product);

    setQuantity(editingSale.quantity);


    // --------------------------------------------------------
    // UNIT PRICE
    // --------------------------------------------------------

    setUnitPrice(
      editingSale.quantity > 0
        ? editingSale.amount / editingSale.quantity
        : 0
    );


    // --------------------------------------------------------
    // PAYMENT INFORMATION
    // --------------------------------------------------------

    setPaymentMethod(editingSale.paymentMethod);

    setPaymentStatus(editingSale.status);


    // --------------------------------------------------------
    // CONDITIONAL PAYMENT INFORMATION
    // --------------------------------------------------------

    setAmountPaid(editingSale.amountPaid ?? 0);

    setDueDate(editingSale.dueDate ?? "");

    setOverdueSince(editingSale.overdueSince ?? "");

    setCancellationDate(
      editingSale.cancellationDate ?? ""
    );

    setCancellationReason(
      editingSale.cancellationReason ?? ""
    );

    setRefundAmount(
      editingSale.refundAmount ?? 0
    );

    setRefundDate(
      editingSale.refundDate ?? ""
    );

    setRefundReason(
      editingSale.refundReason ?? ""
    );

  }, [editingSale]);


  // ==========================================================
  // AUTOMATIC TOTAL
  // ==========================================================

  const total = quantity * unitPrice;


  // ==========================================================
  // FORM SUBMISSION
  // ==========================================================

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();


    // ========================================================
    // TIMESTAMP
    // --------------------------------------------------------
    // Capture the exact moment the form is submitted.
    //
    // New sale:
    // createdAt = current time
    // updatedAt = current time
    //
    // Edited sale:
    // createdAt = original creation time
    // updatedAt = current time
    // ========================================================

    const currentTimestamp = new Date().toISOString();


    // ========================================================
    // SALE DATA
    // ========================================================

    const sale: Sale = {

      id: editingSale
        ? editingSale.id
        : `#SALE${Date.now()}`,

      customer,

      product,

      date: editingSale
        ? editingSale.date
        : new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),


      // ======================================================
      // ACTIVITY TIMESTAMPS
      // ======================================================

      createdAt: editingSale
        ? editingSale.createdAt
        : currentTimestamp,

      updatedAt: currentTimestamp,


      quantity,

      amount: total,

      paymentMethod,

      status: paymentStatus,


      // ======================================================
      // ADDITIONAL PAYMENT INFORMATION
      // ======================================================

      amountPaid:
        paymentStatus === "Partially Paid"
          ? amountPaid
          : undefined,


      dueDate:
        paymentStatus === "Pending"
          ? dueDate
          : undefined,


      overdueSince:
        paymentStatus === "Overdue"
          ? overdueSince
          : undefined,


      cancellationDate:
        paymentStatus === "Cancelled"
          ? cancellationDate
          : undefined,


      cancellationReason:
        paymentStatus === "Cancelled"
          ? cancellationReason
          : undefined,


      refundAmount:
        paymentStatus === "Refunded"
          ? refundAmount
          : undefined,


      refundDate:
        paymentStatus === "Refunded"
          ? refundDate
          : undefined,


      refundReason:
        paymentStatus === "Refunded"
          ? refundReason
          : undefined,
    };


    // ========================================================
    // CREATE OR UPDATE
    // ========================================================

    if (editingSale) {

      if (onSaleUpdated) {
        onSaleUpdated(sale);
      }

    } else {

      onSaleCreated(sale);

    }


    // ========================================================
    // DEBUGGING
    // ========================================================

    console.log(
      editingSale
        ? "Sale updated:"
        : "New sale created:",
      sale
    );

  }


  // ==========================================================
  // USER INTERFACE
  // ==========================================================

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >


      {/* ====================================================
          CUSTOMER
          ==================================================== */}

      <div>

        <label
          htmlFor="customer"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Customer
        </label>

        <input
          id="customer"
          type="text"
          value={customer}
          onChange={(event) =>
            setCustomer(event.target.value)
          }
          placeholder="Enter customer name"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
        />

      </div>


      {/* ====================================================
          PRODUCT
          ==================================================== */}

      <div>

        <label
          htmlFor="product"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Product
        </label>

        <input
          id="product"
          type="text"
          value={product}
          onChange={(event) =>
            setProduct(event.target.value)
          }
          placeholder="Enter product name"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
        />

      </div>


      {/* ====================================================
          QUANTITY + UNIT PRICE
          ==================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">


        {/* Quantity */}

        <div>

          <label
            htmlFor="quantity"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Quantity
          </label>

          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(event) =>
              setQuantity(Number(event.target.value))
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
          />

        </div>


        {/* Unit Price */}

        <div>

          <label
            htmlFor="unitPrice"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Unit Price
          </label>

          <input
            id="unitPrice"
            type="number"
            min="0"
            value={unitPrice}
            onChange={(event) =>
              setUnitPrice(Number(event.target.value))
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
          />

        </div>

      </div>


      {/* ====================================================
          TOTAL
          ==================================================== */}

      <div className="rounded-lg bg-slate-50 p-4">

        <p className="text-sm text-slate-500">
          Total
        </p>

        <p className="mt-1 text-2xl font-bold text-slate-900">
          KSh {total.toLocaleString()}
        </p>

      </div>


      {/* ====================================================
          PAYMENT METHOD
          ==================================================== */}

      <div>

        <label
          htmlFor="paymentMethod"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Payment Method
        </label>

        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(event) =>
            setPaymentMethod(event.target.value)
          }
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
        >

          <option value="M-Pesa">
            M-Pesa
          </option>

          <option value="Cash">
            Cash
          </option>

          <option value="Card">
            Card
          </option>

          <option value="Bank Transfer">
            Bank Transfer
          </option>

        </select>

      </div>


      {/* ====================================================
          PAYMENT STATUS
          ==================================================== */}

      <div>

        <label
          htmlFor="paymentStatus"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Payment Status
        </label>

        <select
          id="paymentStatus"
          value={paymentStatus}
          onChange={(event) =>
            setPaymentStatus(
              event.target.value as Sale["status"]
            )
          }
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
        >

          <option value="Paid">
            Paid
          </option>

          <option value="Partially Paid">
            Partially Paid
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Overdue">
            Overdue
          </option>

          <option value="Cancelled">
            Cancelled
          </option>

          <option value="Refunded">
            Refunded
          </option>

        </select>

      </div>


      {/* ======================================================
          CONDITIONAL PAYMENT INFORMATION
          ====================================================== */}


      {/* PARTIALLY PAID */}

      {paymentStatus === "Partially Paid" && (

        <div className="mt-4">

          <label
            htmlFor="amountPaid"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Amount Paid
          </label>

          <input
            id="amountPaid"
            type="number"
            min="0"
            value={amountPaid}
            onChange={(event) =>
              setAmountPaid(
                Number(event.target.value)
              )
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
            placeholder="Enter amount paid"
          />

        </div>

      )}


      {/* PENDING */}

      {paymentStatus === "Pending" && (

        <div className="mt-4">

          <label
            htmlFor="dueDate"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Due Date
          </label>

          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(event) =>
              setDueDate(event.target.value)
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
          />

        </div>

      )}


      {/* OVERDUE */}

      {paymentStatus === "Overdue" && (

        <div className="mt-4">

          <label
            htmlFor="overdueSince"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Overdue Since
          </label>

          <input
            id="overdueSince"
            type="date"
            value={overdueSince}
            onChange={(event) =>
              setOverdueSince(event.target.value)
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
          />

        </div>

      )}


      {/* CANCELLED */}

      {paymentStatus === "Cancelled" && (

        <div className="mt-4 space-y-4">


          <div>

            <label
              htmlFor="cancellationDate"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Cancellation Date
            </label>

            <input
              id="cancellationDate"
              type="date"
              value={cancellationDate}
              onChange={(event) =>
                setCancellationDate(
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
            />

          </div>


          <div>

            <label
              htmlFor="cancellationReason"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Cancellation Reason
            </label>

            <textarea
              id="cancellationReason"
              value={cancellationReason}
              onChange={(event) =>
                setCancellationReason(
                  event.target.value
                )
              }
              placeholder="Why was this sale cancelled?"
              rows={3}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
            />

          </div>

        </div>

      )}


      {/* REFUNDED */}

      {paymentStatus === "Refunded" && (

        <div className="mt-4 space-y-4">


          <div>

            <label
              htmlFor="refundAmount"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Refund Amount
            </label>

            <input
              id="refundAmount"
              type="number"
              min="0"
              value={refundAmount}
              onChange={(event) =>
                setRefundAmount(
                  Number(event.target.value)
                )
              }
              placeholder="Enter refund amount"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
            />

          </div>


          <div>

            <label
              htmlFor="refundDate"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Refund Date
            </label>

            <input
              id="refundDate"
              type="date"
              value={refundDate}
              onChange={(event) =>
                setRefundDate(
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
            />

          </div>


          <div>

            <label
              htmlFor="refundReason"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Refund Reason
            </label>

            <textarea
              id="refundReason"
              value={refundReason}
              onChange={(event) =>
                setRefundReason(
                  event.target.value
                )
              }
              placeholder="Why was this sale refunded?"
              rows={3}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
            />

          </div>

        </div>

      )}


      {/* ====================================================
          SUBMIT BUTTON
          ==================================================== */}

      <button
        type="submit"
        className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800"
      >

        {editingSale
          ? "Save Changes"
          : "Record Sale"}

      </button>


    </form>

  );
}