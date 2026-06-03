/**
 * Best Care Facilities — closure-optimized proposal (deal strategist framework).
 * Compressed for fast executive decision; inevitability + operational price comparison.
 */

export const FACTORIAL_COLORS = {
  radicalRed: "#FF355E",
  viridian: "#07A2AD",
  sunbeam: "#FFB940",
  tangerine: "#FF9153",
  midnight: "#25253D",
  lightNeutral: "#F5F0E8",
  white: "#FFFFFF",
} as const;

export type ProposalCard = {
  title: string;
  body: string;
};

export type ProposalSection = {
  id: string;
  label: string;
  ariaLabel: string;
  backgroundColor: string;
  color: string;
  headline: string[];
  lead?: string;
  paragraphs?: string[];
  cards?: ProposalCard[];
  bullets?: string[];
  closing?: string;
  footer?: string;
  innerClassName?: string;
  dividerLight?: boolean;
};

export const PROPOSAL_META = {
  clientName: "Best Care Facilities",
  legalName: "Best Care Facility Services",
  partner: "Talent Grid Africa",
  vendor: "Factorial",
  seatCount: 100,
  pricePerSeatUsd: 7,
  monthlyUsd: 700,
  onboardingOneTimeUsd: 700,
  onboardingDays: "30–45",
  contactName: "Victor Gutierrez",
  contactRole: "Business Development · Factorial",
  contactEmail: "victor.gutierrez@factorial.co",
} as const;

export const PROPOSAL_SECTIONS: ProposalSection[] = [
  {
    id: "executive-decision-summary",
    label: "01 — Executive decision summary",
    ariaLabel: "Executive decision summary",
    backgroundColor: FACTORIAL_COLORS.radicalRed,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    headline: ["Approve", "The", "Shift"],
    paragraphs: [
      `Today: ~${PROPOSAL_META.seatCount} employees across client sites; time, payroll inputs, and compliance run on Excel and manual books.`,
      "At scale this breaks: payroll rework, coverage blind spots, and audit friction increase with every site — without adding HR capacity.",
      "Immediate change: one Factorial operating layer for workforce operations, employee administration, and hiring — deployed with Talent Grid Africa.",
      `Cost: ~USD ${PROPOSAL_META.monthlyUsd}/month (USD ${PROPOSAL_META.pricePerSeatUsd} × ${PROPOSAL_META.seatCount}) + USD ${PROPOSAL_META.onboardingOneTimeUsd} one-time onboarding before subscription.`,
      `Timeline: ${PROPOSAL_META.onboardingDays} days to go-live; parallel run until cutover — client service unchanged.`,
      "Expected outcome: payroll-ready hours, manager visibility on coverage, and audit-ready records — same HR team, higher control.",
    ],
  },
  {
    id: "why-change-now",
    label: "02 — Why change is necessary now",
    ariaLabel: "Why change is necessary now",
    backgroundColor: FACTORIAL_COLORS.midnight,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    innerClassName: "!justify-start gap-8",
    headline: ["Structurally", "Unscalable"],
    lead: "Spreadsheet HR is not a temporary workaround — it is a ceiling. Every new client site and hire adds manual steps Finance and HR cannot absorb indefinitely.",
    bullets: [
      "Growth is already steady; the operating model must catch up before volume forces expensive corrections.",
      "Compliance reputation is a commercial asset — manual records are the weak link under scrutiny.",
      "Delaying standardization makes the next rollout harder, not easier.",
    ],
  },
  {
    id: "operating-model",
    label: "03 — Recommended operating model",
    ariaLabel: "Recommended operating model",
    backgroundColor: FACTORIAL_COLORS.lightNeutral,
    color: "#1a1a1a",
    innerClassName: "!justify-start gap-8",
    headline: ["One", "Standard", "Model"],
    lead: "This is the recommended operating model for Best Care — not a menu of options.",
    cards: [
      {
        title: "Workforce operations",
        body: "Problem: time and absence data is unreliable. Outcome: approved hours and leave in one system, ready for payroll every month.",
      },
      {
        title: "Employee administration",
        body: "Problem: documents and onboarding are fragmented. Outcome: contracts, IDs, and mandatory training tracked before anyone reaches a client site.",
      },
      {
        title: "Talent & hiring",
        body: "Problem: hiring stays informal as headcount grows. Outcome: structured pipeline and secure offers while keeping fast field communication.",
      },
    ],
  },
  {
    id: "expected-outcomes",
    label: "04 — Expected outcomes",
    ariaLabel: "Expected outcomes",
    backgroundColor: FACTORIAL_COLORS.viridian,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    innerClassName: "!justify-start gap-8",
    headline: ["Five", "Results"],
    cards: [
      {
        title: "Payroll accuracy",
        body: "Fewer correction cycles and faster month-end close for Finance.",
      },
      {
        title: "Manager visibility",
        body: "Coverage and leave decisions made before service levels drop on site.",
      },
      {
        title: "Compliance readiness",
        body: "Statutory and client training proof without parallel spreadsheets.",
      },
      {
        title: "Controlled hiring",
        body: "Steady recruitment (1–3/month) without reinventing process each hire.",
      },
      {
        title: "Field adoption",
        body: "Employees self-serve clocking and leave — HR stops being the bottleneck.",
      },
    ],
  },
  {
    id: "implementation",
    label: "05 — Implementation",
    ariaLabel: "Risk-minimized rollout",
    backgroundColor: FACTORIAL_COLORS.sunbeam,
    color: "#1a1a1a",
    innerClassName: "!justify-start gap-8",
    headline: ["Controlled", "Migration"],
    lead: `Rollout over ${PROPOSAL_META.onboardingDays} days — designed to remove adoption risk, not add operational burden.`,
    bullets: [
      "Parallel run: Excel and books stay live until Factorial data is validated for payroll.",
      "Phased adoption: pilot sites first, then network-wide — daily client delivery uninterrupted.",
      "Guided onboarding with Factorial + Talent Grid Africa; enterprise security (SOC 2, GDPR, AWS/Azure) included.",
    ],
  },
  {
    id: "investment",
    label: "06 — Investment",
    ariaLabel: "Investment",
    backgroundColor: FACTORIAL_COLORS.white,
    color: FACTORIAL_COLORS.midnight,
    innerClassName: "!justify-start gap-8",
    headline: ["Operating", "Comparison"],
    cards: [
      {
        title: "Monthly investment",
        body: `USD ${PROPOSAL_META.monthlyUsd}/month (~USD ${PROPOSAL_META.pricePerSeatUsd} × ${PROPOSAL_META.seatCount} employees).`,
      },
      {
        title: "Implementation fee",
        body: `USD ${PROPOSAL_META.onboardingOneTimeUsd} one-time before go-live and recurring billing.`,
      },
    ],
    closing: `For ${PROPOSAL_META.seatCount} field employees, manual time books and Excel payroll prep typically cost more in rework and risk each month than this investment.`,
  },
  {
    id: "decision-path",
    label: "07 — Decision path",
    ariaLabel: "Decision path",
    backgroundColor: FACTORIAL_COLORS.radicalRed,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    headline: ["Three", "Steps"],
    lead: "Staying on manual HR requires active justification as headcount and client sites grow. Moving forward follows a simple path:",
    bullets: [
      "Confirm scope with HR and Operations",
      "Approve commercial terms with management",
      "Start onboarding",
    ],
    footer: `${PROPOSAL_META.clientName} · Factorial × ${PROPOSAL_META.partner} · 2026`,
  },
];
