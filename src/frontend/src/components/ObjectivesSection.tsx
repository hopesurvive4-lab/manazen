import { Badge } from "@/components/ui/badge";
import type { Objective } from "@/types";
import {
  Award,
  DollarSign,
  Lightbulb,
  Smile,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const OBJECTIVES: Objective[] = [
  {
    id: "improve-performance",
    label: "Improve Performance",
    description:
      "Drive measurable productivity gains with targeted incentive structures tied to KPIs and milestones.",
    icon: "trending-up",
  },
  {
    id: "boost-sales",
    label: "Boost Sales & Revenue",
    description:
      "Motivate sales teams with intelligent reward programs that tie recognition directly to revenue outcomes.",
    icon: "dollar-sign",
  },
  {
    id: "increase-retention",
    label: "Increase Retention",
    description:
      "Reduce costly employee turnover with continuous recognition programs that build loyalty and belonging.",
    icon: "user-check",
  },
  {
    id: "recognize-achievements",
    label: "Recognize Achievements",
    description:
      "Celebrate milestones, anniversaries, and exceptional work with personalized, meaningful rewards.",
    icon: "award",
  },
  {
    id: "enhance-engagement",
    label: "Enhance Engagement & Morale",
    description:
      "Create a culture of appreciation that keeps teams motivated, connected, and committed to company goals.",
    icon: "smile",
  },
  {
    id: "encourage-innovation",
    label: "Encourage Innovation",
    description:
      "Reward creative thinking and calculated risk-taking, fostering an environment where new ideas thrive.",
    icon: "lightbulb",
  },
];

function ObjIcon({ icon }: { icon: string }) {
  const cls = "h-6 w-6";
  switch (icon) {
    case "trending-up":
      return <TrendingUp className={cls} />;
    case "dollar-sign":
      return <DollarSign className={cls} />;
    case "user-check":
      return <UserCheck className={cls} />;
    case "award":
      return <Award className={cls} />;
    case "smile":
      return <Smile className={cls} />;
    default:
      return <Lightbulb className={cls} />;
  }
}

export function ObjectivesSection() {
  return (
    <section
      id="objectives"
      className="py-24 bg-muted/30"
      data-ocid="objectives.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
            Business Objectives
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Built to drive the outcomes that matter
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Whether you're solving retention, engagement, or performance
            challenges — Manazen aligns your rewards program to your strategic
            goals.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="objectives.list"
        >
          {OBJECTIVES.map((obj, i) => (
            <div
              key={obj.id}
              className="group relative bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth overflow-hidden"
              data-ocid={`objectives.item.${i + 1}`}
            >
              {/* Subtle corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, oklch(var(--primary) / 0.10), transparent 70%)",
                }}
              />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-white flex-shrink-0 shadow-card group-hover:scale-105 transition-smooth">
                  <ObjIcon icon={obj.icon} />
                </div>
                <div className="min-w-0 space-y-1.5">
                  <h3 className="font-display font-bold text-foreground text-base leading-snug">
                    {obj.label}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-primary/0 group-hover:bg-primary/30 transition-smooth rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
