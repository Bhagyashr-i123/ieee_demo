import { upsertEvent } from "../actions";

interface EventFormProps {
  event?: {
    id: string;
    title: string;
    event_type: string;
    event_date: string;
    status: string;
    summary: string;
    cover_url: string;
  };
}

export function EventForm({ event }: EventFormProps) {
  return (
    <form action={upsertEvent} className="max-w-xl space-y-4">
      {event && <input type="hidden" name="id" value={event.id} />}

      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium text-ink">Title</label>
        <input
          id="title"
          name="title"
          required
          defaultValue={event?.title}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="event_type" className="mb-1 block text-sm font-medium text-ink">Type</label>
          <select
            id="event_type"
            name="event_type"
            defaultValue={event?.event_type ?? "Workshop"}
            className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
          >
            {["Workshop", "Hackathon", "Conference", "Webinar", "Meetup"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="status" className="mb-1 block text-sm font-medium text-ink">Status</label>
          <select
            id="status"
            name="status"
            defaultValue={event?.status ?? "open"}
            className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
          >
            <option value="open">Open</option>
            <option value="closing">Closing soon</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="event_date" className="mb-1 block text-sm font-medium text-ink">Date</label>
        <input
          id="event_date"
          name="event_date"
          type="date"
          required
          defaultValue={event?.event_date?.slice(0, 10)}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
      </div>

      <div>
        <label htmlFor="cover_url" className="mb-1 block text-sm font-medium text-ink">Cover image URL</label>
        <input
          id="cover_url"
          name="cover_url"
          defaultValue={event?.cover_url}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
      </div>

      <div>
        <label htmlFor="summary" className="mb-1 block text-sm font-medium text-ink">Summary</label>
        <textarea
          id="summary"
          name="summary"
          rows={4}
          defaultValue={event?.summary}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-ieeeBlue px-6 py-3 text-sm font-semibold text-white"
      >
        {event ? "Save changes" : "Create event"}
      </button>
    </form>
  );
}
