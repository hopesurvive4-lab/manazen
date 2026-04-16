import { ContactSection } from "@/components/ContactSection";
import { CustomerSegments } from "@/components/CustomerSegments";
import { FAQSection } from "@/components/FAQSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { HeroSection } from "@/components/HeroSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { PlatformOverview } from "@/components/PlatformOverview";
import { PricingSection } from "@/components/PricingSection";
import { ROICallout } from "@/components/ROICallout";
import { TrustSection } from "@/components/TrustSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";
import { Briefcase, CheckCircle2, Star, TrendingUp, Users } from "lucide-react";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "VP of People & Culture",
    company: "TechVentures Inc.",
    quote:
      "Manazen transformed how we recognize our team. Employee satisfaction scores jumped 28% within 3 months of implementation.",
    avatar: "SC",
    metric: "+28% satisfaction",
  },
  {
    id: "2",
    name: "Marcus Williams",
    title: "Head of Sales Operations",
    company: "GrowthForce CRM",
    quote:
      "The automated gifting workflows saved our team 15 hours per week. ROI was clear within the first quarter.",
    avatar: "MW",
    metric: "15 hrs/week saved",
  },
  {
    id: "3",
    name: "Priya Nambiar",
    title: "Director of Marketing",
    company: "Nexus Digital",
    quote:
      "Client gifting campaigns now run on autopilot. Conversion rates from gifted prospects are 3x higher.",
    avatar: "PN",
    metric: "3x conversion rate",
  },
];

const DEPT_SEGMENTS = [
  { label: "HR", Icon: Users },
  { label: "Sales", Icon: TrendingUp },
  { label: "Marketing", Icon: Star },
  { label: "Customer Success", Icon: CheckCircle2 },
  { label: "Procurement", Icon: Briefcase },
];

export function LandingPage() {
  return (
    <>
      <HeroSection
        onStartTrial={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        onSeeHowItWorks={() =>
          document
            .getElementById("platform")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <PlatformOverview />

      <ObjectivesSection />

      <CustomerSegments />

      <FeatureHighlights />

      <ROICallout />

      <TrustSection />

      {/* Testimonials */}
      <section className="py-24 bg-background" data-ocid="testimonials.section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
              Customer Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
              Trusted by industry leaders
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {TESTIMONIALS.map((t, i) => (
              <Card
                key={t.id}
                className="border-border bg-card shadow-card hover:shadow-elevated transition-smooth"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <CardContent className="p-8 space-y-5">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((si) => (
                        <Star
                          key={si}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    {t.metric && (
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-body">
                        {t.metric}
                      </Badge>
                    )}
                  </div>
                  <p className="text-foreground/80 font-body text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-semibold text-foreground text-sm truncate">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-body truncate">
                        {t.title}, {t.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <p className="text-sm font-body text-muted-foreground uppercase tracking-wider">
              Built for teams across your organization
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {DEPT_SEGMENTS.map((seg) => (
                <div
                  key={seg.label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card shadow-card font-body text-sm text-foreground/70 hover:border-primary/30 hover:text-primary transition-smooth"
                >
                  <seg.Icon className="h-4 w-4 text-primary/60" />
                  {seg.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />

      <FAQSection />

      <ContactSection />
    </>
  );
}
