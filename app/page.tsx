import Image from "next/image";
import { siteConfig } from "../lib/site-config";

import Container from "../components/container";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
     {/* Hero section */}
<section className="bg-white">
  <Container>
    <div className="py-10 sm:py-14 lg:py-16 grid gap-8 lg:grid-cols-2 lg:items-center">
      {/* Text */}
      <div className="max-w-xl">
        <p className="text-sm font-medium text-gray-600">
          Welcome to
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
  {siteConfig.hero.headline}
</h1>

<p className="mt-4 text-gray-600 sm:text-lg">
  {siteConfig.hero.subheadline}
</p>

...

<Image
  src={siteConfig.brand.gate}
  alt={`${siteConfig.name} gate`}
  fill
  className="object-cover"
  priority
/>

...

<div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-500">
  {siteConfig.hero.badges.map((b) => (
    <span key={b} className="rounded-full border px-3 py-1">
      {b}
    </span>
  ))}
</div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Apply / Admissions
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-500">
          <span className="rounded-full border px-3 py-1">CBC / CBE Ready</span>
          <span className="rounded-full border px-3 py-1">Boarding & Day</span>
          <span className="rounded-full border px-3 py-1">Kakamega, Kenya</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-xl border bg-gray-50">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/image/hero/gate.png"
            alt="Neutral Demo School gate"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </Container>
</section>


      {/* Quick info cards */}
      <section className="border-t bg-gray-50">
        <Container>
          <div className="py-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-medium">Academics</h3>
              <p className="mt-2 text-sm text-gray-600">
                Curriculum details, subjects offered, and academic excellence.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-medium">Student Life</h3>
              <p className="mt-2 text-sm text-gray-600">
                Clubs, sports, leadership, and co-curricular activities.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <h3 className="font-medium">Admissions</h3>
              <p className="mt-2 text-sm text-gray-600">
                Entry requirements, application process, and key dates.
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Announcements section */}
<section className="border-t bg-white">
  <Container>
    <div className="py-14">
      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold">Latest Announcements</h2>
        <p className="mt-2 text-gray-600">
          Important updates and school notices.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-5">
          <p className="text-sm text-gray-500">Jan 2026</p>
          <h3 className="mt-2 font-medium">
            Term Opening Dates Announced
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Reporting dates for the new term have been released.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <p className="text-sm text-gray-500">Dec 2025</p>
          <h3 className="mt-2 font-medium">
            Form One Admission Update
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Admission letters are now available at the school office.
          </p>
        </div>

        <div className="rounded-lg border p-5">
          <p className="text-sm text-gray-500">Nov 2025</p>
          <h3 className="mt-2 font-medium">
            End of Year Exams
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Final examinations will begin in the second week of November.
          </p>
        </div>
      </div>
    </div>
  </Container>
</section>
    </>
  );
}

