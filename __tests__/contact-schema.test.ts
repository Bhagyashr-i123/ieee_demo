import { describe, it, expect } from "vitest";
import { z } from "zod";

// Mirrors the schema used in components/forms/ContactForm.tsx and
// app/api/contact/route.ts — kept here as a plain schema so the test
// doesn't need to mount the form.
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

describe("contact form schema", () => {
  it("accepts a valid submission", () => {
    const result = schema.safeParse({
      name: "Asha Rao",
      email: "asha@example.com",
      subject: "Question about SignalHacks",
      message: "Hi, I wanted to ask about the team size limit.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = schema.safeParse({
      name: "Asha Rao",
      email: "not-an-email",
      subject: "Question",
      message: "Hi, I wanted to ask about the team size limit.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a too-short message", () => {
    const result = schema.safeParse({
      name: "Asha Rao",
      email: "asha@example.com",
      subject: "Question",
      message: "Hi",
    });
    expect(result.success).toBe(false);
  });
});
