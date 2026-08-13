// ============================================================
// KIMBIZ KPI CARD
// ============================================================
// This component displays one important business metric.
//
// Examples:
// - Revenue
// - Expenses
// - Profit
// - Customers
//
// Instead of creating four separate card designs, we create
// one reusable component and pass different information to it.
// ============================================================


// ============================================================
// KPI CARD PROPS
// ============================================================
// This interface defines the information that the KpiCard
// component expects to receive.
//
// TypeScript helps us make sure that we provide the correct
// type of information when using this component.
// ============================================================
interface KpiCardProps {
  // The name displayed at the top of the card.
  title: string;

  // The main number displayed on the card.
  value: string;

  // The percentage/change displayed underneath the value.
  change: string;

  // Controls whether the change is displayed as positive
  // or negative.
  changeType: "positive" | "negative";
}


// ============================================================
// KPI CARD COMPONENT
// ============================================================
// This is a reusable React component.
//
// We receive the information through "props" and use those
// values to build the card.
// ============================================================
export default function KpiCard({
  title,
  value,
  change,
  changeType,
}: KpiCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* ======================================================
          CARD TITLE
          ====================================================== */}
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>


      {/* ======================================================
          MAIN VALUE
          ------------------------------------------------------
          This could be a money amount, customer count,
          inventory count, etc.
          ====================================================== */}
      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </h2>


      {/* ======================================================
          PERFORMANCE CHANGE
          ------------------------------------------------------
          The color changes depending on whether the value
          represents positive or negative performance.

          We use a conditional expression to choose the
          appropriate Tailwind class.
          ====================================================== */}
      <p
        className={`mt-2 text-sm font-medium ${
          changeType === "positive"
            ? "text-emerald-600"
            : "text-red-600"
        }`}
      >
        {changeType === "positive" ? "↑" : "↓"} {change}
      </p>

    </div>
  );
}