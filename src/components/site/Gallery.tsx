import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/program-create.jpg";
import g6 from "@/assets/program-explore.jpg";

const items = [
  { src: g1, h: "row-span-2" },
  { src: g2, h: "" },
  { src: g3, h: "row-span-2" },
  { src: g4, h: "" },
  { src: g5, h: "" },
  { src: g6, h: "row-span-2" },
];

export function Gallery() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Moments</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
              A week, in <em className="italic text-coral">stills.</em>
            </h2>
          </div>
          <a href="#" className="hidden text-sm text-foreground/70 hover:text-foreground md:inline">View gallery →</a>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-foreground/5 ${it.h}`}
            >
              <img src={it.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
