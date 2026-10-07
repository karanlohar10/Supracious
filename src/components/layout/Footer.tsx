import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { navLinks, siteInfo } from "@/data/content";
import logo from "@/assets/logo-mark.jpg";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${siteInfo.name} Exim trademark logo`}
              className="h-12 w-12 shrink-0 rounded-full bg-ivory object-contain"
            />
            <div>
              <h3 className="font-heading text-2xl font-bold text-ivory">
                {siteInfo.name} Exim
                <sup className="relative -top-[0.45em] ml-0.5 text-[0.55em] font-normal">
                  &trade;
                </sup>
              </h3>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.3em] text-gold-light">
                Pvt Ltd
              </p>
              <p className="mt-1 font-body text-xs text-ivory/70">
                {siteInfo.motto}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-ivory/70">
            {siteInfo.tagline}. A trusted exporter of premium Indian spices,
            pulses, cereals, and agricultural products.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-gold-light">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-body text-sm text-ivory/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-gold-light">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 font-body text-sm text-ivory/75">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <a
                href={siteInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                {siteInfo.address}
              </a>
            </li>
            {siteInfo.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gold" />
                <span>{p}</span>
              </li>
            ))}
            {siteInfo.emails.map((e) => (
              <li key={e} className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gold" />
                <span>{e}</span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Globe size={16} className="shrink-0 text-gold" />
              <span>{siteInfo.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <p className="text-center font-body text-xs text-ivory/70">
          © {new Date().getFullYear()} {siteInfo.legalName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
