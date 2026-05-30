import { motion } from "framer-motion";
import e1 from "@/assets/educator-1.jpg";
import e2 from "@/assets/educator-2.jpg";
import e3 from "@/assets/educator-3.jpg";

const team = [
  { img: e1, name: "Elena Park", role: "Head of School", quote: "Children are not vessels. They are makers of meaning." },
  { img: e2, name: "Tomás Albrecht", role: "Lead Educator · Roam", quote: "The garden is the best curriculum we'll ever write." },
  { img: e3, name: "Amara Diallo", role: "Atelierista", quote: "Beauty teaches attention. Attention teaches everything else." },
];

export function Educators() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Meet our educators</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl text-balance">
            People your child will <em className="italic text-coral">remember.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-card ring-1 ring-foreground/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={t.name} width={800} height={1000} loading="lazy" className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl tracking-tight">{t.name}</h3>
                  <span className="text-xs text-foreground/50">0{i + 1}</span>
                </div>
                <div className="text-sm text-foreground/60">{t.role}</div>
                <p className="mt-4 border-t border-foreground/10 pt-4 text-sm italic text-foreground/75">"{t.quote}"</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
