import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { EventForm } from "../EventForm";

export default async function EditEventPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: event } = await supabase.from("events").select("*").eq("id", params.id).single();
  if (!event) notFound();

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink">Edit event</h1>
      <div className="mt-8">
        <EventForm event={event} />
      </div>
    </div>
  );
}
