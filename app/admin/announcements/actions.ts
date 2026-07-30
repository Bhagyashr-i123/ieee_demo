"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function createAnnouncement(formData: FormData) {
  const supabase = createClient();
  await supabase.from("announcements").insert({
    title: formData.get("title") as string,
    body: formData.get("body") as string,
    category: formData.get("category") as string,
    pinned: formData.get("pinned") === "true",
  });
  revalidatePath("/admin/announcements");
  revalidatePath("/announcements");
}

export async function deleteAnnouncement(formData: FormData) {
  const supabase = createClient();
  await supabase.from("announcements").delete().eq("id", formData.get("id") as string);
  revalidatePath("/admin/announcements");
  revalidatePath("/announcements");
}
