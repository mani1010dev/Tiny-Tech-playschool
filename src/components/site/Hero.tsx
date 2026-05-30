import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 grain">
      {/* Ambient blobs */}
      <div className="blob -left-32 top-20 h-96 w-96 bg-sky/60" />
      <div className="blob right-[-10%] top-40 h-[28rem] w-[28rem] bg-coral/40" />
      <div className="blob left-1/3 bottom-[-10%] h-[24rem] w-[24rem] bg-mint/60" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-foreground/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Ages 2 – 6 · Now enrolling for autumn
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.75rem)] font-light leading-[0.95] tracking-[-0.02em] text-balance">
              Where curiosity becomes{" "}
              <em className="italic text-coral">confidence.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70 text-pretty">
              An inspiring environment where children learn, explore, create, and thrive
              through meaningful experiences — guided by educators who see every child.
            </p>

            {/* CBSE Curriculum & Montessori Highlight */}
            <div className="mt-8 p-5 rounded-3xl bg-card border border-foreground/5 shadow-[var(--shadow-soft)] max-w-xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-semibold text-foreground/60">
                  CBSE Curriculum · Montessori Method of Teaching
                </span>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {[
                  { name: "Day Care", bg: "bg-mint/15 text-foreground border-mint/30" },
                  { name: "Play Group", bg: "bg-sky/15 text-foreground border-sky/30" },
                  { name: "Pre KG", bg: "bg-gold/15 text-foreground border-gold/30" },
                  { name: "LKG", bg: "bg-coral/10 text-foreground border-coral/20" },
                  { name: "UKG", bg: "bg-lavender/15 text-foreground border-lavender/30" }
                ].map((tag) => (
                  <span 
                    key={tag.name} 
                    className={`inline-flex items-center rounded-xl border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ${tag.bg} shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#admissions"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:scale-[1.02]"
              >
                Book a school tour
                <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white"
              >
                Explore programs
              </a>
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div
            style={{ y, opacity: fade }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-float)] ring-1 ring-foreground/5">
              <motion.img
                src={heroImg}
                alt="A child painting joyfully in a bright preschool classroom"
                width={1600}
                height={1200}
                style={{ scale }}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>

            {/* Floating UI chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -left-6 top-10 hidden rounded-2xl bg-white/90 p-3 shadow-[var(--shadow-float)] backdrop-blur sm:flex animate-floaty"
            >
              <div className="flex items-center gap-3 pr-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-mint/60 font-display text-lg">Aa</div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50">Today's word</div>
                  <div className="text-sm font-medium">Wonder</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute -right-4 bottom-12 hidden rounded-2xl bg-white/90 p-3 pr-4 shadow-[var(--shadow-float)] backdrop-blur sm:flex animate-floaty-slow"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-coral/15">
                  <svg className="h-5 w-5 text-coral" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5L12 2z"/></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50">Atelier</div>
                  <div className="text-sm font-medium">Watercolor day</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 left-10 hidden h-16 w-16 rounded-2xl bg-gold/80 shadow-[var(--shadow-float)] sm:block animate-floaty"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
