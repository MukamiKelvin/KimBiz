// ============================================================
// KIMBIZ - SIDEBAR
// ============================================================
// Main navigation for the KimBiz application.
//
// We use Next.js <Link> for internal navigation instead of
// regular HTML <a> tags.
//
// This allows Next.js to navigate between pages efficiently.
// ============================================================

import Link from "next/link";


// ============================================================
// SIDEBAR COMPONENT
// ============================================================

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-slate-900 text-white">

      {/* ======================================================
          BRANDING
          ====================================================== */}

      <div className="p-6">

        <h1 className="text-2xl font-bold">
          KimBiz
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Business Management
        </p>

      </div>


      {/* ======================================================
          MAIN NAVIGATION
          ====================================================== */}

      <nav className="px-4">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Main
        </p>


        {/* Dashboard */}

        <Link
          href="/"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Dashboard
        </Link>


        {/* Sales */}

        <Link
          href="/sales"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Sales
        </Link>


        {/* Expenses */}

        <Link
          href="/expenses"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Expenses
        </Link>


        {/* Inventory */}

        <Link
          href="/inventory"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Inventory
        </Link>


        {/* Customers */}

        <Link
          href="/customers"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Customers
        </Link>


        {/* Reports */}

        <Link
          href="/reports"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Reports
        </Link>


        {/* ==================================================
            SUPPORT SECTION
            ================================================== */}

        <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Support
        </p>


        {/* Support Tickets */}

        <Link
          href="/tickets"
          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Support Tickets
        </Link>


        {/* Settings */}

        <Link
          href="/settings"
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800"
        >
          Settings
        </Link>

      </nav>

    </aside>
  );
}