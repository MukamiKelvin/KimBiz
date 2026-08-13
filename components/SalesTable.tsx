// ============================================================
// KIMBIZ - SALES TABLE
// ============================================================
// Displays the latest sales transactions.
//
// For now, we are using sample data.
// Later, these sales will come from our database.
//
// This component also introduces a TypeScript interface,
// which defines the structure every sale should have.
// ============================================================


// ============================================================
// SALE INTERFACE
// ============================================================
// An interface defines the shape of an object.
//
// TypeScript will now help us make sure every sale contains
// the correct properties and data types.
// ============================================================

interface Sale {
  id: string;
  customer: string;
  date: string;
  amount: number;
  paymentMethod: string;
  status: "Paid" | "Pending";
}


// ============================================================
// SAMPLE SALES DATA
// ============================================================
// This is temporary data for our frontend.
//
// Later, the data will be retrieved from our database.
// ============================================================

const sales: Sale[] = [
  {
    id: "#SALE001",
    customer: "John Kamau",
    date: "Aug 13, 2026",
    amount: 12500,
    paymentMethod: "M-Pesa",
    status: "Paid",
  },
  {
    id: "#SALE002",
    customer: "Mary Wanjiku",
    date: "Aug 13, 2026",
    amount: 8500,
    paymentMethod: "Cash",
    status: "Paid",
  },
  {
    id: "#SALE003",
    customer: "Brian Mwangi",
    date: "Aug 12, 2026",
    amount: 15000,
    paymentMethod: "Card",
    status: "Pending",
  },
  {
    id: "#SALE004",
    customer: "Grace Njeri",
    date: "Aug 11, 2026",
    amount: 6200,
    paymentMethod: "M-Pesa",
    status: "Paid",
  },
];


// ============================================================
// SALES TABLE COMPONENT
// ============================================================

export default function SalesTable() {
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

        <table className="w-full min-w-[700px]">

          {/* ==================================================
              TABLE HEAD
              ================================================== */}

          <thead className="border-b border-slate-200 bg-slate-50">

            <tr>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sale ID
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Customer
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Date
              </th>

              <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Amount
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Payment
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>

            </tr>

          </thead>


          {/* ==================================================
              TABLE BODY
              --------------------------------------------------
              .map() loops through our sales array and creates
              one table row for every sale.
              ================================================== */}

          <tbody>

            {sales.map((sale) => (

              <tr
                key={sale.id}
                className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
              >

                {/* Sale ID */}

                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {sale.id}
                </td>


                {/* Customer */}

                <td className="px-6 py-4 text-sm text-slate-600">
                  {sale.customer}
                </td>


                {/* Date */}

                <td className="px-6 py-4 text-sm text-slate-600">
                  {sale.date}
                </td>


                {/* Amount */}

                <td className="px-6 py-4 text-right text-sm font-medium text-slate-900">
                  KSh {sale.amount.toLocaleString()}
                </td>


                {/* Payment method */}

                <td className="px-6 py-4 text-sm text-slate-600">
                  {sale.paymentMethod}
                </td>


                {/* =================================================
                    STATUS
                    -------------------------------------------------
                    The badge changes depending on the sale status.
                    ================================================= */}

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

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}