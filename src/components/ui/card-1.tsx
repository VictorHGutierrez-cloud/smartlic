import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PillCardAccent {
  pill: string;
  icon: string;
}

export interface PillCardItem {
  name: string;
  detail: string;
  logo: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  accent?: PillCardAccent;
}

export interface ColorfulPillCardsGridProps {
  title?: string;
  items: PillCardItem[];
  viewAllHref?: string;
  onViewAll?: () => void;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  theme?: "dark" | "light";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

const columnClasses: Record<NonNullable<ColorfulPillCardsGridProps["columns"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

const DEFAULT_ACCENT: PillCardAccent = {
  pill: "border-[#FF355E]/45 bg-gradient-to-r from-[#FF355E]/30 via-[#ff6b8a]/20 to-[#FFB940]/15 hover:from-[#FF355E]/40 hover:shadow-[0_8px_30px_rgba(255,53,94,0.25)]",
  icon: "bg-gradient-to-br from-[#FF355E] to-[#ff6b8a] text-white shadow-inner",
};

function PillCardRow({ item, theme }: { item: PillCardItem; theme: "dark" | "light" }) {
  const accent = item.accent ?? DEFAULT_ACCENT;
  const onDark = theme === "dark";

  const inner = (
    <>
      <div
        className={cn(
          "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full shadow-md",
          accent.icon
        )}
      >
        {item.logo}
      </div>
      <div className="min-w-0 flex-1 text-left">
        <p className={cn("font-semibold truncate", onDark ? "text-white" : "text-foreground")}>{item.name}</p>
        <p className={cn("text-sm line-clamp-2 leading-snug", onDark ? "text-white/70" : "text-muted-foreground")}>
          {item.detail}
        </p>
      </div>
      <ArrowUpRight
        className={cn(
          "h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
          onDark ? "text-white/50 group-hover:text-white" : "text-muted-foreground group-hover:text-foreground"
        )}
      />
    </>
  );

  const pillClass = cn(
    "group flex w-full items-center gap-3 rounded-2xl border p-3.5 transition-all duration-300 ease-out",
    "hover:scale-[1.03] active:scale-[0.98]",
    accent.pill,
    item.active && (onDark ? "ring-2 ring-white/60" : "ring-2 ring-primary/50"),
    item.active && "scale-[1.02] shadow-lg"
  );

  if (item.onClick) {
    return (
      <motion.li variants={itemVariants}>
        <button type="button" onClick={item.onClick} className={pillClass}>
          {inner}
        </button>
      </motion.li>
    );
  }

  return (
    <motion.li variants={itemVariants}>
      <a href={item.href ?? "#"} target="_blank" rel="noopener noreferrer" className={pillClass}>
        {inner}
      </a>
    </motion.li>
  );
}

export function ColorfulPillCardsGrid({
  title,
  items,
  viewAllHref,
  onViewAll,
  className,
  columns = 2,
  theme = "dark",
}: ColorfulPillCardsGridProps) {
  const onDark = theme === "dark";

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "proposal-font w-full rounded-2xl border p-5 md:p-6 font-sans text-card-foreground shadow-xl",
        onDark ? "border-white/10 bg-white/[0.04] backdrop-blur-sm" : "border-border bg-white",
        className
      )}
    >
      {title && (
        <div className="mb-5 flex items-center justify-between">
          <h2 className={cn("text-lg font-semibold", onDark ? "text-white" : "text-foreground")}>{title}</h2>
          {(viewAllHref || onViewAll) && (
            onViewAll ? (
              <button
                type="button"
                onClick={onViewAll}
                aria-label="View all"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                  onDark ? "bg-white/10 text-white/80 hover:bg-white/20" : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            ) : (
              <a
                href={viewAllHref}
                aria-label="View all"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                  onDark ? "bg-white/10 text-white/80 hover:bg-white/20" : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            )
          )}
        </div>
      )}

      <motion.ul
        className={cn("grid gap-3 md:gap-4", columnClasses[columns])}
        variants={containerVariants}
      >
        {items.map((item, index) => (
          <PillCardRow key={`${item.name}-${index}`} item={item} theme={theme} />
        ))}
      </motion.ul>
    </motion.section>
  );
}

/** Vibrant accents for proposal slide cards (cycles by index). */
export const SLIDE_PILL_ACCENTS: PillCardAccent[] = [
  {
    pill: "border-[#FF355E]/50 bg-gradient-to-r from-[#FF355E]/35 to-rose-600/20 hover:shadow-[0_8px_28px_rgba(255,53,94,0.35)]",
    icon: "bg-gradient-to-br from-[#FF355E] to-rose-500 text-white",
  },
  {
    pill: "border-cyan-400/50 bg-gradient-to-r from-cyan-500/30 to-teal-500/20 hover:shadow-[0_8px_28px_rgba(34,211,238,0.3)]",
    icon: "bg-gradient-to-br from-cyan-400 to-teal-500 text-white",
  },
  {
    pill: "border-amber-400/50 bg-gradient-to-r from-amber-500/30 to-orange-500/20 hover:shadow-[0_8px_28px_rgba(251,191,36,0.3)]",
    icon: "bg-gradient-to-br from-amber-400 to-orange-500 text-white",
  },
  {
    pill: "border-violet-400/50 bg-gradient-to-r from-violet-500/30 to-purple-600/20 hover:shadow-[0_8px_28px_rgba(167,139,250,0.3)]",
    icon: "bg-gradient-to-br from-violet-400 to-purple-600 text-white",
  },
  {
    pill: "border-emerald-400/50 bg-gradient-to-r from-emerald-500/30 to-green-600/20 hover:shadow-[0_8px_28px_rgba(52,211,153,0.3)]",
    icon: "bg-gradient-to-br from-emerald-400 to-green-600 text-white",
  },
  {
    pill: "border-sky-400/50 bg-gradient-to-r from-sky-500/30 to-blue-600/20 hover:shadow-[0_8px_28px_rgba(56,189,248,0.3)]",
    icon: "bg-gradient-to-br from-sky-400 to-blue-600 text-white",
  },
  {
    pill: "border-fuchsia-400/50 bg-gradient-to-r from-fuchsia-500/30 to-pink-600/20 hover:shadow-[0_8px_28px_rgba(232,121,249,0.3)]",
    icon: "bg-gradient-to-br from-fuchsia-400 to-pink-600 text-white",
  },
  {
    pill: "border-lime-400/50 bg-gradient-to-r from-lime-500/25 to-emerald-500/20 hover:shadow-[0_8px_28px_rgba(163,230,53,0.25)]",
    icon: "bg-gradient-to-br from-lime-400 to-emerald-500 text-slate-900",
  },
];

export function slidePillAccent(index: number): PillCardAccent {
  return SLIDE_PILL_ACCENTS[index % SLIDE_PILL_ACCENTS.length];
}
