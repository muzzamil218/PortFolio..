import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-sky-950/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(56,189,248,0.1),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-sky-400 uppercase bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1.5 w-16 bg-sky-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/40 border border-sky-500/10 rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Let's build something exceptional!</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I am actively seeking professional junior frontend developer roles in software houses. If you have any inquiries, project proposals, or opportunities, feel free to send a message.
              </p>

              <div className="space-y-4 pt-4 border-t border-sky-500/10">
                <a
                  href="mailto:muzzamilqureshi53@gmail.com"
                  className="flex items-center gap-4 p-3 bg-slate-950/60 rounded-xl border border-sky-500/5 hover:border-sky-500/20 transition-all group"
                >
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg group-hover:bg-sky-500 group-hover:text-slate-950 transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email Address</span>
                    <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">muzzamilqureshi53@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 bg-slate-950/60 rounded-xl border border-sky-500/5">
                  <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-bold text-white">Lahore, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-sky-500/10 rounded-2xl p-6">
              <h4 className="text-sm font-bold font-mono text-sky-400 uppercase tracking-wider mb-4">Follow My Coding Journey</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/muzzamil218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-slate-950 hover:bg-slate-900 rounded-xl border border-sky-500/10 hover:border-sky-500/30 text-slate-400 hover:text-white transition-all font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub Profile
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-slate-950 hover:bg-slate-900 rounded-xl border border-sky-500/10 hover:border-sky-500/30 text-slate-400 hover:text-white transition-all font-mono text-xs font-bold flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 border border-sky-500/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Send a Quick Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-sky-500/15 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-slate-950 border border-sky-500/15 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity / Collaboration"
                    className="w-full bg-slate-950 border border-sky-500/15 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950 border border-sky-500/15 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                  />
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-bold font-mono text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-sky-500/10 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-sky-950/25 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <span>&copy; {new Date().getFullYear()} Muzzamil Qureshi. All Rights Reserved.</span>
          <div className="flex gap-6">
            <span>Built with React 19 & Tailwind v4</span>
            <span>Based in Lahore, PK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
