import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const schema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email" }, { status: 400 });
  }

  const supabase = createClient();
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email: parsed.data.email });

  // Unique violation just means they're already subscribed — treat as success
  if (error && error.code !== "23505") {
    return NextResponse.json({ error: "Could not subscribe" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
