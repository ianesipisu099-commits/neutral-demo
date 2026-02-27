export const siteConfig = {
  name: "Neutral Demo School",
  motto: "Knowledge & Integrity",

  locationShort: "Kakamega, Kenya",
  addressLine: "Kakamega County, Kenya",

  phoneDisplay: "+254 700 000 000",
  phoneE164: "254700000000",

  email: "info@school.ac.ke",

  whatsappE164: "254700000000",
  whatsappMessage: "Hello Neutral Demo School, I would like to make an inquiry.",

  hero: {
    headline: "Neutral Demo School",
    subheadline:
      "A modern, student-centered learning environment focused on excellence, discipline, and holistic development.",
    badges: ["CBC / CBE Ready", "Boarding & Day", "Kakamega, Kenya"],
  },

  brand: {
    logo: "/images/brand/logo.png",
    gate: "/image/hero/gate.png",
  },

  downloads: {
    applicationForm: "/docs/application-form.pdf",
    feeStructure: "/docs/fee-structure.pdf",
    reportingRequirements: "/docs/reporting-requirements.pdf",
  },
} as const;
