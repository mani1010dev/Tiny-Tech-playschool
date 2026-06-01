import { motion } from "framer-motion";

const tiles = [
  {
    title: "Safety, by design",
    body: "Secure campus, low ratios, trained first responders, daily wellness checks.",
    accent: "bg-sky/40",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Expert educators",
    body: "Reggio- and Montessori-trained team with continuous mentoring.",
    accent: "bg-mint/60",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
      </svg>
    ),
  },
  {
    title: "Play-based learning",
    body: "Curriculum where curiosity leads — and skills follow naturally.",
    accent: "bg-coral/30",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
        <circle cx="17" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Small classes",
    body: "Twelve children to two educators. Every voice gets the room it needs.",
    accent: "bg-lavender/60",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="11" r="2.5" />
        <path d="M3 19c1-3 4-5 6-5s5 2 6 5" />
      </svg>
    ),
  },
  {
    title: "Emotional development",
    body: "Daily rituals that name feelings, build empathy, and grow resilience.",
    accent: "bg-gold/50",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" />
      </svg>
    ),
  },
  {
    title: "Creative exploration",
    body: "Ateliers for music, painting, clay, and storytelling — every week.",
    accent: "bg-beige",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3a9 9 0 109 9c0-1.5-1-2-2.5-2H17a2 2 0 01-2-2v-1c0-1.5-.5-2.5-2-3z" />
        <circle cx="7.5" cy="11" r="1" fill="currentColor" />
        <circle cx="10" cy="7" r="1" fill="currentColor" />
        <circle cx="14.5" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export function WhyParents() {
  return (
    <section id="approach" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Why families choose Tiny Tech</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
              A foundation built on <span className="text-coral">trust</span>, designed for wonder.
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65 text-pretty">
            Six commitments that show up in everything from the morning circle to the curriculum we write each season.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[250px]">
          {tiles.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-6 ring-1 ring-foreground/5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-shadow ${t.span ?? ""}`}
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full ${t.accent} blur-2xl opacity-70 transition-opacity group-hover:opacity-100`} />
              <div className="relative flex items-center justify-between">
                <div className={`grid h-11 w-11 place-items-center rounded-2xl ${t.accent}`}>{t.icon}</div>
                <span className="text-xs text-foreground/40">0{i + 1}</span>
              </div>
              <div className="relative">
                <h3 className="font-display text-2xl tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 text-pretty">{t.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
