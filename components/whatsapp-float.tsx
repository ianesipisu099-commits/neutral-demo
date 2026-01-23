"use client";

import { siteConfig } from "../lib/site-config";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${siteConfig.whatsappE164}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="text-base">WhatsApp</span>
      <span className="hidden sm:inline">Chat</span>
    </a>
  );
}

