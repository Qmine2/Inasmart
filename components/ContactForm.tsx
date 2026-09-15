"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

const EMAILJS_SERVICE_ID = "service_4h80vod";
const EMAILJS_TEMPLATE_ID = "template_4visgwm";
const EMAILJS_PUBLIC_KEY = "iB6CKhTgEst7P38GM";

export default function ContactForm({ lang }: { lang: Lang }) {
  const copy = t(lang).contactPage;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const time = new Date().toLocaleString();

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name, email, message, time },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 rounded-card-lg border border-hairline bg-white p-7.5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" htmlFor="contact-name">
          {copy.formName}
        </label>
        <input
          id="contact-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-control border border-input-border px-3.5 py-3 text-sm transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" htmlFor="contact-email">
          {copy.formEmail}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-control border border-input-border px-3.5 py-3 text-sm transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold" htmlFor="contact-message">
          {copy.formMessage}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-control border border-input-border px-3.5 py-3 text-sm font-body transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "sent"}
        className="mt-2 self-start rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3.5 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "…" : status === "sent" ? copy.sent : copy.send}
      </button>
    </form>
  );
}
