import { Badge } from "@/components/ui/badge";

const COMPANIES = [
  { name: "TechVentures Inc.", abbr: "TV" },
  { name: "GrowthForce CRM", abbr: "GF" },
  { name: "Meridian Enterprises", abbr: "ME" },
  { name: "Nexus Digital", abbr: "ND" },
  { name: "Apex Solutions", abbr: "AS" },
  { name: "Horizon Analytics", abbr: "HA" },
];

export function TrustSection() {
  return (
    <section
      className="py-16 bg-background border-y border-border"
      data-ocid="trust.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <Badge className="bg-muted text-muted-foreground border-border font-body text-xs px-3 py-1">
            Social Proof
          </Badge>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground/70 tracking-tight">
            Trusted by leading companies
          </h3>
        </div>

        {/* Logo row */}
        <div
          className="flex flex-wrap justify-center items-center gap-5"
          data-ocid="trust.logo_list"
        >
          {COMPANIES.map((company, i) => (
            <div
              key={company.name}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card shadow-card hover:border-primary/30 hover:shadow-elevated transition-smooth min-w-[160px] justify-center"
              data-ocid={`trust.logo.${i + 1}`}
            >
              {/* Placeholder logo block */}
              <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-smooth">
                <span className="text-xs font-display font-bold text-muted-foreground group-hover:text-primary transition-smooth">
                  {company.abbr}
                </span>
              </div>
              <span className="text-sm font-body font-medium text-muted-foreground group-hover:text-foreground/80 transition-smooth whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "2,000+", label: "Companies" },
            { value: "150+", label: "Countries" },
            { value: "10M+", label: "Gifts Sent" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center space-y-1"
              data-ocid={`trust.stat.${i + 1}`}
            >
              <div className="text-2xl font-display font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
