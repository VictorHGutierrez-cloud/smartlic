import { useNavigate } from "react-router-dom";
import { LayoutGrid } from "lucide-react";
import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import { ParticleTextEffect, SMARTLIC_PARTICLE_WORDS } from "@/components/ui/particle-text-effect";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="proposal-font relative min-h-screen bg-background text-foreground font-sans flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ParticleTextEffect words={SMARTLIC_PARTICLE_WORDS} theme="light" className="pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/40 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <ColorfulPillCardsGrid
          theme="light"
          columns={1}
          className="border border-border/80 bg-white/95 shadow-sm backdrop-blur-sm"
          items={[
            {
              name: "Enter proposal",
              detail: "Topics on the left · slide opens in a floating panel",
              logo: <LayoutGrid className="h-5 w-5" />,
              accent: slidePillAccent(0),
              onClick: () => navigate("/proposta"),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Landing;
