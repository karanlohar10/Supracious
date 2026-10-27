import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, MessageSquareText, Phone, X, Headset } from "lucide-react";
import { mailLink, smsLink, telLink, whatsappLink } from "@/lib/contact";

const greeting = "Hello Supracious team, I would like to know more about your products.";

const actions = [
  { label: "WhatsApp", icon: MessageCircle, href: whatsappLink(greeting), external: true },
  { label: "Call", icon: Phone, href: telLink },
  { label: "SMS", icon: MessageSquareText, href: smsLink(greeting) },
  { label: "Email", icon: Mail, href: mailLink("Inquiry from website", greeting) },
];

/** Floating contact launcher shown on every page. */
export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {open && (
        <ul id="floating-contact-menu" className="flex flex-col items-end gap-2">
          {actions.map(({ label, icon: Icon, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="flex items-center gap-2 rounded-full border border-gold/40 bg-white py-2 pl-4 pr-2 font-body text-sm font-medium text-forest-dark shadow-lg transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                {label}
                <span className="flex size-8 items-center justify-center rounded-full bg-forest text-gold-light">
                  <Icon size={16} aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="floating-contact-menu"
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="flex size-14 items-center justify-center rounded-full bg-gold text-forest-dark shadow-xl ring-2 ring-white/70 transition-transform hover:scale-105 hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
      >
        {open ? <X size={24} aria-hidden="true" /> : <Headset size={24} aria-hidden="true" />}
      </button>
    </div>
  );
}
