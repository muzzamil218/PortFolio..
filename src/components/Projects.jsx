import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projectsData = [
    {
      title: "Task Manager",
      url: "https://task-1am7o0zvz-muzzamil218s-projects.vercel.app/",
      tech: ["React 19", "CSS3", "State Management"],
      category: "React",
      desc: "Robust productivity dashboard featuring dynamic tasks creation, prioritization indicators, status updates, and interactive feedback loops."
    },
    {
      title: "News App",
      url: "https://news-bldwofy3h-muzzamil218s-projects.vercel.app/",
      tech: ["React 19", "JavaScript ES6", "REST APIs"],
      category: "React",
      desc: "Live aggregator presenting real-time headlines with smart category filtering, responsive article cards, and quick navigation grids."
    },
    {
      title: "React Counter",
      url: "https://react-counter-r3h9cvvjm-muzzamil218s-projects.vercel.app/",
      tech: ["React 19", "CSS3", "Interactive State"],
      category: "React",
      desc: "A highly responsive interactive counter showcasing component states, multiple step increments, limits, and minimalist clean layouts."
    },
    {
      title: "Theme Switcher",
      url: "https://muzzamil218.github.io/Professional-Light-And-dark-mode/",
      tech: ["JavaScript ES6", "CSS3", "Web Storage"],
      category: "JavaScript",
      desc: "A clean utility demonstration showing professional, seamless theme toggles, persisting selections locally, and synchronized transitions."
    },
    {
      title: "DOM Project",
      url: "https://muzzamil218.github.io/dom-project../",
      tech: ["HTML5", "JavaScript ES6", "Animations"],
      category: "JavaScript",
      desc: "An interactive DOM operations showcase highlighting direct dynamic creations, updates, style mutations, and event-listeners."
    },
    {
      title: "Chessboard",
      url: "https://muzzamil218.github.io/Chessboard/",
      tech: ["HTML5", "CSS3", "Grid Layout"],
      category: "Responsive UI",
      desc: "A pixel-perfect responsive chessboard matrix rendered dynamically to highlight board cell patterns, coordinates, and styling models."
    },
    {
      title: "Business Site",
      url: "https://muzzamil218.github.io/bootstrap-file/",
      tech: ["Bootstrap 5", "HTML5", "Sass"],
      category: "Responsive UI",
      desc: "A polished and responsive landing page for enterprises leveraging Bootstrap grid models, navigation headers, and flexible sections."
    }
  ];

  const categories = ["All", "React", "JavaScript", "Responsive UI"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-sky-400 uppercase bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 tracking-tight">
            Selected Live Projects
          </h2>
          <div className="h-1.5 w-16 bg-sky-500 rounded-full mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl border transition-all duration-300 font-bold ${filter === cat ? "bg-sky-500/10 text-sky-400 border-sky-500/40 shadow-md shadow-sky-500/5" : "bg-slate-900/40 text-slate-400 border-sky-500/5 hover:text-white hover:border-sky-500/25"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-slate-900/40 hover:bg-slate-900 border border-sky-500/10 hover:border-sky-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Demo
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <Sparkles className="h-4 w-4 text-sky-400/40 group-hover:text-sky-400 transition-colors" />
                  </h3>

                  <p className="text-slate-400 text-sm mt-3 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono font-medium text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-sky-500/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-sky-500/10 hover:bg-sky-500 hover:text-slate-950 text-sky-400 font-bold font-mono text-xs rounded-xl border border-sky-500/20 hover:border-sky-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    Launch Live Site
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
