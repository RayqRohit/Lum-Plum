export interface ContentBlock {
  type: "p" | "h2" | "blockquote";
  html: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: "Tutorials" | "Inspiration" | "Freebies" | "Interviews";
  description: string;
  image: string;
  objectPosition?: string;
  categoryColors: {
    darkBg: string;
    darkText: string;
    lightBg: string;
    lightText: string;
  };
  blocks: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "beyond-the-pixels-why-we-interview-designers-makers-and-creative-thinkers",
    category: "Interviews",
    title: "Beyond the Pixels: Why We Interview Designers, Makers, and Creative Thinkers",
    description: "Design is never just about what ends up on the screen. It’s about the stories behind the work — the process, the pivots, the late-night breakthroughs, and the small choices that add up to something meaningful.",
    image: "/images/9rDa37mrWKjRmKCbZeHnURC402s.png",
    objectPosition: "42.3% 89.5%",
    categoryColors: {
          "darkBg": "bg-[#914dad]/15",
          "darkText": "text-[#ce93e8]",
          "lightBg": "bg-[#f8f4fa]",
          "lightText": "text-[#914dad]"
    },
    blocks: [
          {
                "type": "p",
                "html": "Design is never just about what ends up on the screen. It’s about the stories behind the work — the process, the pivots, the late-night breakthroughs, and the small choices that add up to something meaningful."
          },
          {
                "type": "p",
                "html": "That’s why we created the <strong >Interviews</strong> series: to shine a light on the minds behind the craft. Whether it's a designer, developer, artist, or founder, each interview is a window into how creativity actually happens."
          },
          {
                "type": "h2",
                "html": "1. Process Over Portfolio"
          },
          {
                "type": "p",
                "html": "We love beautiful portfolios — but we’re more interested in <em >how</em> the work got made. What problems were they trying to solve? What didn’t make it into the final version? What tools helped — and what got in the way?"
          },
          {
                "type": "p",
                "html": "In our interviews, we go deeper than surface-level highlights. We explore real creative journeys, from the messy middle to the lessons learned."
          },
          {
                "type": "h2",
                "html": "2. Voices You Might Not Have Heard — Yet"
          },
          {
                "type": "p",
                "html": "The design world has its stars. But some of the most inspiring work comes from people who are still flying under the radar — independent makers, emerging creatives, and behind-the-scenes collaborators. We want to amplify those voices, too."
          },
          {
                "type": "p",
                "html": "Expect a mix of industry veterans and new perspectives. People doing big things, and people doing small things <em >really</em> well."
          },
          {
                "type": "h2",
                "html": "3. More Than Just Design"
          },
          {
                "type": "p",
                "html": "We believe creativity is cross-disciplinary. A branding expert might be inspired by a ceramicist. A product designer might learn from a street photographer. Our interviews aren’t limited to one lane — we talk to people building experiences, telling stories, and shaping culture across mediums."
          },
          {
                "type": "p",
                "html": "Because good ideas don’t come from echo chambers. They come from curiosity."
          },
          {
                "type": "h2",
                "html": "4. What We Ask"
          },
          {
                "type": "p",
                "html": "Every interview is different, but some of our favorite questions include:"
          },
          {
                "type": "p",
                "html": "<strong >What’s something you believed early in your career that you no longer do?</strong>"
          },
          {
                "type": "p",
                "html": "<strong >What does your creative process actually look like — hour by hour?</strong>"
          },
          {
                "type": "p",
                "html": "<strong >How do you handle feedback, doubt, or burnout?</strong>"
          },
          {
                "type": "p",
                "html": "<strong >What’s a piece of advice you wish more people ignored?</strong>"
          },
          {
                "type": "p",
                "html": "The goal isn’t to make anyone look perfect. It’s to show that creative work is human work."
          },
          {
                "type": "h2",
                "html": "5. Want to Be Featured?"
          },
          {
                "type": "p",
                "html": "We’re always looking for fresh voices. If you’re working on something exciting — or you know someone who is — reach out. You don’t need a massive following or a polished case study. You just need a story worth telling."
          },
          {
                "type": "h2",
                "html": "In Closing"
          },
          {
                "type": "p",
                "html": "In a fast-paced industry obsessed with deliverables and deadlines, it’s easy to forget there are <em >people</em> behind the pixels. This series is our way of pressing pause, asking deeper questions, and celebrating the <em >why</em> behind the <em >what</em>."
          },
          {
                "type": "p",
                "html": "Because in the end, the best design stories aren’t about tools or trends — they’re about people. And we think those stories are worth sharing."
          }
    ],
  },
  {
    slug: "designing-with-feeling-why-emotion-is-a-creative-superpower",
    category: "Inspiration",
    title: "Designing with Feeling: Why Emotion Is a Creative Superpower",
    description: "Behind every scroll, click, and tap is a human — with moods, memories, hopes, and fears. Great design doesn’t just function. It feels like something. It moves people.",
    image: "/images/cV12Cr0ywEJequx2W9DSZAPRro.png",
    objectPosition: "100% 50.4%",
    categoryColors: {
          "darkBg": "bg-[#008a1e]/15",
          "darkText": "text-[#7eea9b]",
          "lightBg": "bg-[#f5fbf7]",
          "lightText": "text-[#008a1e]"
    },
    blocks: [
          {
                "type": "p",
                "html": "Behind every scroll, click, and tap is a human — with moods, memories, hopes, and fears. Great design doesn’t just function. It <em >feels</em> like something. It moves people."
          },
          {
                "type": "p",
                "html": "And the most inspiring work often comes when we stop asking, “What looks good?”<br >And start asking, “What does this make someone <em >feel</em>?”<br ><br >"
          },
          {
                "type": "h2",
                "html": "1. Design Isn’t Neutral"
          },
          {
                "type": "p",
                "html": "Every color, every typeface, every bit of spacing or motion — it all adds up to a tone. A vibe. A moment."
          },
          {
                "type": "p",
                "html": "Soft shadows can feel warm and calm.<br >Sharp corners can feel fast and focused.<br >A handwritten font can feel personal.<br >A big bold header can feel confident — or even aggressive."
          },
          {
                "type": "p",
                "html": "When we design, we’re setting a mood. Whether we do it consciously or not."
          },
          {
                "type": "h2",
                "html": "2. Inspiration Starts With Empathy"
          },
          {
                "type": "p",
                "html": "The best creative ideas don’t come from just looking around — they come from looking <em >inward</em>. From remembering what it feels like to be lost, delighted, confused, seen."
          },
          {
                "type": "p",
                "html": "If you're stuck, don’t just scroll for visual references. Pause and ask:"
          },
          {
                "type": "p",
                "html": "<br >"
          },
          {
                "type": "blockquote",
                "html": "<p ><em >“What emotion do I want to create?”</em><br >And then work backwards from there.</p>"
          },
          {
                "type": "p",
                "html": "<br >"
          },
          {
                "type": "h2",
                "html": "3. Design That Gives, Not Just Gets"
          },
          {
                "type": "p",
                "html": "Some of the most inspiring work we’ve seen wasn’t made to drive conversions or boost time-on-page. It was made to <em >give something back</em> — a sense of calm, a burst of joy, a moment of connection."
          },
          {
                "type": "p",
                "html": "That’s where real impact lives."
          },
          {
                "type": "p",
                "html": "A well-timed animation. A thoughtful message. An unexpected color choice that just makes someone smile. Those are the things people remember — not because they <em >had to</em>, but because they <em >felt something</em>."
          },
          {
                "type": "h2",
                "html": "4. Feeling Drives Meaning"
          },
          {
                "type": "p",
                "html": "Design isn’t decoration. It’s communication. And the most meaningful messages are emotional."
          },
          {
                "type": "p",
                "html": "We remember how a product made us feel, not just how it worked.<br >We trust brands that feel honest, not just polished.<br >We return to apps that feel effortless, not just efficient."
          },
          {
                "type": "p",
                "html": "So don’t design to impress. Design to <em >connect</em>."
          },
          {
                "type": "h2",
                "html": "In Closing"
          },
          {
                "type": "p",
                "html": "Emotion isn’t extra — it’s essential. The deeper you connect with your own feelings (and those of your users), the more meaningful your work becomes."
          },
          {
                "type": "p",
                "html": "Because in the end, what moves us <em >isn’t</em> perfect spacing or clever layouts.<br >It’s the feeling that someone, somewhere, <em >understood us</em> — and built something that reflects it."
          }
    ],
  },
  {
    slug: "finding-design-inspiration-in-unexpected-places",
    category: "Inspiration",
    title: "Finding Design Inspiration in Unexpected Places",
    description: "As designers, we’re often told to look to Dribbble, Behance, or Pinterest for inspiration. And sure — those platforms are great for seeing what’s trending. But sometimes, the best ideas don’t come from other designs. They come from outside the screen.",
    image: "/images/WZSI76xZM7wdERUJLDTvFijtaI.png",
    objectPosition: "68% 93.1%",
    categoryColors: {
          "darkBg": "bg-[#008a1e]/15",
          "darkText": "text-[#7eea9b]",
          "lightBg": "bg-[#f5fbf7]",
          "lightText": "text-[#008a1e]"
    },
    blocks: [
          {
                "type": "p",
                "html": "As designers, we’re often told to look to Dribbble, Behance, or Pinterest for inspiration. And sure — those platforms are great for seeing what’s trending. But sometimes, the best ideas don’t come from other designs. They come from outside the screen."
          },
          {
                "type": "h2",
                "html": "1. Architecture: Structure, Rhythm, Balance"
          },
          {
                "type": "p",
                "html": "Buildings have a lot to teach us about layout and flow. The way light moves through a space. The balance between negative space and structure. The quiet power of repetition. When we look at architecture — whether it’s a brutalist monument or a minimalist tea house — we’re reminded that design is physical, emotional, and layered."
          },
          {
                "type": "p",
                "html": "We’ve translated the rhythm of staircases into scroll behavior. The symmetry of temples into grid systems. The materials of a museum into a brand color palette. It’s all connected."
          },
          {
                "type": "h2",
                "html": "2. Literature: Voice, Story, Emotion"
          },
          {
                "type": "p",
                "html": "Good design tells a story. So why not learn from the masters of narrative?"
          },
          {
                "type": "p",
                "html": "Poetry can inspire typography. Novels can inform user flow. Even a single sentence — elegant, sharp, and deliberate — can influence how we design buttons or craft microcopy."
          },
          {
                "type": "p",
                "html": "We often highlight quotes in our projects not just for decoration, but as tonal anchors — small reminders of how voice shapes experience."
          },
          {
                "type": "p",
                "html": "<br >"
          },
          {
                "type": "blockquote",
                "html": "<p >“Design is the silent ambassador of your brand.”<br >– Paul Rand</p>"
          },
          {
                "type": "p",
                "html": "<br >"
          },
          {
                "type": "h2",
                "html": "3. Nature: Systems, Contrast, Chaos"
          },
          {
                "type": "p",
                "html": "Nature is full of stunning contradictions — order and unpredictability, patterns and randomness. Look closely at a leaf, a wave, or a mountain trail, and you’ll find systems that work without ever being \"designed.\""
          },
          {
                "type": "p",
                "html": "Nature inspires us to think in gradients, not absolutes. To embrace asymmetry. To add depth and movement without clutter. One of our favorite exercises? Taking a walk and looking for interfaces in nature — where one thing meets another, and change happens."
          },
          {
                "type": "h2",
                "html": "4. Music: Timing, Layers, Emotion"
          },
          {
                "type": "p",
                "html": "Music is structured emotion. It builds, releases, and repeats with intention. In our work, we often think of interactions like rhythm — when to hold, when to drop, when to surprise. Motion design is choreography. UX is composition."
          },
          {
                "type": "p",
                "html": "Sometimes, we design in silence. Sometimes, we design to soundtracks. Either way, music reminds us that feeling is just as important as form."
          },
          {
                "type": "h2",
                "html": "5. Conversations: Real People, Real Needs"
          },
          {
                "type": "p",
                "html": "One of the most powerful sources of inspiration? Talking to people. Not clients. Not stakeholders. Just… people. How they describe their frustrations. The words they use. The workarounds they’ve created. These raw, human insights are more inspiring than any moodboard."
          },
          {
                "type": "p",
                "html": "Because at the end of the day, we’re not designing for trends — we’re designing for people."
          },
          {
                "type": "h2",
                "html": "In Closing"
          },
          {
                "type": "p",
                "html": "Inspiration is everywhere — if you learn how to see it.<br >The best designers aren’t just good at Photoshop or Figma. They’re curious. Observant. Open."
          },
          {
                "type": "p",
                "html": "So next time you’re stuck, close the tab. Go outside. Read something weird. Listen closely. Let the world — not just the design world — show you something new."
          },
          {
                "type": "p",
                "html": "Your next big idea might already be waiting. Just not where you expected."
          }
    ],
  },
  {
    slug: "how-we-collaborate-with-clients-on-design-projects",
    category: "Tutorials",
    title: "How We Collaborate with Clients on Design Projects",
    description: "Great design doesn't happen in isolation — it happens through collaboration. At the heart of every successful project is a strong partnership built on trust, transparency, and a shared vision. At our studio, collaboration isn’t just a phase in the process — it is the process.",
    image: "/images/IAg7EBATfKPSkjHUdjMN99PoAt4.png",
    objectPosition: "center",
    categoryColors: {
          "darkBg": "bg-[#ca7f2d]/15",
          "darkText": "text-[#e7ab61]",
          "lightBg": "bg-[#f8f2eb]",
          "lightText": "text-[#ca7f2d]"
    },
    blocks: [
          {
                "type": "p",
                "html": "Great design doesn't happen in isolation — it happens through collaboration. At the heart of every successful project is a strong partnership built on trust, transparency, and a shared vision. At our studio, collaboration isn’t just a phase in the process — it <em >is</em> the process."
          },
          {
                "type": "p",
                "html": "Here’s a closer look at how we work with our clients to bring ideas to life, together."
          },
          {
                "type": "h2",
                "html": "1. Starting with Shared Understanding"
          },
          {
                "type": "p",
                "html": "Every project begins with a conversation — not about color palettes or wireframes, but about goals, challenges, and people. We want to understand not just what you need, but why you need it. Who are your users? What’s the business impact? What’s holding you back?  We dig deep, ask questions, and listen carefully. These early conversations set the tone for everything that follows. Clarity at the beginning leads to alignment at every stage."
          },
          {
                "type": "h2",
                "html": "2. Co-Creation, Not Handoffs"
          },
          {
                "type": "p",
                "html": "We don’t believe in the “big reveal.” Instead, we invite clients into the creative process from day one. Whether we’re sketching ideas, exploring visual directions, or building interactive prototypes — your feedback helps shape the outcome in real time."
          },
          {
                "type": "p",
                "html": "We use collaborative tools like Figma, Notion, and Loom to keep everything visible and accessible. You’ll always know where things stand — and you’ll always have a voice."
          },
          {
                "type": "p",
                "html": "<br >"
          },
          {
                "type": "blockquote",
                "html": "<p >Design is not something we do for you — it’s something we build with you.</p>"
          },
          {
                "type": "p",
                "html": "<br >"
          },
          {
                "type": "h2",
                "html": "3. Transparent Communication"
          },
          {
                "type": "p",
                "html": "We keep things clear, open, and jargon-free. You won’t find layers of process or unnecessary complexity here. Just regular check-ins, honest conversations, and thoughtful updates."
          },
          {
                "type": "p",
                "html": "Whether it’s a quick Slack message or a weekly walkthrough, we tailor communication to match your workflow — not the other way around."
          },
          {
                "type": "h2",
                "html": "4. Respecting Your Expertise"
          },
          {
                "type": "p",
                "html": "You know your business. We know design. When we combine that expertise, magic happens. We see our role as creative partners — here to offer perspective, solve problems, and help you make confident, informed decisions."
          },
          {
                "type": "p",
                "html": "We’re not here to impose a vision. We’re here to translate yours into something powerful, beautiful, and functional."
          },
          {
                "type": "h2",
                "html": "5. Feedback Loops That Work"
          },
          {
                "type": "p",
                "html": "We believe feedback is fuel — but only when it’s structured and respectful. Throughout the project, we create clear opportunities for input and iteration. This keeps the momentum going while making sure your insights are reflected at every stage."
          },
          {
                "type": "p",
                "html": "Instead of endless revisions, we aim for thoughtful progress — together."
          },
          {
                "type": "h2",
                "html": "6. Finishing Strong — and Moving Forward"
          },
          {
                "type": "p",
                "html": "When we deliver the final design, it’s not the end — it’s the launchpad. We provide detailed handoff files, documentation, and guidance to ensure a smooth transition to development or implementation. And we’re always around to support what comes next."
          },
          {
                "type": "p",
                "html": "Because good collaboration doesn’t end with a deadline. It builds long-term relationships, rooted in trust and shared success."
          },
          {
                "type": "h2",
                "html": "In Closing"
          },
          {
                "type": "p",
                "html": "he best results come from working together — openly, honestly, and creatively. That’s why we treat every client as a true collaborator, not just a recipient of deliverables. If you're looking for a design team that listens deeply, thinks strategically, and creates <em >with</em> you, not just <em >for</em> you — let’s talk."
          }
    ],
  },
  {
    slug: "why-we-share-freebies-and-what-you-can-get-right-now",
    category: "Freebies",
    title: "Why We Share Freebies — And What You Can Get Right Now",
    description: "In a world where everyone’s trying to sell something, giving things away for free might seem... unusual. But at our studio, we believe in the power of generosity. Design is about solving problems and sharing ideas — and sometimes, the best way to do that is by simply giving something useful away.",
    image: "/images/adv45DqfyyYocDthEWCy7Y7lAhY.jpg",
    objectPosition: "51.2% 74.8%",
    categoryColors: {
          "darkBg": "bg-[#2a7ca8]/15",
          "darkText": "text-[#58b9ec]",
          "lightBg": "bg-[#f2f8fb]",
          "lightText": "text-[#2a7ca8]"
    },
    blocks: [
          {
                "type": "p",
                "html": "In a world where everyone’s trying to sell something, giving things away for free might seem... unusual. But at our studio, we believe in the power of generosity. Design is about solving problems and sharing ideas — and sometimes, the best way to do that is by simply giving something useful away."
          },
          {
                "type": "p",
                "html": "Here’s why we love sharing design freebies — and what you can grab today to boost your own creative work."
          },
          {
                "type": "h2",
                "html": "1. Community Over Competition"
          },
          {
                "type": "p",
                "html": "The design world can be competitive, but it doesn’t have to be closed off. We all learned by using someone else’s grid system, inspecting a smart layout, or remixing a free template. Freebies are our way of giving back to that same creative ecosystem that helped shape us."
          },
          {
                "type": "p",
                "html": "Sharing tools, kits, and files helps everyone grow — and when the community levels up, we all win."
          },
          {
                "type": "h2",
                "html": "2. Real-World Tools, Not Just Eye Candy"
          },
          {
                "type": "p",
                "html": "Our freebies aren’t just made to look pretty in a screenshot. They’re built to work. Everything we share is something we’ve used ourselves — whether in real projects, client work, or internal experiments. That means you’re getting battle-tested tools that save time and add value."
          },
          {
                "type": "p",
                "html": "Some of our most loved freebies include:"
          },
          {
                "type": "p",
                "html": "⚡️ <strong >UI Kits</strong> – Clean, scalable systems for faster prototyping"
          },
          {
                "type": "p",
                "html": "🎨 <strong >Color Palettes</strong> – Curated tones for bold, modern branding"
          },
          {
                "type": "p",
                "html": "✍️ <strong >Content Templates</strong> – Structures that help organize storytelling"
          },
          {
                "type": "p",
                "html": "📱 <strong >Framer &amp; Figma Files</strong> – Plug-and-play layouts and components"
          },
          {
                "type": "p",
                "html": "🔤 <strong >Font Pairings</strong> – Harmonious combos for better typography"
          },
          {
                "type": "p",
                "html": "And yes — they’re all free to download, remix, and use."
          },
          {
                "type": "h2",
                "html": "3. Design Should Be Accessible"
          },
          {
                "type": "p",
                "html": "Not every great idea has a big budget behind it. By sharing quality freebies, we hope to empower freelancers, students, startups, and makers to bring their vision to life without needing to hire a full team."
          },
          {
                "type": "p",
                "html": "Good design shouldn’t be locked behind a paywall — it should be available to anyone with a story to tell and something to build."
          },
          {
                "type": "h2",
                "html": "4. Where to Find Our Freebies"
          },
          {
                "type": "p",
                "html": "We release new resources regularly — from time-saving frameworks to playful experiments. You can find them right here on the blog, or follow us on <a  href=\"../index.html\" target=\"_blank\">Figma Community</a>, <a  href=\"../index.html\" target=\"_blank\">Framer Marketplace</a>, or <a  href=\"../index.html\" target=\"_blank\">Gumroad</a> for the latest drops."
          },
          {
                "type": "p",
                "html": "If you want early access to exclusive files, sign up for our newsletter — we always send something extra to our email crew."
          },
          {
                "type": "h2",
                "html": "In Closing"
          },
          {
                "type": "p",
                "html": "We don’t just make freebies to get clicks — we make them to make <em >better design easier for more people</em>. If something we’ve created helps you move faster, think clearer, or try something new — then it’s worth sharing."
          },
          {
                "type": "p",
                "html": "Got an idea for a resource we should build next? Drop us a message — we’re always up for making something useful."
          },
          {
                "type": "p",
                "html": "Now go explore, download, and create something great."
          }
    ],
  },
  {
    slug: "the-art-of-thoughtful-design-why-details-define-digital-products",
    category: "Inspiration",
    title: "The Art of Thoughtful Design: Why Details Define Digital Products",
    description: "It’s rarely the grand features that make an app unforgettable. It’s the micro-interactions, the subtle pacing, and the respect for the user’s attention that turn a tool into an experience.",
    image: "/images/IAg7EBATfKPSkjHUdjMN99PoAt4.png",
    objectPosition: "center",
    categoryColors: {
      darkBg: "bg-[#008a1e]/15",
      darkText: "text-[#7eea9b]",
      lightBg: "bg-[#f5fbf7]",
      lightText: "text-[#008a1e]",
    },
    blocks: [
      {
        type: "p",
        html: "It’s rarely the grand features that make an app unforgettable. It’s the micro-interactions, the subtle pacing, and the respect for the user’s attention that turn a tool into an experience.",
      },
      {
        type: "p",
        html: "When we evaluate great software, we often point to speed or aesthetics. But beneath the surface lies a web of tiny, thoughtful decisions that make the whole product sing.",
      },
      {
        type: "h2",
        html: "1. The Power of Subtlety",
      },
      {
        type: "p",
        html: "Every hover state, every transition curve, and every empty state message is an opportunity to communicate care. When things feel effortless, it is because someone put immense effort into crafting them.",
      },
      {
        type: "h2",
        html: "2. Respecting Attention",
      },
      {
        type: "p",
        html: "Modern interfaces too often shout for attention. Thoughtful design whispers, guiding people where they want to go without unnecessary noise or friction.",
      },
      {
        type: "h2",
        html: "In Closing",
      },
      {
        type: "p",
        html: "Never underestimate the compound impact of details done well. They are what elevate digital utility into craft.",
      },
    ],
  },
  {
    slug: "streamlining-developer-designer-handoffs-in-modern-teams",
    category: "Tutorials",
    title: "Streamlining Developer-Designer Handoffs in Modern Teams",
    description: "Handoff shouldn’t be a wall you throw designs over. Here’s our practical guide on building shared tokens, interactive specs, and continuous alignment from day one.",
    image: "/images/PvawYUzGU2gTCJpv3UqZk72gg.png",
    objectPosition: "center",
    categoryColors: {
      darkBg: "bg-[#b35900]/15",
      darkText: "text-[#ffaa64]",
      lightBg: "bg-[#fdf9f4]",
      lightText: "text-[#b35900]",
    },
    blocks: [
      {
        type: "p",
        html: "Handoff shouldn’t be a wall you throw designs over. Here’s our practical guide on building shared tokens, interactive specs, and continuous alignment from day one.",
      },
      {
        type: "p",
        html: "The old model of design handoff was rigid and prone to misinterpretation. In modern teams, the best workflows resemble an ongoing conversation powered by unified design systems.",
      },
      {
        type: "h2",
        html: "1. Unified Token Systems",
      },
      {
        type: "p",
        html: "When designers and developers speak the same language — using shared naming conventions for spacing, color, and typography — discrepancies vanish before they even start.",
      },
      {
        type: "h2",
        html: "2. Continuous Collaboration",
      },
      {
        type: "p",
        html: "Instead of waiting for pixel-perfect mocks, bring engineers into early wireframes. Early technical feedback shapes cleaner, more resilient interactions.",
      },
      {
        type: "h2",
        html: "In Closing",
      },
      {
        type: "p",
        html: "Great products aren't built in silos. When design and engineering collaborate as one team, the work speaks for itself.",
      },
    ],
  },
];

export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
);
