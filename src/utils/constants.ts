/**
 * Smartlic — proposal numbers & company profile.
 * Sourced from discovery call with Libby Jensen (transcricao/reuniao.txt).
 */

export const DEFAULT_VALUES = {
  empresa: "Smartlic",
  legalName: "Smartlic",
  tagline: "Global manufacturing. US workforce ready for systems.",
  location: "United States (2 sites) · Global operations",
  headquarters: "US operations — 2 manufacturing locations",

  /** Company scale (discovery call) */
  usEmployees: 90,
  usSites: 2,
  shiftCount: 3,
  globalRegions: "UK, Scotland, Ireland, England, Germany",
  brazilExpansion: "2 manufacturing facilities opening in Brazil",
  fiscalYearStart: "September 1",
  goLiveTarget: "September 1, 2026",
  implementationDays: "45",
  closeTarget: "July 2026",

  /** Discovery call — Libby Jensen (HR) */
  clientQuote:
    "That takes up the most of my time — shift premiums and tracking from spreadsheets.",
  clientQuoteAttribution: "Libby Jensen — HR, Smartlic",
  shiftPremiums:
    "Day shift base wage · second shift +$0.15/hr · overnight +$0.25/hr",
  overtimePolicy: "First 2 hours at one multiplier · higher rate after that",

  /** Factorial proposal scope — Starter Planning Enterprise */
  bundleName: "Starter Planning Enterprise",
  bundleModules: "Core · Time Tracking · Time Off · Shifts",
  totalColaboradores: 90,
  custoColaboradorMes_USD: 10,
  mensalFactorial_USD: 900,
  implantacaoFactorial_USD: 1000,
  implantacaoNota: "$1,000 USD one-time · 7 hours guided onboarding",
  onboardingHoras: 7,
  onboardingDias: "30",
  pricingJustification:
    "Shifts module for shift premium control across 3 production shifts (+$0.15/hr · +$0.25/hr · tiered OT)",

  vendedor: "Victor Gutierrez",
  cargoVendedor: "Expansion Manager · US · Factorial",
  emailVendedor: "victor.gutierrez@factorial.co",

  demoUrl:
    "https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=125471&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in",
  demoEmail: "hellen@demo2e774c9b.com",
  demoPassword: "Papapapa333!",

  payrollPartner: "Third-party payroll provider / bookkeeper",
  clockingMethod: "Wall-mounted tablet kiosk (inclusive for flip-phone employees)",
} as const;
