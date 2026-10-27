import { Mail, MessageCircle, MessageSquareText, Phone } from "lucide-react";
import { mailLink, smsLink, telLink, whatsappLink } from "@/lib/contact";
import { siteInfo } from "@/data/content";

interface ContactChannelsProps {
  message?: string;
}

/** Four ways to reach the team; SMS, WhatsApp and Email carry the optional prefilled message. */
export function ContactChannels({ message = "" }: ContactChannelsProps) {
  const channels = [
    {
      label: "WhatsApp",
      hint: "Chat with us",
      icon: MessageCircle,
      href: whatsappLink(message),
      external: true,
    },
    { label: "Call", hint: siteInfo.contactNumber, icon: Phone, href: telLink },
    { label: "SMS", hint: "Send a text", icon: MessageSquareText, href: smsLink(message) },
    {
      label: "Email",
      hint: siteInfo.enquiryEmail,
      icon: Mail,
      href: mailLink("Inquiry from website", message),
    },
  ];

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {channels.map(({ label, hint, icon: Icon, href, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            aria-label={`${label}: ${hint}`}
            className="group flex h-full flex-col items-center gap-2 rounded-2xl border border-forest/15 bg-white px-3 py-5 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-gold-light">
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-semibold text-forest-dark">
              {label}
            </span>
            <span className="w-full truncate font-body text-xs text-brown/80">{hint}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
