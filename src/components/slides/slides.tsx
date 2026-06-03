import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  Calendar,
  Check,
  Clock,
  FileText,
  Link2,
  ShieldAlert,
  Smartphone,
  Table2,
  Users,
  X,
  Zap,
} from "lucide-react";
import { DEFAULT_VALUES as d } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[28px] tracking-[0.2em] uppercase opacity-90 mb-6 font-bold">{children}</p>
);

const SlideTitle = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <h2
    className={`text-[64px] font-bold leading-[1.12] mb-8 max-w-[1300px] ${light ? "text-foreground" : ""}`}
  >
    {children}
  </h2>
);

const FactorialCard = ({
  icon,
  title,
  body,
  impact,
  light = false,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  impact?: string;
  light?: boolean;
}) => (
  <div
    className={`border-l-4 p-6 h-full ${
      light
        ? "border-primary bg-primary/[0.04] border border-l-4 border-foreground/10"
        : "border-primary/80 bg-white/5 border border-white/15"
    }`}
  >
    <div className="flex items-start gap-4 mb-3">
      <div
        className={`shrink-0 w-10 h-10 flex items-center justify-center ${
          light ? "bg-primary/10 text-primary" : "bg-white/10 text-white"
        }`}
      >
        {icon}
      </div>
      <h3 className={`text-[22px] font-bold leading-snug ${light ? "text-foreground" : ""}`}>{title}</h3>
    </div>
    <p className={`text-[18px] font-normal leading-relaxed ${light ? "text-foreground/75" : "opacity-75"}`}>
      {body}
    </p>
    {impact && (
      <p
        className={`text-[16px] font-bold mt-4 pt-3 border-t ${
          light ? "text-primary border-foreground/10" : "opacity-90 border-white/15"
        }`}
      >
        {impact}
      </p>
    )}
  </div>
);

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Welcome",
    summary: "Smartlic · 90 employees · 3 shifts",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[80px] font-bold leading-[1.08] mb-6 max-w-[1400px]">{d.empresa}</h1>
        <p className="opacity-90 font-normal mb-8 text-[36px]">{d.tagline}</p>
        <blockquote className="border-l-4 border-white/40 pl-8 mb-8 max-w-[1100px]">
          <p className="text-[24px] font-normal italic opacity-90 leading-relaxed">&ldquo;{d.clientQuote}&rdquo;</p>
          <footer className="text-[18px] font-bold opacity-70 mt-3 not-italic">— {d.clientQuoteAttribution}</footer>
        </blockquote>
        <p className="opacity-75 font-normal text-[26px] max-w-[1200px]">
          {d.location} — {d.totalColaboradores} employees · {d.usSites} US plants · {d.shiftCount} shifts ·{" "}
          {d.bundleName}
        </p>
        <div className="mt-14 flex items-center gap-5">
          <div className="w-11 h-11 border border-white/30 flex items-center justify-center bg-white/5">
            <span className="text-[20px] font-bold">F</span>
          </div>
          <div>
            <p className="opacity-90 text-[28px] font-bold">{d.vendedor}</p>
            <p className="text-[16px] font-normal opacity-75">{d.cargoVendedor}</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "challenges",
    title: "Your challenges",
    summary: "5 pains · 90 employees · 3 shifts",
    icon: <AlertTriangle size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>What we heard</SectionLabel>
        <SlideTitle>Your challenges today</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          {d.usEmployees} US employees · {d.usSites} plants · {d.shiftCount} shifts — scheduling works;{" "}
          <strong className="font-bold opacity-100">tracking from there does not</strong>.
        </p>
        <div className="grid grid-cols-3 gap-5">
          <FactorialCard
            icon={<ShieldAlert size={22} />}
            title="Buddy punching"
            body="Fully manual time clocks — employees caught on camera clocking in for someone off-site."
            impact="Audit risk on every shift"
          />
          <FactorialCard
            icon={<Table2 size={22} />}
            title="Shift premium math"
            body={`Second shift +${d.shiftPremiumSecondPercent}% · overnight +${d.shiftPremiumOvernightPercent}% · tiered OT (${d.overtimeFirstTierMultiplier}x / ${d.overtimeSecondTierMultiplier}x) — all calculated by hand in Excel.`}
            impact="Libby's #1 time drain"
          />
          <FactorialCard
            icon={<Clock size={22} />}
            title="Spreadsheet payroll"
            body="Hours, OT, vacation, and holidays per shift — weekly totals rebuilt for your bookkeeper."
            impact="3+ hours per cycle"
          />
          <FactorialCard
            icon={<FileText size={22} />}
            title="Paper-only HR files"
            body="100% manual records in a tornado-heavy region — one event wipes compliance for a plant."
            impact="Zero digital backup"
          />
          <FactorialCard
            icon={<Smartphone size={22} />}
            title="Flip-phone workforce"
            body="Mobile-only apps exclude employees without smartphones — kiosk clock-in required."
            impact="Inclusive clock-in gap"
          />
          <FactorialCard
            icon={<Users size={22} />}
            title="No single source of truth"
            body="Two US sites · three shifts · manual clocks — no payroll-ready data in one place."
            impact={`${d.totalColaboradores} employees · 2 sites`}
          />
        </div>
      </div>
    ),
  },

  {
    id: "solution",
    title: "The solution",
    summary: "Starter Planning Enterprise · demo ready",
    icon: <Zap size={24} />,
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Factorial HR</SectionLabel>
        <SlideTitle light>Every challenge maps to a module</SlideTitle>
        <p className="text-[20px] font-normal text-foreground/75 mb-6">
          <strong className="font-bold text-foreground">{d.bundleName}</strong> — {d.bundleModules}
        </p>
        <div className="border border-foreground/15 bg-primary/[0.03] p-5 mb-6 flex items-center justify-between gap-6">
          <div>
            <p className="text-[20px] font-bold text-foreground mb-1">Demo environment ready</p>
            <p className="text-[16px] font-normal text-foreground/80">
              {d.demoEmail} · <span className="font-mono">{d.demoPassword}</span>
            </p>
          </div>
          <a
            href={d.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-primary text-primary-foreground px-6 py-3 text-[18px] font-bold hover:opacity-90"
          >
            Open demo →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <FactorialCard
            light
            icon={<Clock size={22} />}
            title="Time Tracking"
            body={`${d.clockingMethod} — automated timesheets with real-time visibility across both plants.`}
          />
          <FactorialCard
            light
            icon={<Calendar size={22} />}
            title="Shifts"
            body={`Shift premium policies (+${d.shiftPremiumSecondPercent}% / +${d.shiftPremiumOvernightPercent}%) and tiered overtime (${d.overtimeFirstTierMultiplier}x / ${d.overtimeSecondTierMultiplier}x) — calculated on the timesheet.`}
          />
          <FactorialCard
            light
            icon={<Check size={22} />}
            title="Time Off"
            body="PTO and sick leave requests with manager approval — linked directly to timesheets."
          />
          <FactorialCard
            light
            icon={<Users size={22} />}
            title="Core HR"
            body="Centralized employee profiles — address, phone, emergency contacts — with self-service workflows."
          />
        </div>
      </div>
    ),
  },

  {
    id: "investment",
    title: "Your proposal",
    summary: "$1,000 setup · $900/mo",
    icon: <FileText size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Your proposal</SectionLabel>
        <SlideTitle>Clear investment · clear scope</SlideTitle>
        <p className="text-[22px] font-normal opacity-80 mb-8">
          <strong className="font-bold">{d.bundleName}</strong> — {d.bundleModules}
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">One-time implementation</p>
            <p className="text-[56px] font-bold leading-none mb-2">{formatUSD(d.implantacaoFactorial_USD)}</p>
            <p className="text-[20px] font-normal opacity-75 mb-4">Single payment · {d.onboardingHoras} hours guided onboarding</p>
            <p className="text-[16px] font-normal opacity-60 border-t border-white/15 pt-4">{d.implantacaoNota}</p>
          </div>
          <div className="border border-white/20 bg-white/5 p-8">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-4">Monthly subscription</p>
            <p className="text-[56px] font-bold leading-none mb-2">{formatUSD(d.mensalFactorial_USD)}</p>
            <p className="text-[20px] font-normal opacity-75 mb-2">/ month · {d.totalColaboradores} employees</p>
            <p className="text-[18px] font-bold opacity-90">
              {formatUSD(d.custoColaboradorMes_USD)} / user / month
            </p>
            <p className="text-[16px] font-normal opacity-65 border-t border-white/15 pt-4 mt-4">
              {d.pricingJustification}
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 border border-white/15 bg-white/[0.03] p-6">
          {[
            { label: "Seats", value: String(d.totalColaboradores) },
            { label: "Per user / month", value: formatUSD(d.custoColaboradorMes_USD) },
            { label: "Billing starts", value: `After ${d.onboardingDias} days` },
          ].map((row) => (
            <div key={row.label} className="text-center">
              <p className="text-[14px] font-bold uppercase tracking-widest opacity-60 mb-1">{row.label}</p>
              <p className="text-[24px] font-bold">{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "how-it-fits",
    title: "How it fits",
    summary: "Payroll partner stays · before vs after",
    icon: <Link2 size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>How it fits</SectionLabel>
        <SlideTitle>Your payroll partner stays. HR gets a system of record.</SlideTitle>
        <p className="text-[22px] font-normal opacity-75 mb-8 max-w-[1100px]">
          {d.payrollPartner} keeps processing payroll. Factorial consolidates time, shift premiums, and absences — then
          exports compensation spreadsheets your bookkeeper can pull directly.
        </p>
        <div className="border border-white/20">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[18px] font-bold bg-white/5">
            <div className="px-6 py-4 border-b border-white/15 opacity-70">Criteria</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">Today</div>
            <div className="px-6 py-4 border-b border-white/15 text-center opacity-70">With Factorial</div>
            {[
              { c: "Clock in / out", s: "Manual clocks · buddy punching", f: "Tablet kiosk · audit trail" },
              { c: "Shift premiums", s: "Excel by hand", f: "Automated Shifts policies" },
              { c: "Payroll prep", s: "Weekly spreadsheet rebuild", f: "Compensation export" },
              { c: "Time off", s: "Disconnected from timesheets", f: "Approved · linked to payroll" },
              { c: "Employee data", s: "Paper · manual updates", f: "Core HR · self-service" },
              { c: "Multi-site view", s: "Per-plant silos", f: "Both US plants · one dashboard" },
            ].map((row, i, arr) => (
              <Fragment key={row.c}>
                <div
                  className={`px-6 py-4 flex items-center font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  {row.c}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 opacity-70 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <X size={16} className="shrink-0" /> {row.s}
                </div>
                <div
                  className={`px-6 py-4 flex items-center justify-center gap-2 font-normal text-[17px] ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <Check size={16} className="shrink-0 opacity-90" /> {row.f}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "next-steps",
    title: "Next steps",
    summary: "Board · July close · September go-live",
    icon: <Calendar size={24} />,
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[100px]">
        <SectionLabel>Next steps</SectionLabel>
        <SlideTitle>Ready for your board — and your fiscal year</SlideTitle>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Explore the demo",
                body: "Use the credentials on the Solution slide — see time tracking, shifts, and compensation export live.",
              },
              {
                step: "2",
                title: "Present to leadership",
                body: "US board and UK C-suite next week — decision target within ~1 month.",
              },
              {
                step: "3",
                title: "Close & implement",
                body: `Contract by ${d.closeTarget} · ~${d.implementationDays}-day implementation · employee go-live ${d.goLiveTarget}.`,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 border-l-4 border-primary/80 bg-white/5 border border-white/15 p-6">
                <span className="text-[32px] font-bold opacity-50 shrink-0">{item.step}</span>
                <div>
                  <p className="text-[22px] font-bold mb-1">{item.title}</p>
                  <p className="text-[18px] font-normal opacity-75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-white/20 bg-white/5 p-8 flex flex-col justify-center">
            <p className="text-[18px] font-bold uppercase tracking-widest opacity-70 mb-6">Summary</p>
            <div className="space-y-5">
              <div>
                <p className="text-[16px] font-normal opacity-65">Monthly</p>
                <p className="text-[40px] font-bold">{formatUSD(d.mensalFactorial_USD)}/mo</p>
              </div>
              <div>
                <p className="text-[16px] font-normal opacity-65">Implementation</p>
                <p className="text-[40px] font-bold">{formatUSD(d.implantacaoFactorial_USD)} one-time</p>
              </div>
              <div className="border-t border-white/15 pt-5">
                <p className="text-[20px] font-bold">{d.vendedor}</p>
                <p className="text-[16px] font-normal opacity-75">{d.emailVendedor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
