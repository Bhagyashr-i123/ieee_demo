import { createClient } from "@/lib/supabase/server";
import { createAnnouncement, deleteAnnouncement } from "./actions";

export default async function AdminAnnouncementsPage() {
  const supabase = createClient();
  const { data: announcements } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink">Announcements</h1>

      <form action={createAnnouncement} className="mt-8 max-w-xl space-y-4 rounded-xl2 border border-signalNavy/8 bg-white p-6">
        <input name="title" placeholder="Title" required className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm" />
        <textarea name="body" placeholder="Body" required rows={3} className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm" />
        <div className="flex items-center gap-4">
          <select name="category" className="rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm">
            <option>General</option>
            <option>Event</option>
            <option>Urgent</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" name="pinned" value="true" /> Pin to top
          </label>
        </div>
        <button type="submit" className="rounded-full bg-ieeeBlue px-5 py-2.5 text-sm font-semibold text-white">
          Post announcement
        </button>
      </form>

      <div className="mt-8 space-y-3">
        {(announcements ?? []).map((a) => (
          <div key={a.id} className="flex items-start justify-between rounded-xl2 border border-signalNavy/8 bg-white p-4">
            <div>
              <p className="font-display font-semibold text-ink">{a.title}{a.pinned && " 📌"}</p>
              <p className="text-sm text-mist">{a.body}</p>
            </div>
            <form action={deleteAnnouncement}>
              <input type="hidden" name="id" value={a.id} />
              <button className="text-sm text-danger hover:underline">Delete</button>
            </form>
          </div>
        ))}
        {(!announcements || announcements.length === 0) && (
          <p className="text-sm text-mist">No announcements yet.</p>
        )}
      </div>
    </div>
  );
}
