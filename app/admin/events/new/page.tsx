import { EventForm } from "../EventForm";

export default function NewEventPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink">New event</h1>
      <div className="mt-8">
        <EventForm />
      </div>
    </div>
  );
}
