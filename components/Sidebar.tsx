export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          KimBiz
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Business Management
        </p>
      </div>

      <nav className="px-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Main
        </p>

        <a
          href="/dashboard"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Dashboard
        </a>

        <a
          href="/sales"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Sales
        </a>

        <a
          href="/expenses"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Expenses
        </a>

        <a
          href="/inventory"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Inventory
        </a>

        <a
          href="/customers"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Customers
        </a>

        <a
          href="/reports"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Reports
        </a>

        <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Support
        </p>

        <a
          href="/tickets"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Support Tickets
        </a>

        <a
          href="/settings"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
}