export const NAV_ITEMS = [
  { id: "home", href: "/", n: "01", label: "Home" },
  { id: "story", href: "/story", n: "02", label: "My Story" },
  { id: "solutions", href: "/solutions", n: "03", label: "Growth Solutions" },
  { id: "resources", href: "/resources", n: "04", label: "Resources" },
] as const;

export const HOME_STATS = [
  {
    n: "01",
    lbl: "B2B + B2C",
    val: "Growth frameworks",
    body: "Positioning, offers, distribution — turned into one system you can run.",
  },
  {
    n: "02",
    lbl: "Branding",
    val: "Story & positioning",
    body: "Naming what you actually do — and the language that gets you in the door.",
  },
  {
    n: "03",
    lbl: "Career nav",
    val: "0 → Hired playbook",
    body: "How to move from where you are to where the work is, without a degree shuffle.",
  },
];

export const CURRENTLY_STRIP_ITEMS = [
  "● Currently — taking Q2 inquiries",
  "Quarterly engagements: 1 slot open",
  "Foundation sprints: 2 slots open",
  "Newsletter — issue #47 shipped Friday",
  "Latest playbook: 0 → first client",
];

export const PHILOSOPHY_PRINCIPLES = [
  { n: "i.", t: "Show the work.", b: "If it ships, it teaches someone." },
  { n: "ii.", t: "Compound the boring.", b: "Reps beat brilliance, weekly." },
  { n: "iii.", t: "Hand it down.", b: "Make the path easier for the next." },
];

export const PILLARS = [
  {
    n: "01",
    trigger: "Confused → Direction",
    name: "Clarity",
    body: "Naming what you actually do, who you do it for, and the proof that backs it.",
  },
  {
    n: "02",
    trigger: "Random wins → Compounding",
    name: "Systems",
    body: "Repeatable processes for marketing, sales, and your own learning loop.",
  },
  {
    n: "03",
    trigger: "Hand-to-mouth → Leverage",
    name: "Leverage",
    body: "Using content, AI, and small teams so one move pays you back in five places.",
  },
  {
    n: "04",
    trigger: "Imposter → Operator",
    name: "Identity",
    body: "The reps and self-talk that turn an aspiration into the way you show up.",
  },
];

export const NOTEBOOK_CHECKPOINTS: [string, string][] = [
  ["I", "Frame — what changes if this works?"],
  ["II", "Smallest version — what ships on Friday?"],
  ["III", "Distribution — where does it land?"],
  ["IV", "Loop — what gets measured next week?"],
];

export const STORY_INTRO_STATS: [string, string][] = [
  ["8 yrs", "Operating"],
  ["200+", "Career convos"],
  ["47", "Notebook issues"],
];

export type Chapter = {
  n: string;
  date: string;
  side: "left" | "right";
  title: string;
  body: string;
  quote: string | null;
};

export const STORY_CHAPTERS: Chapter[] = [
  {
    n: "01",
    date: "EARLY 2010s",
    side: "left",
    title: "The job that didn't fit",
    body: "Before the trades, before the businesses, there was a brief stretch of trying to fit into the path everyone else was taking — degree, application, employment, repeat. None of it took. Not because the work was hard, but because the math didn't move.",
    quote: "I could see a different path.",
  },
  {
    n: "02",
    date: "THE TRADING YEARS",
    side: "right",
    title: "First million, first lessons",
    body: "Years in the markets gave me my first million and a lot more failures than that. The lessons that mattered weren't in any course — they were in being wrong, sized too big, on a Tuesday morning, and having to come back the next day anyway.",
    quote: "The failures taught me what no course could.",
  },
  {
    n: "03",
    date: "THE PIVOT",
    side: "left",
    title: "Trader → freelancer → entrepreneur",
    body: "Each chapter forced a different muscle. Freelancing forced sales. Branding forced clarity. Hiring forced systems. By the end, the meta-skill was obvious: there is no playbook waiting to be handed down — you write it as you go.",
    quote: "The world doesn't hand you a playbook. You build one.",
  },
  {
    n: "04",
    date: "NOW",
    side: "right",
    title: "Turning the reps into resources",
    body: "These days the work is twofold: ongoing client engagements where the systems get sharpened against real businesses, and the writing, teaching, and tools you see across this site — the reps repackaged so the next person doesn't have to start from zero.",
    quote: null,
  },
];

export const CORE_VALUES = [
  { n: "01", name: "Faith", body: "The foundation under everything. Not a sermon — a posture." },
  {
    n: "02",
    name: "Lifelong learning",
    body: "If you're not getting sharper, the position is decaying. Quietly, but always.",
  },
  {
    n: "03",
    name: "Confidence & relentlessness",
    body: "Show up before you feel ready. The readiness is on the other side of the rep.",
  },
  {
    n: "04",
    name: "Progress over perfection",
    body: "Better, shipped, often. Perfect, never, becomes a graveyard of unstarted things.",
  },
];

export type Tier = {
  n: string;
  label: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  cadence: string;
  mostCommon?: boolean;
};

