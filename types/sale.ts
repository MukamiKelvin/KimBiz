// ==========================================================
// SALE TYPE
// ----------------------------------------------------------
// Defines the structure of a sale throughout KimBiz.
//
// Keeping this structure in one place ensures that the
// Record Sale form, Sales table, and future database layer
// all understand what a Sale should contain.
// ==========================================================

export interface Sale {
  // Unique identifier for the sale.
  id: string;

  // Customer who made the purchase.
  customer: string;

  // Product that was sold.
  product: string;

  // Date the sale was recorded.
  date: string;

  // Number of products sold.
  quantity: number;

  // Total amount of the sale.
  amount: number;

  // Method used to make the payment.
  paymentMethod: string;

  // Current payment status.
  status:
    | "Paid"
    | "Partially Paid"
    | "Pending"
    | "Overdue"
    | "Cancelled"
    | "Refunded";

  // --------------------------------------------------------
  // ADDITIONAL PAYMENT INFORMATION
  // --------------------------------------------------------

  // Amount the customer has already paid.
  amountPaid?: number;

  // Date by which a pending payment should be completed.
  dueDate?: string;

  // Date from which the payment became overdue.
  overdueSince?: string;

  // Date the sale was cancelled.
  cancellationDate?: string;

  // Reason why the sale was cancelled.
  cancellationReason?: string;

  // Amount returned to the customer.
  refundAmount?: number;

  // Date the refund was issued.
  refundDate?: string;

  // Reason why the refund was issued.
  refundReason?: string;
}