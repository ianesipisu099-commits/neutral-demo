import Container from "../../components/container";

const stats = [
  { label: "Students", value: "800+" },
  { label: "Teaching Staff", value: "45+" },
  { label: "Clubs & Sports", value: "20+" },
  { label: "Years of Excellence", value: "15+" },
];

const values = [
  {
    title: "Integrity",
    desc: "We build character through honesty, discipline, and responsibility.",
  },
  {
    title: "Excellence",
    desc: "We push every learner to achieve their best academically and beyond.",
  },
  {
    title: "Respect",
    desc: "A safe and supportive environment for students, staff, and parents.",
  },
  {
    title: "Community",
    desc: "We partner with families and the community to nurture success.",
  },
];

export default function AboutPage() {
  return (
    <Container>
      <div className="py-14">
        {/* Top section */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            About Neutral Demo School
          </h1>
          <p className="mt-4 text-gray-600 sm:text-lg">
            Neutral Demo School is a learner-focused institution committed to
            academic excellence, discipline, and holistic development. We
            support every student to grow in knowledge, skills, and character.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border bg-white p-6">
              <p className="text-2xl font-semibold">{s.value}</p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission / Vision */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border bg-white p-6">
            <h2 className="font-medium">Our Mission</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              To provide quality education in a supportive environment that
              nurtures academic excellence, integrity, and responsible
              citizenship.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6">
            <h2 className="font-medium">Our Vision</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              To be a leading school recognized for outstanding performance and
              holistic student development.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-10">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold">Our Core Values</h2>
            <p className="mt-2 text-gray-600">
              The principles that guide teaching, learning, and leadership.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border bg-white p-6">
                <h3 className="font-medium">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border bg-gray-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Want to learn more?</h2>
          <p className="mt-2 text-gray-600">
            Visit our Admissions page for requirements and application steps, or
            contact us for inquiries.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/admissions"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Admissions
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium text-gray-900 hover:bg-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

