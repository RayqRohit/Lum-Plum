export interface BlogPost {
  slug: string;
  title: string;
  category: "Tutorials" | "Inspiration" | "Freebies" | "Interviews";
  description: string;
  image: string;
  categoryColors: {
    darkBg: string;
    darkText: string;
    lightBg: string;
    lightText: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-we-collaborate-with-clients-on-design-projects",
    category: "Tutorials",
    title: "How We Collaborate with Clients on Design Projects",
    description:
      "At the heart of every successful project is a strong partnership built on trust, transparency, and a shared vision.",
    image: "/images/IAg7EBATfKPSkjHUdjMN99PoAt4.png",
    categoryColors: {
      darkBg: "bg-[#ca7f2d]/15",
      darkText: "text-[#e7ab61]",
      lightBg: "bg-[#f8f2eb]",
      lightText: "text-[#ca7f2d]",
    },
  },
  {
    slug: "designing-with-feeling-why-emotion-is-a-creative-superpower",
    category: "Inspiration",
    title: "Designing with Feeling: Why Emotion Is a Creative Superpower",
    description:
      "Behind every scroll, click, and tap is a human — with moods, memories, hopes, and fears. Great design doesn’t just function. It feels like something. It moves people.",
    image: "/images/cV12Cr0ywEJequx2W9DSZAPRro.png",
    categoryColors: {
      darkBg: "bg-[#008a1e]/15",
      darkText: "text-[#7eea9b]",
      lightBg: "bg-[#f5fbf7]",
      lightText: "text-[#008a1e]",
    },
  },
  {
    slug: "finding-design-inspiration-in-unexpected-places",
    category: "Inspiration",
    title: "Finding Design Inspiration in Unexpected Places",
    description:
      "If you’ve ever hit a creative block or found yourself making something that just feels... familiar, it might be time to look somewhere new.",
    image: "/images/WZSI76xZM7wdERUJLDTvFijtaI.png",
    categoryColors: {
      darkBg: "bg-[#008a1e]/15",
      darkText: "text-[#7eea9b]",
      lightBg: "bg-[#f5fbf7]",
      lightText: "text-[#008a1e]",
    },
  },
  {
    slug: "why-we-share-freebies-and-what-you-can-get-right-now",
    category: "Freebies",
    title: "Why We Share Freebies — And What You Can Get Right Now",
    description:
      "Design is about solving problems and sharing ideas — and sometimes, the best way to do that is by simply giving something useful away.",
    image: "/images/adv45DqfyyYocDthEWCy7Y7lAhY.jpg",
    categoryColors: {
      darkBg: "bg-[#2a7ca8]/15",
      darkText: "text-[#58b9ec]",
      lightBg: "bg-[#f2f8fb]",
      lightText: "text-[#2a7ca8]",
    },
  },
  {
    slug: "beyond-the-pixels-why-we-interview-designers-makers-and-creative-thinkers",
    category: "Interviews",
    title: "Beyond the Pixels: Why We Interview Designers, Makers, and Creative Thinkers",
    description:
      "Design is never just about what ends up on the screen. It’s about the stories behind the work — the process, the pivots, the late-night breakthroughs, and the small choices that add up to something meaningful.",
    image: "/images/9rDa37mrWKjRmKCbZeHnURC402s.png",
    categoryColors: {
      darkBg: "bg-[#914dad]/15",
      darkText: "text-[#ce93e8]",
      lightBg: "bg-[#f8f4fa]",
      lightText: "text-[#914dad]",
    },
  },
];
