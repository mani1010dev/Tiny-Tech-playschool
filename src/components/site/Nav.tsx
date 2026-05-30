import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#campus", label: "Campus" },
  { href: "#approach", label: "Approach" },
  { href: "#stories", label: "Stories" },
  { href: "#admissions", label: "Admissions" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all ${
          scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-3">
          <img src="/tiny.png" alt="Tiny Tech Logo" className="h-8 w-8 rounded-full object-cover ring-1 ring-foreground/10" />
          <span className="font-display text-lg tracking-tight">Tiny Tech</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-foreground/75 transition hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#admissions"
          className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90"
        >
          Book a tour
          <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </nav>
    </motion.header>
  );
}
