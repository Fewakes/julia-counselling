export type VerificationStatus = "CONFIRMED_FROM_SUPPLIED_CONTENT" | "NEEDS_VERIFICATION";

export type Market = {
  code: "QA" | "GB" | "PL";
  slug: "qatar" | "uk" | "pl";
  name: string;
  locale: "en" | "pl";
  availability: "active" | "inquiry-only" | "unpublished";
  professionalTitle: { value: string | null; status: VerificationStatus };
  licenceStatus: VerificationStatus;
  registrationMembership: VerificationStatus;
  insurance: VerificationStatus;
  professionalStatus: VerificationStatus;
  regulatoryInformation: VerificationStatus;
  practiceLocation: { value: string | null; status: VerificationStatus };
  emergencyInformation: VerificationStatus;
  permittedServices: VerificationStatus;
  onlineEligibility: VerificationStatus;
  privacyInformation: VerificationStatus;
  bookingUrl: null;
  phone: null;
  whatsapp: null;
  email: null;
  inPersonAvailable: { value: boolean | null; status: VerificationStatus };
  onlineAvailable: { value: boolean | null; status: VerificationStatus };
};

const needsVerification = "NEEDS_VERIFICATION" as const;

export const markets: Record<Market["slug"], Market> = {
  qatar: {
    code: "QA", slug: "qatar", name: "Qatar", locale: "en", availability: "active",
    professionalTitle: { value: null, status: needsVerification }, licenceStatus: needsVerification,
    registrationMembership: needsVerification, insurance: needsVerification, professionalStatus: needsVerification,
    regulatoryInformation: needsVerification,
    practiceLocation: { value: "Doha, Qatar", status: "CONFIRMED_FROM_SUPPLIED_CONTENT" },
    emergencyInformation: needsVerification, permittedServices: needsVerification,
    onlineEligibility: needsVerification, privacyInformation: needsVerification,
    bookingUrl: null, phone: null, whatsapp: null, email: null,
    inPersonAvailable: { value: null, status: needsVerification }, onlineAvailable: { value: null, status: needsVerification },
  },
  uk: {
    code: "GB", slug: "uk", name: "United Kingdom", locale: "en", availability: "inquiry-only",
    professionalTitle: { value: null, status: needsVerification }, licenceStatus: needsVerification,
    registrationMembership: needsVerification, insurance: needsVerification, professionalStatus: needsVerification,
    regulatoryInformation: needsVerification,
    practiceLocation: { value: null, status: needsVerification }, emergencyInformation: needsVerification,
    permittedServices: needsVerification, onlineEligibility: needsVerification, privacyInformation: needsVerification,
    bookingUrl: null, phone: null, whatsapp: null, email: null,
    inPersonAvailable: { value: null, status: needsVerification }, onlineAvailable: { value: null, status: needsVerification },
  },
  pl: {
    code: "PL", slug: "pl", name: "Polska", locale: "pl", availability: "inquiry-only",
    professionalTitle: { value: null, status: needsVerification }, licenceStatus: needsVerification,
    registrationMembership: needsVerification, insurance: needsVerification, professionalStatus: needsVerification,
    regulatoryInformation: needsVerification,
    practiceLocation: { value: null, status: needsVerification }, emergencyInformation: needsVerification,
    permittedServices: needsVerification, onlineEligibility: needsVerification, privacyInformation: needsVerification,
    bookingUrl: null, phone: null, whatsapp: null, email: null,
    inPersonAvailable: { value: null, status: needsVerification }, onlineAvailable: { value: null, status: needsVerification },
  },
};

export const qatarNavigation = [
  { label: "Home", href: "/qatar/" },
  { label: "About", href: "/qatar/about/" },
  { label: "How I Can Help", href: "/qatar/child-counselling-doha/" },
  { label: "My Approach", href: "/qatar/approach/" },
  { label: "For Parents", href: "/qatar/parent-consultations/" },
  { label: "FAQ", href: "/qatar/faq/" },
  { label: "Contact", href: "/qatar/contact/" },
];

export const marketNavigation = {
  qatar: qatarNavigation,
  uk: [
    { label: "Home", href: "/uk/" },
    { label: "About Julia", href: "/uk/about/" },
    { label: "Child counselling", href: "/uk/child-counselling/" },
    { label: "Teen counselling", href: "/uk/teen-counselling/" },
    { label: "For parents", href: "/uk/parent-consultations/" },
    { label: "Approach", href: "/uk/approach/" },
    { label: "FAQ", href: "/uk/faq/" },
    { label: "Contact", href: "/uk/contact/" },
  ],
  pl: [
    { label: "Strona główna", href: "/pl/" },
    { label: "O mnie", href: "/pl/o-mnie/" },
    { label: "Jak mogę pomóc", href: "/pl/wsparcie-dzieci/" },
    { label: "Moje podejście", href: "/pl/moje-podejscie/" },
    { label: "Dla rodziców", href: "/pl/konsultacje-dla-rodzicow/" },
    { label: "FAQ", href: "/pl/faq/" },
    { label: "Kontakt", href: "/pl/kontakt/" },
  ],
} as const;

export const ukPages = [
  ["/uk/", "Counselling for Children & Teenagers | Julia Slojkowska"],
  ["/uk/about/", "About Julia | Counselling for Young People"],
  ["/uk/child-counselling/", "Child Counselling | Julia Slojkowska"],
  ["/uk/teen-counselling/", "Teen Counselling | Julia Slojkowska"],
  ["/uk/parent-consultations/", "Parent Consultations | Julia Slojkowska"],
  ["/uk/approach/", "Counselling Approach | Julia Slojkowska"],
  ["/uk/faq/", "Counselling Questions & Answers | Julia Slojkowska"],
  ["/uk/contact/", "Enquire About Counselling | Julia Slojkowska"],
] as const;

export const plPages = [
  ["/pl/", "Wsparcie dzieci i młodzieży | Julia Slojkowska"],
  ["/pl/o-mnie/", "O mnie | Julia Slojkowska"],
  ["/pl/wsparcie-dzieci/", "Wsparcie dzieci | Julia Slojkowska"],
  ["/pl/wsparcie-mlodziezy/", "Wsparcie młodzieży | Julia Slojkowska"],
  ["/pl/konsultacje-dla-rodzicow/", "Konsultacje dla rodziców | Julia Slojkowska"],
  ["/pl/moje-podejscie/", "Moje podejście | Julia Slojkowska"],
  ["/pl/faq/", "Najczęstsze pytania | Julia Slojkowska"],
  ["/pl/kontakt/", "Kontakt | Julia Slojkowska"],
] as const;

export const qatarPages = [
  ["/qatar/", "Child & Teen Counselling in Doha | Julia Slojkowska"],
  ["/qatar/about/", "About Julia | Child Counselling in Doha"],
  ["/qatar/child-counselling-doha/", "Child Counselling in Doha | Julia Slojkowska"],
  ["/qatar/teen-counselling-doha/", "Teen Counselling in Doha | Julia Slojkowska"],
  ["/qatar/parent-consultations/", "Parent Consultations in Doha | Julia Slojkowska"],
  ["/qatar/international-families/", "Support for International Families in Doha"],
  ["/qatar/approach/", "A Thoughtful Counselling Approach | Julia Slojkowska"],
  ["/qatar/faq/", "Counselling FAQs for Doha Families | Julia Slojkowska"],
  ["/qatar/contact/", "Contact Julia | Counselling in Doha"],
] as const;
