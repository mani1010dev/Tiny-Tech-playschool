import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Array of premium curated moments provided by the user (JPEGs and MP4s)
const mediaItems = [
  {
    type: "video",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.20 AM.mp4",
    span: "md:col-span-2 md:row-span-2",
    tag: "Activities",
    title: "Playful Learning Sessions"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.05 AM.jpeg",
    span: "",
    tag: "Creative",
    title: "Artistic Explorations"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.05 AM (1).jpeg",
    span: "",
    tag: "Interactive",
    title: "Group Playtimes"
  },
  {
    type: "video",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.20 AM (1).mp4",
    span: "md:col-span-2",
    tag: "Daily Routine",
    title: "Guided Storytelling Circles"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.06 AM.jpeg",
    span: "",
    tag: "Outdoors",
    title: "Garden Discoveries"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.06 AM (1).jpeg",
    span: "md:col-span-2",
    tag: "Cognitive",
    title: "Puzzles and Logic Games"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.06 AM (2).jpeg",
    span: "",
    tag: "Creative",
    title: "Sensory Fingerpainting"
  },
  {
    type: "video",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.21 AM.mp4",
    span: "",
    tag: "Rhythm",
    title: "Dance and Music Exploration"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.07 AM.jpeg",
    span: "",
    tag: "Social",
    title: "Collaborative Projects"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.07 AM (1).jpeg",
    span: "",
    tag: "Adventures",
    title: "Sandpit Excavators"
  },
  {
    type: "video",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.21 AM (1).mp4",
    span: "md:col-span-2",
    tag: "Celebrations",
    title: "Festivals & Classroom Joys"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.12 AM.jpeg",
    span: "",
    tag: "Focus",
    title: "Fine Motor Challenges"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.12 AM (1).jpeg",
    span: "",
    tag: "Exploration",
    title: "Discovery of Textures"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.13 AM.jpeg",
    span: "",
    tag: "Daily Routine",
    title: "Joyous Circle Greetings"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.13 AM (1).jpeg",
    span: "md:col-span-2",
    tag: "Montessori",
    title: "Practical Life Skills Activities"
  },
  {
    type: "video",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.21 AM (2).mp4",
    span: "",
    tag: "Activities",
    title: "Motor Coordination Exercises"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.14 AM.jpeg",
    span: "",
    tag: "Classroom",
    title: "Interactive Class Activities"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.14 AM (1).jpeg",
    span: "",
    tag: "Play",
    title: "Creative Block Builders"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.15 AM.jpeg",
    span: "md:col-span-2",
    tag: "Discovery",
    title: "Scientific Nature Gazers"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.15 AM (1).jpeg",
    span: "",
    tag: "Joy",
    title: "Smiles of Discovery"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.16 AM.jpeg",
    span: "",
    tag: "Creative",
    title: "Color Matching Games"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.16 AM (1).jpeg",
    span: "",
    tag: "Social",
    title: "Team Problem Solvers"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.17 AM.jpeg",
    span: "md:col-span-2",
    tag: "Outdoors",
    title: "Outdoor Exploration Tracks"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.17 AM (1).jpeg",
    span: "",
    tag: "Cognitive",
    title: "Shape Sorting Mastery"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.17 AM (2).jpeg",
    span: "",
    tag: "Creative",
    title: "Modeling Clay Masterpieces"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.18 AM.jpeg",
    span: "",
    tag: "Interactive",
    title: "Friendly Learning Competitions"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.19 AM.jpeg",
    span: "md:col-span-2",
    tag: "Play",
    title: "Imaginative Roleplays"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.19 AM (1).jpeg",
    span: "",
    tag: "Joy",
    title: "Shared Laughs & Fun"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.23 AM.jpeg",
    span: "",
    tag: "Focus",
    title: "Concentration At Ateliers"
  },
  {
    type: "image",
    src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.23 AM (1).jpeg",
    span: "",
    tag: "Montessori",
    title: "Self-Guided Growth"
  }
];

export function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<null | typeof mediaItems[0]>(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredItems = mediaItems.filter(item => {
    if (filter === "photos") return item.type === "image";
    if (filter === "videos") return item.type === "video";
    return true;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = filteredItems.length > visibleCount;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredItems.length));
  };

  return (
    <section className="relative py-28 bg-background border-t border-foreground/5 overflow-hidden">
      <div className="blob -left-20 top-20 h-96 w-96 bg-coral/15" />
      <div className="blob right-0 bottom-0 h-96 w-96 bg-sky/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Moments of Wonder</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl text-balance">
              Life at Tiny Tech, <em className="italic text-coral">captured.</em>
            </h2>
            <p className="mt-4 max-w-md text-sm text-foreground/65">
              Glance through real, unedited photos and videos of our student cohorts growing, playing, and learning together every day.
            </p>
          </div>
          
          {/* Elegant Filter Tabs */}
          <div className="flex rounded-full bg-foreground/5 p-1 backdrop-blur shadow-[var(--shadow-soft)] max-w-xs self-start md:self-end">
            {[
              { id: "all", label: "All" },
              { id: "photos", label: "Photos" },
              { id: "videos", label: "Videos" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilter(tab.id);
                  setVisibleCount(8); // Reset count on filter change
                }}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition duration-300 ${
                  filter === tab.id ? "bg-foreground text-background shadow-md" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-2 gap-4 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((it, i) => (
              <motion.figure
                layout
                key={it.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setLightboxItem(it)}
                className={`group relative overflow-hidden rounded-3xl bg-foreground/5 border border-foreground/5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-shadow cursor-zoom-in ${it.span}`}
              >
                {it.type === "image" ? (
                  <img 
                    src={it.src} 
                    alt={it.title} 
                    loading="lazy" 
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" 
                  />
                ) : (
                  <div className="relative h-full w-full">
                    {/* Render a silent preview of the video playing on hover, or a static representation */}
                    <video 
                      src={it.src} 
                      muted 
                      playsInline 
                      loop
                      onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseOut={(e) => {
                        const target = e.target as HTMLVideoElement;
                        target.pause();
                        target.currentTime = 0;
                      }}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                    {/* Play Badge Icon */}
                    <div className="absolute inset-0 grid place-items-center bg-ink/10 group-hover:bg-ink/20 transition-all duration-300">
                      <span className="grid h-12 w-12 place-items-center rounded-full glass-dark text-background shadow-md border border-white/20 transition-transform duration-300 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current ml-0.5" stroke="none">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Content Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-background pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-coral/90">{it.tag}</span>
                  <h4 className="font-display text-lg tracking-tight mt-1 leading-tight font-medium text-white">{it.title}</h4>
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button 
              onClick={loadMore}
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3 text-sm font-semibold hover:bg-foreground/5 transition duration-300 shadow-sm"
            >
              Load More Moments
              <svg className="h-4 w-4 transition duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 z-10 grid h-12 w-12 place-items-center rounded-full glass-dark border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-[2rem] bg-ink border border-white/10 shadow-2xl cursor-default"
            >
              {lightboxItem.type === "image" ? (
                <img 
                  src={lightboxItem.src} 
                  alt={lightboxItem.title} 
                  className="max-h-[75vh] w-full object-contain"
                />
              ) : (
                <video 
                  src={lightboxItem.src} 
                  controls 
                  autoPlay 
                  playsInline 
                  className="max-h-[75vh] w-full object-contain"
                />
              )}
              
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-coral">{lightboxItem.tag}</span>
                <h3 className="font-display text-2xl tracking-tight mt-1 leading-tight font-medium">{lightboxItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
