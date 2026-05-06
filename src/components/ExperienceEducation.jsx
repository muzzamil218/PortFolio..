import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, CheckCircle, MapPin } from "lucide-react";

export default function ExperienceEducation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-sky-400 uppercase bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 tracking-tight">
            Experience & Education
          </h2>
          <div className="h-1.5 w-16 bg-sky-500 rounded-full mx-auto" />
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-sky-500/15">
              <div className="p-2.5 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-black text-white">Professional Experience</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-sky-500/20 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-950 border-4 border-sky-400 shadow-md shadow-sky-400/50" />
                <div className="bg-slate-900/40 hover:bg-slate-900/60 border border-sky-500/10 hover:border-sky-500/20 rounded-2xl p-6 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">Web Developer Trainee</h4>
                      <p className="text-sm text-sky-400 font-mono font-medium">Corvit High Tech</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono rounded-full border border-sky-500/20">
                      <Calendar className="h-3 w-3" />
                      3 Months
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 font-light leading-relaxed">
                    Developed responsive business sites and high-fidelity user interface designs. Focused heavily on responsive modern layout principles, cross-browser support, and user experience paradigms.
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>Built fully responsive business landings utilizing CSS Grid & Bootstrap 5 templates.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>Optimized assets and stylesheet rules to improve mobile load speeds and responsiveness.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>Collaborated on dynamic front-end state management using JavaScript ES6.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-sky-500/15">
              <div className="p-2.5 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-black text-white">Education & Foundation</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-sky-500/20 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-950 border-4 border-sky-400 shadow-md shadow-sky-400/50" />
                <div className="bg-slate-900/40 hover:bg-slate-900/60 border border-sky-500/10 hover:border-sky-500/20 rounded-2xl p-6 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">Bachelor of Science in Computer Science (BSCS)</h4>
                      <p className="text-sm text-sky-400 font-mono font-medium">Virtual University</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono rounded-full border border-sky-500/20">
                      <Calendar className="h-3 w-3" />
                      2025 - 2027
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 font-light leading-relaxed">
                    Undergoing continuous fundamental training in data structures, algorithms, databases, web programming, and computational concepts.
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="h-4 w-4 text-sky-400" />
                    <span>Lahore Campus / Hybrid</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
