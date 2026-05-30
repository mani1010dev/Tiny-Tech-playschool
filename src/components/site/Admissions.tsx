import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Inquiry", d: "Tell us about your family in 2 minutes." },
  { n: "02", t: "School visit", d: "Walk the campus, meet the team, see a day unfold." },
  { n: "03", t: "Assessment", d: "A playful morning so we get to know your child." },
  { n: "04", t: "Enrollment", d: "Welcome. Your start date is the beginning of something." },
];

export function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden py-28">
      <div className="blob -left-20 top-20 h-96 w-96 bg-coral/30" />
      <div className="blob right-0 bottom-0 h-[28rem] w-[28rem] bg-sky/40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Admissions</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-7xl text-balance">
            Four steps from <em className="italic text-coral">curious</em> to confirmed.
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-foreground/15 md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-foreground font-display text-2xl text-background">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-foreground/65 text-pretty">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-10 rounded-[2rem] bg-foreground p-10 text-background md:grid-cols-2 md:p-14"
        >
          <div>
            <h3 className="font-display text-4xl font-light leading-[1] tracking-tight md:text-5xl text-balance">
              Come spend a morning with us.
            </h3>
            <p className="mt-4 max-w-md text-background/70 text-pretty">
              Tours run Tuesdays and Thursdays. Bring your child — they are part of the conversation.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <input className="rounded-full border border-background/15 bg-background/5 px-5 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral" placeholder="Parent name" />
            <input type="email" className="rounded-full border border-background/15 bg-background/5 px-5 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral" placeholder="Email" />
            <input className="rounded-full border border-background/15 bg-background/5 px-5 py-3 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral sm:col-span-2" placeholder="Child's age & preferred date" />
            <button className="rounded-full bg-coral px-6 py-3 text-sm font-medium text-background transition hover:bg-coral/90 sm:col-span-2">
              Request a tour
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
