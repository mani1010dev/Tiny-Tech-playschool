import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show a gentle reminder tooltip automatically after 4 seconds, then hide it after 8 seconds
  useEffect(() => {
    const timerShow = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    const timerHide = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timerShow);
      clearTimeout(timerHide);
    };
  }, []);

  const schoolWhatsAppNumber = "9108124378478";
  const defaultMessage = "Hello Tiny Tech Play School! 🎒 I'm interested in learning more about your preschool curriculum, cohorts, and enrolling my child. Could you please share more details?";
  const waUrl = `https://wa.me/${schoolWhatsAppNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans select-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="relative rounded-2xl bg-white px-4 py-2.5 text-xs font-semibold text-foreground shadow-xl border border-border flex items-center gap-1.5 cursor-pointer max-w-[200px] text-right"
          >
            <span className="text-pretty">Have questions? Chat with us! 💬</span>
            <div className="absolute right-5 -bottom-1.5 h-3 w-3 rotate-45 border-r border-b border-border bg-white" />
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/30 cursor-pointer overflow-visible"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />

        {/* WhatsApp Icon SVG */}
        <svg className="relative z-10 h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 2C6.446 2 1.92 6.509 1.916 12.077c-.002 1.78.468 3.51 1.36 5.048L1.3 22.68l5.728-1.497c1.493.81 3.177 1.237 4.896 1.239h.005c5.584 0 10.111-4.509 10.116-10.078C22.05 6.509 17.519 2 12.031 2zm6.275 14.593c-.272.761-1.372 1.393-1.887 1.48-.48.081-.986.104-1.637-.156a9.71 9.71 0 0 1-4.079-2.507c-1.467-1.458-2.457-3.003-2.735-3.486-.277-.482-.03-.743.212-1.026.242-.283.486-.532.729-.798.242-.266.323-.456.486-.761.162-.304.081-.57-.041-.798-.121-.228-1.085-2.6-1.488-3.567-.393-.943-.794-.814-1.085-.828-.278-.014-.596-.015-.916-.015-.32 0-.84.12-1.28.601-.44.481-1.68 1.637-1.68 3.992 0 2.355 1.72 4.63 1.96 4.96.242.33 3.39 5.138 8.217 7.202 1.15.492 2.046.786 2.748.995 1.157.366 2.21.314 3.04.19.927-.138 2.853-1.159 3.258-2.28.405-1.121.405-2.083.284-2.284-.12-.2-.445-.316-.93-.561z"/>
        </svg>
      </motion.a>
    </div>
  );
}
