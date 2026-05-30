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
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display text-4xl font-light leading-[1] tracking-tight md:text-5xl text-balance">
                Come spend a morning with us.
              </h3>
              <p className="mt-4 max-w-md text-background/70 text-pretty text-sm">
                Tours run Tuesdays and Thursdays. Bring your child — they are part of the conversation.
              </p>
            </div>
            
            <div className="mt-8 space-y-6 text-sm text-background/80 border-t border-background/10 pt-8">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background/10 text-coral">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-background font-display tracking-tight">Our Campus</h4>
                  <p className="mt-1 text-background/70 leading-relaxed">
                    24, Rajaji Street, N.G.O Colony,<br />
                    Guduvancheri, Tamil Nadu, India<br />
                    <span className="text-[12px] opacity-80 italic text-coral">(Near to railway station and bus stand)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background/10 text-coral">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-medium text-background font-display tracking-tight">Get In Touch</h4>
                  <p className="mt-1 leading-relaxed text-background/70 flex flex-col sm:flex-row sm:gap-2">
                    <a href="tel:+9108124378478" className="hover:text-background underline decoration-background/25 underline-offset-4 transition-colors font-medium">+91-08124378478</a>
                    <span className="hidden sm:inline text-background/30">|</span>
                    <a href="mailto:padmasanmugam@gmail.com" className="hover:text-background underline decoration-background/25 underline-offset-4 transition-colors">padmasanmugam@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
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
