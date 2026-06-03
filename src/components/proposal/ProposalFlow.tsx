import { ExternalLink } from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { PROPOSAL_META, PROPOSAL_SECTIONS } from "@/data/bestCareProposal";

const labelCls = "text-xs font-bold uppercase tracking-[0.2em]";
const headCls =
  "text-[clamp(2.25rem,8vw,6.5rem)] font-bold leading-[0.9] uppercase tracking-tight";
const bodyCls = "text-[clamp(1rem,2.2vw,1.75rem)] font-normal leading-relaxed";
const cardTitleCls = "mb-2 text-sm font-bold uppercase tracking-wider";
const cardBodyCls = "text-[clamp(0.9rem,1.4vw,1.15rem)] leading-relaxed opacity-80";

function Divider({ light }: { light?: boolean }) {
  return (
    <hr
      className={
        light
          ? "my-[2vw] border-none border-t border-white/50"
          : "my-[2vw] border-none border-t border-black/40"
      }
    />
  );
}

function Headline({ lines }: { lines: string[] }) {
  return (
    <div>
      <h2 className={headCls}>
        {lines.map((line, i) => (
          <span key={line}>
            {line}
            {i < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default function ProposalFlow() {
  const { clientName, contactName, contactRole, contactEmail } = PROPOSAL_META;

  return (
    <FlowArt aria-label={`Factorial proposal for ${clientName}`}>
      {PROPOSAL_SECTIONS.map((section) => (
        <FlowSection
          key={section.id}
          aria-label={section.ariaLabel}
          innerClassName={section.innerClassName}
          style={{
            backgroundColor: section.backgroundColor,
            color: section.color,
          }}
        >
          <p className={labelCls}>{section.label}</p>
          <Divider light={section.dividerLight} />

          <Headline lines={section.headline} />

          {section.lead ? (
            <>
              <Divider light={section.dividerLight} />
              <p className={`max-w-[55ch] ${bodyCls}`}>{section.lead}</p>
            </>
          ) : null}

          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className={`max-w-[55ch] ${bodyCls}`}>
              {p}
            </p>
          ))}

          {section.cards && section.cards.length > 0 ? (
            <>
              <Divider light={section.dividerLight} />
              <div className="flex flex-wrap gap-[3vw]">
                {section.cards.map((card) => (
                  <div key={card.title} className="min-w-[180px] flex-1">
                    <p className={cardTitleCls}>{card.title}</p>
                    <p className={cardBodyCls}>{card.body}</p>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          {section.closing ? (
            <>
              <Divider light={section.dividerLight} />
              <p className={`max-w-[55ch] font-medium ${bodyCls}`}>{section.closing}</p>
            </>
          ) : null}

          {section.bullets && section.bullets.length > 0 ? (
            <>
              <Divider light={section.dividerLight} />
              <ul className={`max-w-[55ch] list-disc space-y-3 pl-5 ${bodyCls}`}>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {section.id === "executive-decision-summary" ? (
            <div className="mt-4 flex flex-wrap items-center gap-6 border-t border-white/30 pt-6">
              <div className="flex h-12 w-12 items-center justify-center border border-white/40 text-xl font-light">
                F
              </div>
              <div>
                <p className="text-[clamp(1rem,1.5vw,1.2rem)] font-medium">{contactName}</p>
                <p className="text-sm opacity-70">{contactRole}</p>
              </div>
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(`${clientName} — Proposal follow-up`)}`}
                className="ml-auto inline-flex items-center gap-2 border border-white/40 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
              >
                Contact <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ) : null}

          {section.footer ? (
            <p className="mt-auto text-sm opacity-60 border-t border-white/20 pt-6">{section.footer}</p>
          ) : null}
        </FlowSection>
      ))}
    </FlowArt>
  );
}
