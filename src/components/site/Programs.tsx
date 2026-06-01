import { motion } from "framer-motion";

const programs = [
  {
    title: "Playgroup",
    age: "2.5 – 3 YEARS",
    desc: "Introduction to the Montessori environment and basic social interaction.",
    bgColor: "bg-[#FDFBF2]", // Pale yellow-cream
    iconBg: "bg-[#F5BF16]",   // Yellow
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
        <path d="M12 2a2.5 2.5 0 0 1 2 2" />
      </svg>
    )
  },
  {
    title: "Nursery",
    age: "3 – 4 YEARS",
    desc: "Nurturing essential life skills, language acquisition, and sensorial exploration.",
    bgColor: "bg-[#F2F5FE]", // Pale blue-lavender
    iconBg: "bg-[#2D5CC3]",   // Rich Blue
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <circle cx="9" cy="9.5" r="1" fill="currentColor" />
        <circle cx="15" cy="9.5" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "LKG / Mont I",
    age: "4 – 5 YEARS",
    desc: "Developing foundational literacy, mathematical concepts, and independence.",
    bgColor: "bg-[#FDF2F0]", // Pale rose-coral
    iconBg: "bg-[#C32D25]",   // Crimson Red
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  },
  {
    title: "UKG / Mont II",
    age: "5 – 6 YEARS",
    desc: "Advanced communication, problem-solving, and preparation for primary education.",
    bgColor: "bg-[#FDFBF2]", // Pale yellow-cream
    iconBg: "bg-gradient-to-br from-[#D99A1C] to-[#4F596F]", // Gold-grey gradient
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    )
  },
  {
    title: "Day Care",
    age: "3 YEARS & ABOVE",
    desc: "Safe and engaging environment focusing on social development and structured play.",
    bgColor: "bg-[#F2F5FE]", // Pale blue-lavender
    iconBg: "bg-[#1E40AF]",   // Dark Blue
    icon: (
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    )
  }
];

export function Programs() {
  return (
    <section id="programs" className="relative py-28 bg-background overflow-hidden">
      <div className="blob -left-32 top-1/4 h-96 w-96 bg-gold/10" />
      <div className="blob -right-32 bottom-1/4 h-96 w-96 bg-coral/10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55 font-semibold">CBSE Curriculum & Montessori Method</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1.1] tracking-tight md:text-6xl text-balance">
              Five levels, five <em className="italic text-coral">worlds</em> to grow into.
            </h2>
          </div>
          <a href="#admissions" className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-xs font-semibold hover:bg-foreground/5 transition cursor-pointer">
            Request full curriculum roadmap →
          </a>
        </div>

        {/* Centered responsive flex-wrap grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`flex flex-col justify-between rounded-[2.25rem] p-8 md:p-9 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] shadow-[0_8px_30px_rgba(40,30,20,0.02)] border border-foreground/5 hover:shadow-[0_20px_50px_rgba(40,30,20,0.06)] hover:-translate-y-1.5 transition-all duration-500 group ${p.bgColor}`}
            >
              <div>
                {/* Squircle Icon Container */}
                <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 ${p.iconBg}`}>
                  {p.icon}
                </div>

                <h3 className="font-sans text-[1.65rem] font-bold text-[#1F2937] tracking-tight mt-7 leading-tight">
                  {p.title}
                </h3>
                
                <p className="text-[11px] font-bold tracking-wider text-[#9CA3AF] uppercase mt-1">
                  {p.age}
                </p>

                <p className="mt-4 text-[14.5px] text-[#4B5563] leading-relaxed text-pretty flex-grow">
                  {p.desc}
                </p>
              </div>

              {/* Crimson CTA Button */}
              <a
                href="#admissions"
                className="mt-8 rounded-xl bg-[#D23228] text-white py-3.5 text-sm font-semibold hover:bg-[#b22d25] transition duration-300 w-full flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:scale-[1.015]"
              >
                Enquire Now
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
