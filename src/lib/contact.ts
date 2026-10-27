import { siteInfo } from "@/data/content";

const digits = siteInfo.contactNumber.replace(/\D/g, "");

export const telLink = `tel:${siteInfo.contactNumber.replace(/[^\d+]/g, "")}`;

export const smsLink = (message = "") =>
  `sms:${siteInfo.contactNumber.replace(/[^\d+]/g, "")}${
    message ? `?&body=${encodeURIComponent(message)}` : ""
  }`;

export const whatsappLink = (message = "") =>
  `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const mailLink = (subject = "Inquiry from website", body = "") =>
  `mailto:${[siteInfo.enquiryEmail, ...siteInfo.enquiryCcEmails].join(
    ",",
  )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export interface InquiryTemplate {
  id: string;
  label: string;
  text: string;
}

/** Placeholders: {{product}}, {{name}}, {{company}} */
export const inquiryTemplates: InquiryTemplate[] = [
  {
    id: "quote",
    label: "Request a Quote",
    text: "Hello Supracious team,\n\nI would like a quote for {{product}}.\nRequired quantity: [quantity]\nDestination port/country: [destination]\n\nPlease share your best price and terms.\n\nRegards,\n{{name}}{{company}}",
  },
  {
    id: "sample",
    label: "Sample Request",
    text: "Hello Supracious team,\n\nWe would like to request a sample of {{product}} for quality evaluation. Please let us know the sample charges and courier process.\n\nRegards,\n{{name}}{{company}}",
  },
  {
    id: "pricing",
    label: "Pricing & MOQ",
    text: "Hello Supracious team,\n\nPlease share the current pricing and minimum order quantity (MOQ) for {{product}}, including available grades and packaging sizes.\n\nRegards,\n{{name}}{{company}}",
  },
  {
    id: "private-label",
    label: "Packaging / Private Label",
    text: "Hello Supracious team,\n\nWe are interested in private label packaging for {{product}}. Please share the available pack sizes, customisation options and minimum quantities.\n\nRegards,\n{{name}}{{company}}",
  },
  {
    id: "shipping",
    label: "Shipping & Delivery",
    text: "Hello Supracious team,\n\nPlease share the shipping options, lead time and Incoterms available for {{product}} to [destination].\n\nRegards,\n{{name}}{{company}}",
  },
  {
    id: "partnership",
    label: "Distributorship",
    text: "Hello Supracious team,\n\nWe are interested in a long-term distribution partnership for your products, including {{product}}. Please share the process and requirements.\n\nRegards,\n{{name}}{{company}}",
  },
];

export function fillTemplate(
  text: string,
  values: { product?: string | null; name?: string; company?: string },
) {
  return text
    .replace(/\{\{product\}\}/g, values.product?.trim() || "your products")
    .replace(/\{\{name\}\}/g, values.name?.trim() || "[your name]")
    .replace(
      /\{\{company\}\}/g,
      values.company?.trim() ? `\n${values.company.trim()}` : "",
    );
}
