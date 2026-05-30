import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Communication", value: 92 },
  { name: "Creativity", value: 95 },
  { name: "Confidence", value: 88 },
  { name: "Motor skills", value: 90 },
  { name: "Problem solving", value: 86 },
  { name: "Social development", value: 94 },
];

export function Development() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-secondary py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Child development</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
              Growth you can <em className="italic text-coral">see</em>.
            </h2>
            <p className="mt-6 max-w-md text-foreground/70 text-pretty">
              Every term we share a developmental portrait — built from observation, not testing.
              Below: average gains across our 2024 cohort.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <Stat n={1200} suffix="+" label="Alumni" />
              <Stat n={36} suffix=" countries" label="Family origins" />
            </div>
          </div>

          <div ref={ref} className="lg:col-span-7">
            <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
              <div className="space-y-6">
                {skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-display text-lg">{s.name}</span>
                      <Counter to={s.value} active={inView} suffix="%" />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-foreground/8">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${s.value}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-coral to-gold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="rounded-2xl bg-card/70 p-4">
      <div className="font-display text-3xl tracking-tight">
        <Counter to={n} active={inView} suffix={suffix} />
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-foreground/55">{label}</div>
    </div>
  );
}

function Counter({ to, active, suffix = "" }: { to: number; active: boolean; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  if (active && ref.current && ref.current.dataset.done !== "true") {
    ref.current.dataset.done = "true";
    const start = performance.now();
    const dur = 1400;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      if (ref.current) ref.current.textContent = Math.round(to * eased).toString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  return <span ref={ref}>0{suffix}</span>;
}
