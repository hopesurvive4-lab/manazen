import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { PricingTier } from "@/types";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

const PRICING: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Perfect for startups & SMEs",
    monthlyPrice: 9,
    annualPrice: 7,
    features: [
      "Up to 50 employees",
      "Curated gift catalog (500+ items)",
      "Automated birthday & work anniversary rewards",
      "Basic analytics dashboard",
      "Email support (48h response)",
      "Up to 2 admin users",
    ],
    cta: "Start Free Trial",
    segment: "startup",
  },
  {
    id: "professional",
    name: "Professional",
    subtitle: "Most popular for growing teams",
    monthlyPrice: 29,
    annualPrice: 23,
    features: [
      "Up to 500 employees",
      "Full gift catalog (10,000+ items)",
      "Custom branded swag store",
      "Advanced ROI & engagement analytics",
      "HRIS integrations (Workday, BambooHR)",
      "Priority support (4h response)",
      "Up to 10 admin users",
      "Global delivery to 80+ countries",
    ],
    cta: "Get Started",
    highlighted: true,
    segment: "sme",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "Full-scale for large organizations",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Unlimited employees",
      "Custom gift sourcing & procurement",
      "White-label gifting portal",
      "Executive ROI reporting suite",
      "All HRIS & CRM integrations",
      "Dedicated customer success manager",
      "SLA guarantee (99.9% uptime)",
      "Global delivery to 150+ countries",
      "Custom contracts & invoicing",
    ],
    cta: "Contact Sales",
    segment: "enterprise",
  },
];

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 bg-background"
      data-ocid="pricing.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
            Simple Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Pricing for every stage of growth
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Start free, scale seamlessly. No hidden fees, no long-term lock-in
            on monthly plans.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          data-ocid="pricing.list"
        >
          {PRICING.map((tier, i) => (
            <Card
              key={tier.id}
              className={`relative overflow-hidden transition-smooth hover:-translate-y-1 flex flex-col ${
                tier.highlighted
                  ? "border-primary/40 shadow-elevated bg-card ring-2 ring-primary/20"
                  : "border-border shadow-card bg-card"
              }`}
              data-ocid={`pricing.item.${i + 1}`}
            >
              {/* Highlighted top bar */}
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 gradient-hero" />
              )}

              <CardContent className="p-8 flex flex-col flex-1 space-y-6">
                {/* Tier header */}
                <div>
                  {tier.highlighted && (
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-body">
                        Most Popular
                      </Badge>
                      <Zap className="h-3.5 w-3.5 text-primary" />
                    </div>
                  )}
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div>
                  {tier.monthlyPrice === 0 ? (
                    <div className="text-3xl font-display font-bold text-foreground">
                      Custom Pricing
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-display font-bold text-foreground">
                          ${tier.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground font-body text-sm">
                          /mo per user
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-body mt-1">
                        Billed monthly · Save 20% with annual billing
                      </p>
                    </>
                  )}
                </div>

                {/* Feature list */}
                <ul className="space-y-3 flex-1">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm font-body text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full font-display font-semibold mt-auto ${
                    tier.highlighted
                      ? "gradient-hero text-white hover:opacity-90 shadow-elevated"
                      : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                  }`}
                  onClick={scrollToContact}
                  data-ocid={`pricing.cta_button.${i + 1}`}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {tier.segment !== "enterprise" && (
                  <p className="text-xs text-muted-foreground font-body text-center">
                    14-day free trial · No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise callout */}
        <p className="mt-10 text-center text-sm text-muted-foreground font-body">
          Need a custom contract?{" "}
          <button
            type="button"
            onClick={scrollToContact}
            className="text-primary hover:underline underline-offset-2 font-medium transition-smooth"
            data-ocid="pricing.enterprise_contact_link"
          >
            Talk to our sales team →
          </button>
        </p>
      </div>
    </section>
  );
}
