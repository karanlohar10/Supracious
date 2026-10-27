import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/layout/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteInfo, products } from "@/data/content";
import heroContact from "@/assets/hero/contact.jpg";
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { inquiryTemplates, fillTemplate, mailLink, whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get("product");
  const [product, setProduct] = useState(productParam ?? "");
  const [templateId, setTemplateId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(() => ({
    ...initialState,
    message: productParam ? `I would like a quote for ${productParam}.` : "",
  }));
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const applyTemplate = (id: string, nextProduct = product, nextForm = form) => {
    const tpl = inquiryTemplates.find((t) => t.id === id);
    if (!tpl) return;
    setTemplateId(id);
    setForm({ ...nextForm, message: fillTemplate(tpl.text, { ...nextForm, product: nextProduct }) });
  };

  const onProductChange = (value: string) => {
    setProduct(value);
    if (templateId) applyTemplate(templateId, value);
  };

  const quickSubject = `Inquiry${product ? ` - ${product}` : ""}${form.name ? ` from ${form.name}` : ""}`;

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please tell us about your inquiry.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Front-end only: no backend wired up yet. For now, route enquiries via a
    // mailto: link to the designated recipient. Replace with an API/email
    // service call (e.g. Formspree, EmailJS) when ready to go live.
    const subject = `New Inquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      "",
      form.message,
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${[
      siteInfo.enquiryEmail,
      ...siteInfo.enquiryCcEmails,
    ].join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setForm(initialState);
    setTemplateId(null);
  };

  return (
    <>
      <HeroBanner
        image={heroContact}
        eyebrow="Contact Us"
        title="Let's Start a Conversation"
        subtitle="We welcome inquiries from importers, distributors, wholesalers, and business partners across the world."
      />

      <Section eyebrow="Get in Touch" title="Reach Us Your Way" tone="white">
        <div className="mx-auto mb-14 max-w-3xl">
          <ContactChannels message={form.message} />
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-forest" size={22} />
                <div>
                  <p className="font-heading text-base font-semibold text-forest-dark">
                    Address
                  </p>
                  <a
                    href={siteInfo.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-sm text-brown/85 underline-offset-2 hover:text-forest hover:underline"
                  >
                    {siteInfo.address}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-forest" size={22} />
                <div>
                  <p className="font-heading text-base font-semibold text-forest-dark">
                    Phone
                  </p>
                  {siteInfo.phones.map((p) => (
                    <p key={p} className="font-body text-sm text-brown/85">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 shrink-0 text-forest" size={22} />
                <div>
                  <p className="font-heading text-base font-semibold text-forest-dark">
                    Email
                  </p>
                  {siteInfo.emails.map((e) => (
                    <p key={e} className="font-body text-sm text-brown/85">
                      {e}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 shrink-0 text-forest" size={22} />
                <div>
                  <p className="font-heading text-base font-semibold text-forest-dark">
                    Business Hours
                  </p>
                  {siteInfo.hours.map((h) => (
                    <p key={h} className="font-body text-sm text-brown/85">
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8 overflow-hidden rounded-xl border border-brown/10 shadow-sm">
              <iframe
                title="Supracious location map"
                src={siteInfo.mapsEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Inquiry Form */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-brown/10 bg-ivory p-8 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-forest-dark">
                Send an Inquiry
              </h3>

              {submitted ? (
                <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-forest/20 bg-forest/5 px-6 py-10 text-center">
                  <CheckCircle2 className="text-forest" size={40} />
                  <p className="font-heading text-lg font-semibold text-forest-dark">
                    Thank you for reaching out!
                  </p>
                  <p className="font-body text-sm text-brown/80">
                    Our team will get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 rounded-full border-forest/40 text-forest-dark"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="mt-1"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-forest-dark">
                      Quick templates
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Message templates">
                      {inquiryTemplates.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          aria-pressed={templateId === t.id}
                          onClick={() => applyTemplate(t.id)}
                          className={cn(
                            "rounded-full border px-3 py-1.5 font-body text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest",
                            templateId === t.id
                              ? "border-forest bg-forest text-ivory"
                              : "border-forest/25 bg-white text-forest-dark hover:border-gold hover:bg-gold/10",
                          )}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="product">Product (optional)</Label>
                    <select
                      id="product"
                      value={product}
                      onChange={(e) => onProductChange(e.target.value)}
                      className="mt-1 h-9 w-full rounded-md border border-input bg-transparent px-3 font-body text-sm focus-visible:outline-2 focus-visible:outline-forest"
                    >
                      <option value="">General inquiry</option>
                      {products.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your product requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-forest text-ivory hover:bg-forest-light"
                  >
                    Submit Inquiry
                  </Button>
                  <div className="flex flex-col gap-2 border-t border-brown/10 pt-4 sm:flex-row">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 rounded-full border-forest/40 text-forest-dark"
                    >
                      <a
                        href={whatsappLink(form.message)}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <MessageCircle size={16} aria-hidden="true" /> Send via WhatsApp
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 rounded-full border-forest/40 text-forest-dark"
                    >
                      <a href={mailLink(quickSubject, form.message)}>
                        <Mail size={16} aria-hidden="true" /> Send via Email
                      </a>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
