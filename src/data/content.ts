// ─────────────────────────────────────────────────────────────
// Zenistsu Studios — Centralized Content & Data
// ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  priceRange: string;
  deliverables: string[];
  icon: string; // emoji or SVG identifier
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  results: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  highlight: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Navigation ───────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Hero ─────────────────────────────────────────────────────

export const hero = {
  tagline: "AI-Powered Creative Studio",
  headline: "We Create AI Films\nThat Sell",
  subheadline:
    "Zenistsu Studios crafts cinematic AI advertisements, luxury commercials, and premium brand films that captivate audiences and drive revenue.",
  cta: { primary: "View Our Work", secondary: "Start a Project" },
};

// ─── Services ─────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "cinematic-ai-ads",
    title: "Cinematic AI Ads",
    shortDescription:
      "Hollywood-grade AI-generated advertisements that stop the scroll and drive conversions.",
    longDescription:
      "We combine cutting-edge AI generation with cinematic storytelling to produce advertisements that rival traditional high-budget productions. Every frame is crafted for impact — from dramatic lighting to precision color grading — delivering scroll-stopping content that converts viewers into customers.",
    features: [
      "AI-generated cinematic footage",
      "Professional color grading & VFX",
      "Script writing & storyboarding",
      "Multi-platform optimization",
      "A/B tested creative variants",
      "Performance analytics dashboard",
    ],
    priceRange: "$800 – $3,000",
    deliverables: [
      "3–5 ad variations (15s, 30s, 60s)",
      "Raw project files",
      "Platform-optimized exports",
      "Performance report",
    ],
    icon: "🎬",
  },
  {
    id: "luxury-commercials",
    title: "Luxury Product Commercials",
    shortDescription:
      "Elevate your brand with photorealistic AI product films that exude sophistication.",
    longDescription:
      "Our luxury product commercials harness AI to create impossibly beautiful product visualizations. We specialize in hero shots, lifestyle environments, and aspirational narratives that position your brand at the pinnacle of its market. Think Apple-level production at a fraction of the cost.",
    features: [
      "Photorealistic AI product renders",
      "Luxury environment design",
      "Slow-motion hero sequences",
      "Custom soundtrack composition",
      "Brand guideline compliance",
      "4K & 8K delivery",
    ],
    priceRange: "$1,200 – $4,500",
    deliverables: [
      "Hero commercial (30s–90s)",
      "Product beauty shots (10+)",
      "Social cutdowns",
      "Behind-the-scenes content",
    ],
    icon: "💎",
  },
  {
    id: "real-estate-films",
    title: "Real Estate Marketing Films",
    shortDescription:
      "Transform properties into cinematic experiences that accelerate sales.",
    longDescription:
      "Our AI-powered real estate films go beyond virtual tours. We create aspirational lifestyle narratives around properties — sunrise aerials, designer-staged interiors, and neighborhood vignettes that make buyers feel the home before they step inside. Properties marketed with our films sell 40% faster on average.",
    features: [
      "AI-enhanced aerial cinematography",
      "Virtual staging & interior design",
      "Lifestyle narrative storytelling",
      "Neighborhood & amenity showcases",
      "Agent branding integration",
      "MLS-optimized formats",
    ],
    priceRange: "$600 – $2,000",
    deliverables: [
      "Property film (60s–3min)",
      "Social media cutdowns",
      "Virtual tour integration",
      "Listing-ready thumbnails",
    ],
    icon: "🏛️",
  },
  {
    id: "ai-avatars",
    title: "AI Avatars & Spokespeople",
    shortDescription:
      "Hyper-realistic AI presenters that deliver your message 24/7 without talent fees.",
    longDescription:
      "Create a consistent, always-available brand spokesperson with our custom AI avatars. From customer support videos to product explainers, our photorealistic digital humans speak any language, wear any outfit, and never need a retake. Scale your video content infinitely.",
    features: [
      "Custom avatar design & training",
      "Multi-language voice synthesis",
      "Emotion & gesture control",
      "Brand wardrobe customization",
      "Real-time rendering option",
      "API integration available",
    ],
    priceRange: "$800 – $2,500",
    deliverables: [
      "Custom AI avatar model",
      "10 initial video scripts",
      "Multi-language variants",
      "Usage rights & licensing",
    ],
    icon: "🤖",
  },
  {
    id: "ugc-ads",
    title: "AI UGC Ads",
    shortDescription:
      "Authentic-looking user-generated content at scale, powered by AI creators.",
    longDescription:
      "Authentic sells. Our AI-generated UGC ads look and feel like real customer testimonials and unboxing videos — because we train our models on viral content patterns. Produce hundreds of unique ad creatives monthly without the logistics of managing real creators.",
    features: [
      "AI creator personas (diverse demographics)",
      "Viral hook optimization",
      "Platform-native formatting",
      "Unlimited creative variations",
      "Trend-responsive content",
      "Performance-based iteration",
    ],
    priceRange: "$600 – $1,800/mo",
    deliverables: [
      "20–50 UGC ad variations/month",
      "Hook & script library",
      "Performance analytics",
      "Monthly strategy call",
    ],
    icon: "📱",
  },
  {
    id: "brand-storytelling",
    title: "Premium Brand Storytelling",
    shortDescription:
      "Craft your brand's origin story into a cinematic narrative that inspires loyalty.",
    longDescription:
      "Every legendary brand has a story worth telling. We transform your brand's mission, values, and journey into a cinematic film that resonates emotionally with your audience. From documentary-style pieces to manifesto films, we create content that builds cult-like brand loyalty.",
    features: [
      "Brand narrative development",
      "Documentary-style production",
      "Founder story films",
      "Manifesto & culture videos",
      "Annual brand films",
      "Investor pitch videos",
    ],
    priceRange: "$1,500 – $5,000",
    deliverables: [
      "Brand film (2–5 min)",
      "Sizzle reel (60s)",
      "Social media assets",
      "Press kit materials",
    ],
    icon: "✨",
  },
];