export const TIERS: Tier[] = [
  {
    n: "01",
    label: "Foundation",
    name: "Brand & positioning sprint",
    description:
      "A focused 4-week engagement to name what you do, who you do it for, and the language that gets you in the door.",
    features: [
      "Positioning workshop + written narrative",
      "Audience and offer mapping",
      "Brand voice and copy library",
      "Tactical 30-day rollout plan",
    ],
    price: "$5,000",
    cadence: "4-week sprint",
  },
  {
    n: "02",
    label: "Growth",
    name: "Strategy & implementation",
    description:
      "A quarterly engagement where we build your growth engine end-to-end and ship the first turns of the wheel together.",
    features: [
      "Everything in Foundation",
      "Marketing system + content cadence",
      "Sales playbook with live call reviews",
      "Weekly working sessions, ad-hoc Slack",
    ],
    price: "$12,000",
    cadence: "per quarter",
    mostCommon: true,
  },
  {
    n: "03",
    label: "Scale",
    name: "Operator-in-residence",
    description:
      "A 6-month embedded engagement for founders who want a strategic operator inside the business, not just a consultant outside it.",
    features: [
      "Everything in Growth",
      "Team hiring and onboarding support",
      "Monthly strategic offsites",
      "Direct access — no gatekeepers",
    ],
    price: "$36,000",
    cadence: "6-month engagement",
  },
];

export const PROCESS_STEPS = [
  { n: "i", t: "Apply", b: "Send the form. I read every one personally." },
  { n: "ii", t: "Diagnose", b: "30-min call. Where you are, where you're stuck." },
  { n: "iii", t: "Scope", b: "I propose the tier and the shape of the work." },
  { n: "iv", t: "Build", b: "Weekly sessions. Real reps, not just decks." },
  { n: "v", t: "Hand off", b: "The system stays running after I'm gone." },
];

export const BEST_FIT = [
  "You've found product-market fit but growth feels random",
  "Your positioning is fuzzy and your team can't repeat it",
  "You've outgrown the founder-as-salesperson stage",
  "You want a system, not a one-off campaign",
];

export const NOT_FIT = [
  "You're pre-revenue and still validating the offer",
  "You want hands-off, fully-done-for-you work",
  "You're looking for a paid-ads-only agency",
  "You're not ready to be in the weekly working sessions",
];

export type Resource = {
  topic: string;
  title: string;
  description: string;
  meta: string;
};

export const RESOURCES: Resource[] = [
  {
    topic: "Sales",
    title: "The conversation-to-close system",
    description:
      "A repeatable script structure for moving discovery calls into signed proposals without ever sounding like a pitch.",
    meta: "Framework · Downloadable",
  },
  {
    topic: "Mentality",
    title: "Reprogramming your money beliefs",
    description:
      "A live workshop on the inherited stories that quietly cap what you charge — and the work to rewrite them.",
    meta: "Workshop recording",
  },
  {
    topic: "Getting Hired",
    title: "Career navigation playbook",
    description:
      "How to position yourself for the job you want when the job you have isn't the path. Built from 200+ career convos.",
    meta: "Playbook · PDF",
  },
  {
    topic: "Client Acquisition",
    title: "The 0-to-first-client system",
    description:
      "The exact moves I'd repeat if I had to start a service business from zero today. No audience required.",
    meta: "Framework · Step-by-step",
  },
  {
    topic: "Winning Mechanics",
    title: "AI leverage toolkit for growth",
    description:
      "Templates, prompts, and tactical workflows for using AI as a force multiplier across marketing and sales.",
    meta: "Toolkit · Templates",
  },
  {
    topic: "Marketing",
    title: "The four-checkpoint launch loop",
    description:
      "How I run a brief from idea to live in days, not quarters — and the questions I ask at each gate.",
    meta: "Note · 7 min read",
  },
];

export const FEATURED_RESOURCE = {
  topic: "Marketing",
  title: "The brand clarity framework",
  description:
    "A worksheet for naming what you actually do, who you do it for, and the proof that backs it — before any tactic. Used in every Foundation sprint as the starting point, now public.",
  meta: "Guide · 12 min · Updated May 2026",
};

export const FEATURED_CONTENTS: [string, string][] = [
  ["I", "Who you serve (and refuse)"],
  ["II", "What you actually do"],
  ["III", "The proof that backs it"],
  ["IV", "The 30-day rollout"],
];

export const TOPICS = [
  "All",
  "Marketing",
  "Sales",
  "Mentality",
  "Getting Hired",
  "Client Acquisition",
  "Winning Mechanics",
] as const;

export const NOT_FOUND_SUGGESTIONS = [
  { href: "/", n: "01", label: "Home", body: "Back to the front page." },
  { href: "/story", n: "02", label: "My Story", body: "The five chapters." },
  { href: "/solutions", n: "03", label: "Growth Solutions", body: "How we work together." },
  { href: "/resources", n: "04", label: "Resources", body: "Frameworks and playbooks." },
];
