import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { submitAdmission, type AdmissionSubmission } from "@/lib/api/admissions.functions";
import { toast } from "sonner";

const steps = [
  { n: "01", t: "Inquiry", d: "Tell us about your family in 2 minutes." },
  { n: "02", t: "School visit", d: "Walk the campus, meet the team, see a day unfold." },
  { n: "03", t: "Assessment", d: "A playful morning so we get to know your child." },
  { n: "04", t: "Enrollment", d: "Welcome. Your start date is the beginning of something." },
];

export function Admissions() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [tourDate, setTourDate] = useState("");
  const [program, setProgram] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{
    parentName?: string;
    email?: string;
    phone?: string;
    childName?: string;
    childAge?: string;
    tourDate?: string;
    program?: string;
  }>({});

  const [localSubmissions, setLocalSubmissions] = useState<AdmissionSubmission[]>([]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tinytech_bookings");
      if (saved) {
        setLocalSubmissions(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load local bookings:", e);
    }
  }, []);

  const getWhatsAppLink = () => {
    const formattedDate = new Date(tourDate).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const textMessage = `Hello Tiny Tech Play School! 🎒\n\nI would like to request a school tour. Here are the details of our inquiry:\n\n📝 *Parent Name:* ${parentName}\n📧 *Email:* ${email}\n📞 *Phone:* ${phone}\n👦 *Child's Name:* ${childName}\n👶 *Child's Age Range:* ${childAge} Years\n🏫 *Program Cohort:* ${program}\n🗓 *Preferred Tour Date:* ${formattedDate}\n💬 *Special Notes:* ${notes.trim() || "None"}\n\nLooking forward to coordinating our visit! Thank you!`;

    const schoolWhatsAppNumber = "9108124378478";
    return `https://wa.me/${schoolWhatsAppNumber}?text=${encodeURIComponent(textMessage)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form Validation
    const newErrors: typeof errors = {};
    if (!parentName.trim()) newErrors.parentName = "Parent name is required";
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(phone.replace(/[-+\s()]/g, ""))) {
      newErrors.phone = "Enter a valid phone number (10+ digits)";
    }

    if (!childName.trim()) newErrors.childName = "Child's name is required";
    if (!childAge.trim()) newErrors.childAge = "Child's age is required";
    if (!tourDate.trim()) newErrors.tourDate = "Tour date is required";
    if (!program.trim()) newErrors.program = "Program is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      // Invoke TanStack Start server function
      const res = await submitAdmission({
        data: {
          parentName,
          email,
          phone,
          childName,
          childAge,
          tourDate,
          program,
          notes: notes.trim() || undefined,
        },
      });

      if (res.success && res.data) {
        setStatus("success");
        toast.success("Tour request submitted successfully!");

        // Sync local storage
        const updated = [...localSubmissions, res.data as AdmissionSubmission];
        setLocalSubmissions(updated);
        localStorage.setItem("tinytech_bookings", JSON.stringify(updated));
      } else {
        setStatus("error");
        toast.error(res.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      toast.error("Connection failed. Please try again.");
    }
  };

  const handleCancelBooking = (id: string) => {
    const updated = localSubmissions.filter((x) => x.id !== id);
    setLocalSubmissions(updated);
    localStorage.setItem("tinytech_bookings", JSON.stringify(updated));
    toast.success("Tour request cancelled successfully.");
  };

  const clearForm = () => {
    setParentName("");
    setEmail("");
    setPhone("");
    setChildName("");
    setChildAge("");
    setTourDate("");
    setProgram("");
    setNotes("");
    setStatus("idle");
  };

  return (
    <section id="admissions" className="relative overflow-hidden py-28 bg-background">
      <div className="blob -left-20 top-20 h-96 w-96 bg-coral/10" />
      <div className="blob right-0 bottom-0 h-[28rem] w-[28rem] bg-sky/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/55 font-semibold">Admissions</span>
          <h2 className="mt-3 font-display text-5xl font-light leading-[1.1] tracking-tight md:text-7xl text-balance">
            Four steps from <span className="text-coral">curious</span> to confirmed.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-foreground/15 md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-foreground font-display text-2xl text-background transition-transform duration-300 group-hover:scale-105 shadow-md">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-foreground/65 text-pretty">{s.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Form and Submissions Area */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-10 rounded-[2rem] bg-foreground p-8 text-background md:grid-cols-12 md:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Info Side Panel - Column Span 5 */}
          <div className="md:col-span-5 flex flex-col justify-between h-full min-h-[300px] border-b border-background/10 pb-8 md:border-b-0 md:pb-0 md:border-r md:pr-10">
            <div>
              <h3 className="font-display text-4xl font-light leading-[1.1] tracking-tight md:text-5xl text-balance text-white">
                Come spend a morning with us.
              </h3>
              <p className="mt-4 text-sm text-background/70 leading-relaxed text-pretty">
                Tours run Tuesdays and Thursdays. Bring your child — they are an essential part of the conversation. Let's see how they play, interact, and discover our campus spaces!
              </p>
            </div>

            {/* Live bookings tracker */}
            <AnimatePresence>
              {localSubmissions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="mt-10 md:mt-6 pt-6 border-t border-background/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display text-lg tracking-tight text-white/95 flex items-center gap-2">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-coral animate-pulse" />
                      Active Tour Requests ({localSubmissions.length})
                    </h4>
                  </div>
                  <div className="space-y-3.5 max-h-[260px] overflow-y-auto pr-1 scrollbar-thin">
                    {localSubmissions.map((sub) => (
                      <motion.div
                        key={sub.id}
                        layoutId={`booking-${sub.id}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative rounded-2xl border border-background/10 bg-background/5 p-4 flex flex-col gap-2 hover:bg-background/10 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-coral bg-coral/10 px-2 py-0.5 rounded-full">
                            ID: {sub.id}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-mint font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                            Confirmed (Saved)
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white tracking-tight">{sub.childName}</p>
                          <p className="text-xs text-background/70 mt-0.5">
                            Age: {sub.childAge} yrs • Program: {sub.program}
                          </p>
                        </div>
                        <div className="flex items-center justify-between border-t border-background/5 pt-2 mt-1">
                          <span className="text-xs text-background/60 flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            {new Date(sub.tourDate).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <button
                            onClick={() => handleCancelBooking(sub.id)}
                            className="text-[10px] text-red-300 hover:text-red-400 font-semibold tracking-wide transition cursor-pointer hover:underline"
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Form Side - Column Span 7 */}
          <div className="md:col-span-7 relative h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-10 h-full"
                >
                  <div className="relative mb-6">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-coral/20 text-coral ring-8 ring-coral/10">
                      <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="font-display text-3xl tracking-tight text-white font-medium">Tour Request Confirmed!</h4>
                  <p className="mt-3 text-sm text-background/80 max-w-sm leading-relaxed text-pretty">
                    Thank you, <strong className="text-white">{parentName}</strong>! Your inquiry for <strong className="text-white">{childName}</strong> has been logged in our system. You can now send these details directly to our WhatsApp to speed up confirmation!
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-white px-6 py-4 text-sm font-semibold hover:bg-[#20ba56] transition duration-300 shadow-lg shadow-green-500/20 hover:scale-[1.02] cursor-pointer w-full sm:w-auto text-center"
                    >
                      <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.031 2C6.446 2 1.92 6.509 1.916 12.077c-.002 1.78.468 3.51 1.36 5.048L1.3 22.68l5.728-1.497c1.493.81 3.177 1.237 4.896 1.239h.005c5.584 0 10.111-4.509 10.116-10.078C22.05 6.509 17.519 2 12.031 2zm6.275 14.593c-.272.761-1.372 1.393-1.887 1.48-.48.081-.986.104-1.637-.156a9.71 9.71 0 0 1-4.079-2.507c-1.467-1.458-2.457-3.003-2.735-3.486-.277-.482-.03-.743.212-1.026.242-.283.486-.532.729-.798.242-.266.323-.456.486-.761.162-.304.081-.57-.041-.798-.121-.228-1.085-2.6-1.488-3.567-.393-.943-.794-.814-1.085-.828-.278-.014-.596-.015-.916-.015-.32 0-.84.12-1.28.601-.44.481-1.68 1.637-1.68 3.992 0 2.355 1.72 4.63 1.96 4.96.242.33 3.39 5.138 8.217 7.202 1.15.492 2.046.786 2.748.995 1.157.366 2.21.314 3.04.19.927-.138 2.853-1.159 3.258-2.28.405-1.121.405-2.083.284-2.284-.12-.2-.445-.316-.93-.561z"/>
                      </svg>
                      Send Details to WhatsApp
                    </a>
                    
                    <button
                      onClick={clearForm}
                      className="rounded-full border border-background/25 px-6 py-4 text-xs font-semibold hover:bg-background/10 transition duration-300 cursor-pointer text-white w-full sm:w-auto text-center"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form className="grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                  {/* Parent Name */}
                  <div className="relative flex flex-col">
                    <input
                      type="text"
                      value={parentName}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setParentName(e.target.value);
                        if (errors.parentName) setErrors((prev) => ({ ...prev, parentName: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 ${
                        errors.parentName ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15 hover:border-background/25"
                      }`}
                      placeholder="Parent's Full Name"
                    />
                    {errors.parentName && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.parentName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative flex flex-col">
                    <input
                      type="email"
                      value={email}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 ${
                        errors.email ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15 hover:border-background/25"
                      }`}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="relative flex flex-col">
                    <input
                      type="tel"
                      value={phone}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 ${
                        errors.phone ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15 hover:border-background/25"
                      }`}
                      placeholder="Contact Phone Number"
                    />
                    {errors.phone && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Child Name */}
                  <div className="relative flex flex-col">
                    <input
                      type="text"
                      value={childName}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setChildName(e.target.value);
                        if (errors.childName) setErrors((prev) => ({ ...prev, childName: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 ${
                        errors.childName ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15 hover:border-background/25"
                      }`}
                      placeholder="Child's Name"
                    />
                    {errors.childName && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.childName}
                      </span>
                    )}
                  </div>

                  {/* Child's Age Select */}
                  <div className="relative flex flex-col">
                    <select
                      value={childAge}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setChildAge(e.target.value);
                        if (errors.childAge) setErrors((prev) => ({ ...prev, childAge: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 appearance-none pr-10 cursor-pointer ${
                        errors.childAge ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15 hover:border-background/25"
                      }`}
                    >
                      <option value="" className="text-foreground bg-background">Child's Age Range</option>
                      <option value="1.5-2" className="text-foreground bg-background">1.5 - 2 Years (Toddler / Day Care)</option>
                      <option value="2-3" className="text-foreground bg-background">2 - 3 Years (Play Group)</option>
                      <option value="3-4" className="text-foreground bg-background">3 - 4 Years (Pre-KG)</option>
                      <option value="4-5" className="text-foreground bg-background">4 - 5 Years (LKG)</option>
                      <option value="5-6" className="text-foreground bg-background">5 - 6 Years (UKG)</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-background/60">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                    {errors.childAge && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.childAge}
                      </span>
                    )}
                  </div>

                  {/* Preferred Tour Date */}
                  <div className="relative flex flex-col">
                    <input
                      type="date"
                      value={tourDate}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setTourDate(e.target.value);
                        if (errors.tourDate) setErrors((prev) => ({ ...prev, tourDate: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 cursor-pointer ${
                        errors.tourDate ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15 hover:border-background/25"
                      }`}
                    />
                    {errors.tourDate && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.tourDate}
                      </span>
                    )}
                  </div>

                  {/* Program Cohort Select */}
                  <div className="relative flex flex-col sm:col-span-2">
                    <select
                      value={program}
                      disabled={status === "submitting"}
                      onChange={(e) => {
                        setProgram(e.target.value);
                        if (errors.program) setErrors((prev) => ({ ...prev, program: undefined }));
                      }}
                      className={`rounded-full border bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 appearance-none pr-10 cursor-pointer ${
                        errors.program ? "border-red-400 focus:ring-red-400 bg-red-500/5" : "border-background/15 hover:border-background/25"
                      }`}
                    >
                      <option value="" className="text-foreground bg-background">Program Cohort of Interest</option>
                      <option value="Day Care" className="text-foreground bg-background">Day Care (Montessori Method)</option>
                      <option value="Play Group" className="text-foreground bg-background">Play Group (2 - 3 Years)</option>
                      <option value="Pre KG" className="text-foreground bg-background">Pre KG (3 - 4 Years)</option>
                      <option value="LKG" className="text-foreground bg-background">LKG (4 - 5 Years)</option>
                      <option value="UKG" className="text-foreground bg-background">UKG (5 - 6 Years)</option>
                    </select>
                    <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-background/60">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                    {errors.program && (
                      <span className="absolute left-4 -bottom-4.5 text-[10px] text-red-300 font-semibold tracking-wide">
                        {errors.program}
                      </span>
                    )}
                  </div>

                  {/* Special Notes */}
                  <div className="relative flex flex-col sm:col-span-2">
                    <textarea
                      value={notes}
                      disabled={status === "submitting"}
                      onChange={(e) => setNotes(e.target.value)}
                      className="rounded-2xl border border-background/15 bg-background/5 px-5 py-3.5 text-sm text-white placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral transition-all duration-300 resize-none h-24 hover:border-background/25"
                      placeholder="Special requirements, dietary needs, or questions (Optional)"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-full bg-coral px-6 py-4 text-sm font-semibold text-background transition hover:bg-coral/90 sm:col-span-2 disabled:opacity-85 flex items-center justify-center gap-2.5 cursor-pointer shadow-md hover:scale-[1.01]"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Tour Request...
                      </>
                    ) : (
                      "Request a Tour"
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
