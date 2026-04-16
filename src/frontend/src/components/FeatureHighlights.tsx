import { Badge } from "@/components/ui/badge";
import type { Feature } from "@/types";
import { Cpu, GitMerge, Layers, PieChart } from "lucide-react";

const HIGHLIGHTS: Feature[] = [
  {
    id: "all-in-one",
    title: "All-in-One Platform",
    description:
      "Replace scattered point solutions with a unified platform for gifting, merchandise, recognition, and analytics — one contract, one dashboard.",
    icon: "layers",
    benefit: "Cut vendor sprawl by up to 70%",
  },
  {
    id: "automation-ai",
    title: "Automation & AI-Driven Insights",
    description:
      "Intelligent triggers automate routine rewards while AI surfaces actionable insights about engagement trends, budget efficiency, and program health.",
    icon: "cpu",
    benefit: "85% reduction in manual tasks",
  },
  {
    id: "end-to-end",
    title: "End-to-End Solution",
    description:
      "From catalog curation and procurement to personalization, delivery, and recipient tracking — Manazen handles every step of the reward journey.",
    icon: "git-merge",
    benefit: "Zero-friction gift delivery",
  },
  {
    id: "data-driven",
    title: "Data-Driven Decision Making",
    description:
      "Real-time dashboards, executive reports, and correlation analytics connect your rewards investment to measurable business outcomes and retention metrics.",
    icon: "pie-chart",
    benefit: "Prove ROI to the C-suite",
  },
];

function HLIcon({ icon }: { icon: string }) {
  const cls = "h-7 w-7";
  switch (icon) {
    case "layers":
      return <Layers className={cls} />;
    case "cpu":
      return <Cpu className={cls} />;
    case "git-merge":
      return <GitMerge className={cls} />;
    default:
      return <PieChart className={cls} />;
  }
}

export function FeatureHighlights() {
  return (
    <section
      id="features"
      className="py-24 bg-muted/30"
      data-ocid="features.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
            Competitive Advantages
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Why leading teams choose Manazen
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Engineered for B2B complexity. Designed for human simplicity. Built
            to deliver results that matter to the business.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-ocid="features.list"
        >
          {HIGHLIGHTS.map((hl, i) => (
            <div
              key={hl.id}
              className="group bg-card rounded-2xl border border-border p-8 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth relative overflow-hidden"
              data-ocid={`features.item.${i + 1}`}
            >
              {/* Decorative top-left circuit dot */}
              <div
                className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-smooth"
                style={{
                  background:
                    "radial-gradient(circle at top left, oklch(var(--primary) / 0.08), transparent 70%)",
                }}
              />

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-white shadow-card flex-shrink-0 group-hover:scale-105 transition-smooth">
                  <HLIcon icon={hl.icon} />
                </div>
                <div className="space-y-2 min-w-0">
                  <h3 className="font-display font-bold text-foreground text-lg leading-snug">
                    {hl.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {hl.description}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs font-body font-semibold text-primary">
                      {hl.benefit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
