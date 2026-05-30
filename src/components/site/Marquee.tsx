const words = ["Curiosity", "Wonder", "Kindness", "Imagination", "Confidence", "Play", "Discovery", "Care"];

export function Marquee() {
  const items = [...words, ...words];
  return (
    <section aria-hidden className="relative overflow-hidden border-y border-foreground/10 bg-background py-8">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-4xl font-light tracking-tight md:text-6xl">
            {w}
            <span className="inline-block h-2 w-2 rounded-full bg-coral" />
          </span>
        ))}
      </div>
    </section>
  );
}
