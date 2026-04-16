import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

const EMPTY_FORM: ContactForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within 24 hours.", {
      duration: 5000,
      description:
        "A member of our team will reach out to Manazen.006@gmail.com shortly.",
    });
    setTimeout(() => {
      setForm(EMPTY_FORM);
      setSubmitted(false);
    }, 3000);
  }

  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm font-body focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-smooth";

  return (
    <section
      id="contact"
      className="py-24 gradient-hero circuit-pattern relative overflow-hidden"
      data-ocid="contact.section"
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left — info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/15 text-white border-white/20 font-body text-xs px-3 py-1 backdrop-blur-sm">
                Get In Touch
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Ready to transform your rewards program?
              </h2>
              <p className="text-lg text-white/70 font-body leading-relaxed">
                Join 2,000+ companies using Manazen to drive engagement, reduce
                admin burden, and prove ROI to leadership.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 font-body text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-white/80" />
                </div>
                <a
                  href="mailto:Manazen.006@gmail.com"
                  className="hover:text-white transition-smooth underline underline-offset-2"
                  data-ocid="contact.email_link"
                >
                  Manazen.006@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70 font-body text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-white/80" />
                </div>
                <span>Global operations · 150+ countries served</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 font-body text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-white/80" />
                </div>
                <span>Response within 24 hours, typically faster</span>
              </div>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, text: "14-day free trial" },
                { icon: CheckCircle2, text: "No credit card required" },
                { icon: CheckCircle2, text: "Cancel anytime" },
                { icon: CheckCircle2, text: "SOC 2 compliant" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-white/65 font-body text-xs"
                >
                  <Icon className="h-3.5 w-3.5 text-white/50 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/15"
            data-ocid="contact.form"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-8 space-y-4 text-center"
                data-ocid="contact.success_state"
              >
                <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-white/70 font-body text-sm">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="text-lg font-display font-bold text-white mb-6">
                  Send us a message
                </h3>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-body font-medium text-white/70"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Sarah Chen"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    data-ocid="contact.name_input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-body font-medium text-white/70"
                  >
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    data-ocid="contact.email_input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-company"
                    className="text-xs font-body font-medium text-white/70"
                  >
                    Company Name *
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Corporation"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    data-ocid="contact.company_input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-body font-medium text-white/70"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your team size and goals..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    data-ocid="contact.message_textarea"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-secondary hover:bg-white/90 font-display font-semibold shadow-elevated"
                  data-ocid="contact.submit_button"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
