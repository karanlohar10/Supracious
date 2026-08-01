# Supracious — Premium Indian Spice Exports

A modern, responsive corporate website for **Supracious Exim Pvt Ltd**, a premium Indian spice export
company. Built with a clean, component-based architecture to convey a premium, international, and
trustworthy brand identity.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tooling & dev server
- **React Router** — client-side routing
- **Tailwind CSS v4** + **shadcn/ui** — styling & UI primitives
- **Framer Motion** — animations & scroll reveals

## Pages

| Page | Route | Content |
|---|---|---|
| Home | `/` | Welcome, company profile, why choose us, certifications, highlights |
| About Us | `/about` | Company profile, scope of business, manufacturing unit |
| Manufacturing | `/manufacturing` | Manufacturing process, infrastructure, quality control, nutritional value, shelf life & storage |
| Exports | `/exports` | Countries served, export process, packaging & logistics |
| Quality Assurance | `/quality-assurance` | Quality policy, certifications, testing process |
| Contact Us | `/contact` | Contact details, inquiry form, embedded map |

## Brand Theme

- **Colors** — Forest Green `#1B5E20`, Gold `#C8A95B`, Warm Brown `#6D4C41`, Ivory White `#F8F7F2`
- **Typography** — Playfair Display (headings), Poppins (body)

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
  assets/hero/       # hero banner images
  components/
    layout/          # Navbar, Footer, HeroBanner, Section, Reveal, etc.
    ui/               # shadcn/ui primitives
  data/content.ts    # centralized site content
  hooks/             # custom hooks (scroll reveal, etc.)
  pages/             # one component per route
```

## Notes

- The contact form is front-end only (client-side validation + success state). Wire it to a real backend
  or service (e.g., Formspree, EmailJS) before production use.
- Contact details (address/phone) are placeholders pending official company information.
