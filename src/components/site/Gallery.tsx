import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Curated Photos (25 WhatsApp JPEGs)
const photos = [
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.05 AM.jpeg", tag: "Creative", title: "Artistic Explorations" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.05 AM (1).jpeg", tag: "Interactive", title: "Group Playtimes" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.06 AM.jpeg", tag: "Outdoors", title: "Garden Discoveries" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.06 AM (1).jpeg", tag: "Cognitive", title: "Puzzles and Logic Games" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.06 AM (2).jpeg", tag: "Creative", title: "Sensory Fingerpainting" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.48.07 AM.jpeg", tag: "Social", title: "Collaborative Projects" },
  { src: "/banner/WhatsApp Image 2026-06-01 at 10.48.07 AM (1).jpeg", tag: "Adventures", title: "Sandpit Excavators" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.12 AM.jpeg", tag: "Focus", title: "Fine Motor Challenges" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.12 AM (1).jpeg", tag: "Exploration", title: "Discovery of Textures" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.13 AM.jpeg", tag: "Daily Routine", title: "Joyous Circle Greetings" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.13 AM (1).jpeg", tag: "Montessori", title: "Practical Life Skills" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.14 AM.jpeg", tag: "Classroom", title: "Interactive Class Activities" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.14 AM (1).jpeg", tag: "Play", title: "Creative Block Builders" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.15 AM.jpeg", tag: "Discovery", title: "Scientific Nature Gazers" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.15 AM (1).jpeg", tag: "Joy", title: "Smiles of Discovery" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.16 AM.jpeg", tag: "Creative", title: "Color Matching Games" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.16 AM (1).jpeg", tag: "Social", title: "Team Problem Solvers" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.17 AM.jpeg", tag: "Outdoors", title: "Outdoor Track Exploration" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.17 AM (1).jpeg", tag: "Cognitive", title: "Shape Sorting Mastery" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.17 AM (2).jpeg", tag: "Creative", title: "Modeling Clay Masterpieces" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.18 AM.jpeg", tag: "Interactive", title: "Friendly Learning Competitions" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.19 AM.jpeg", tag: "Play", title: "Imaginative Roleplays" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.19 AM (1).jpeg", tag: "Joy", title: "Shared Laughs & Fun" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.23 AM.jpeg", tag: "Focus", title: "Concentration At Ateliers" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Image 2026-06-01 at 10.49.23 AM (1).jpeg", tag: "Montessori", title: "Self-Guided Growth" }
];

// Curated Videos (5 WhatsApp MP4s)
const videos = [
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.20 AM.mp4", tag: "Activities", title: "Playful Learning Sessions" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.20 AM (1).mp4", tag: "Daily Routine", title: "Guided Storytelling Circles" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.21 AM.mp4", tag: "Rhythm", title: "Dance and Music Exploration" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.21 AM (1).mp4", tag: "Celebrations", title: "Festivals & Classroom Joys" },
  { src: "/WhatsApp Unknown 2026-06-01 at 10.51.09 AM/WhatsApp Video 2026-06-01 at 10.49.21 AM (2).mp4", tag: "Activities", title: "Motor Coordination Exercises" }
];

// Curated Banners / Official Posters
const posters = [
  { 
    src: "/banner/6x4 - 1 copy (2).jpg.jpeg", 
    tag: "Admission", 
    title: "Preschool Enrollment Poster" 
  },
  { 
    src: "/banner/Banner Padma (1)-1.png", 
    tag: "Montessori", 
    title: "Educational Method Overview" 
  },
  { 
    src: "/banner/WhatsApp Image 2026-06-01 at 10.48.07 AM (1).jpeg", 
    tag: "Curriculum", 
    title: "Tiny Tech CBSE Curriculum" 
  }
];

