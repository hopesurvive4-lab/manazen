import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Segment } from "@/types";
import { ArrowRight, BarChart2, CheckCircle2, Shield, Zap } from "lucide-react";

const SEGMENTS: Segment[] = [
  {
    id: "startups-smes",
    name: "Startups & SMEs",
    description:
      "Agile recognition programs designed to punch above your weight. Launch fast, automate early, and scale without added headcount.",
    icon: "zap",
    benefits: [
      "Quick 15-minute onboarding setup",
      "Automated birthday & milestone rewards",
      "Budget controls with per-employee caps",
      "Slack & Teams integrations included",
      "No minimum commitment, cancel anytime",
    ],
  },
  {
    id: "mid-sized",
    name: "Mid-Sized Companies",
    description:
      "Scalable gifting automation that keeps pace with your growth. From 100 to 1,000 employees without missing a beat.",
    icon: "bar-chart",
    benefits: [
      "Bulk reward scheduling & distribution",
      "Custom branded swag storefront",
      "Manager self-service reward portal",
      "HRIS sync with BambooHR & Rippling",
      "Dedicated customer success manager",
    ],
  },
  {
    id: "large-enterprises",
    name: "Large Enterprises",
    description:
      "Enterprise-grade customization with security, compliance, and scalability built in. Full white-glove implementation support.",
    icon: "shield",
    benefits: [
      "SSO (SAML 2.0) & advanced RBAC",
      "Custom approval workflows",
      "ERP & Workday integration",
      "SLA-backed uptime guarantee (99.9%)",
      "Dedicated account team & quarterly reviews",
    ],
  },
];

function SegIcon({ icon }: { icon: string }) {
  const cls = "h-7 w-7";
  switch (icon) {
    case "zap":
      return <Zap className={cls} />;
    case "bar-chart":
      return <BarChart2 className={cls} />;
    default:
      return <Shield className={cls} />;
  }
}

const accentColors = [
  { border: "border-primary/20", glow: "from-primary/5 to-transparent" },
  {
    border: "border-primary/40 ring-2 ring-primary/10",
    glow: "from-primary/10 to-transparent",
  },
  { border: "border-primary/20", glow: "from-primary/5 to-transparent" },
];

export function CustomerSegments() {
  return (
    <section
      id="segments"
      className="py-24 bg-background"
      data-ocid="segments.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
            Who We Serve
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Designed for every stage of company growth
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Whether you're a scrappy startup or a global enterprise, Manazen
            adapts to your scale, budget, and complexity.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="segments.list"
        >
          {SEGMENTS.map((seg, i) => (
            <div
              key={seg.id}
              className={`group relative bg-card rounded-2xl border ${accentColors[i].border} shadow-card hover:shadow-elevated transition-smooth overflow-hidden flex flex-col`}
              data-ocid={`segments.item.${i + 1}`}
            >
              {/* Gradient header */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accentColors[i].glow} pointer-events-none`}
              />

              <div className="relative p-8 flex flex-col flex-1 gap-6">
                {/* Icon + title */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-white shadow-card">
                    <SegIcon icon={seg.icon} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {seg.name}
                    </h3>
                    <div className="w-10 h-0.5 bg-primary/40 mt-2 mb-3 group-hover:w-16 transition-smooth" />
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {seg.description}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 flex-1">
                  {seg.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm font-body text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-display font-semibold mt-2 transition-smooth ${
                    i === 1
                      ? "gradient-hero text-white hover:opacity-90 shadow-card"
                      : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                  }`}
                  asChild
                  data-ocid={`segments.cta.${i + 1}`}
                >
                  <a href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
