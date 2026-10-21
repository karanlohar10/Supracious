// Centralized site content sourced from SupraciousKL.docx

export const siteInfo = {
  name: "Supracious",
  legalName: "Supracious Exim Private Limited",
  tagline: "Delivering Nature's Finest to the World",
  motto: "Trusted Purity, Beyond Borders",
  email: "info.supracious@gmail.com",
  emails: [
    "info.supracious@gmail.com",
    "pratibhas1820@gmail.com",
    "drsunilrayat@gmail.com",
  ],
  enquiryEmail: "pratibhas1820@gmail.com",
  enquiryCcEmails: ["info.supracious@gmail.com", "drsunilrayat@gmail.com"],
  phone: "+91-8766593708",
  phones: ["+91-8766593708", "+91-9890967352"],
  address: "Chafal, Maharashtra 415520",
  mapsUrl: "https://maps.app.goo.gl/GyPvRJN5nkTaPcVr8",
  mapsEmbedUrl: "https://www.google.com/maps?q=17.3978207,74.0204411&output=embed",
  hours: ["Available 24 Hours"],
  website: "www.supracious.com",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Exports", to: "/exports" },
  { label: "Quality Assurance", to: "/quality-assurance" },
  { label: "Contact Us", to: "/contact" },
];

export const productRange = [
  "Whole Spices",
  "Ground Spices",
  "Spice Blends",
  "Pulses",
  "Cereals",
  "Agricultural Products",
  "Customized Packaging Solutions",
];

export const productsIntro =
  "Quality Indian agricultural products, sourced with care and prepared for global markets.";

export type ProductCategory = "Spices & Vegetables" | "Cereals & Pulses";

export interface Product {
  readonly name: string;
  readonly category: ProductCategory;
  readonly description: string;
}

export const productCategories: readonly ProductCategory[] = [
  "Spices & Vegetables",
  "Cereals & Pulses",
];

export const products: readonly Product[] = [
  {
    name: "Whole Dried Turmeric",
    category: "Spices & Vegetables",
    description:
      "Premium whole dried turmeric rhizomes selected for quality, colour and aroma.",
  },
  {
    name: "Turmeric Powder",
    category: "Spices & Vegetables",
    description:
      "Finely processed turmeric powder with vibrant colour and characteristic aroma.",
  },
  {
    name: "Fresh & Dried Ginger",
    category: "Spices & Vegetables",
    description:
      "Quality fresh and dried ginger suitable for food, processing and export applications.",
  },
  {
    name: "Capsicum Varieties",
    category: "Spices & Vegetables",
    description:
      "A selection of quality capsicum varieties with consistent appearance and freshness.",
  },
  {
    name: "Chilly",
    category: "Spices & Vegetables",
    description:
      "Quality chilly varieties selected for colour, flavour and heat.",
  },
  {
    name: "Puffed Rice",
    category: "Cereals & Pulses",
    description:
      "Rice grains expanded by heat and pressure into light, airy, hollow kernels. Widely used in snacks such as bhel, breakfast cereals and ready-to-eat foods.",
  },
  {
    name: "Popped Rice / Parched Rice",
    category: "Cereals & Pulses",
    description:
      "Rice grains roasted until they pop into crisp, lightly toasted kernels. Eaten as a snack and used in traditional sweets and festive preparations.",
  },
  {
    name: "Beaten Rice / Rice Flakes",
    category: "Cereals & Pulses",
    description:
      "Parboiled rice that is flattened into thin, light flakes, also known as poha. Cooks within minutes and is used in breakfast dishes and snacks.",
  },
  {
    name: "Thick Flattened Rice",
    category: "Cereals & Pulses",
    description:
      "Rice pressed into thicker, sturdier flakes that hold their shape when soaked or fried. Used in chivda, snack mixes and traditional preparations.",
  },
  {
    name: "Maize / Corn",
    category: "Cereals & Pulses",
    description:
      "Maize (Zea mays) is a cereal grain harvested, dried and graded for size and moisture. Used for food, starch, animal feed and further processing.",
  },
  {
    name: "Split Bengal Gram / Chick Peas",
    category: "Cereals & Pulses",
    description:
      "Chickpeas (chana) that are hulled and split into dal. Used in curries, ground into besan flour and in snack production.",
  },
];

