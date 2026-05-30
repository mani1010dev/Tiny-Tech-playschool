import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import p1 from "@/assets/parent-1.jpg";
import p2 from "@/assets/parent-2.jpg";
import p3 from "@/assets/parent-3.jpg";

const stories = [
  {
    quote:
      "Our daughter walks in like she owns the place. She's learned to ask better questions than I do.",
    name: "Maya Chen",
    role: "Parent · Sprout cohort",
    img: p1,
  },
  {
    quote:
      "What we found here is rare — educators who actually see who our son is, and meet him there.",
    name: "Daniel Okafor",
    role: "Parent · Roam cohort",
    img: p2,
  },
  {
    quote:
      "The mornings are calmer. The conversations at dinner are richer. That's the whole report.",
    name: "Priya Sharma",
    role: "Parent · Atelier cohort",
    img: p3,
  },
];

export function Testimonials() {
  const [i, set] = useState(0);
  const s = stories[i];

  return (
    <section id="stories" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Family stories</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
              In their <em className="italic text-coral">own words.</em>
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Previous story"
              onClick={() => set((i - 1 + stories.length) % stories.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 hover:bg-foreground/5"
            >
              ←
            </button>
            <button
              aria-label="Next story"
              onClick={() => set((i + 1) % stories.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 hover:bg-foreground/5"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-card p-8 ring-1 ring-foreground/5 shadow-[var(--shadow-soft)] md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-sky/30 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative grid gap-10 md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-4">
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <img src={s.img} alt={s.name} width={600} height={600} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-8">
                <svg className="h-10 w-10 text-coral" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 7h4v4H7c0 2 1 4 3 4v3c-4 0-6-3-6-7V7zm10 0h4v4h-4c0 2 1 4 3 4v3c-4 0-6-3-6-7V7z" />
                </svg>
                <blockquote className="mt-4 font-display text-3xl font-light leading-[1.15] tracking-tight md:text-4xl text-balance">
                  "{s.quote}"
                </blockquote>
                <div className="mt-6">
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-foreground/60">{s.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-1.5">
            {stories.map((_, k) => (
              <button
                key={k}
                aria-label={`Story ${k + 1}`}
                onClick={() => set(k)}
                className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-foreground" : "w-5 bg-foreground/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
