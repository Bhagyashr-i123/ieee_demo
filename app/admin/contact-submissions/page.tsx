import { createClient } from "@/lib/supabase/server";

export default async function ContactSubmissionsPage() {
  const supabase = createClient();
  const { data: submissions } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink">Contact submissions</h1>
      <p className="mt-1 text-sm text-mist">Messages sent through the public contact form.</p>

      <div className="mt-8 space-y-3">
        {(submissions ?? []).map((s) => (
          <div key={s.id} className="rounded-xl2 border border-signalNavy/8 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-display font-semibold text-ink">{s.subject}</p>
              <p className="font-mono text-xs text-mist">{new Date(s.created_at).toLocaleString()}</p>
            </div>
            <p className="mt-1 text-sm text-mist">{s.name} · {s.email}</p>
            <p className="mt-3 text-sm text-ink">{s.message}</p>
          </div>
        ))}
        {(!submissions || submissions.length === 0) && (
          <p className="text-sm text-mist">No submissions yet.</p>
        )}
      </div>
    </div>
  );
}
