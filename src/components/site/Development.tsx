import { motion } from "framer-motion";

const pillars = [
  {
    title: "Practical Life",
    desc: "Activities build independence and self-care through meaningful tasks like pouring, cleaning, and dressing — developing fine motor coordination and a sense of responsibility.",
    iconBg: "bg-[#F5BF16]", // Yellow
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M10 10.5V5.5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8.5" />
        <path d="M6 12.5V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v9c0 4.5 3.5 6 8 6h3a7 7 0 0 0 7-7v-3.5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      </svg>
    )
  },
  {
    title: "Sensorial",
    desc: "Designed to develop the five senses, these materials help children distinguish differences in size, shape, color, and texture — strengthening observation and logical thinking.",
    iconBg: "bg-[#EC4899]", // Pink
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    title: "Language",
    desc: "Builds robust vocabulary and communication skills through phonics, speaking exercises, and reading readiness — establishing foundations for future literacy and writing.",
    iconBg: "bg-[#3B82F6]", // Blue
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: "Mathematics",
    desc: "Children explore numbers, counting, shapes, patterns, and simple operations using concrete materials — understanding quantities and symbols through tangible problem-solving.",
    iconBg: "bg-[#10B981]", // Mint Green
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="12" y1="6" x2="12" y2="18" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    )
  },
  {
    title: "Culture",
    desc: "Covers botany, zoology, geography, and community values — helping children understand their place in the world and develop respect for diverse societies and nature.",
    iconBg: "bg-[#8B5CF6]", // Purple
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    title: "Writing Readiness",
    desc: "Activities develop fine motor control and correct pencil grip — prepping children for writing through sensory sand trays, tracing stencils, and hand-eye coordination.",
    iconBg: "bg-[#4F46E5]", // Indigo
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  },
  {
    title: "Socio-Emotional Development",
    desc: "Encourages self-regulation, empathy, sharing, and constructive collaboration — fostering rich relationship-building and community values.",
    iconBg: "bg-[#EF4444]", // Crimson Red
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  },
  {
    title: "Themes & Concepts",
    desc: "Learning is integrated through meaningful thematic units such as seasons, nature cycles, community helpers, and the solar system — bridging abstract topics with real life.",
    iconBg: "bg-[#F97316]", // Orange
    icon: (
      <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6M10 22h4" />
      </svg>
    )
  }
];

export function Development() {
  return (
    <section className="relative bg-secondary/35 py-28 overflow-hidden border-t border-foreground/5">
      <div className="blob -right-32 top-1/4 h-96 w-96 bg-sky/10" />
      <div className="blob -left-32 bottom-1/4 h-96 w-96 bg-gold/10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/55 font-semibold">Montessori & CBSE-Inspired Learning Approach</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-[1.1] tracking-tight md:text-6xl text-balance">
            Eight areas of <span className="text-coral">focused discovery.</span>
          </h2>
          <p className="mt-4 text-sm text-foreground/70 max-w-2xl leading-relaxed text-pretty">
            Our Montessori-aligned curriculum focuses on eight key developmental pillars, custom-structured to turn innate curiosity into structured school readiness and real-world capability.
          </p>
        </div>

        {/* 2 x 4 Symmetrical grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl bg-card border border-foreground/5 shadow-[var(--shadow-soft)] p-8 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] transition-all duration-300 flex flex-col gap-5 h-full group"
            >
              {/* Icon Squircle container */}
              <div className={`w-12 h-12 rounded-[0.95rem] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105 ${p.iconBg}`}>
                {p.icon}
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold text-[#1F2937] tracking-tight leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] text-foreground/75 leading-relaxed text-pretty">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
