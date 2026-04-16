import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ROIMetric } from "@/types";
import { ChevronRight, Clock, TrendingUp, Users } from "lucide-react";

const ROI_METRICS: ROIMetric[] = [
  { value: "40%", label: "Increase in Employee Retention", icon: "users" },
  { value: "3x", label: "ROI on Rewards Investment", icon: "trending-up" },
  { value: "85%", label: "Reduction in Manual Processes", icon: "clock" },
];

function MetricIcon({ icon }: { icon: string }) {
  if (icon === "users") return <Users className="h-5 w-5" />;
  if (icon === "clock") return <Clock className="h-5 w-5" />;
  return <TrendingUp className="h-5 w-5" />;
}

interface HeroSectionProps {
  onStartTrial?: () => void;
  onSeeHowItWorks?: () => void;
}

export function HeroSection({
  onStartTrial,
  onSeeHowItWorks,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      data-ocid="hero.section"
      style={{
        background:
          "linear-gradient(135deg, #00BCD4 0%, #006D7A 60%, #004D5C 100%)",
      }}
    >
      {/* Circuit board overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Decorative glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00E5FF, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00BCD4, transparent)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="space-y-7">
            <Badge
              className="border-white/20 font-body text-xs px-3 py-1 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
            >
              Trusted by 2,000+ B2B Teams
            </Badge>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
                Reward Performance,
              </h1>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight"
                style={{ color: "#B2EBF2" }}
              >
                Inspire Excellence
              </h1>
            </div>

            <p
              className="text-lg font-body leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              Make Every Reward Matter — boost engagement, streamline processes,
              and drive measurable ROI with Manazen's intelligent gifting
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-display font-semibold shadow-elevated px-8 transition-smooth hover:scale-105"
                style={{ background: "white", color: "#006D7A" }}
                onClick={onStartTrial}
                data-ocid="hero.start_trial_button"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-display font-semibold px-8 backdrop-blur-sm transition-smooth"
                style={{
                  borderColor: "rgba(255,255,255,0.40)",
                  color: "white",
                }}
                onClick={onSeeHowItWorks}
                data-ocid="hero.see_how_button"
              >
                See How It Works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* For Employees / For Companies dual cards */}
            <div
              className="grid sm:grid-cols-2 gap-4 pt-2"
              data-ocid="hero.value_props"
            >
              <div
                className="rounded-xl p-5 backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  borderColor: "rgba(255,255,255,0.18)",
                }}
                data-ocid="hero.value_prop.1"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.20)" }}
                  >
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-display font-bold text-white text-sm">
                    For Employees
                  </span>
                </div>
                <p
                  className="text-xs font-body leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  Personalized rewards that inspire motivation and career
                  growth, making recognition meaningful.
                </p>
              </div>
              <div
                className="rounded-xl p-5 backdrop-blur-sm border"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  borderColor: "rgba(255,255,255,0.18)",
                }}
                data-ocid="hero.value_prop.2"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.20)" }}
                  >
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-display font-bold text-white text-sm">
                    For Companies
                  </span>
                </div>
                <p
                  className="text-xs font-body leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  Simplifies and automates employee incentives, reducing
                  overhead and maximizing program ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated max-w-lg w-full">
              <img
                src="/assets/generated/hero-rewards-platform.dim_900x700.png"
                alt="Manazen rewards platform — connected employee gifting network visualization"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,77,92,0.50), transparent)",
                }}
              />
            </div>
          </div>
        </div>

        {/* ROI Metrics strip */}
        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
          data-ocid="hero.roi_metrics"
        >
          {ROI_METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="flex items-center gap-4 rounded-xl px-6 py-4 border backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.10)",
                borderColor: "rgba(255,255,255,0.15)",
              }}
              data-ocid={`hero.roi_metric.${i + 1}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                style={{ background: "rgba(255,255,255,0.18)" }}
              >
                <MetricIcon icon={metric.icon} />
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">
                  {metric.value}
                </div>
                <div
                  className="text-xs font-body"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey dashed connector */}
      <div
        className="flex justify-center pb-0 pt-4 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          width="2"
          height="48"
          viewBox="0 0 2 48"
          fill="none"
          role="presentation"
        >
          <title>Journey connector</title>
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="48"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
    </section>
  );
}
