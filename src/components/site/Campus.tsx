import { motion } from "framer-motion";
import classroom from "@/assets/campus-classroom.jpg";
import outdoor from "@/assets/campus-outdoor.jpg";
import reading from "@/assets/campus-reading.jpg";
import studio from "@/assets/campus-studio.jpg";

export function Campus() {
  return (
    <section id="campus" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Campus experience</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
            Architecturally calm. <em className="italic text-coral">Quietly alive.</em>
          </h2>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[200px]">
          <Tile img={classroom} title="Smart classroom" tag="Learning" span="md:col-span-4 md:row-span-2" />
          <Tile title="Outdoor exploration" tag="Garden" img={outdoor} span="md:col-span-2 md:row-span-2" />
          <Tile title="Reading corner" tag="Stillness" img={reading} span="md:col-span-2" />
          <Tile title="Activity studios" tag="Atelier" img={studio} span="md:col-span-2" />
          <DataTile />
        </div>
      </div>
    </section>
  );
}

function Tile({
  img,
  title,
  tag,
  span = "",
}: {
  img: string;
  title: string;
  tag: string;
  span?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-3xl ring-1 ring-foreground/5 ${span}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        width={1200}
        height={900}
        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-background">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">{tag}</span>
          <h3 className="font-display text-2xl tracking-tight">{title}</h3>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full glass-dark text-background transition group-hover:rotate-45">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
        </span>
      </div>
    </motion.div>
  );
}

function DataTile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col justify-between rounded-3xl bg-foreground p-6 text-background md:col-span-2"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-background/60">Daycare</span>
      <div>
        <div className="font-display text-5xl tracking-tight">7:30 – 18:00</div>
        <p className="mt-2 text-sm text-background/70">Extended care with quiet hours, warm meals, and family pickup.</p>
      </div>
      <a href="#admissions" className="mt-4 inline-flex items-center gap-2 text-sm text-coral hover:underline">
        Learn about daycare →
      </a>
    </motion.div>
  );
}
