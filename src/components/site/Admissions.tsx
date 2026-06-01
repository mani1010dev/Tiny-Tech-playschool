import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
  { n: "01", t: "Inquiry", d: "Tell us about your family in 2 minutes." },
  { n: "02", t: "School visit", d: "Walk the campus, meet the team, see a day unfold." },
  { n: "03", t: "Assessment", d: "A playful morning so we get to know your child." },
  { n: "04", t: "Enrollment", d: "Welcome. Your start date is the beginning of something." },
];

export function Admissions() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ parentName?: string; email?: string; details?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form Validation
    const newErrors: typeof errors = {};
    if (!parentName.trim()) newErrors.parentName = "Parent name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!details.trim()) newErrors.details = "Child's age & preferred date is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Simulate real server delay
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="admissions" className="relative overflow-hidden py-28">
      <div className="blob -left-20 top-20 h-96 w-96 bg-coral/30" />
      <div className="blob right-0 bottom-0 h-[28rem] w-[28rem] bg-sky/40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/55">Admissions</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-[1] tracking-tight md:text-7xl text-balance">
            Four steps from <em className="italic text-coral">curious</em> to confirmed.
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-foreground/15 md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-foreground font-display text-2xl text-background">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-foreground/65 text-pretty">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-10 rounded-[2rem] bg-foreground p-10 text-background md:grid-cols-2 md:p-14"
        >
          <div>
            <h3 className="font-display text-4xl font-light leading-[1] tracking-tight md:text-5xl text-balance">
              Come spend a morning with us.
            </h3>
            <p className="mt-4 max-w-md text-background/70 text-pretty">
              Tours run Tuesdays and Thursdays. Bring your child — they are part of the conversation.
            </p>
          </div>

          <div className="relative h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-6 h-full"
                >
                  <div className="relative mb-6">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-coral/20 text-coral ring-4 ring-coral/10">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="font-display text-2xl tracking-tight text-white font-medium">Tour Request Confirmed!</h4>
                  <p className="mt-3 text-sm text-background/80 max-w-sm leading-relaxed text-pretty">
                    Thank you, <strong className="text-white">{parentName}</strong>! We have received your details. Our admissions advisor will reach out to <strong className="text-white">{email}</strong> within 24 hours to coordinate your visit.
                  </p>
                  <button
                    onClick={() => {
                      setParentName("");
                      setEmail("");
                      setDetails("");
                      setStatus("idle");
                    }}
                    className="mt-6 rounded-full border border-background/25 px-5 py-2.5 text-xs font-semibold hover:bg-background/10 transition duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <div className="relative flex flex-col">
                    <input
                      value={parentName}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setParentName(e.target.value);
                        if (errors.parentName) setErrors(prev => ({ ...prev, parentName: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 ${
                        errors.parentName ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15"
                      }`}
                      placeholder="Parent name"
                    />
                    {errors.parentName && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.parentName}
                      </span>
                    )}
                  </div>

                  <div className="relative flex flex-col">
                    <input
                      type="email"
                      value={email}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 ${
                        errors.email ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15"
                      }`}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="relative flex flex-col sm:col-span-2">
                    <input
                      value={details}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setDetails(e.target.value);
                        if (errors.details) setErrors(prev => ({ ...prev, details: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 ${
                        errors.details ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15"
                      }`}
                      placeholder="Child's age & preferred date"
                    />
                    {errors.details && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.details}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-coral/90 sm:col-span-2 disabled:opacity-85 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:scale-[1.01]"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      "Request a tour"
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