// ─── Portfolio ─────────────────────────────────────────────────

export const portfolioCategories = [
  "All",
  "Commercials",
  "Real Estate",
  "AI Avatars",
  "UGC",
  "Brand Films",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "noir-fragrance",
    title: "NOIR — Fragrance Launch",
    client: "Maison Noir",
    category: "Commercials",
    thumbnail: "/images/portfolio/noir-fragrance.jpg",
    description:
      "A cinematic AI-generated campaign for a luxury fragrance house. Dark, moody visuals with liquid gold simulations and dramatic slow-motion pours that became the most-shared perfume ad of Q4.",
    results: "4.2M views, 340% ROAS, sold out in 72 hours",
    tags: ["Luxury", "Fragrance", "AI Cinema"],
  },
  {
    id: "skyline-residences",
    title: "Skyline Residences",
    client: "Meridian Properties",
    category: "Real Estate",
    thumbnail: "/images/portfolio/skyline-residences.jpg",
    description:
      "A breathtaking aerial tour of a $40M penthouse development. AI-enhanced golden hour footage, virtual staging with designer furniture, and a lifestyle narrative that attracted pre-sales within 48 hours of release.",
    results: "12 units pre-sold, $18M in commitments",
    tags: ["Real Estate", "Luxury Living", "Aerial"],
  },
  {
    id: "vitality-wellness",
    title: "Vitality Wellness App",
    client: "Vitality Health",
    category: "UGC",
    thumbnail: "/images/portfolio/vitality-wellness.jpg",
    description:
      "A series of 40+ AI-generated UGC ads featuring diverse creators sharing their wellness journeys. Optimized for TikTok and Instagram Reels with viral hooks that drove 200K+ app installs.",
    results: "200K+ installs, $1.80 CPA, 5.2% CTR",
    tags: ["UGC", "Health & Wellness", "Social"],
  },
  {
    id: "aurora-watches",
    title: "Aurora Collection",
    client: "Chronos Watches",
    category: "Commercials",
    thumbnail: "/images/portfolio/aurora-watches.jpg",
    description:
      "A photorealistic AI commercial for a Swiss luxury watch brand. Macro lens simulations capturing light dancing across sapphire crystals, paired with an orchestral score that embodies precision craftsmanship.",
    results: "8.1M impressions, 28% brand lift, featured on Hodinkee",
    tags: ["Luxury", "Watches", "Product Film"],
  },
  {
    id: "nexus-ai-avatar",
    title: "Nexus AI Concierge",
    client: "Nexus Hotels",
    category: "AI Avatars",
    thumbnail: "/images/portfolio/nexus-avatar.jpg",
    description:
      "A multilingual AI concierge avatar deployed across a luxury hotel chain's digital platforms. The avatar handles booking inquiries, room service, and local recommendations in 12 languages.",
    results: "35% reduction in front desk calls, 4.8★ guest rating",
    tags: ["AI Avatar", "Hospitality", "Multilingual"],
  },
  {
    id: "terra-origin",
    title: "Return to Earth",
    client: "Terra Botanics",
    category: "Brand Films",
    thumbnail: "/images/portfolio/terra-origin.jpg",
    description:
      "A documentary-style brand origin film for an organic skincare company. We traced their journey from a family farm to a global brand, weaving in AI-generated nature cinematography that amplified their sustainability message.",
    results: "1.2M views, 156% increase in brand searches",
    tags: ["Brand Story", "Organic", "Documentary"],
  },
];

