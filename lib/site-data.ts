export const BUSINESS_NAME = "Melbourne Acid Washing"

export const PHONE_NUMBER_DISPLAY = "+61 401 561 317"
export const PHONE_NUMBER_LINK = "tel:+61401561317"
export const WHATSAPP_URL = "https://wa.me/61401561317"
export const INSTAGRAM_URL = "https://www.instagram.com/melbourne.acid.washing"
export const FACEBOOK_URL = "https://www.facebook.com/melbourneacidwashing"
export const CONTACT_EMAIL = "melbourne.acid.washing@gmail.com"
export const SERVICE_AREA = "All Melbourne Suburbs, VIC"

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const

export type ServiceDefinition = {
  slug: string
  title: string
  shortDescription: string
  detailDescription: string
  features: string[]
}

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "pressure-cleaning",
    title: "Pressure Cleaning",
    shortDescription:
      "High-pressure washing for driveways, paths, patios, and hard exterior surfaces.",
    detailDescription:
      "Our pressure cleaning service strips years of grime, moss, algae, and built-up dirt while protecting the base material.",
    features: [
      "Driveways and footpaths",
      "Patios, decks, and pool surrounds",
      "Retaining walls and fences",
      "Commercial parking areas",
    ],
  },
  {
    slug: "acid-washing",
    title: "Acid Washing",
    shortDescription:
      "Professional acid treatment for deep surface restoration where standard pressure cleaning falls short.",
    detailDescription:
      "Acid washing removes efflorescence, mineral staining, and stubborn discoloration from concrete, brick, and pavers.",
    features: [
      "Concrete and exposed aggregate",
      "Brick and paver restoration",
      "Tile and grout deep clean",
      "Pool coping and surrounds",
    ],
  },
  {
    slug: "oil-rust-stain-removal",
    title: "Oil and Rust Stain Removal",
    shortDescription:
      "Specialized treatment to lift deeply embedded oil, rust, and industrial residue.",
    detailDescription:
      "We combine targeted chemistry with controlled pressure methods to remove stains without leaving patchy finishes.",
    features: [
      "Garage and driveway oil spills",
      "Rust transfer from metal fixtures",
      "Tyre and machinery marks",
      "Industrial contamination cleanup",
    ],
  },
  {
    slug: "brick-render-cleaning",
    title: "Brick and Render Cleaning",
    shortDescription:
      "Soft and medium-pressure cleaning options for delicate facades and wall finishes.",
    detailDescription:
      "Our wash process is tuned for rendered and masonry walls to clean safely while preserving coatings and texture.",
    features: [
      "Rendered exterior walls",
      "Face brick and heritage brick",
      "Sandstone and limestone surfaces",
      "Paint and graffiti reduction",
    ],
  },
  {
    slug: "driveway-restoration",
    title: "Driveway Restoration",
    shortDescription:
      "Comprehensive driveway refresh from heavy cleaning through to optional protection.",
    detailDescription:
      "Restore curb appeal with staged cleaning, stain treatment, and recommendations for seal and long-term maintenance.",
    features: [
      "Concrete driveways",
      "Exposed aggregate finishes",
      "Paved and cobblestone layouts",
      "Preparation for sealing",
    ],
  },
  {
    slug: "industrial-commercial-cleaning",
    title: "Industrial and Commercial Cleaning",
    shortDescription:
      "Scalable site cleaning for businesses, facilities, and large property surfaces.",
    detailDescription:
      "We plan around your schedule and safety requirements to deliver reliable results with minimal disruption.",
    features: [
      "Warehouses and factories",
      "Loading docks and service yards",
      "Shopping center hardscape",
      "Common areas and entry zones",
    ],
  },
]

export const TRUST_POINTS = [
  "Licensed and insured operators",
  "Residential and commercial expertise",
  "Melbourne-wide service coverage",
  "Clear quoting with no hidden charges",
  "Results-focused surface treatment",
]

export const HOME_STATS = [
  { label: "Projects completed", value: "500+" },
  { label: "Years experience", value: "10+" },
  { label: "Average response window", value: "< 2 hrs" },
  { label: "Google and social sentiment", value: "5 star" },
]

export const PROCESS_STEPS = [
  {
    title: "Surface Assessment",
    text: "We inspect material type, contamination level, and risk areas before selecting method and chemistry.",
  },
  {
    title: "Custom Cleaning Plan",
    text: "Every job gets a tailored pressure and treatment profile to maximize results and protect the surface.",
  },
  {
    title: "Controlled Restoration",
    text: "Technicians execute in stages, spot-test where needed, and verify finish consistency during the clean.",
  },
  {
    title: "Final Walkthrough",
    text: "We review outcomes with you, recommend care steps, and confirm your property is ready to use.",
  },
]

export const PRICING_GUIDE = [
  {
    label: "Driveway",
    value: "From $150",
    note: "Standard single driveway pressure clean",
  },
  {
    label: "Home Exterior",
    value: "From $350",
    note: "Brick, render, and hardscape frontage package",
  },
  {
    label: "Commercial Sites",
    value: "POA",
    note: "Scope-based quote for access, area, and surface type",
  },
]

export type GalleryItem = {
  title: string
  suburb: string
  category: "Driveway" | "Brick and Render" | "Patio" | "Commercial"
  before: string
  after: string
  layout: "wide" | "tall" | "square"
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Concrete driveway revival",
    suburb: "Toorak",
    category: "Driveway",
    before: "Heavy oil staining and dark traffic marks",
    after: "Pressure cleaned and acid washed to a bright finish",
    layout: "wide",
  },
  {
    title: "Brick facade restoration",
    suburb: "Brighton",
    category: "Brick and Render",
    before: "Mold streaking and years of trapped grime",
    after: "Soft-washed brick with clean, even tone",
    layout: "square",
  },
  {
    title: "Poolside paver refresh",
    suburb: "Richmond",
    category: "Patio",
    before: "Algae buildup causing slippery surfaces",
    after: "Deep cleaned pavers ready for reseal",
    layout: "tall",
  },
  {
    title: "Retail forecourt clean",
    suburb: "CBD",
    category: "Commercial",
    before: "Tyre marks and grease tracking",
    after: "Consistent presentation-safe forecourt",
    layout: "square",
  },
  {
    title: "Exposed aggregate restoration",
    suburb: "Malvern",
    category: "Driveway",
    before: "Dull aggregate with entrenched staining",
    after: "Texture restored with clear aggregate visibility",
    layout: "wide",
  },
  {
    title: "Rendered wall treatment",
    suburb: "Hawthorn",
    category: "Brick and Render",
    before: "Efflorescence and weather staining",
    after: "Acid-treated and balanced render finish",
    layout: "square",
  },
  {
    title: "Warehouse service lane",
    suburb: "Dandenong",
    category: "Commercial",
    before: "Industrial residue and grime channels",
    after: "Heavy-duty clean with improved traction",
    layout: "tall",
  },
]

export const SERVICE_OPTIONS = [
  "Pressure Cleaning",
  "Acid Washing",
  "Oil and Rust Stain Removal",
  "Brick and Render Cleaning",
  "Driveway Restoration",
  "Industrial / Commercial",
  "Other / Not Sure",
] as const
