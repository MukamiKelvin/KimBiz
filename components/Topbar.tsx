export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome back to KimBiz
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
            K
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Kelvin Mukami
            </p>

            <p className="text-xs text-slate-500">
              Business Owner
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}