// ─── Testimonials ──────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Isabelle Moreau",
    role: "CMO",
    company: "Maison Noir",
    quote:
      "Zenistsu Studios didn't just create an ad — they created a cultural moment. Our fragrance sold out in 72 hours. The production quality rivals anything we've seen from traditional agencies charging 10x more.",
    avatar: "/images/testimonials/isabelle.jpg",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Chen",
    role: "VP Marketing",
    company: "Meridian Properties",
    quote:
      "The real estate films Zenistsu produced were unlike anything on the market. We pre-sold 12 units before construction finished. Their AI-enhanced aerials made our development look like it belonged in Architectural Digest.",
    avatar: "/images/testimonials/james.jpg",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sarah Williams",
    role: "Growth Lead",
    company: "Vitality Health",
    quote:
      "We went from 5 UGC ads per month to 50, and our CPA dropped by 60%. The AI-generated content is indistinguishable from real creators. Zenistsu is the unfair advantage every DTC brand needs.",
    avatar: "/images/testimonials/sarah.jpg",
    rating: 5,
  },
  {
    id: "t4",
    name: "Marcus Webb",
    role: "CEO",
    company: "Chronos Watches",
    quote:
      "As a luxury brand, we were skeptical about AI. Zenistsu proved us completely wrong. The commercial they produced for our Aurora collection captured the essence of our craftsmanship with stunning photorealism.",
    avatar: "/images/testimonials/marcus.jpg",
    rating: 5,
  },
];

