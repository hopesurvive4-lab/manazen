import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "VP of People & Culture",
    company: "TechVentures Inc.",
    quote:
      "Manazen transformed how we recognize our team. Employee satisfaction scores jumped 28% within 3 months of implementation. The automated workflows mean our HR team spends time on strategy, not admin.",
    avatar: "SC",
    metric: "+28% satisfaction",
  },
  {
    id: "2",
    name: "Marcus Williams",
    title: "Head of Sales Operations",
    company: "GrowthForce CRM",
    quote:
      "The automated gifting workflows saved our team 15 hours per week. ROI was clear within the first quarter. Client retention improved measurably — gifted prospects convert at 3× the baseline rate.",
    avatar: "MW",
    metric: "15 hrs/week saved",
  },
  {
    id: "3",
    name: "Priya Nambiar",
    title: "Director of Marketing",
    company: "Nexus Digital Agency",
    quote:
      "Client gifting campaigns now run on autopilot. Conversion rates from gifted prospects are 3x higher. The branded merchandise store has become a genuine competitive differentiator for us.",
    avatar: "PN",
    metric: "3× conversion rate",
  },
  {
    id: "4",
    name: "James Okonkwo",
    title: "Global HR Director",
    company: "Meridian Enterprises",
    quote:
      "We operate across 14 countries, and Manazen handles global delivery flawlessly. Our distributed teams feel truly appreciated regardless of location. Onboarding took less than a week.",
    avatar: "JO",
    metric: "14 countries covered",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-24 bg-muted/30"
      id="testimonials"
      data-ocid="testimonials.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
            Customer Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            See how forward-thinking companies use Manazen to drive engagement,
            reduce admin burden, and prove ROI.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="testimonials.list"
        >
          {TESTIMONIALS.map((t, i) => (
            <Card
              key={t.id}
              className="group border-border bg-card shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 relative overflow-hidden"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/30 group-hover:bg-primary transition-smooth" />

              <CardContent className="p-6 space-y-5">
                {/* Stars + metric */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((si) => (
                      <Star
                        key={si}
                        className="h-3.5 w-3.5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  {t.metric && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-body whitespace-nowrap">
                      {t.metric}
                    </Badge>
                  )}
                </div>

                {/* Quote icon */}
                <Quote className="h-6 w-6 text-primary/25" />

                {/* Quote text */}
                <p className="text-foreground/75 font-body text-sm leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-display font-bold text-xs flex-shrink-0 shadow-card">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-foreground text-sm truncate">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground font-body truncate">
                      {t.title}
                    </div>
                    <div className="text-xs text-primary/70 font-body font-medium truncate">
                      {t.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
