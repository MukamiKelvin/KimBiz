// ============================================================
// KIMBIZ - RECORD SALE FORM
// ============================================================
// This component will allow a business to record a new sale.
//
// For now, we are only building the frontend form.
// Later, the form will send the sale to our backend/database.
// ============================================================

"use client";

import { useState } from "react";

import { Sale } from "../types/sale";


// ============================================================
// RECORD SALE FORM
// ============================================================

export default function RecordSaleForm({
  onSaleCreated,
}: {
  onSaleCreated: (sale: Sale) => void;
}) {

  // ----------------------------------------------------------
  // CUSTOMER
  // ----------------------------------------------------------
  // useState allows React to remember the value entered
  // into the customer field.
  //
  // customer = current value
  // setCustomer = function used to change the value
  // ----------------------------------------------------------

  const [customer, setCustomer] = useState("");


  // ----------------------------------------------------------
  // PRODUCT
  // ----------------------------------------------------------
  // Stores the product selected by the user.
  // ----------------------------------------------------------

  const [product, setProduct] = useState("");


  // ----------------------------------------------------------
  // QUANTITY
  // ----------------------------------------------------------
  // Stores how many units were sold.
  //
  // We start with 1 because a sale normally contains
  // at least one product.
  // ----------------------------------------------------------

  const [quantity, setQuantity] = useState(1);


  // ----------------------------------------------------------
  // UNIT PRICE
  // ----------------------------------------------------------
  // Stores the price of one unit of the selected product.
  // ----------------------------------------------------------

  const [unitPrice, setUnitPrice] = useState(0);


  // ----------------------------------------------------------
  // PAYMENT METHOD
  // ----------------------------------------------------------
  // Stores how the customer paid.
  // ----------------------------------------------------------

  const [paymentMethod, setPaymentMethod] = useState("M-Pesa");

  // ==========================================================
// PAYMENT STATUS
// ----------------------------------------------------------
// Stores the payment status selected by the user.
//
// We start every new sale as "Paid" by default, but the user
// can change it to any of the statuses supported by KimBiz.
// ==========================================================

const [paymentStatus, setPaymentStatus] = useState<
  Sale["status"]
>("Paid");

// ==========================================================
// ADDITIONAL PAYMENT INFORMATION
// ----------------------------------------------------------
// These values are only needed for certain payment statuses.
//
// Example:
// - Partially Paid → amount paid
// - Pending → due date
// - Overdue → overdue date
// - Cancelled → cancellation date + reason
// - Refunded → refund amount + refund date + reason
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
  // AUTOMATIC TOTAL
  // ==========================================================
  // Instead of asking the user to enter the total manually,
  // KimBiz calculates it automatically.
  //
  // Example:
  //
  // Quantity = 2
  // Unit price = KSh 2,500
  //
  // Total = 2 × 2,500 = KSh 5,000
  // ==========================================================

  const total = quantity * unitPrice;


  // ==========================================================
  // FORM SUBMISSION
  // ==========================================================
  // This function will eventually send the sale to our
  // backend/database.
  //
  // For now, we simply prevent the browser from refreshing.
  // ==========================================================

 function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  // ==========================================================
// CREATE NEW SALE
// ----------------------------------------------------------
// Builds the Sale object from the information entered in
// the form.
//
// The conditional payment fields are included so that the
// additional payment information is not lost when the sale
// is submitted.
// ==========================================================

const newSale: Sale = {
  id: `#SALE${Date.now()}`,

  customer,

  product,

  date: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }),

  quantity,

  amount: total,

  paymentMethod,

  status: paymentStatus,

  // Additional payment information.
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

  // ==========================================================
  // SEND SALE TO THE PARENT COMPONENT
  // ==========================================================
  // The Sales page will receive this sale and add it to
  // the sales list.
  // ==========================================================

  onSaleCreated(newSale);


  // Temporary debugging.
  console.log(newSale);
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
          onChange={(event) => setCustomer(event.target.value)}
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
          onChange={(event) => setProduct(event.target.value)}
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
          onChange={(event) => setPaymentMethod(event.target.value)}
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

      {/* ======================================================
    PAYMENT STATUS
    ------------------------------------------------------
    Allows the user to specify the current payment state
    of the sale.
    ====================================================== */}

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
      setPaymentStatus(event.target.value as Sale["status"])
    }
    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-slate-500"
  >
    <option value="Paid">Paid</option>
    <option value="Partially Paid">Partially Paid</option>
    <option value="Pending">Pending</option>
    <option value="Overdue">Overdue</option>
    <option value="Cancelled">Cancelled</option>
    <option value="Refunded">Refunded</option>
  </select>
</div>

{/* ======================================================
    CONDITIONAL PAYMENT INFORMATION
    ------------------------------------------------------
    These fields only appear when the selected payment
    status requires additional information.
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
        setAmountPaid(Number(event.target.value))
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
          setCancellationDate(event.target.value)
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
          setCancellationReason(event.target.value)
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
          setRefundAmount(Number(event.target.value))
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
          setRefundDate(event.target.value)
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
          setRefundReason(event.target.value)
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
        Record Sale
      </button>

    </form>

  );
}