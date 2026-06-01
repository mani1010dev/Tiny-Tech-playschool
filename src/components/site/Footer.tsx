export function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <img src="/tiny.png" alt="Tiny Tech Logo" className="h-8 w-8 rounded-full object-cover ring-1 ring-background/15" />
              <span className="font-display text-lg">Tiny Tech</span>
            </div>
            <p className="mt-6 max-w-sm font-display text-3xl font-light leading-[1.1] tracking-tight text-balance">
              Where curiosity becomes confidence.
            </p>
            <p className="mt-8 text-sm text-background/60 leading-relaxed">
              24, Rajaji Street, N.G.O Colony, Guduvancheri,<br />
              Tamil Nadu, India (Near railway station & bus stand)<br />
              Open weekdays 7:30 – 18:00<br />
              <a href="mailto:padmasanmugam@gmail.com" className="hover:text-background underline decoration-background/25 underline-offset-4 transition-colors">padmasanmugam@gmail.com</a> · <a href="tel:+9108124378478" className="hover:text-background underline decoration-background/25 underline-offset-4 transition-colors">+91-08124378478</a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-4">
            {[
              { h: "School", l: ["Programs", "Approach"] },
              { h: "Family", l: ["Admissions", "Tuition", "Daily journey", "Calendar"] },
              { h: "Stories", l: ["Journal", "Events", "Press", "Alumni"] },
              { h: "Contact", l: ["Visit us", "Careers", "Instagram", "Newsletter"] },
            ].map((c) => (
              <div key={c.h}>
                <div className="text-xs uppercase tracking-widest text-background/50">{c.h}</div>
                <ul className="mt-4 space-y-2">
                  {c.l.map((x) => (
                    <li key={x}><a href="#" className="text-sm text-background/85 hover:text-background">{x}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-8 text-xs text-background/55 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Tiny Tech Play School. Accredited early-years institution.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Safeguarding</a>
            <a href="#" className="hover:text-background">Accessibility</a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="px-6 pb-12 font-display text-[18vw] font-light leading-none tracking-tighter text-background/10">
          tiny tech
        </div>
      </div>
    </footer>
  );
}
