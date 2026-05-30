import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    label: "Explore",
    body: "Open-ended materials invite the question — what if?",
    color: "bg-sky/70",
  },
  {
    label: "Discover",
    body: "Children name patterns, test ideas, and form first theories.",
    color: "bg-mint/70",
  },
  {
    label: "Create",
    body: "Ideas become drawings, songs, structures, and stories.",
    color: "bg-gold/70",
  },
  {
    label: "Grow",
    body: "Confidence settles into who they are becoming.",
    color: "bg-coral/70",
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-foreground text-background">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 pt-28 pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-background/55">The learning journey</span>
            <h2 className="mt-3 max-w-2xl font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
              Four moments that <em className="italic text-coral">repeat</em>, daily.
            </h2>
          </div>
          <div className="hidden w-64 md:block">
            <div className="h-px w-full bg-background/15">
              <motion.div style={{ width: progress }} className="h-px bg-coral" />
            </div>
            <p className="mt-2 text-xs uppercase tracking-widest text-background/50">Scroll</p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-6 will-change-transform">
          {stages.map((s, i) => (
            <div
              key={s.label}
              className="relative flex h-[64vh] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] p-10 md:w-[55vw]"
            >
              <div className={`absolute inset-0 ${s.color}`} />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/40" />
              <div className="relative flex items-center justify-between text-foreground">
                <span className="font-display text-[18vw] leading-none opacity-15 md:text-[12vw]">{i + 1}</span>
                <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur">
                  Stage {i + 1} of 4
                </span>
              </div>
              <div className="relative max-w-md text-foreground">
                <h3 className="font-display text-6xl font-light tracking-tight md:text-7xl">{s.label}</h3>
                <p className="mt-4 text-lg text-foreground/80">{s.body}</p>
              </div>
            </div>
          ))}
          <div className="w-[20vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