// Curated Banners / Highlights
const banners = [
  {
    title: "CBSE Curriculum & Montessori Method",
    desc: "A premium early education roadmap designed to nurture analytical logic, confidence, and self-guided growth from ages 2 to 6.",
    accent: "bg-coral text-background border-coral/25",
    tags: ["Day Care", "Play Group", "Pre KG", "LKG", "UKG"]
  },
  {
    title: "Perfect Guduvancheri Location",
    desc: "Conveniently situated at 24, Rajaji Street, N.G.O Colony, right near the railway station and bus stand for seamless pick-ups & drops.",
    accent: "bg-sky/25 border-sky/20 text-foreground",
    tags: ["NGO Colony", "Near Railway Station", "Guduvancheri", "Bus Stand"]
  },
  {
    title: "Flexible Premium Daycare Hours",
    desc: "Open weekdays from 7:30 to 18:00. Extended hours available with quiet rest areas, warm meals, and dedicated after-school activities.",
    accent: "bg-gold/20 border-gold/25 text-foreground",
    tags: ["7:30 - 18:00", "Weekdays Only", "Nutritious Meals", "Quiet Play"]
  }
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [lightboxItem, setLightboxItem] = useState<null | { type: string; src: string; tag: string; title: string }>(null);
  
  // Pagination counters to keep DOM loads optimized
  const [visiblePhotos, setVisiblePhotos] = useState(8);
  const [visibleVideos, setVisibleVideos] = useState(4);

  const loadMorePhotos = () => setVisiblePhotos(prev => Math.min(prev + 8, photos.length));
  const loadMoreVideos = () => setVisibleVideos(prev => Math.min(prev + 4, videos.length));

  return (
    <section id="stories" className="relative py-28 bg-background border-t border-foreground/5 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="blob -right-32 top-1/4 h-96 w-96 bg-mint/15" />
      <div className="blob -left-32 bottom-1/4 h-96 w-96 bg-coral/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/55 font-semibold">Moments & Highlights</span>
            <h2 className="mt-3 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl text-balance">
              Captured unedited, <em className="italic text-coral">aligned beautifully.</em>
            </h2>
            <p className="mt-4 max-w-md text-sm text-foreground/65">
              Explore our structured gallery of unedited school photos, videos, and posters, split into clean, segregated rows with identical grid card scaling.
            </p>
          </div>
          
          {/* Segregated Category Toggle - Responsive Flex Wrap */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-start md:justify-end gap-1.5 rounded-[1.5rem] md:rounded-full bg-foreground/5 p-1 backdrop-blur shadow-[var(--shadow-soft)] max-w-xl self-start md:self-end">
            {[
              { id: "photos", label: "Photos Grid" },
              { id: "videos", label: "Videos Grid" },
              { id: "posters", label: "Official Posters" },
              { id: "banners", label: "School Highlights" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-4.5 py-2.5 text-xs font-semibold tracking-wide transition duration-300 cursor-pointer ${
                  activeTab === tab.id ? "bg-foreground text-background shadow-md" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: SEGREGATED PHOTOS GRID (Perfect Square Grids, Same Size) */}
          {activeTab === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {photos.slice(0, visiblePhotos).map((ph) => (
                  <motion.figure
                    key={ph.src}
                    whileHover={{ y: -4 }}
                    onClick={() => setLightboxItem({ type: "image", ...ph })}
                    className="group relative overflow-hidden rounded-3xl bg-foreground/5 border border-foreground/5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-shadow cursor-zoom-in aspect-square"
                  >
                    <img 
                      src={ph.src} 
                      alt={ph.title} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" 
                    />
                    
                    {/* Caption Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-background pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-coral">{ph.tag}</span>
                      <h4 className="font-display text-lg tracking-tight mt-1 leading-tight font-medium text-white">{ph.title}</h4>
                    </div>
                  </motion.figure>
                ))}
              </div>

              {photos.length > visiblePhotos && (
                <div className="flex justify-center mt-8">
                  <button 
                    onClick={loadMorePhotos}
                    className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-2.5 text-xs font-semibold hover:bg-foreground/5 transition duration-300 cursor-pointer"
                  >
                    Load More Photos
                    <svg className="h-3.5 w-3.5 transition duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: SEGREGATED VIDEOS GRID (Perfect Widescreen Grids, Same Size) */}
          {activeTab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {videos.slice(0, visibleVideos).map((vid) => (
                  <motion.figure
                    key={vid.src}
                    whileHover={{ y: -4 }}
                    onClick={() => setLightboxItem({ type: "video", ...vid })}
                    className="group relative overflow-hidden rounded-3xl bg-foreground/5 border border-foreground/5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-shadow cursor-zoom-in aspect-video w-full"
                  >
                    <div className="relative h-full w-full">
                      <video 
                        src={vid.src} 
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
                      
                      {/* Play Button overlay */}
                      <div className="absolute inset-0 grid place-items-center bg-ink/10 group-hover:bg-ink/25 transition-all duration-300">
                        <span className="grid h-12 w-12 place-items-center rounded-full glass-dark text-background shadow-md border border-white/20 transition-transform duration-300 group-hover:scale-110">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current ml-0.5" stroke="none">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    
                    {/* Caption Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-background pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-coral">{vid.tag}</span>
                      <h4 className="font-display text-lg tracking-tight mt-1 leading-tight font-medium text-white">{vid.title}</h4>
                    </div>
                  </motion.figure>
                ))}
              </div>

              {videos.length > visibleVideos && (
                <div className="flex justify-center mt-8">
                  <button 
                    onClick={loadMoreVideos}
                    className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-2.5 text-xs font-semibold hover:bg-foreground/5 transition duration-300 cursor-pointer"
                  >
                    Load More Videos
                    <svg className="h-3.5 w-3.5 transition duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 3: SEGREGATED POSTERS GRID (Premium high-aspect ratio cards, Same Size) */}
          {activeTab === "posters" && (
            <motion.div
              key="posters"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {posters.map((post) => (
                  <motion.figure
                    key={post.src}
                    whileHover={{ y: -6 }}
                    onClick={() => setLightboxItem({ type: "image", ...post })}
                    className="group relative overflow-hidden rounded-3xl bg-foreground/5 border border-foreground/5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 cursor-zoom-in aspect-[4/3] w-full"
                  >
                    <img 
                      src={post.src} 
                      alt={post.title} 
                      loading="lazy" 
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" 
                    />
                    
                    {/* Caption Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 text-background pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-coral">{post.tag}</span>
                      <h4 className="font-display text-lg tracking-tight mt-1 leading-tight font-medium text-white">{post.title}</h4>
                    </div>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: HIGHLIGHT BANNERS (Dedicated School Banners, Same Size) */}
          {activeTab === "banners" && (
            <motion.div
              key="banners"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {banners.map((bn, i) => (
                <motion.article
                  key={bn.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative flex flex-col justify-between overflow-hidden rounded-[2rem] border p-8 md:p-10 shadow-[var(--shadow-soft)] min-h-[340px] group ${bn.accent}`}
                >
                  <div>
                    <h3 className="font-display text-3xl tracking-tight leading-[1.1] text-balance font-medium">
                      {bn.title}
                    </h3>
                    <p className="mt-4 text-sm opacity-80 leading-relaxed text-pretty">
                      {bn.desc}
                    </p>
                  </div>
                  
                  {/* Decorative Banner Tags */}
                  <div className="mt-8 flex flex-wrap gap-1.5 pt-6 border-t border-current/10">
                    {bn.tags.map(t => (
                      <span key={t} className="rounded-full bg-current/5 border border-current/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider opacity-95 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
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
              className="absolute top-6 right-6 z-10 grid h-12 w-12 place-items-center rounded-full glass-dark border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
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