export const whyChooseUs = [
  "Premium quality products sourced directly from trusted farms",
  "Strict quality inspection at every production stage",
  "Hygienic processing and packaging",
  "Competitive pricing with consistent quality",
  "Timely international shipments",
  "Customized packaging and private labeling options",
  "Customer-focused service and long-term partnerships",
];

export const certifications = [
  { title: "FSSAI Licensed", desc: "Food Safety and Standards Authority of India" },
  { title: "APEDA Registered", desc: "Agricultural & Processed Food Products Export" },
  { title: "Spices Board of India", desc: "Registered Exporter" },
  { title: "GMP Certified", desc: "Good Manufacturing Practices" },
];

export const highlights = [
  "100+ Premium Agricultural Products",
  "Modern Processing Facility",
  "International Quality Standards",
  "Customized Export Solutions",
  "Experienced Export Team",
  "Reliable Global Logistics Network",
];

export const comingSoonIntro =
  "Building capabilities for quality, science and sustainable agriculture.";

export const comingSoon = [
  {
    name: "Food & Soil Testing Laboratory",
    description:
      "Laboratory testing services focused on food quality, soil health and agricultural analysis.",
  },
  {
    name: "Soil Micronutrient Solutions",
    description:
      "Quality micronutrient products designed to support soil health and crop nutrition.",
  },
];

export const scopeOfBusiness = [
  "Procurement from certified farmers",
  "Cleaning and grading",
  "Processing",
  "Quality testing",
  "Packaging",
  "Private Label Manufacturing",
  "Export Documentation",
  "International Shipping",
];

export const foundersIntro =
  "When Researchers Turn Entrepreneurs, Purity Becomes a Promise";

export const founders = [
  {
    name: "Dr. Sunil Jadhav",
    role: "Co-Founder & Director",
    qualification: "M.Sc., Ph.D. in Chemistry",
    specialty: "Analytical & Quality Research Chemistry",
    bio: "A dedicated researcher with an M.Sc. and Ph.D. in Chemistry, Dr. Sunil Jadhav brings a scientist's precision and rigor to every batch we source, test, and export — turning laboratory-grade quality control into a business promise.",
  },
  {
    name: "Pratibha Sutar",
    role: "Co-Founder & Director",
    qualification: "M.Sc. Analytical Chemistry",
    specialty: "Food Purity Characterization & Analysis",
    bio: "An M.Sc. in Analytical Chemistry and Dr. Jadhav's former student, Pratibha Sutar pairs deep scientific grounding with a sharp business sense, ensuring every shipment meets the same exacting standards it was researched to achieve.",
  },
];

export const foundersPledge =
  "WE ARE DEDICATED TO DELIVERING ADULTERANT-FREE FOOD, TRUSTED BEYOND BORDERS.";

export const foundersTaglines = [
  "By Careful Analysis...!",
  "Your Scientific Trusted Partners!",
];

export const cateredTo = [
  "Importers",
  "Distributors",
  "Supermarkets",
  "Food Processing Companies",
  "Restaurants",
  "Hospitality Industry",
];

export const exportCountries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Singapore",
  "Malaysia",
  "South Africa",
];

export const exportProcessSteps = [
  "Customer Inquiry",
  "Product Selection",
  "Quotation & Order Confirmation",
  "Sample Approval",
  "Production & Quality Inspection",
  "Packaging",
  "Export Documentation",
  "Customs Clearance",
  "International Shipping",
  "Delivery to Customer",
];

export const packagingOptions = [
  "Retail Pouches",
  "Stand-up Zipper Pouches",
  "PET Jars",
  "Paper Bags",
  "Bulk PP Bags",
  "Corrugated Export Cartons",
];

export const qaCommitments = [
  "Farm-to-export quality monitoring",
  "Modern quality testing procedures",
  "Hygienic manufacturing practices",
  "Product traceability",
  "Compliance with international standards",
  "Continuous process improvement",
];

export const testingProcess = [
  "Raw material inspection at intake",
  "Moisture and purity testing",
  "Foreign particle and contaminant removal",
  "Microbiological testing where applicable",
  "Batch traceability records",
  "Final packaging and pre-shipment inspection",
];
