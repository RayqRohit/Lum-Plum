export interface ProjectSection {
  title: string;
  paragraphs: string[];
}

export interface ProjectQuote {
  text: string;
  author: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  badge?: string;
  category: string;
  year: string;
  image: string;
  introParagraphs: string[];
  mainSection: {
    heading: string;
    paragraphsBeforeQuote: string[];
    quote?: ProjectQuote;
    paragraphsAfterQuote: string[];
  };
  impactSection: {
    heading: string;
    intro: string;
    bullets: { label: string; text: string }[];
    conclusion: string;
  };
  nextSection: {
    heading: string;
    text: string;
  };
}

export const projectsData: Record<string, ProjectDetail> = {
  luminous: {
    slug: "luminous",
    title: "Luminous",
    badge: "Featured Case Study",
    category: "Product & Visual Design",
    year: "2025",
    image: "/images/oYhlVIWU5MgrLHfcqMQS7M3AxA.jpg",
    introParagraphs: [
      "Luminous was conceived to bridge the gap between high-aesthetic visual storytelling and functional digital utility. In an industry saturated with rigid templates, this initiative set out to build an ambient, responsive product environment that responds intuitively to user behavior while maintaining a distinctive spatial identity.",
      "Acting as lead designer across research, visual systems, and interaction design, I explored how subtle kinetic motion, balanced typographic scales, and purposeful negative space could elevate routine digital tasks into moments of genuine delight.",
    ],
    mainSection: {
      heading: "Human-Centered Visual Architecture",
      paragraphsBeforeQuote: [
        "Good interface design never forces users to decipher hierarchy. Every contrast ratio, elevation surface, and micro-transition in Luminous was engineered to create an organic sense of orientation. By conducting multi-round usability tests and stress-testing layouts against diverse content densities, we developed an adaptable design language that remains effortless under heavy usage.",
      ],
      quote: {
        text: '“Simplicity is not the absence of clutter, that’s a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product.”',
        author: "— Design Principle, Luminous Studio",
      },
      paragraphsAfterQuote: [
        "By standardizing spacing rhythms and visual tokens in Figma, we bridged the gap between raw conceptual sketches and production-ready components, ensuring zero fidelity loss from design handoff to front-end execution.",
      ],
    },
    impactSection: {
      heading: "Impact & Key Milestones",
      intro:
        "Following launch, the interface overhaul produced measurable shifts across retention, task completion rates, and qualitative sentiment.",
      bullets: [
        {
          label: "48% Surge in Session Depth",
          text: "Users explored deeper workflows due to clearer navigation visual cues.",
        },
        {
          label: "Unified Component Library",
          text: "Built 60+ modular tokens reducing subsequent feature design cycles by 3 weeks.",
        },
        {
          label: "Sub-Second Comprehension",
          text: "Time-to-first-action decreased by 34% across primary onboarding paths.",
        },
        {
          label: "Enhanced Accessibility Compliance",
          text: "Attained strict WCAG 2.1 AA contrast ratios across dark and light palettes.",
        },
        {
          label: "Industry Recognition",
          text: "Showcased across multiple design publications for excellence in ambient interaction design.",
        },
      ],
      conclusion:
        "Luminous proved that modern software does not need to choose between rigorous utility and emotional resonance. When both align, user trust is established instantly.",
    },
    nextSection: {
      heading: "Evolution & What’s Ahead",
      text: "The design framework established for Luminous currently serves as the foundational design system for upcoming native applications and cross-platform extensions, continuing to evolve through continuous user feedback loops.",
    },
  },

  nova: {
    slug: "nova",
    title: "Nova",
    category: "Product Design & SaaS Architecture",
    year: "2024",
    image: "/images/lijDKTTFQa95RSKUPUNYKsOdWc.jpg",
    introParagraphs: [
      "Nova is a next-generation workspace platform engineered for asynchronous creative teams. Facing high cognitive overload and disjointed team communication, Nova required a structural redesign to transform complex multi-stream data into a calm, focused digital workspace.",
      "I led the complete end-to-end product design cycle — from mapping end-user mental models and information architecture to producing interactive high-fidelity prototypes and atomic design specifications.",
    ],
    mainSection: {
      heading: "Eliminating Cognitive Overhead",
      paragraphsBeforeQuote: [
        "When building tools for high-velocity knowledge workers, every millisecond of cognitive friction compounds. We restructured the core navigation into contextual drawers and command-palette controls, keeping user workspaces clean while ensuring advanced configurations remain one keystroke away.",
      ],
      quote: {
        text: '“A great interface doesn’t demand attention; it quietly enables mastery.”',
        author: "— Product Strategy Note",
      },
      paragraphsAfterQuote: [
        "Rapid interactive prototyping in Figma and Framer allowed us to test real-world scenarios with 40+ early beta users, uncovering hidden bottlenecks in cross-team handoffs before a single line of backend logic was finalized.",
      ],
    },
    impactSection: {
      heading: "Measurable Outcomes",
      intro:
        "Nova’s redesign drastically shortened workflow friction and expanded organic product-led growth.",
      bullets: [
        {
          label: "62% Reduction in Setup Time",
          text: "Redesigned onboarding reduced user time-to-first-collaboration from 18 minutes to under 7 minutes.",
        },
        {
          label: "4.8/5 CSAT Score",
          text: "Qualitative customer satisfaction scores improved dramatically within the first quarter post-release.",
        },
        {
          label: "Systemic Consistency",
          text: "Delivered an exhaustive design token system integrated directly into developer workflows.",
        },
        {
          label: "35% Uplift in Weekly Active Teams",
          text: "Seamless multi-user document commenting drove persistent viral expansion.",
        },
        {
          label: "Zero Regression Bug Rate",
          text: "Pixel-perfect component documentation eliminated designer-developer alignment discrepancies.",
        },
      ],
      conclusion:
        "By systematically removing unnecessary UI clutter and prioritizing ergonomic keyboard-first flows, Nova empowered teams to focus on their creative output rather than wrestling with their tools.",
    },
    nextSection: {
      heading: "Next Iterations",
      text: "Future milestones include intelligence-assisted workflow automations, customizable canvas workspaces, and deeper third-party API ecosystem integrations.",
    },
  },

  osaka: {
    slug: "osaka",
    title: "Osaka",
    category: "Brand Identity & Design Systems",
    year: "2023",
    image: "/images/yStE9KWzFrtJTVgDpvp7op43a0U.jpg",
    introParagraphs: [
      "Osaka is an architectural lifestyle brand rooted in Japanese minimalism and sustainable urban living. The objective was to craft a comprehensive visual identity system that honors traditional spatial philosophy while speaking fluidly to a global, contemporary demographic.",
      "My role covered identity design, typography curation, brand guidelines, packaging specifications, and the digital eCommerce presence across multiple international touchpoints.",
    ],
    mainSection: {
      heading: "Identity in Motion & Physical Space",
      paragraphsBeforeQuote: [
        "Minimalism is frequently misunderstood as emptiness. For Osaka, our philosophy was rooted in 'Ma' — the conscious appreciation of negative space. We developed a bespoke wordmark with delicate structural proportions, complemented by an earthy, muted palette inspired by natural stone, unbleached linen, and cedar.",
      ],
      quote: {
        text: '“Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.”',
        author: "— Antoine de Saint-Exupéry",
      },
      paragraphsAfterQuote: [
        "We extended this visual language from tangible print collateral and packaging unboxing journeys directly into the web platform, creating a seamless aesthetic dialogue between the physical product and digital storefront.",
      ],
    },
    impactSection: {
      heading: "Brand Performance",
      intro:
        "The identity system established Osaka as a standout premium brand within months of international launch.",
      bullets: [
        {
          label: "Global Brand Cohesion",
          text: "Deployed identity guidelines across 4 continents covering packaging, web, and spatial signage.",
        },
        {
          label: "85% International Customer Growth",
          text: "Cohesive digital storytelling accelerated direct-to-consumer online sales.",
        },
        {
          label: "Eco-Conscious Packaging Standard",
          text: "Standardized 100% recyclable, plastic-free material specifications.",
        },
        {
          label: "Feature In Global Design Annuals",
          text: "Recognized for exceptional typography and restraint in modern brand systems.",
        },
        {
          label: "Seamless Omnichannel Experience",
          text: "Zero drop-off between social discovery and web commerce checkout.",
        },
      ],
      conclusion:
        "Osaka stands as proof that restraint, craft, and cultural authenticity build lasting brand equity in an era of fleeting visual trends.",
    },
    nextSection: {
      heading: "Brand Expansion",
      text: "The brand guidelines are currently being expanded to accommodate retail pop-up spaces, architectural monographs, and lifestyle sub-lines.",
    },
  },

  atlas: {
    slug: "atlas",
    title: "Atlas",
    category: "Creative Direction & Editorial Experience",
    year: "2022",
    image: "/images/5MDRCZsxIrsye9DcYcnC0Mc6l8.jpg",
    introParagraphs: [
      "Atlas is an editorial exploration documenting the intersection of remote landscapes, architectural monuments, and solitary human presence. The challenge was to construct a digital monograph that mirrors the tactile weight and emotional resonance of a physical art book.",
      "As creative director, I oversaw visual curation, photographic sequencing, responsive editorial layout design, and ambient audio-visual interactions.",
    ],
    mainSection: {
      heading: "The Art of Pacing & Restraint",
      paragraphsBeforeQuote: [
        "Digital media often bombards users with rapid, high-stimulation visual sequences. With Atlas, we deliberately inverted this pattern. We introduced generous borders, fluid aspect-ratio adapters, and subtle easing curves that encourage visitors to slow down, examine details, and experience imagery with intentional focus.",
      ],
      quote: {
        text: '“To take a photograph is to align the head, the eye and the heart.”',
        author: "— Henri Cartier-Bresson",
      },
      paragraphsAfterQuote: [
        "Every image was color-graded under strict color profiles and paired with contextual geographic narratives, transforming a digital gallery into an evocative sensory archive.",
      ],
    },
    impactSection: {
      heading: "Cultural & Digital Footprint",
      intro:
        "Atlas resonated profoundly with photography curators, architects, and design enthusiasts worldwide.",
      bullets: [
        {
          label: "Over 120,000 Unique Visitors",
          text: "Reached organic global audiences through editorial feature placements.",
        },
        {
          label: "Avg. Time on Page: 4m 12s",
          text: "Exceptionally high engagement rates reflecting deliberate, contemplative pacing.",
        },
        {
          label: "Limited Hardcover Monograph Run",
          text: "Inspired a sold-out collector’s edition print monograph.",
        },
        {
          label: "FWA of the Day Nominee",
          text: "Celebrated for elegant responsive gallery mechanics and micro-interactions.",
        },
        {
          label: "High-Fidelity Image Optimization",
          text: "Next-gen WebP/AVIF compression delivering instant load times without detail degradation.",
        },
      ],
      conclusion:
        "Atlas demonstrated that digital web design can evoke the sacred stillness of a gallery space when treated with respect for pacing and scale.",
    },
    nextSection: {
      heading: "The Next Volume",
      text: "Atlas Volume II is currently in pre-production, focusing on urban Brutalist architecture across Eastern Europe and the Mediterranean coastline.",
    },
  },

  prism: {
    slug: "prism",
    title: "Prism",
    category: "UI/UX Design & Multi-Platform System",
    year: "2021",
    image: "/images/WWdQ2zLteXSFypujmTT6YJPQvA.jpg",
    introParagraphs: [
      "Prism is an adaptive personal finance and investment tracking application created to help next-generation creators understand their cash flow, asset distributions, and tax obligations without financial jargon or overwhelming spreadsheets.",
      "I was brought in to architect the core mobile experience, establish the foundational design system, and design complex data visualization widgets that are instantly legible on compact screens.",
    ],
    mainSection: {
      heading: "Translating Complexity into Visual Clarity",
      paragraphsBeforeQuote: [
        "Financial interfaces frequently intimidate users with dense data tables and confusing terminology. We approached Prism through the lens of progressive disclosure — surfacing actionable summaries up-front while allowing users to drill down into micro-transactions with fluid gestural swipes.",
      ],
      quote: {
        text: '“Good design makes a product understandable. It clarifies the product’s structure.”',
        author: "— Dieter Rams",
      },
      paragraphsAfterQuote: [
        "We crafted custom data visualization charts with accessible high-contrast palettes, ensuring colorblind accessibility while preserving a vibrant, futuristic visual personality.",
      ],
    },
    impactSection: {
      heading: "Growth & User Engagement",
      intro:
        "Prism’s user-centric foundation fueled rapid adoption in its initial release cycle.",
      bullets: [
        {
          label: "Top 10 App Store Feature",
          text: "Featured by Apple in 'Apps We Love' in the Finance category upon release.",
        },
        {
          label: "74% Day-30 Retention Rate",
          text: "Significantly outperforming standard fintech industry retention benchmarks.",
        },
        {
          label: "100% Accessible Color System",
          text: "Full WCAG compliance across all financial state graphs and indicators.",
        },
        {
          label: "50+ Reusable UI Components",
          text: "Delivered a comprehensive iOS Human Interface Guidelines-aligned component library.",
        },
        {
          label: "Seamless Dark & Light Adaptation",
          text: "Dynamic semantic tokens ensuring effortless contrast across dynamic lighting environments.",
        },
      ],
      conclusion:
        "Prism proved that financial empowerment starts with psychological safety and visual transparency.",
    },
    nextSection: {
      heading: "System Scalability",
      text: "The Prism component library continues to serve as the benchmark for cross-platform expansion across tablet, desktop, and watchOS interfaces.",
    },
  },
};
