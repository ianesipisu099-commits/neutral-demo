"use client";
import { siteConfig } from "../lib/site-config";

import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import Container from "./container";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/student-life", label: "Student Life" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
         <Link href="/" className="flex items-center gap-3">
  <Image
    src={siteConfig.brand.logo}
    alt={`${siteConfig.name} logo`}
    width={36}
    height={36}
    className="h-9 w-9"
    priority
  />
  <div className="leading-tight">
    <p className="text-sm font-semibold tracking-tight">
      {siteConfig.name}
    </p>
    <p className="text-xs text-gray-500">
      {siteConfig.motto}
    </p>
  </div>
</Link>


          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
