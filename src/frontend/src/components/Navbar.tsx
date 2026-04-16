import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import type { NavLink } from "@/types";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2.5 group"
            data-ocid="navbar.logo_link"
            aria-label="Manazen home"
          >
            <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center shadow-elevated flex-shrink-0">
              <span className="text-white font-display font-bold text-sm">
                M
              </span>
            </div>
            <span className="text-xl font-display font-bold text-primary tracking-tight">
              Manazen
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-body font-medium text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5 transition-smooth"
                  data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground/70 hover:text-primary hover:bg-primary/5"
              data-ocid="navbar.login_button"
            >
              Login
            </Button>
            <Button
              size="sm"
              className="gradient-hero text-white hover:opacity-90 shadow-elevated font-display font-semibold px-5"
              onClick={() => scrollToSection("#contact")}
              data-ocid="navbar.get_started_button"
            >
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  data-ocid="navbar.mobile_menu_button"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-card"
                data-ocid="navbar.mobile_drawer"
              >
                <div className="flex items-center gap-2.5 mb-8 pt-2">
                  <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center shadow-elevated flex-shrink-0">
                    <span className="text-white font-display font-bold text-sm">
                      M
                    </span>
                  </div>
                  <span className="text-xl font-display font-bold text-primary tracking-tight">
                    Manazen
                  </span>
                </div>
                <nav>
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <button
                          type="button"
                          onClick={() => {
                            scrollToSection(link.href);
                            setMobileOpen(false);
                          }}
                          className="flex w-full items-center px-4 py-3 text-base font-body font-medium text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5 transition-smooth"
                          data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-3 px-4">
                    <Button
                      variant="outline"
                      className="w-full border-border text-foreground/70"
                      data-ocid="navbar.mobile_login_button"
                    >
                      Login
                    </Button>
                    <Button
                      className="w-full gradient-hero text-white hover:opacity-90 font-display font-semibold"
                      onClick={() => {
                        scrollToSection("#contact");
                        setMobileOpen(false);
                      }}
                      data-ocid="navbar.mobile_get_started_button"
                    >
                      Request a Demo
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
