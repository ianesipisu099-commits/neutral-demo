import Container from "../../components/container";
import { siteConfig } from "../../lib/site-config";

export default function ContactPage() {
  return (
    <Container>
      <div className="py-14 max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 sm:text-lg">
          Get in touch with {siteConfig.name} for enquiries, admissions, or
          general information.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-white p-6">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="mt-1 font-medium">
              {siteConfig.phoneDisplay}
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <p className="text-sm text-gray-500">Email</p>
            <p className="mt-1 font-medium">
              {siteConfig.email}
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6 sm:col-span-2">
            <p className="text-sm text-gray-500">Location</p>
            <p className="mt-1 font-medium">
              {siteConfig.addressLine}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border bg-gray-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Quick Enquiry</h2>
          <p className="mt-2 text-gray-600">
            For faster responses, reach us directly via WhatsApp.
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsappE164}?text=${encodeURIComponent(
              siteConfig.whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </Container>
  );
}
