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
    badge: "New",
    category: "Visual Design",
    year: "2025",
    image: "/images/oYhlVIWU5MgrLHfcqMQS7M3AxA.jpg",
    introParagraphs: [
      "A blend of vision and innovation, Project Luminous is all about creating something bold, immersive, and meaningful. From concept to execution, every detail was crafted with creativity and purpose, bringing ideas to life in a way that truly shines.",
      "Inspired by the power of light and clarity, the project was designed to be bold yet elegant, innovative yet timeless. It merges aesthetics with functionality, creating a seamless experience that feels both intuitive and impactful.",
    ],
    mainSection: {
      heading: "Human at the Core",
      paragraphsBeforeQuote: [
        "At its heart, Project Luminous understands that design is for people. Every choice reflects empathy — prioritizing clarity, functionality, and emotion over fleeting trends. It shapes moments, not just screens, resulting in a product that respects user time, attention, and trust.",
      ],
      quote: {
        text: '"Accessibility is not a feature, it’s a social trend."',
        author: "- Antonio Santos",
      },
      paragraphsAfterQuote: [
        "Inspired by the power of light and clarity, the project was designed to be bold yet elegant, innovative yet timeless. It merges aesthetics with functionality, creating a seamless experience that feels both intuitive and impactful.",
      ],
    },
    impactSection: {
      heading: "The Impact",
      intro:
        "Inspired by the power of light and clarity, the project was designed to be bold yet elegant, innovative yet timeless. It merges aesthetics with functionality, creating a seamless experience that feels both intuitive and impactful.",
      bullets: [
        {
          label: "Higher engagement",
          text: "Increased user interaction and time spent on the platform.",
        },
        {
          label: "Stronger brand identity",
          text: "A cohesive visual language that enhances recognition.",
        },
        {
          label: "Improved user experience",
          text: "Intuitive design for seamless navigation.",
        },
        {
          label: "Higher conversion rates",
          text: "Optimized layouts and messaging that drive action.",
        },
        {
          label: "Lasting impression",
          text: "A design that resonates and builds meaningful connections.",
        },
      ],
      conclusion:
        "This project isn’t just a collection of screens — it’s an experience that sparks emotion. Every interaction was designed to build trust and spark delight, creating a connection that lasts. It’s about more than function — it’s about forging a meaningful bond with every user.",
    },
    nextSection: {
      heading: "What’s Next?",
      text: "Project Luminous is just getting started. Its core principles and systems were built to evolve and grow, opening doors to new possibilities and even deeper connections. This is a foundation for future innovation, constantly refining and adapting.",
    },
  },

  nova: {
    slug: "nova",
    title: "Nova",
    category: "Product Design",
    year: "2024",
    image: "/images/lijDKTTFQa95RSKUPUNYKsOdWc.jpg",
    introParagraphs: [
      "A fusion of purpose and imagination, Project Nova is about creating something striking, immersive, and deeply intentional. From initial sketches to final polish, every aspect was shaped with vision and craftsmanship — turning abstract ideas into a dynamic reality.",
      "Rooted in the concept of exploration and new beginnings, this project balances bold innovation with thoughtful restraint, offering an experience that feels both elevated and approachable.",
    ],
    mainSection: {
      heading: "Designed for Discovery",
      paragraphsBeforeQuote: [
        "At its essence, Project Nova embraces the idea that great design begins with curiosity. Every detail was guided by the desire to simplify complexity — making each interaction clear, purposeful, and memorable.",
        "It’s not about following trends; it’s about creating clarity in an increasingly noisy world. The result is a product that feels responsive, thoughtful, and undeniably human.",
      ],
      quote: {
        text: '"Design is intelligence made visible."',
        author: "– Alina Wheeler",
      },
      paragraphsAfterQuote: [
        "With an emphasis on discovery and connection, Project Nova was built to inspire — blending modern aesthetics with practical design to create something timeless and intuitive.",
      ],
    },
    impactSection: {
      heading: "The Results",
      intro:
        "Driven by the desire to spark curiosity and simplify the complex, Project Nova delivered results that go beyond surface-level impact. It was a reimagining of what digital interaction could be — cleaner, smarter, and more human.",
      bullets: [
        {
          label: "Greater retention",
          text: "Users return more often and stay longer.",
        },
        {
          label: "Elevated brand presence",
          text: "A distinct visual system that tells a compelling story.",
        },
        {
          label: "Smarter navigation",
          text: "Intuitive paths that guide users effortlessly.",
        },
        {
          label: "Stronger conversions",
          text: "Design choices aligned with user intent and behavior.",
        },
        {
          label: "Emotional connection",
          text: "Every detail designed to resonate and inspire trust.",
        },
      ],
      conclusion:
        "More than just an interface, Project Nova is an experience. It’s where form meets emotion, and where users feel seen, supported, and empowered.",
    },
    nextSection: {
      heading: "Looking Ahead",
      text: "Project Nova is just the beginning. Built on strong principles and scalable systems, it’s ready to grow, adapt, and evolve. This isn’t a static solution — it’s a living, breathing foundation for future stories, stronger connections, and continuous innovation.",
    },
  },

  osaka: {
    slug: "osaka",
    title: "Osaka",
    category: "Branding",
    year: "2023",
    image: "/images/yStE9KWzFrtJTVgDpvp7op43a0U.jpg",
    introParagraphs: [
      "A celebration of balance and precision, Project Osaka is where tradition meets modernity. Built with intention and clarity, it reflects a deep respect for detail, flow, and purpose.",
      "From concept to creation, every element was shaped to feel effortless yet powerful — inspired by the quiet strength found in harmony and simplicity.",
    ],
    mainSection: {
      heading: "Built Around Balance",
      paragraphsBeforeQuote: [
        "At its core, Project Osaka understands that great design is about balance — between form and function, emotion and logic, innovation and stability. Every decision was guided by empathy and thoughtfulness, prioritizing what truly matters to users.",
        "This isn’t design for design’s sake — it’s a carefully tuned system that feels intuitive, respectful, and fluid. The result is a user experience that doesn’t demand attention, but earns it naturally through clarity and grace.",
      ],
      quote: {
        text: '“Simplicity is the ultimate sophistication.”',
        author: "– Leonardo da Vinci",
      },
      paragraphsAfterQuote: [
        "By focusing on the essentials, Osaka creates space — for focus, for understanding, and for meaningful interaction.",
      ],
    },
    impactSection: {
      heading: "The Impact",
      intro:
        "Project Osaka delivered more than a product — it delivered peace of mind. Users feel supported, guided, and understood, resulting in a lasting connection built on trust and ease.",
      bullets: [
        {
          label: "Increased satisfaction",
          text: "Users feel less overwhelmed and more in control.",
        },
        {
          label: "Stronger brand credibility",
          text: "A calm, confident visual identity that speaks volumes.",
        },
        {
          label: "Reduced friction",
          text: "Clean, focused design that removes confusion.",
        },
        {
          label: "Higher engagement",
          text: "A layout that encourages interaction without pushing.",
        },
        {
          label: "Emotional resonance",
          text: "An experience that feels grounded, respectful, and real.",
        },
      ],
      conclusion:
        "Osaka is not about speed or flash — it’s about presence. Every screen, every detail was designed to create a space where users feel calm, empowered, and focused.",
    },
    nextSection: {
      heading: "What’s Next?",
      text: "Project Osaka is a foundation for sustainable design — a system that adapts without chaos, and evolves without losing itself. It’s a reflection of quiet strength and considered growth, paving the way for deeper connections, broader impact, and long-term success.",
    },
  },

  atlas: {
    slug: "atlas",
    title: "Atlas",
    category: "Photography",
    year: "2022",
    image: "/images/5MDRCZsxIrsye9DcYcnC0Mc6l8.jpg",
    introParagraphs: [
      "Born from a desire to explore uncharted territory, Project Atlas is a bold step into new dimensions of digital experience. It’s more than just a project — it’s a statement of ambition, scale, and possibility. From the first wireframe to the final interaction, everything was crafted to challenge conventions and elevate expectations.",
      "Inspired by the spirit of discovery, Atlas combines depth with direction — blending complex ideas into experiences that feel grounded, guided, and empowering. It’s a journey through design with purpose as the compass.",
    ],
    mainSection: {
      heading: "Driven by Exploration",
      paragraphsBeforeQuote: [
        "At its foundation, Project Atlas is about navigating the unknown with clarity. It was designed for users who seek direction, not distraction. Every component was shaped to reduce friction, increase understanding, and guide users forward with confidence.",
      ],
      quote: {
        text: '“The best journeys answer questions you didn’t think to ask.”',
        author: "– Jeff Johnson",
      },
      paragraphsAfterQuote: [
        "With exploration in its DNA, Atlas transforms challenges into clarity, building a space where discovery feels intuitive and inspiring.",
      ],
    },
    impactSection: {
      heading: "The Impact",
      intro:
        "Project Atlas was designed not only to function — but to lead. By anchoring complexity in usability, it empowers users to go further, faster, and with greater confidence.",
      bullets: [
        {
          label: "Better decision-making",
          text: "Clear interfaces that support informed action.",
        },
        {
          label: "Elevated brand positioning",
          text: "A bold, strategic identity that communicates leadership.",
        },
        {
          label: "Streamlined user flows",
          text: "Logic-driven paths that reduce friction and cognitive load.",
        },
        {
          label: "Increased trust",
          text: "Thoughtful design that reflects reliability and vision.",
        },
        {
          label: "Longer engagement",
          text: "Experiences users return to — and rely on.",
        },
      ],
      conclusion:
        "This isn’t just a tool — it’s a trusted guide. Every detail in Atlas was engineered to orient, support, and inspire, turning exploration into progress.",
    },
    nextSection: {
      heading: "What’s Next?",
      text: "Project Atlas was built to scale. Its systems, principles, and direction point toward future growth — a design that’s ready to expand, adapt, and evolve. With a strong foundation in place, it sets the stage for even bigger journeys ahead — and every step forward is just the beginning.",
    },
  },

  prism: {
    slug: "prism",
    title: "Prism",
    category: "UI/UX Design",
    year: "2021",
    image: "/images/WWdQ2zLteXSFypujmTT6YJPQvA.jpg",
    introParagraphs: [
      "Refracting complex workflows into clear, radiant interfaces, Project Prism embodies the harmony of form and function. Designed to elevate modern user interactions, it focuses on crisp hierarchy, fluid motion, and contextual depth.",
      "From high-level architectural frameworks to micro-interactions, Prism was constructed to feel responsive and effortless at every touchpoint.",
    ],
    mainSection: {
      heading: "Clarity in Motion",
      paragraphsBeforeQuote: [
        "Prism strips away interface noise to illuminate what matters most. Every layout and transition was rigorously tested to ensure immediate cognitive clarity and seamless responsiveness across devices.",
      ],
      quote: {
        text: '"Good design is obvious. Great design is transparent."',
        author: "– Joe Sparano",
      },
      paragraphsAfterQuote: [
        "By treating digital surfaces as responsive lenses, Prism helps users focus, synthesize data, and execute tasks with confidence and speed.",
      ],
    },
    impactSection: {
      heading: "The Impact",
      intro:
        "Engineered for high-performance productivity, Prism transformed daily digital workflows into delight.",
      bullets: [
        {
          label: "Frictionless navigation",
          text: "Reduced task completion times by 35%.",
        },
        {
          label: "Design system harmony",
          text: "A scalable component library deployed seamlessly.",
        },
        {
          label: "Universal accessibility",
          text: "Fully compliant with modern WCAG AAA standards.",
        },
        {
          label: "Elevated delight",
          text: "Fluid haptic micro-interactions that feel natural.",
        },
      ],
      conclusion:
        "Prism represents a standard of interface craftsmanship where every pixel is deliberate, empowering users to do their best work with poise.",
    },
    nextSection: {
      heading: "Looking Forward",
      text: "The architectural foundations of Prism continue to power next-generation experimental UI prototypes, paving new frontiers for generative, adaptive design systems.",
    },
  },
};
