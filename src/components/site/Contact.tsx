import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 bg-card border-t border-foreground/5">
      {/* Decorative subtle background blobs */}
      <div className="blob -right-20 top-10 h-96 w-96 bg-mint/20" />
      <div className="blob -left-20 bottom-10 h-[24rem] w-[24rem] bg-coral/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          
          {/* Contact Details Column */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Contact & Location</span>
              <h2 className="mt-3 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl text-balance">
                We'd love to <em className="italic text-coral">connect</em> with you.
              </h2>
              <p className="mt-6 max-w-md text-foreground/65 text-pretty leading-relaxed text-sm">
                Whether you have questions about admissions, our curriculum, or want to schedule a visit, feel free to reach out or drop by. We are located near key transit points for your convenience.
              </p>
            </div>

            <div className="mt-12 space-y-8 border-t border-foreground/10 pt-8">
              {/* Address Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-5 group"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-coral/10 text-coral ring-1 ring-coral/20 group-hover:bg-coral group-hover:text-card transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-display text-lg font-medium text-foreground tracking-tight">Our Address</h4>
                  <p className="mt-1 text-sm text-foreground/75 leading-relaxed">
                    24, Rajaji Street, N.G.O Colony,<br />
                    Guduvancheri, Tamil Nadu, India
                  </p>
                  <p className="mt-1 text-xs font-semibold text-coral flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                    </svg>
                    Near to railway station and bus stand
                  </p>
                </div>
              </motion.div>

              {/* Call Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-5 group"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky/10 text-sky ring-1 ring-sky/20 group-hover:bg-sky group-hover:text-card transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-display text-lg font-medium text-foreground tracking-tight">Call Us Direct</h4>
                  <p className="mt-1 text-sm text-foreground/75">
                    For inquiries, call our lead admissions counselor:
                  </p>
                  <p className="mt-1">
                    <a href="tel:+9108124378478" className="text-base font-semibold text-foreground underline decoration-sky/30 underline-offset-4 hover:decoration-sky transition-colors">+91-08124378478</a>
                  </p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-5 group"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lavender/20 text-indigo-500 ring-1 ring-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-card transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-display text-lg font-medium text-foreground tracking-tight">Email Inquiries</h4>
                  <p className="mt-1 text-sm text-foreground/75">
                    Send us an email and we'll reply within 24 hours:
                  </p>
                  <p className="mt-1">
                    <a href="mailto:padmasanmugam@gmail.com" className="text-base font-semibold text-foreground underline decoration-indigo-500/30 underline-offset-4 hover:decoration-indigo-500 transition-colors">padmasanmugam@gmail.com</a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-foreground/5 border border-foreground/10 h-[350px] lg:h-[450px] min-h-[300px] shadow-lg group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5800.0!2d80.05178138885498!3d12.842157699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f733118958a1%3A0xc9183d5c39a79f59!2sTiny%20Tech%20play%20school!5e0!3m2!1sen!2sin!4v1780136622502!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full opacity-85 transition-all duration-500 group-hover:opacity-100"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
