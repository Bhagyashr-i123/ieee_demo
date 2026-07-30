"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  // Honeypot — bots fill this, humans never see it
  company: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      reset();
    } catch {
      setServerError("Something went wrong — please try again in a moment.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-success/30 bg-success/5 p-6 text-center">
        <p className="font-display font-semibold text-ink">Message sent</p>
        <p className="mt-1 text-sm text-mist">We'll get back to you within a few days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("company")}
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">Name</label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
        {errors.name && <p className="mt-1 text-xs text-danger">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
        {errors.email && <p className="mt-1 text-xs text-danger">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-ink">Subject</label>
        <input
          id="subject"
          {...register("subject")}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
        {errors.subject && <p className="mt-1 text-xs text-danger">{errors.subject.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full rounded-lg border border-signalNavy/15 px-4 py-2.5 text-sm"
        />
        {errors.message && <p className="mt-1 text-xs text-danger">{errors.message.message}</p>}
      </div>
      {serverError && <p className="text-sm text-danger">{serverError}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-ieeeBlue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ieeeBlue/90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
