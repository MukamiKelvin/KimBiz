// ============================================================
// KIMBIZ - RECENT ACTIVITY COMPONENT
// ============================================================
// Displays the latest activities that have happened in the
// business.
//
// For now, we are using sample data.
// Later, these activities will come from our database.
// ============================================================


// ============================================================
// ACTIVITY DATA
// ============================================================
// Each object represents one business activity.
//
// type    → describes what happened
// details → additional information about the activity
// time    → when the activity happened
// ============================================================

const activities = [
  {
    type: "New sale recorded",
    details: "KSh 12,500",
    time: "10 minutes ago",
  },
  {
    type: "New customer added",
    details: "John Kamau",
    time: "35 minutes ago",
  },
  {
    type: "Expense recorded",
    details: "KSh 4,500",
    time: "1 hour ago",
  },
];


// ============================================================
// RECENT ACTIVITY COMPONENT
// ============================================================
// This component displays the activity list inside a card.
//
// Keeping this separate from page.tsx makes the dashboard easier
// to maintain as KimBiz grows.
// ============================================================

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* ======================================================
          SECTION HEADER
          ====================================================== */}

      <div className="mb-6">

        <h2 className="text-lg font-semibold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest business activity.
        </p>

      </div>


      {/* ======================================================
          ACTIVITY LIST
          ------------------------------------------------------
          We use .map() to loop through the activities array
          and create one activity item for every object.
          ====================================================== */}

      <div className="space-y-5">

        {activities.map((activity, index) => (

          <div key={index}>

            {/* Activity name */}

            <p className="text-sm font-medium text-slate-900">
              {activity.type}
            </p>


            {/* Activity details and time */}

            <p className="mt-1 text-xs text-slate-500">
              {activity.details} • {activity.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}