import { motion } from "framer-motion";
import { ArrowDown, Mail, Calendar, MapPin, Briefcase } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="summary" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] opacity-70" />
        <div className="absolute -bottom-10 left-[10%] w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[100px] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(#082f49_1px,transparent_1px)] [background-size:16px_16px] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full w-fit mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">Available for New Roles</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Designing the Future <br />
              of the Web with <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-500 bg-clip-text text-transparent drop-shadow-sm">Sky Blue Precision</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed">
              I am <span className="font-semibold text-white">Muzzamil Qureshi</span>, a highly motivated Junior Frontend Developer committed to professional growth and effective time management. I build blazing fast, interactive, and beautifully polished user interfaces.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={handleScrollToProjects}
                className="px-6 py-3.5 bg-gradient-to-r from-sky-500 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-bold font-mono rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-400/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-sm cursor-pointer"
              >
                View Selected Works
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-white font-mono font-bold rounded-xl border border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 text-center text-sm flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-900">
              <div className="flex flex-col">
                <span className="text-sky-400 text-2xl font-black font-mono">100%</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-mono">Dedication</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sky-400 text-2xl font-black font-mono">3+ Mon</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-mono">Trainee Exp</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-sky-400 text-2xl font-black font-mono">7+ Live</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-mono">Projects Built</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-slate-900/60 border border-sky-500/10 shadow-2xl p-6 flex flex-col justify-between backdrop-blur-sm group hover:border-sky-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-500 pointer-events-none" />

              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest text-sky-400 font-mono font-bold uppercase">Candidate Profile</span>
                  <h3 className="text-xl font-bold text-white">Muzzamil Qureshi</h3>
                  <p className="text-xs text-slate-400 font-mono">Frontend Specialist</p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-inner">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-4 my-6">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="h-4.5 w-4.5 text-sky-400 shrink-0" />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Calendar className="h-4.5 w-4.5 text-sky-400 shrink-0" />
                  <span>Virtual University (2025-2027)</span>
                </div>
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Growth & Commitment</span>
                    <span className="text-sky-400 font-bold">100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-sky-500 to-sky-300"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-sky-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Time Management</span>
                <span className="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 font-bold">Excellent</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