// ─── Process ──────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your brand, audience, and objectives. Through collaborative workshops, we uncover the story only your brand can tell — and define the metrics that matter.",
    duration: "2–3 Days",
    deliverables: [
      "Creative brief",
      "Audience analysis",
      "Competitive audit",
      "KPI framework",
    ],
  },
  {
    number: "02",
    title: "Script & Storyboard",
    description:
      "Our writers and visual designers craft a compelling narrative tailored to your brand voice. Every scene is storyboarded with AI-previewed mood frames so you see the vision before production begins.",
    duration: "3–5 Days",
    deliverables: [
      "Final script",
      "Visual storyboard",
      "AI mood frames",
      "Shot list",
    ],
  },
  {
    number: "03",
    title: "AI Production",
    description:
      "This is where the magic happens. Using state-of-the-art AI models, we generate cinematic footage, photorealistic product shots, and custom visual effects — iterating rapidly until every frame is perfect.",
    duration: "5–10 Days",
    deliverables: [
      "Raw AI-generated footage",
      "Multiple creative directions",
      "Client review sessions",
    ],
  },
  {
    number: "04",
    title: "Post-Production & Polish",
    description:
      "Our editors and colorists refine every frame. Professional color grading, sound design, motion graphics, and visual effects transform raw content into a cinema-quality final product.",
    duration: "3–7 Days",
    deliverables: [
      "Color-graded master",
      "Sound design & music",
      "Motion graphics",
      "VFX compositing",
    ],
  },
  {
    number: "05",
    title: "Delivery & Optimization",
    description:
      "We deliver platform-optimized exports for every channel — plus ongoing performance monitoring and creative iteration to ensure your content keeps converting long after launch.",
    duration: "1–2 Days",
    deliverables: [
      "Multi-format exports",
      "Platform-specific cuts",
      "Performance dashboard",
      "Optimization roadmap",
    ],
  },
];

// ─── FAQ ──────────────────────────────────────────────────────

export const faqItems: FAQItem[] = [
  {
    question: "How does AI-generated video compare to traditional production?",
    answer:
      "Our AI productions achieve cinema-quality results at 60–80% lower cost and 5x faster turnaround than traditional video production. The quality is indistinguishable from conventional shoots — many of our award-winning projects have been mistaken for traditionally-produced content by industry professionals.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Most projects are completed within 2–4 weeks from kickoff to final delivery. Rush projects can be turned around in as little as 5 business days. Our AI-powered pipeline eliminates the logistics of traditional shoots — no location scouting, no talent scheduling, no weather delays.",
  },
  {
    question: "Do you own the rights to the AI-generated content?",
    answer:
      "You receive full commercial usage rights for all deliverables. We provide a comprehensive licensing agreement that grants you perpetual, worldwide rights to use the content across all platforms and media. We never reuse or resell client-specific assets.",
  },
  {
    question: "Can you match our existing brand guidelines?",
    answer:
      "Absolutely. We begin every project with a thorough brand immersion phase. Our AI models are fine-tuned to your specific color palette, typography, visual style, and brand voice. The result is content that feels native to your brand ecosystem.",
  },
  {
    question: "What platforms do you optimize for?",
    answer:
      "We deliver content optimized for every major platform: YouTube, Instagram (Feed, Stories, Reels), TikTok, Facebook, LinkedIn, X (Twitter), connected TV (OTT), and cinema/broadcast. Each export is formatted to platform-specific specifications for maximum performance.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We establish KPIs during the discovery phase and track performance through our analytics dashboard. Metrics typically include view count, engagement rate, click-through rate, conversion rate, ROAS, and brand lift. We provide monthly performance reports and optimization recommendations.",
  },
];

// ─── Stats ────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 2, suffix: "M+", label: "Revenue Generated" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 48, suffix: "hr", label: "Average Turnaround" },
];

// ─── Team ─────────────────────────────────────────────────────

export const teamMembers: TeamMember[] = [
  {
    name: "Arjun Ravishankar",
    role: "Founder & Creative Director",
    bio: "Former creative lead at a top-10 agency with 12 years of experience in luxury brand advertising. Pioneer in AI-generated commercial content. Obsessed with the intersection of technology and cinematic storytelling.",
    image: "/images/team/arjun.jpg",
  },
  {
    name: "Elena Vasquez",
    role: "Head of AI Production",
    bio: "PhD in Computer Vision from MIT. Led AI research at a major tech company before joining Zenistsu. She architects the custom AI pipelines that power our cinematic output.",
    image: "/images/team/elena.jpg",
  },
  {
    name: "David Kim",
    role: "Lead Editor & Colorist",
    bio: "Emmy-nominated editor with credits on major streaming documentaries. David brings a filmmaker's eye to every project, ensuring our AI-generated content meets broadcast standards.",
    image: "/images/team/david.jpg",
  },
  {
    name: "Priya Patel",
    role: "Head of Strategy",
    bio: "Former strategist at a big four consulting firm. Priya bridges the gap between creative vision and business outcomes, ensuring every project delivers measurable ROI.",
    image: "/images/team/priya.jpg",
  },
];

