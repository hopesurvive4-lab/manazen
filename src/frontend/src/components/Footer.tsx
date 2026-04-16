import { Globe, Linkedin, Mail } from "lucide-react";
import { SiX } from "react-icons/si";

const FOOTER_LINKS = {
  Products: [
    "Corporate Gifting",
    "Branded Merchandise",
    "Swag Stores",
    "Gift Cards",
    "Analytics",
  ],
  Solutions: [
    "HR Teams",
    "Sales Teams",
    "Marketing Teams",
    "Customer Success",
    "Procurement",
  ],
  Pricing: [
    "Starter Plan",
    "Professional Plan",
    "Enterprise Plan",
    "Compare Plans",
    "ROI Calculator",
  ],
  Resources: [
    "Blog",
    "Case Studies",
    "Help Center",
    "API Docs",
    "Integrations",
  ],
  Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer
      className="bg-secondary text-secondary-foreground circuit-pattern"
      data-ocid="footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2.5 group"
              aria-label="Scroll to top"
              data-ocid="footer.logo_link"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                <span className="text-white font-display font-bold text-base">
                  M
                </span>
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Manazen
              </span>
            </button>

            <p className="text-sm text-white/60 font-body leading-relaxed max-w-xs">
              Elevate corporate gifting and employee rewards with intelligent,
              data-driven solutions built for modern B2B teams.
            </p>

            {/* Contact email */}
            <a
              href="mailto:Manazen.006@gmail.com"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-smooth font-body"
              data-ocid="footer.email_link"
            >
              <Mail className="h-4 w-4" />
              Manazen.006@gmail.com
            </a>

            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-smooth"
                aria-label="LinkedIn"
                data-ocid="footer.linkedin_link"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-smooth"
                aria-label="Twitter / X"
                data-ocid="footer.twitter_link"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-smooth"
                aria-label="Facebook"
                data-ocid="footer.facebook_link"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4 className="text-sm font-display font-semibold text-white uppercase tracking-wider">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        if (section === "Pricing") scrollToSection("pricing");
                        else if (
                          section === "Resources" ||
                          section === "Company"
                        ) {
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-sm font-body text-white/50 hover:text-white/80 transition-smooth text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-white/40">
            Copyright {year} Manazen. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-body text-white/30">
            <button
              type="button"
              className="hover:text-white/50 transition-smooth"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              className="hover:text-white/50 transition-smooth"
            >
              Terms of Service
            </button>
            <span>·</span>
            <a
              href={utm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/50 hover:text-primary transition-smooth"
            >
              Built with caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
