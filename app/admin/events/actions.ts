"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function upsertEvent(formData: FormData) {
  const supabase = createClient();

  const id = formData.get("id") as string | null;
  const payload = {
    title: formData.get("title") as string,
    slug: (formData.get("title") as string).toLowerCase().replace(/\s+/g, "-"),
    event_type: formData.get("event_type") as string,
    event_date: formData.get("event_date") as string,
    status: formData.get("status") as string,
    summary: formData.get("summary") as string,
    cover_url: formData.get("cover_url") as string,
  };

  if (id) {
    await supabase.from("events").update(payload).eq("id", id);
  } else {
    await supabase.from("events").insert(payload);
  }

  revalidatePath("/admin/events");
  revalidatePath("/events");
  redirect("/admin/events");
}

export async function deleteEvent(formData: FormData) {
  const supabase = createClient();
  const id = formData.get("id") as string;
  await supabase.from("events").delete().eq("id", id);
  revalidatePath("/admin/events");
  revalidatePath("/events");
}