// ─── Company Values ───────────────────────────────────────────

export const values = [
  {
    title: "Cinematic Excellence",
    description:
      "Every frame we produce meets the standard of a theatrical release. We don't do mediocre.",
  },
  {
    title: "Relentless Innovation",
    description:
      "We push the boundaries of what AI can create, staying months ahead of the industry curve.",
  },
  {
    title: "Client Obsession",
    description:
      "Your success is our reputation. We treat every project like our portfolio depends on it — because it does.",
  },
  {
    title: "Speed Without Sacrifice",
    description:
      "AI lets us move fast. Our standards ensure we never cut corners. You get both.",
  },
];

// ─── About Page ───────────────────────────────────────────────

export const about = {
  mission:
    "To democratize cinematic advertising through AI, giving every brand access to world-class commercial production — regardless of budget.",
  story:
    "Zenistsu Studios was born from a simple observation: the world's most stunning advertisements were gatekept by budgets only Fortune 500 companies could afford. We believed AI could change that. Founded in 2024, we've since produced over 150 commercial projects for brands across luxury goods, real estate, tech, wellness, and hospitality — delivering cinema-grade content at a fraction of traditional costs.",
  techStack: [
    "Runway Gen-3",
    "Midjourney",
    "Stable Diffusion",
    "ElevenLabs",
    "DaVinci Resolve",
    "After Effects",
    "Unreal Engine",
    "Custom Fine-Tuned Models",
  ],
};

// ─── Contact Page ─────────────────────────────────────────────

export const contactInfo = {
  email: "zenistsustudios@zohomail.in",
  phone: "+91 7032224055",
  location: "Andhra Pradesh, India",
  socials: [
    { platform: "Instagram", url: "https://instagram.com/zeniststudios" },
    { platform: "X", url: "https://x.com/zeniststudios" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/zeniststudios" },
    { platform: "YouTube", url: "https://youtube.com/@zeniststudios" },
  ],
  projectTypes: [
    "Cinematic AI Advertisement",
    "Luxury Product Commercial",
    "Real Estate Marketing Film",
    "AI Avatar / Spokesperson",
    "UGC Ad Campaign",
    "Brand Story Film",
    "Other",
  ],
  budgetRanges: [
    "$600 – $1,200",
    "$1,200 – $2,500",
    "$2,500 – $3,500",
    "$3,500 – $5,000",
    "$5,000+",
  ],
};

// ─── Pricing Tiers ────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    name: "Sprint",
    price: "$600",
    period: "per campaign",
    desc: "Ideal for launching a single high-performing product ad or campaign.",
    features: [
      "1 Master Commercial (30s)",
      "3 Social Cutdowns",
      "A/B Hook Variations",
      "10-day Turnaround",
    ],
    highlight: false,
  },
  {
    name: "Growth (Most Popular)",
    price: "$2,200",
    period: "per campaign",
    desc: "Full multi-channel commercial suite for ambitious DTC and tech brands.",
    features: [
      "3 Master Commercials",
      "10 Social Cutdowns",
      "Custom AI Avatars",
      "Multilingual Voiceovers",
      "5-day Turnaround",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Studio",
    price: "$5,000+",
    period: "custom monthly",
    desc: "Dedicated AI production team generating unlimited monthly creative assets.",
    features: [
      "Unlimited Ad Variations",
      "Dedicated AI Pipeline",
      "24/7 Priority Editing",
      "Dedicated Creative Director",
      "48hr Turnaround",
    ],
    highlight: false,
  },
];
