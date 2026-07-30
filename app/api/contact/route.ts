import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  company: z.string().max(0).optional(), // honeypot
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Honeypot tripped — silently succeed so bots don't learn anything
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const supabase = createClient();
  const { error } = await supabase.from("contact_submissions").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
    message: parsed.data.message,
  });

  if (error) {
    return NextResponse.json({ error: "Could not save submission" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
