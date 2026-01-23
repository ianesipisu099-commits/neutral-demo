import Container from "../../components/container";
import { siteConfig } from "../../lib/site-config";

const requirements = [
  "Copy of student’s birth certificate",
  "Previous school report card / results slip",
  "2 passport-size photos",
  "Transfer letter (if applicable)",
  "Parent/guardian ID copy",
];

const steps = [
  {
    title: "Get an application form",
    desc: "Collect from the school office or request via phone/WhatsApp.",
  },
  {
    title: "Submit required documents",
    desc: "Attach all documents and submit to the admissions office.",
  },
  {
    title: "Interview / Assessment (if required)",
    desc: "Some classes may require a short assessment or interview.",
  },
  {
    title: "Confirmation & reporting",
    desc: "Receive admission confirmation and reporting instructions.",
  },
];

const downloads = [
  {
    name: "Application Form (PDF)",
    href: siteConfig.downloads.applicationForm,
    note: "Download the form and submit to admissions.",
  },
  {
    name: "Fee Structure (PDF)",
    href: siteConfig.downloads.feeStructure,
    note: "Refer to fees and payment guidelines.",
  },
  {
    name: "Reporting Requirements (PDF)",
    href: siteConfig.downloads.reportingRequirements,
    note: "What to carry on reporting day.",
  },
];



export default function AdmissionsPage() {
  return (
    <Container>
      <div className="py-14">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Admissions
          </h1>
          <p className="mt-4 text-gray-600 sm:text-lg">
            We welcome new learners into a disciplined, supportive environment
            focused on academic excellence and holistic development.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">How to Apply</h2>
          <p className="mt-2 text-gray-600">
            Follow the steps below to complete your application.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => (
              <div key={s.title} className="rounded-xl border bg-white p-6">
                <p className="text-xs text-gray-500">Step {idx + 1}</p>
                <h3 className="mt-2 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements + Downloads */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Requirements */}
          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Requirements</h2>
            <p className="mt-2 text-gray-600">
              Please carry or submit the following documents:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {requirements.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-[2px] inline-block h-2 w-2 rounded-full bg-gray-900" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads (placeholders for now) */}
          <div className="rounded-xl border bg-white p-6">
            <h2 className="text-lg font-semibold">Downloads</h2>
            <p className="mt-2 text-gray-600">
              Download the documents below.

            </p>

            <div className="mt-4 grid gap-3">
  {downloads.map((d) => (
    <a
      key={d.name}
      href={d.href}
      className="group flex items-start justify-between gap-3 rounded-lg border p-4 hover:bg-gray-50"
    >
      <div>
        <p className="font-medium group-hover:underline">{d.name}</p>
        <p className="mt-1 text-sm text-gray-600">{d.note}</p>
      </div>
      <span className="text-xs text-gray-500">Download</span>
    </a>
  ))}
</div>


            <p className="mt-4 text-xs text-gray-500">
              Tip: Later we’ll link real PDFs from <span className="font-medium">/public/docs</span>.
            </p>
          </div>
        </div>

        {/* Fees note + CTA */}
        <div className="mt-10 rounded-xl border bg-gray-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Fees & Enquiries</h2>
          <p className="mt-2 text-gray-600">
            For fee structure, reporting dates, or admission confirmation,
            contact the admissions office.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Contact Admissions
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium text-gray-900 hover:bg-white"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

