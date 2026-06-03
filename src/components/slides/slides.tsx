import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  BarChart3,
  Check,
  Cloud,
  Eye,
  FileText,
  Link2,
  Rocket,
  Shield,
  Video,
  X,
  Zap,
} from "lucide-react";
import { DEFAULT_VALUES as d } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { ReportsGallery } from "./ReportsGallery";
import factorialWhy from "@/assets/factorial/factorial-why.jpg";
import factorialModules from "@/assets/factorial/factorial-modules.jpg";
import factorialPerformance from "@/assets/factorial/factorial-performance.jpg";
import factorialCosts from "@/assets/factorial/factorial-costs.jpg";
import factorialDecisions from "@/assets/factorial/factorial-decisions.jpg";
import factorialWhoWeAre from "@/assets/factorial/factorial-who-we-are.jpg";

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  gradient: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] tracking-[0.25em] uppercase opacity-90 mb-8 font-bold">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[80px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[36px] opacity-80 font-light leading-relaxed max-w-[1200px]">{children}</p>
);

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Welcome",
    summary: "90 US employees · shift tracking & payroll",
    icon: <FileText size={24} />,
    gradient: "from-[hsl(347,100%,20%)] to-[hsl(347,80%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">{d.empresa}</h1>
        <p className="opacity-80 font-light mb-8 text-5xl">{d.tagline}</p>
        <blockquote className="border-l-4 border-white/40 pl-8 mb-8 max-w-[1200px]">
          <p className="text-[28px] font-light italic opacity-90 leading-relaxed">&ldquo;{d.clientQuote}&rdquo;</p>
          <footer className="text-[20px] opacity-65 mt-4 not-italic">— {d.clientQuoteAttribution}</footer>
        </blockquote>
        <p className="opacity-60 font-light text-3xl max-w-[1300px]">
          {d.location} — {d.totalColaboradores} employees across {d.usSites} US plants, {d.shiftCount} shifts.
          One HR system for time tracking, time off, and audit-ready documents — ready for your{" "}
          {d.fiscalYearStart} rollout.
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
            <span className="text-[24px] font-light">F</span>
          </div>
          <div>
            <p className="opacity-70 text-4xl">{d.vendedor}</p>
            <p className="text-[18px] opacity-75">{d.cargoVendedor}</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "timeline",
    title: "Smartlic journey",
    summary: "Global ops · US focus · Brazil next",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(200,40%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The journey</SectionLabel>
        <SlideTitle>Global manufacturing. US workforce ready for systems.</SlideTitle>
        <div className="grid grid-cols-4 gap-6 mt-10 border-t border-white/15 pt-10">
          {[
            { stat: String(d.usEmployees), label: "US employees in scope" },
            { stat: String(d.usSites), label: "US operating locations" },
            { stat: String(d.shiftCount), label: "Production shifts" },
            { stat: "Global", label: "UK · Scotland · Ireland · Germany" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[42px] font-light">{s.stat}</p>
              <p className="text-[16px] opacity-75 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-[24px] opacity-75 leading-[1.8] mt-12 max-w-[1200px]">
          Smartlic runs manufacturing operations across {d.globalRegions}. The US program covers{" "}
          <strong className="opacity-100">{d.totalColaboradores} employees</strong> at{" "}
          <strong className="opacity-100">{d.usSites} plants</strong> — with{" "}
          <strong className="opacity-100">{d.brazilExpansion}</strong> on the horizon. The next chapter is giving HR
          the same reliability you expect on the floor:{" "}
          <strong className="opacity-100">payroll-ready time data</strong>, not spreadsheets.
        </p>
      </div>
    ),
  },

  {
    id: "next-scale",
    title: "The moment now",
    summary: "September 1 go-live · board presentation",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(160,60%,15%)] to-[hsl(200,50%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The moment now</SectionLabel>
        <SlideTitle>Spreadsheets worked — until shift premiums took over your week.</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-6">
          <div>
            <p className="text-[24px] opacity-75 leading-[1.8] mb-8">
              You spend <strong className="opacity-100">3+ hours</strong> managing shift data in spreadsheets — plus
              manual payroll inputs for your {d.payrollPartner}. Buddy punching on{" "}
              <strong className="opacity-100">fully manual time clocks</strong> adds risk you have already caught on
              camera.
            </p>
            <p className="text-[24px] opacity-75 leading-[1.8]">
              Factorial: one HR layer for kiosk clocking, shift premiums, overtime rules, time off, and cloud
              documents — so you can present to the US board and UK C-suite with a system ready for{" "}
              <strong className="opacity-100">{d.goLiveTarget}</strong>.
            </p>
          </div>
          <div className="space-y-6">
            <div className="border border-white/20 p-8">
              <p className="text-[18px] opacity-60 uppercase tracking-widest mb-3">Before</p>
              <p className="text-[22px] opacity-80">
                Manual clocks · buddy punching · spreadsheet payroll · paper files
              </p>
            </div>
            <div className="border border-white/40 bg-white/10 p-8">
              <p className="text-[18px] opacity-60 uppercase tracking-widest mb-3">After</p>
              <p className="text-[22px]">
                Tablet kiosk · automated premiums · compensation export · cloud compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "context-overview",
    title: "Current scenario",
    summary: "3 shifts · scheduling OK · tracking is not",
    icon: <Eye size={24} />,
    gradient: "from-[hsl(347,60%,25%)] to-[hsl(347,50%,12%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Context</SectionLabel>
        <SlideTitle>How you operate today</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              Operations run <strong className="opacity-100">{d.shiftCount} shifts</strong> — day (6am–2pm), second
              shift, and overnight. Some employees work Sun–Thu; others Mon–Fri. Scheduling itself is{" "}
              <strong className="opacity-100">not the problem</strong> — tracking hours, premiums, and overtime from
              there is.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              Every week you build spreadsheets with hours per shift, overtime, vacation, and holiday hours — weekly
              totals per employee and per plan — then send them to your bookkeeper.{" "}
              <strong className="opacity-100">{d.shiftPremiums}</strong>
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              All HR documents are <strong className="opacity-100">100% on paper</strong>. In a tornado-heavy region,
              one event could wipe compliance records for an entire plant.
            </p>
          </div>
          <div className="space-y-5">
            {[
              {
                icon: "⏰",
                title: "Manual time clocks",
                desc: "Buddy punching caught on camera — employees clocking in for someone off-site.",
              },
              {
                icon: "📊",
                title: "Spreadsheet payroll prep",
                desc: "Hours, OT, vacation, and holidays entered by hand for each shift and employee.",
              },
              {
                icon: "💵",
                title: "Shift premium math",
                desc: "+$0.15/hr second shift · +$0.25/hr overnight · tiered overtime multipliers.",
              },
              {
                icon: "📄",
                title: "Paper HR files",
                desc: "Zero digital backup — compliance risk if a plant is hit by disaster.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 border border-foreground/15 p-5">
                <span className="text-[30px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[22px] font-medium mb-1">{item.title}</h4>
                  <p className="text-[19px] text-foreground/75">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "context-tools",
    title: "Current tools",
    summary: "Clocks, Excel, paper — where each breaks",
    icon: <AlertTriangle size={24} />,
    gradient: "from-[hsl(37,80%,25%)] to-[hsl(37,60%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Diagnosis</SectionLabel>
        <SlideTitle>What you use today — and where it hurts</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-6">
          {[
            {
              code: "TC",
              name: "Manual time clocks",
              role: "Clock in / out",
              pain: ["Buddy punching on camera", "No geofence or audit trail", "Flip phones block mobile-only apps"],
            },
            {
              code: "XL",
              name: "Excel spreadsheets",
              role: "Shift & payroll inputs",
              pain: ["3+ hours per cycle on shift data", "Premium math done by hand", "Errors found at month-end"],
            },
            {
              code: "PP",
              name: "Paper files",
              role: "Contracts & HR records",
              pain: ["100% manual storage", "Tornado/disaster = zero compliance", "No e-signature audit trail"],
            },
          ].map((tool) => (
            <div key={tool.name} className="border border-white/20 p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                  <span className="text-[24px] font-light">{tool.code}</span>
                </div>
                <div>
                  <h3 className="text-[28px] font-medium">{tool.name}</h3>
                  <p className="text-[16px] opacity-75 uppercase tracking-widest">{tool.role}</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-white/15 pt-5">
                {tool.pain.map((line) => (
                  <p key={line} className="text-[18px] opacity-65 flex items-center gap-3">
                    <X size={16} className="opacity-75 shrink-0" /> {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "context-impact",
    title: "Operational impact",
    summary: "Time, risk, compliance — every month",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(184,80%,18%)] to-[hsl(184,60%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Real impact</SectionLabel>
        <SlideTitle>What the business loses — every month</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-8">
          {[
            {
              emoji: "⏱️",
              title: "Time lost",
              body: "Libby spends her week on shift premiums and spreadsheet payroll — not strategic HR.",
            },
            {
              emoji: "⚠️",
              title: "Payroll risk",
              body: "Buddy punching and manual premium math create correction cycles with your bookkeeper.",
            },
            {
              emoji: "🌪️",
              title: "Compliance exposure",
              body: "Paper-only records in a tornado-heavy region — one event = 100% out of compliance.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-white/20 p-10">
              <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
                <span className="text-[32px]">{item.emoji}</span>
              </div>
              <h3 className="text-[28px] font-medium mb-3">{item.title}</h3>
              <p className="text-[21px] opacity-70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border border-white/15 p-8 text-center">
          <p className="text-[26px] opacity-75 font-light leading-relaxed max-w-[1200px] mx-auto">
            None of this is inevitable. <strong className="opacity-100">The question is not if — it is when.</strong>
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "problems",
    title: "Pain points",
    summary: "Five pains at your scale",
    icon: <X size={24} />,
    gradient: "from-[hsl(0,70%,25%)] to-[hsl(0,50%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>What we identified</SectionLabel>
        <SlideTitle>Five pains at your scale</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            {
              title: "Buddy punching",
              impact: "Caught on camera — off-site clock-ins",
              desc: "Fully manual time clocks with no identity verification at the plant entrance.",
            },
            {
              title: "Shift premium complexity",
              impact: "Libby's #1 time drain",
              desc: "+$0.15/hr second shift · +$0.25/hr overnight · tiered OT — all calculated by hand.",
            },
            {
              title: "Spreadsheet payroll prep",
              impact: `~${d.horasRHManualMes} hrs/month HR rework`, // estimativa
              desc: "Hours, OT, vacation, and holidays per shift — weekly totals for bookkeeper.",
            },
            {
              title: "Paper-only compliance",
              impact: "Tornado risk at plant level",
              desc: "Five tornado alerts since October — zero digital backup for employee records.",
            },
            {
              title: "Inclusive clock-in gap",
              impact: "Flip-phone workforce excluded",
              desc: "Mobile-only apps fail employees without smartphones — kiosk tablet solves this.",
            },
          ].map((p) => (
            <div key={p.title} className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={24} className="opacity-65" />
                <h3 className="text-[26px] font-normal">{p.title}</h3>
              </div>
              <p className="text-[20px] opacity-75 leading-relaxed mb-5">{p.desc}</p>
              <p className="text-[18px] opacity-80 border-t border-white/15 pt-4">{p.impact}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "cost-analysis",
    title: "Cost of standing still",
    summary: "$630/mo · pricing discussed on call",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,90%,22%)] to-[hsl(0,70%,15%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Cost of standing still</SectionLabel>
        <SlideTitle>What does not changing cost?</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">The math is simple</h3>
            <div className="border border-white/20 p-8 space-y-4">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">HR hours on manual tracking / month</span>
                <span className="font-medium">{d.horasRHManualMes} h</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Loaded cost / hour</span>
                <span className="font-medium">{formatUSD(d.custoHoraRH_USD)}</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Direct labor cost / month</span>
                <span className="font-medium text-[24px]">{formatUSD(d.custoManualMensal_USD)}</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-75 font-medium">Annual (labor only)</span>
                <span className="font-medium text-[24px]">{formatUSD(d.custoManualAnual_USD)}</span>
              </div>
            </div>
            <p className="text-[16px] opacity-50 mt-4">// estimativa — validate with Finance</p>
          </div>
          <div>
            <div className="border border-white/25 bg-white/10 p-10 text-center mb-8">
              <p className="text-[20px] opacity-80 mb-2">Annual drag — manual model</p>
              <p className="text-[80px] font-light leading-none">{formatUSD(d.custoManualAnual_USD)}</p>
              <p className="text-[18px] opacity-75 mt-3">Before buddy-punch losses, compliance risk, and OT errors</p>
            </div>
            <div className="border border-white/15 p-6">
              <p className="text-[18px] opacity-80 uppercase tracking-widest mb-4">This still excludes...</p>
              {[
                "Payroll correction cycles with your bookkeeper",
                "Buddy-punch wage leakage across 3 shifts",
                "Compliance rebuild cost after a plant disaster",
              ].map((c) => (
                <p key={c} className="text-[19px] opacity-65 flex items-start gap-3 mb-2">
                  <AlertTriangle size={18} className="opacity-80 shrink-0 mt-1" /> {c}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border border-white/15 p-5 text-center space-y-2">
          <p className="text-[22px] opacity-70 font-light">
            Discussed on your discovery call:{" "}
            <strong className="opacity-100">
              {formatUSD(d.custoColaboradorMes_USD)}/employee · {d.totalColaboradores} seats ={" "}
              {formatUSD(d.mensalFactorial_USD)}/month
            </strong>
          </p>
          <p className="text-[18px] opacity-60">
            One-time onboarding {formatUSD(d.implantacaoFactorial_USD)} ({d.implantacaoNota}) · subscription starts
            after {d.onboardingDias} days · ~{d.onboardingHoras}h online onboarding
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "solution",
    title: "Solution",
    summary: "Demo ready · map pains to modules",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(184,90%,20%)] to-[hsl(184,70%,10%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The answer</SectionLabel>
        <SlideTitle>Every pain maps to a concrete change</SlideTitle>
        <div className="border-2 border-foreground/25 bg-foreground/[0.06] p-6 mb-10 flex items-center justify-between gap-8">
          <div>
            <p className="text-[22px] font-medium text-foreground mb-2">
              Your dedicated demo environment is ready
            </p>
            <p className="text-[18px] text-foreground/85 mb-1">
              Email: <span className="font-mono">{d.demoEmail}</span>
            </p>
            <p className="text-[18px] text-foreground/85">
              Password: <span className="font-mono">{d.demoPassword}</span>
            </p>
          </div>
          <a
            href={d.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-foreground text-background px-8 py-4 text-[20px] font-medium hover:opacity-90 transition-opacity"
          >
            Open demo →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-4">
            {[
              {
                label: "Tablet kiosk clocking",
                desc: `${d.clockingMethod} — face or PIN at the plant wall, inclusive for all employees.`,
              },
              {
                label: "Shift premiums & overtime",
                desc: "Policies for +$0.15/hr, +$0.25/hr, and tiered OT — calculated automatically on the timesheet.",
              },
              {
                label: "Compensation export",
                desc: "One-click compensation spreadsheet for your bookkeeper — hours, OT, PTO, holidays by shift.",
              },
              {
                label: "Cloud documents & e-sign",
                desc: "Templates, payslip split-by-employee, audit-proof signatures — disaster-safe compliance.",
              },
            ].map((f) => (
              <div key={f.label} className="flex items-start gap-4 border border-foreground/20 bg-background p-6">
                <Check size={24} className="text-foreground shrink-0 mt-1" />
                <div>
                  <p className="text-[24px] font-medium text-foreground">{f.label}</p>
                  <p className="text-[19px] text-foreground/80 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <ExpandableImage
            src={factorialWhy}
            alt="Factorial HR platform overview"
            title="Factorial HR platform"
            caption="Product overview"
            className="border border-foreground/15 overflow-hidden bg-background min-h-[380px]"
            imgClassName="w-full h-full object-cover object-center min-h-[380px]"
          />
        </div>
      </div>
    ),
  },

  {
    id: "factorial-value",
    title: "Why Factorial",
    summary: "One platform · four proof points",
    icon: <Rocket size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(347,50%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px] py-[48px]">
        <SectionLabel>Why Factorial</SectionLabel>
        <SlideTitle>One platform for how you actually run HR</SlideTitle>
        <div className="grid grid-cols-4 gap-5 mt-6">
          {[
            { src: factorialPerformance, label: "Build high-performance teams" },
            { src: factorialCosts, label: "Control costs & expenses" },
            { src: factorialDecisions, label: "Make better decisions" },
            { src: factorialWhoWeAre, label: "Built for growing companies" },
          ].map((item) => (
            <div key={item.label} className="border border-white/20 overflow-hidden bg-white/5">
              <ExpandableImage
                src={item.src}
                alt={item.label}
                title={item.label}
                caption="Factorial"
                className="w-full"
                imgClassName="w-full h-[200px] object-cover object-top"
              />
              <p className="text-[17px] font-medium p-4 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "reports",
    title: "Visibility",
    summary: "Live reports · click to explore",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(184,40%,95%)] to-[hsl(347,30%,92%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px] py-[60px]">
        <SectionLabel>Proof</SectionLabel>
        <SlideTitle>Decisions with data — not Excel</SlideTitle>
        <SlideSubtitle>
          Click any report to explore — real Factorial views. Ask Factorial One for an employee address table in
          seconds.
        </SlideSubtitle>
        <ReportsGallery />
      </div>
    ),
  },

  {
    id: "integration",
    title: "Integration",
    summary: "Payroll partner stays · Factorial feeds data",
    icon: <Link2 size={24} />,
    gradient: "from-[hsl(37,70%,22%)] to-[hsl(37,50%,10%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>How it fits</SectionLabel>
        <SlideTitle>Your payroll partner stays. HR gets a system of record.</SlideTitle>
        <p className="text-[24px] opacity-75 leading-[1.7] max-w-[1100px] mt-4 mb-10">
          Your {d.payrollPartner} keeps processing payroll and compliance. Factorial becomes the{" "}
          <strong className="opacity-100">HR backbone</strong> — consolidating time, absences, shift premiums, and
          documents, then exporting compensation spreadsheets your bookkeeper can pull directly.
        </p>
        <div className="grid grid-cols-2 gap-8">
          {[
            {
              title: "Timesheet → Compensation",
              desc: "Approve timesheets, hit Compensation — hours, OT, PTO flow to export-ready spreadsheets.",
            },
            {
              title: "Bookkeeper access",
              desc: "Invite your payroll provider with their own seats — they extract what they need themselves.",
            },
            {
              title: "Two US plants · one view",
              desc: "Headcount, attendance, and overtime visible across both operating locations.",
            },
            {
              title: "Employee self-service",
              desc: "Staff update address, phone, and emergency contacts via workflow — no HR middleman.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-white/20 p-8">
              <h4 className="text-[24px] font-medium mb-3">{item.title}</h4>
              <p className="text-[20px] opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "comparison",
    title: "Comparison",
    summary: "Before vs after · point by point",
    icon: <Check size={24} />,
    gradient: "from-[hsl(160,50%,20%)] to-[hsl(160,40%,8%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Before and after</SectionLabel>
        <SlideTitle>What changes — point by point</SlideTitle>
        <div className="border border-foreground/20 mt-6">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[22px]">
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60">Criteria</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">
              Today (manual)
            </div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">
              With Factorial
            </div>
            {[
              { c: "Clock in / out", s: "Manual clocks · buddy punching", f: "Tablet kiosk · audit trail" },
              { c: "Shift premiums", s: "Hand-calculated in Excel", f: "Automated policies (+$0.15 / +$0.25)" },
              { c: "Overtime rules", s: "Tiered multipliers by hand", f: "Policy blocks on timesheet" },
              { c: "Payroll prep", s: "Weekly spreadsheet rebuild", f: "Compensation export" },
              { c: "HR documents", s: "100% paper · disaster risk", f: "Cloud · e-sign · split payslips" },
              { c: "Employee data", s: "HR tracks changes manually", f: "Self-service workflows + AI reports" },
              { c: "Flip-phone staff", s: "Excluded from mobile apps", f: "Wall kiosk — inclusive for all" },
            ].map((row, i, arr) => (
              <Fragment key={row.c}>
                <div
                  className={`px-10 py-5 flex items-center text-[20px] ${i < arr.length - 1 ? "border-b border-foreground/10" : ""}`}
                >
                  {row.c}
                </div>
                <div
                  className={`px-10 py-5 flex items-center justify-center gap-3 opacity-70 ${i < arr.length - 1 ? "border-b border-foreground/10" : ""}`}
                >
                  <X size={20} className="opacity-60 shrink-0" />
                  <span className="text-[20px]">{row.s}</span>
                </div>
                <div
                  className={`px-10 py-5 flex items-center justify-center gap-3 ${i < arr.length - 1 ? "border-b border-foreground/10" : ""}`}
                >
                  <Check size={20} className="opacity-80 shrink-0" />
                  <span className="text-[20px]">{row.f}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "tech-architecture",
    title: "Security",
    summary: "AWS/Azure · SOC 2 · GDPR · NDA",
    icon: <Cloud size={24} />,
    gradient: "from-[hsl(210,50%,18%)] to-[hsl(210,40%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>For IT & management</SectionLabel>
        <SlideTitle>Security & compliance posture</SlideTitle>
        <div className="grid grid-cols-[1fr_1.1fr] gap-10 mt-6">
          <div className="space-y-6">
            <div className="border border-white/20 p-8 space-y-4">
              {[
                { label: "Hosting", value: "AWS + Azure (incl. US & EU regions)" },
                { label: "Availability", value: "SLA-backed infrastructure" },
                { label: "Recovery", value: "Disaster recovery — unlike paper files" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[20px]">
                  <span className="opacity-75">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
            <div className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Shield size={24} className="opacity-80" />
                <h3 className="text-[26px] font-medium">Certifications</h3>
              </div>
              {["SOC 2 Type II", "ISO-aligned controls", "GDPR", "NDA available on request"].map((cert) => (
                <p key={cert} className="text-[19px] opacity-85 flex items-center gap-3 mb-2">
                  <Check size={16} className="shrink-0" /> {cert}
                </p>
              ))}
            </div>
          </div>
          <ExpandableImage
            src={factorialModules}
            alt="Factorial HR modules"
            title="All HR modules in one platform"
            caption="Factorial"
            className="border border-white/20 overflow-hidden bg-white/5 flex items-center justify-center p-4"
            imgClassName="w-full max-h-[520px] object-contain"
          />
        </div>
      </div>
    ),
  },

  {
    id: "video",
    title: "The Future",
    summary: "Smartlic · next steps & pricing",
    icon: <Video size={24} />,
    gradient: "from-[hsl(347,100%,25%)] to-[hsl(347,80%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>See it live</SectionLabel>
        <SlideTitle>Smartlic — HR that keeps up with the floor</SlideTitle>
        <div className="w-[960px] h-[540px] mt-6">
          <iframe
            width="960"
            height="540"
            src={`https://www.youtube.com/embed/${d.closingVideoId}`}
            title="Factorial — product overview (English)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
        <div className="mt-10 max-w-[960px] w-full text-left border border-white/20 p-8">
          <p className="text-[20px] uppercase tracking-[0.2em] opacity-70 mb-5 font-bold">Next steps</p>
          <ol className="space-y-3 text-[22px] opacity-85 font-light list-decimal list-inside">
            <li>Explore the demo environment (credentials on the Solution slide)</li>
            <li>
              Present to US board &amp; UK C-suite next week — decision target within ~1 month · close by{" "}
              {d.closeTarget} for {d.implementationDays}-day implementation
            </li>
            <li>
              Go-live {d.goLiveTarget} (fiscal year start) ·{" "}
              <strong className="opacity-100">{formatUSD(d.mensalFactorial_USD)}/month</strong> + one-time onboarding{" "}
              <strong className="opacity-100">{formatUSD(d.implantacaoFactorial_USD)}</strong>
            </li>
          </ol>
        </div>
      </div>
    ),
  },
];
