import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "What hours and days are you open?", a: "Monday – Friday, 7:30 to 18:00. Half-day options available for Nest cohort." },
  { q: "What is the educator-to-child ratio?", a: "1:6 for our youngest cohort and 1:8 across all other programs." },
  { q: "Do you provide meals?", a: "Yes — chef-prepared breakfast, lunch, and two snacks. Menus rotate every two weeks." },
  { q: "How do you handle separation anxiety?", a: "We run a four-week phase-in with parents present, then a gentle handover guided by our lead educator." },
  { q: "What does a typical day look like?", a: "Open exploration, circle, project work, outdoor time, lunch, rest, ateliers, free play, family pickup." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Questions</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
            The things parents <span className="text-coral">actually</span> ask.
          </h2>
        </div>
        <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl tracking-tight md:text-2xl">{f.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-foreground/15 transition ${isOpen ? "rotate-45 bg-foreground text-background" : ""}`}>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-foreground/70 text-pretty">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
