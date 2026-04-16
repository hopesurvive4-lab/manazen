import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { FAQ } from "@/types";

const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "What makes Manazen different from other gifting platforms?",
    answer:
      "Manazen goes beyond simple gift delivery. We combine a curated marketplace of 10,000+ items with intelligent automation, deep HRIS integrations, and executive-grade ROI reporting. Our platform is purpose-built for B2B teams — HR, Sales, Marketing, and Customer Success — so every workflow is designed around real business outcomes, not just nice-to-haves. Unlike consumer gifting tools, Manazen provides full audit trails, budget controls, and compliance features that enterprise procurement teams require.",
  },
  {
    id: "faq-2",
    question: "How does the ROI tracking work?",
    answer:
      "Manazen's analytics engine correlates gifting activity with key business metrics in real time. For HR teams, this means tracking employee engagement scores, retention rates, and manager adoption against program spend. For Sales, we measure pipeline acceleration, deal conversion rates, and closed-won attribution from gifted prospects. Every campaign generates a live ROI dashboard that quantifies impact in dollar terms, making it easy to justify budget renewals and present results to leadership.",
  },
  {
    id: "faq-3",
    question: "Can we integrate Manazen with our existing HR systems?",
    answer:
      "Yes — Manazen offers native, bidirectional integrations with the leading HRIS and CRM platforms including Workday, BambooHR, Rippling, ADP, Salesforce, and HubSpot. Our API-first architecture means custom integrations are straightforward for your engineering team, and we provide a dedicated integration specialist during onboarding. Employee data, org structures, and milestone triggers sync automatically so your gifting programs always stay current without manual imports.",
  },
  {
    id: "faq-4",
    question: "Is Manazen suitable for global teams?",
    answer:
      "Absolutely. Manazen supports physical gift delivery to 150+ countries with localized catalogues that respect cultural preferences and regional regulations. Our platform handles multi-currency budgeting, VAT compliance, and cross-border customs documentation automatically. Distributed teams receive the same high-quality experience regardless of their location, and administrators get a unified dashboard to manage global programs from a single interface.",
  },
  {
    id: "faq-5",
    question: "How long does onboarding take?",
    answer:
      "Most customers are fully operational within 3–5 business days. Onboarding includes a dedicated kickoff call, HRIS data import, branded swag store setup, and admin training. Enterprise customers receive a dedicated Customer Success Manager who manages the entire implementation process, including custom integrations and approval workflow configuration. Our self-serve setup wizard means Starter and Professional plan customers can get started within hours if needed.",
  },
  {
    id: "faq-6",
    question: "What kind of support do you offer?",
    answer:
      "Support scales with your plan. Starter customers have access to our comprehensive documentation library and email support with a 48-hour response SLA. Professional customers get priority email and live chat support with a 4-hour response SLA during business hours. Enterprise customers receive a dedicated Customer Success Manager, 24/7 phone and chat support, and a guaranteed 99.9% uptime SLA with incident response within 1 hour. All customers benefit from in-app onboarding guides, video tutorials, and our active user community.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-muted/30" data-ocid="faq.section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs px-3 py-1">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Everything you need to know about getting started with Manazen.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto" data-ocid="faq.list">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-card border border-border rounded-xl px-6 shadow-card data-[state=open]:border-primary/30 data-[state=open]:shadow-elevated transition-smooth"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground py-5 hover:text-primary hover:no-underline text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground font-body">
            Still have questions?{" "}
            <a
              href="mailto:Manazen.006@gmail.com"
              className="text-primary hover:underline underline-offset-2 font-medium transition-smooth"
              data-ocid="faq.contact_link"
            >
              Email our team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
