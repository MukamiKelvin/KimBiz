// ============================================================
// KIMBIZ - LOW STOCK COMPONENT
// ============================================================
// Displays products that are running low in inventory.
//
// For now, we use sample data.
// Later, these values will come from our database.
// ============================================================


// ============================================================
// INVENTORY DATA
// ============================================================
// "stock" represents the number of units currently available.
// ============================================================

const lowStockProducts = [
  {
    name: "Nike Air Max",
    stock: 2,
  },
  {
    name: "Puma Runner",
    stock: 5,
  },
  {
    name: "Adidas Superstar",
    stock: 7,
  },
  {
    name: "New Balance 574",
    stock: 9,
  },
];


// ============================================================
// LOW STOCK COMPONENT
// ============================================================

export default function LowStock() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* ======================================================
          SECTION HEADER
          ====================================================== */}

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Low Stock
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Products that may need restocking.
        </p>

      </div>


      {/* ======================================================
          PRODUCT LIST
          ====================================================== */}

      <div className="space-y-4">

        {lowStockProducts.map((product, index) => {

          // ==================================================
          // DETERMINE STOCK STATUS
          // ==================================================
          // Products with 3 or fewer units are considered
          // critical.
          //
          // Products with more than 3 units are considered
          // low stock.
          // ==================================================

          const isCritical = product.stock <= 3;

          return (
            <div
              key={index}
              className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
            >

              {/* Product name */}

              <div>
                <p className="text-sm font-medium text-slate-900">
                  {product.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {product.stock} units remaining
                </p>
              </div>


              {/* =================================================
                  STOCK STATUS
                  -------------------------------------------------
                  The badge changes depending on the stock level.
                  ================================================= */}

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  isCritical
                    ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {isCritical ? "Critical" : "Low"}
              </span>

            </div>
          );
        })}

      </div>

    </div>
  );
}