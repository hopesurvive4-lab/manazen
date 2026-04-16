import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Gift, ShoppingBag } from "lucide-react";

const PILLARS = [
  {
    id: "corporate-gifting",
    title: "Corporate Gifting",
    description:
      "Streamline employee recognition and client gifting with curated collections, personalized experiences, and automated delivery at scale.",
    Icon: Gift,
    link: "#contact",
    highlight: "10,000+ curated gifts",
  },
  {
    id: "branded-merch",
    title: "Branded Merchandise",
    description:
      "Manage and distribute branded merchandise effortlessly. Custom swag stores, quality products, and on-demand fulfillment for your brand.",
    Icon: ShoppingBag,
    link: "#contact",
    highlight: "Global delivery to 150+ countries",
  },
  {
    id: "data-insights",
    title: "Data-Driven Insights",
    description:
      "Automation and analytics for brand engagement. Measure impact, optimize strategy, and track ROI with real-time executive dashboards.",
    Icon: BarChart3,
    link: "#contact",
    highlight: "Real-time ROI tracking",
  },
];

export function PlatformOverview() {
  return (
    <section
      id="platform"
      className="py-24 bg-background"
      data-ocid="platform.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
            Platform Overview
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            One platform. Every reward use case.
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            From automated gifting workflows to branded merchandise and
            real-time analytics — Manazen handles the complexity so you can
            focus on impact.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="platform.list"
        >
          {PILLARS.map((pillar, i) => (
            <Card
              key={pillar.id}
              className="group border-border bg-card shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 overflow-hidden"
              data-ocid={`platform.item.${i + 1}`}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full gradient-hero opacity-70 group-hover:opacity-100 transition-smooth" />
              <CardContent className="p-8 space-y-5">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-white shadow-card">
                  <pillar.Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {pillar.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-primary/40 mb-4 group-hover:w-16 transition-smooth" />
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center text-xs font-body text-primary/80 bg-primary/8 border border-primary/15 rounded-full px-3 py-1">
                    {pillar.highlight}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-0 text-primary font-body font-medium hover:bg-transparent hover:text-primary/70 transition-smooth group/btn"
                  asChild
                  data-ocid={`platform.learn_more.${i + 1}`}
                >
                  <a href={pillar.link}>
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
