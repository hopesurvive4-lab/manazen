import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ROIMetric } from "@/types";
import { ArrowRight, Clock, DollarSign, TrendingUp, Users } from "lucide-react";

const ROI_STATS: (ROIMetric & { icon: string; detail: string })[] = [
  {
    value: "40%",
    label: "Increase in Employee Retention",
    icon: "users",
    detail: "Avg. improvement within 6 months of platform launch",
  },
  {
    value: "3x",
    label: "ROI on Rewards Investment",
    icon: "dollar-sign",
    detail: "Measurable returns tracked through engagement correlation",
  },
  {
    value: "85%",
    label: "Reduction in Manual Processes",
    icon: "clock",
    detail: "Hours reclaimed per week via intelligent automation",
  },
  {
    value: "28%",
    label: "Boost in Employee Satisfaction",
    icon: "trending-up",
    detail: "NPS and eNPS improvements reported by customers",
  },
];

function StatIcon({ icon }: { icon: string }) {
  const cls = "h-6 w-6";
  switch (icon) {
    case "users":
      return <Users className={cls} />;
    case "dollar-sign":
      return <DollarSign className={cls} />;
    case "clock":
      return <Clock className={cls} />;
    default:
      return <TrendingUp className={cls} />;
  }
}

export function ROICallout() {
  return (
    <section
      id="roi"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #006D7A 0%, #004D5C 50%, #003844 100%)",
      }}
      data-ocid="roi.section"
    >
      {/* Circuit board overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glows */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00BCD4, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00E5FF, transparent)" }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <Badge
            className="border font-body text-xs px-3 py-1 backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "white",
              borderColor: "rgba(255,255,255,0.20)",
            }}
          >
            Real-World ROI
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Measurable returns from day one
          </h2>
          <p
            className="text-lg font-body max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Manazen customers don't just improve morale — they generate
            quantifiable business outcomes tracked in real time.
          </p>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
          data-ocid="roi.stats"
        >
          {ROI_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl border p-6 text-center backdrop-blur-sm group hover:scale-[1.02] transition-smooth"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.14)",
              }}
              data-ocid={`roi.stat.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-smooth"
                style={{
                  background: "rgba(0,188,212,0.30)",
                  border: "1px solid rgba(0,188,212,0.40)",
                }}
              >
                <StatIcon icon={stat.icon} />
              </div>
              <div className="text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div
                className="text-sm font-body font-semibold mb-2"
                style={{ color: "#B2EBF2" }}
              >
                {stat.label}
              </div>
              <p
                className="text-xs font-body leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Insight strip */}
        <div
          className="rounded-2xl border p-8 backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.12)",
          }}
          data-ocid="roi.insight_panel"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-3 text-center lg:text-left">
              <h3 className="text-2xl font-display font-bold text-white">
                Real-time insights. Instant business impact.
              </h3>
              <p
                className="font-body text-sm leading-relaxed max-w-lg"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                Manazen's analytics dashboard connects your rewards investment
                to retention, productivity, and revenue outcomes — giving
                leadership the data to double down on what works.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button
                size="lg"
                className="font-display font-semibold px-8 shadow-elevated transition-smooth hover:scale-105"
                style={{ background: "white", color: "#006D7A" }}
                asChild
                data-ocid="roi.cta_primary_button"
              >
                <a href="#contact">
                  See ROI Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-display font-semibold px-8 transition-smooth backdrop-blur-sm"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "white",
                }}
                asChild
                data-ocid="roi.cta_secondary_button"
              >
                <a href="#contact">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
