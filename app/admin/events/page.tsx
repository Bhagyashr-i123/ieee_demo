import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteEvent } from "./actions";

export default async function AdminEventsPage() {
  const supabase = createClient();
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink">Events</h1>
          <p className="mt-1 text-sm text-mist">Create, edit, and remove events.</p>
        </div>
        <Link
          href="/admin/events/new"
          className="rounded-full bg-ieeeBlue px-5 py-2.5 text-sm font-semibold text-white"
        >
          + New event
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl2 border border-signalNavy/8 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-paper text-xs uppercase text-mist">
            <tr>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Type</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {(events ?? []).map((e) => (
              <tr key={e.id} className="border-t border-signalNavy/5">
                <td className="px-5 py-3 font-medium text-ink">{e.title}</td>
                <td className="px-5 py-3 text-mist">{e.event_type}</td>
                <td className="px-5 py-3 text-mist">
                  {new Date(e.event_date).toLocaleDateString()}
                </td>
                <td className="px-5 py-3 text-mist">{e.status}</td>
                <td className="px-5 py-3 text-right">
                  <Link href={`/admin/events/${e.id}`} className="mr-4 text-ieeeBlue hover:underline">
                    Edit
                  </Link>
                  <form action={deleteEvent} className="inline">
                    <input type="hidden" name="id" value={e.id} />
                    <button type="submit" className="text-danger hover:underline">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {(!events || events.length === 0) && (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-mist">
                  No events yet — Supabase not connected, or the table is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
