import { createClient } from "@/lib/supabase/server";

async function getCounts() {
  const supabase = createClient();
  const [events, announcements, submissions] = await Promise.all([
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.from("announcements").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
  ]);
  return {
    events: events.count ?? 0,
    announcements: announcements.count ?? 0,
    submissions: submissions.count ?? 0,
  };
}

export default async function AdminOverviewPage() {
  const counts = await getCounts();

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink">Overview</h1>
      <p className="mt-1 text-sm text-mist">Quick snapshot of site content.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="rounded-xl2 border border-signalNavy/8 bg-white p-6">
          <p className="font-mono text-2xl font-semibold text-ieeeBlue">{counts.events}</p>
          <p className="mt-1 text-sm text-mist">Events</p>
        </div>
        <div className="rounded-xl2 border border-signalNavy/8 bg-white p-6">
          <p className="font-mono text-2xl font-semibold text-ieeeBlue">{counts.announcements}</p>
          <p className="mt-1 text-sm text-mist">Announcements</p>
        </div>
        <div className="rounded-xl2 border border-signalNavy/8 bg-white p-6">
          <p className="font-mono text-2xl font-semibold text-ieeeBlue">{counts.submissions}</p>
          <p className="mt-1 text-sm text-mist">Contact submissions</p>
        </div>
      </div>
    </div>
  );
}
