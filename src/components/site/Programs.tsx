import { motion } from "framer-motion";
import reading from "@/assets/program-reading.jpg";
import play from "@/assets/program-play.jpg";
import explore from "@/assets/program-explore.jpg";
import create from "@/assets/program-create.jpg";

const programs = [
  {
    img: play,
    age: "Ages 2 – 3",
    title: "Nest",
    desc: "Gentle separation, sensory play, and the first language of friendship.",
    outcomes: ["Self-help routines", "Expressive vocabulary", "Secure attachment"],
    accent: "from-mint/70",
  },
  {
    img: reading,
    age: "Ages 3 – 4",
    title: "Sprout",
    desc: "Stories, songs, and a rich vocabulary that turns curiosity into ideas.",
    outcomes: ["Early literacy", "Imaginative play", "Empathy practice"],
    accent: "from-sky/70",
  },
  {
    img: explore,
    age: "Ages 4 – 5",
    title: "Roam",
    desc: "Nature-based inquiry. Children become scientists of their own world.",
    outcomes: ["Observation skills", "Outdoor confidence", "Problem solving"],
    accent: "from-gold/70",
  },
  {
    img: create,
    age: "Ages 5 – 6",
    title: "Atelier",
    desc: "Project-based making — from murals to small inventions and theatre.",
    outcomes: ["Creative voice", "Collaboration", "School readiness"],
    accent: "from-coral/60",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Programs</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
              Four years, four <em className="italic text-coral">worlds</em> to grow into.
            </h2>
          </div>
          <a href="#admissions" className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm hover:bg-foreground/5">
            See full curriculum →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-card ring-1 ring-foreground/5 hover:shadow-[var(--shadow-float)] transition-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title} program`}
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} via-transparent to-transparent opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">{p.age}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/85 text-foreground backdrop-blur transition group-hover:rotate-45">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 text-pretty">{p.desc}</p>
                <ul className="mt-5 space-y-1.5 border-t border-foreground/10 pt-4">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm text-foreground/75">
                      <span className="h-1 w-1 rounded-full bg-coral" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
