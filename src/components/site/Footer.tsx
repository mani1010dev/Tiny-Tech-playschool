export function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-background text-foreground">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c3 4 3 8 0 12-3-4-3-8 0-12Z" /><path d="M5 14c3 1 6 1 7 5" /><path d="M19 14c-3 1-6 1-7 5" /></svg>
              </span>
              <span className="font-display text-lg">Tiny Tech</span>
            </div>
            <p className="mt-6 max-w-sm font-display text-3xl font-light leading-[1.1] tracking-tight text-balance">
              Where curiosity becomes confidence.
            </p>
            <p className="mt-8 text-sm text-background/60">
              42 Linden Avenue · Open weekdays 7:30 – 18:00<br />
              hello@tinytech.school · +1 (415) 555 0192
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-4">
            {[
              { h: "School", l: ["Programs", "Approach", "Campus", "Educators"] },
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
