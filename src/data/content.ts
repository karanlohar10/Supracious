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
  contactNumber: "+91-9890967352",
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

export type ProductCategory =
  | "Rice"
  | "Processed Rice"
  | "Pulses"
  | "Cereals"
  | "Spices & Vegetables";

export interface Product {
  readonly name: string;
  readonly category: ProductCategory;
  readonly description: string;
}

export const productCategories: readonly ProductCategory[] = [
  "Rice",
  "Processed Rice",
  "Pulses",
  "Cereals",
  "Spices & Vegetables",
];

export const products: readonly Product[] = [
  {
    name: "Kolam Rice",
    category: "Rice",
    description:
      "Small, slender, soft-textured grain with a mild aroma. A staple of western India, ideal for everyday meals, pulao and khichdi.",
  },
  {
    name: "Basmati Rice",
    category: "Rice",
    description:
      "Extra-long, aromatic grain that elongates on cooking into fluffy, separate strands. Preferred for biryani, pulao and premium dishes.",
  },
  {
    name: "Sona Masoori Rice",
    category: "Rice",
    description:
      "Lightweight, medium-grain aromatic rice that cooks soft and non-sticky. Widely eaten across southern India for daily meals.",
  },
  {
    name: "Indrayani Rice",
    category: "Rice",
    description:
      "Fragrant short-grain rice from Maharashtra that cooks soft and slightly sticky. Popular for daily meals and festive dishes.",
  },
  {
    name: "Ambemohar Rice",
    category: "Rice",
    description:
      "Highly aromatic short-grain rice carrying the scent of mango blossom. Cooks soft and flavourful, a Maharashtrian speciality.",
  },
  {
    name: "Parboiled Rice (Ukda Rice)",
    category: "Rice",
    description:
      "Rice partially boiled in the husk before milling, retaining more nutrients. Firm, separate grains that suit large-scale cooking.",
  },
  {
    name: "Brown Rice",
    category: "Rice",
    description:
      "Whole-grain rice with only the husk removed, keeping the bran and germ. Nutty flavour, chewy texture and high in fibre.",
  },
  {
    name: "Broken Rice",
    category: "Rice",
    description:
      "Fragments of milled rice broken during processing. Economical and used in rice flour, ready mixes, batters and animal feed.",
  },
  {
    name: "Puffed Rice",
    category: "Processed Rice",
    description:
      "Rice grains expanded by heat and pressure into light, airy, hollow kernels. Widely used in snacks such as bhel, breakfast cereals and ready-to-eat foods.",
  },
  {
    name: "Popped Rice / Parched Rice",
    category: "Processed Rice",
    description:
      "Rice grains roasted until they pop into crisp, lightly toasted kernels. Eaten as a snack and used in traditional sweets and festive preparations.",
  },
  {
    name: "Beaten Rice / Rice Flakes",
    category: "Processed Rice",
    description:
      "Parboiled rice that is flattened into thin, light flakes, also known as poha. Cooks within minutes and is used in breakfast dishes and snacks.",
  },
  {
    name: "Thick Flattened Rice",
    category: "Processed Rice",
    description:
      "Rice pressed into thicker, sturdier flakes that hold their shape when soaked or fried. Used in chivda, snack mixes and traditional preparations.",
  },
  {
    name: "Toor Dal (Arhar Dal)",
    category: "Pulses",
    description:
      "Split pigeon peas with a mild, nutty taste. The base of sambar and everyday dal across India, rich in protein.",
  },
  {
    name: "Moong Dal",
    category: "Pulses",
    description:
      "Hulled and split yellow mung beans that cook quickly and digest easily. Used in dals, khichdi, soups and sweets.",
  },
  {
    name: "Whole Moong",
    category: "Pulses",
    description:
      "Whole green mung beans with the skin intact. Used for curries, salads and sprouting; high in fibre and protein.",
  },
  {
    name: "Masoor Dal",
    category: "Pulses",
    description:
      "Skinned and split red lentils that cook fast into a creamy dal. Popular in soups, curries and everyday meals.",
  },
  {
    name: "Whole Masoor",
    category: "Pulses",
    description:
      "Whole brown-skinned lentils with an earthy flavour. Used in hearty curries, soups and sprouted dishes.",
  },
  {
    name: "Chana Dal (Split Bengal Gram)",
    category: "Pulses",
    description:
      "Chickpeas (chana) that are hulled and split into dal. Used in curries, ground into besan flour and in snack production.",
  },
  {
    name: "Urad Dal",
    category: "Pulses",
    description:
      "Hulled and split black gram, creamy white in colour. Essential for idli and dosa batters, papad and dal makhani.",
  },
  {
    name: "Whole Urad",
    category: "Pulses",
    description:
      "Whole black gram with its black skin intact. Used in dal makhani and rich, slow-cooked preparations.",
  },
  {
    name: "Kabuli Chana",
    category: "Pulses",
    description:
      "Large, cream-coloured chickpeas with a smooth texture. Used in chole, salads, hummus and snacks.",
  },
  {
    name: "Kala Chana",
    category: "Pulses",
    description:
      "Small, dark brown chickpeas with a robust flavour. Used in curries, sprouts and traditional preparations.",
  },
  {
    name: "Matki (Moth Beans)",
    category: "Pulses",
    description:
      "Small brown beans popular in Maharashtrian cooking. Used for misal, usal and sprouted dishes.",
  },
  {
    name: "Chawli (Lobia)",
    category: "Pulses",
    description:
      "Cream-coloured beans with a black eye, also called cowpeas. Used in curries, salads and stews.",
  },
  {
    name: "Rajma",
    category: "Pulses",
    description:
      "Red kidney beans with a firm bite and rich flavour. Famous in North Indian rajma masala and chilli.",
  },
  {
    name: "White Peas (Vatana)",
    category: "Pulses",
    description:
      "Dried white peas that soften into a creamy texture when cooked. Used in ragda, curries and street-food dishes.",
  },
  {
    name: "Yellow Peas",
    category: "Pulses",
    description:
      "Dried yellow field peas with a mild, sweet taste. Used in curries, soups, flour and snacks.",
  },
  {
    name: "Green Peas (Dried)",
    category: "Pulses",
    description:
      "Dried green peas that rehydrate to a tender texture. Used in curries, soups and snack production.",
  },
  {
    name: "Horse Gram (Kulith)",
    category: "Pulses",
    description:
      "Small, reddish-brown legume rich in protein and iron. Used in soups, curries and the traditional pithla.",
  },
  {
    name: "Val (Field Beans)",
    category: "Pulses",
    description:
      "Flat, light-brown beans with a slightly bitter-sweet taste. Popular in Gujarati and Maharashtrian curries.",
  },
  {
    name: "Soybeans",
    category: "Pulses",
    description:
      "Protein-rich beans used for soy milk, tofu, oil, flour and textured protein, and as an ingredient in many foods.",
  },
  {
    name: "Whole Pigeon Peas",
    category: "Pulses",
    description:
      "Whole toor with the husk intact, with a hearty, nutty flavour. Used in curries and regional dishes.",
  },
  {
    name: "Green Gram Sprouts",
    category: "Pulses",
    description:
      "Germinated whole green mung beans, crisp and fresh. A nutritious addition to salads, curries and snacks.",
  },
  {
    name: "Brown Lentils",
    category: "Pulses",
    description:
      "Whole lentils with a firm texture and earthy flavour that hold their shape when cooked. Used in soups and stews.",
  },
  {
    name: "Red Lentils",
    category: "Pulses",
    description:
      "Split, skinned lentils that cook in minutes to a soft, golden texture. Used in dals, soups and purees.",
  },
  {
    name: "Split Peas",
    category: "Pulses",
    description:
      "Dried peas that are peeled and split. Cook to a thick, creamy consistency for soups and dals.",
  },
  {
    name: "Black-Eyed Peas",
    category: "Pulses",
    description:
      "Creamy beans marked with a distinctive black spot. Mild and earthy, used in curries, salads and stews.",
  },
  {
    name: "Wheat",
    category: "Cereals",
    description:
      "Premium Indian wheat graded for size and moisture. Used for atta, flour, semolina and bakery products.",
  },
  {
    name: "Jowar (Sorghum)",
    category: "Cereals",
    description:
      "Gluten-free ancient grain with a mild, nutty taste. Used for rotis, flour and health foods.",
  },
  {
    name: "Bajra (Pearl Millet)",
    category: "Cereals",
    description:
      "Hardy, nutrient-dense millet rich in iron and fibre. Used for flatbreads, porridge and flour.",
  },
  {
    name: "Ragi (Finger Millet)",
    category: "Cereals",
    description:
      "Calcium-rich reddish-brown millet. Used in porridge, rotis, baby food and flour.",
  },
  {
    name: "Maize (Corn)",
    category: "Cereals",
    description:
      "Maize (Zea mays) is a cereal grain harvested, dried and graded for size and moisture. Used for food, starch, animal feed and further processing.",
  },
  {
    name: "Barley (Jau)",
    category: "Cereals",
    description:
      "Versatile whole grain with a chewy texture, high in fibre. Used in soups, malt, flour and health foods.",
  },
  {
    name: "Oats",
    category: "Cereals",
    description:
      "Wholesome grain rich in soluble fibre. Used for porridge, breakfast cereals, baking and snacks.",
  },
  {
    name: "Semolina (Suji / Rava)",
    category: "Cereals",
    description:
      "Coarsely ground wheat with a golden colour. Used for upma, halwa, pasta, idli and bakery products.",
  },
  {
    name: "Amaranth (Rajgira)",
    category: "Cereals",
    description:
      "Tiny gluten-free seeds rich in protein and minerals. Popular for fasting foods, laddoos and flour.",
  },
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
