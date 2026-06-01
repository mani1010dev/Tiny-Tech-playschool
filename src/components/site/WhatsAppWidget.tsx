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
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.503 4.936 1.504 5.428 0 9.848-4.417 9.851-9.85.002-2.632-1.018-5.105-2.871-6.961-1.854-1.855-4.324-2.877-6.953-2.878-5.433 0-9.854 4.418-9.858 9.853-.002 1.777.469 3.511 1.364 5.048L1.936 21.68l4.711-1.237zM17.472 14.382c-.3-.149-1.778-.878-2.046-.977-.267-.099-.462-.149-.657.15-.195.299-.754.95-.925 1.15-.17.198-.341.222-.64.074-.3-.15-1.267-.467-2.414-1.493-.893-.797-1.496-1.782-1.672-2.08-.176-.299-.019-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.524-.075-.15-.657-1.583-.9-2.171-.236-.569-.476-.491-.657-.5-.183-.008-.393-.01-.603-.01-.21 0-.553.08-.841.393-.288.311-1.1.1.074-1.1 1.075 0 2.22 1.127 2.22 2.392 0 1.266-.1 2.28-.225 2.58-.124.3-.015.462.135.61l.074.074.15.174c.249.279.432.553.541.675.109.123.361.373.743.684.382.311.666.495.952.628.286.133.513.149.771.124.258-.025.867-.282.987-.552.12-.27.12-.502.084-.553-.036-.05-.141-.08-.442-.23z"/>
        </svg>
      </motion.a>
    </div>
  );
}
