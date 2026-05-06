import { motion } from "framer-motion";
import { Code, Server, GitBranch, Layout, Flame, Box } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      name: "React 19",
      icon: Code,
      level: "95%",
      desc: "Modern functional components, hooks, concurrent features, and state management.",
      color: "from-sky-400 to-sky-600"
    },
    {
      name: "JavaScript ES6",
      icon: Flame,
      level: "90%",
      desc: "Asynchronous patterns, DOM operations, array methods, and functional patterns.",
      color: "from-sky-300 to-sky-500"
    },
    {
      name: "Bootstrap 5",
      icon: Box,
      level: "95%",
      desc: "Responsive grid systems, custom utility wrappers, and rapid UI development.",
      color: "from-sky-500 to-sky-700"
    },
    {
      name: "HTML5 & CSS3",
      icon: Layout,
      level: "98%",
      desc: "Semantic markups, flexbox/grid layout design, transitions, and media queries.",
      color: "from-sky-400 to-sky-600"
    },
    {
      name: "MongoDB",
      icon: Server,
      level: "85%",
      desc: "Document modeling, collections management, and integration with backend APIs.",
      color: "from-sky-300 to-sky-500"
    },
    {
      name: "GitHub",
      icon: GitBranch,
      level: "92%",
      desc: "Branching workflows, issue tracking, continuous integration, and team collaboration.",
      color: "from-sky-400 to-sky-600"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-sky-400 uppercase bg-sky-500/10 px-3.5 py-1.5 rounded-full border border-sky-500/20">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 tracking-tight">
            Core Technical Skills
          </h2>
          <div className="h-1.5 w-16 bg-sky-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="group relative bg-slate-900/40 hover:bg-slate-900 border border-sky-500/10 hover:border-sky-500/30 rounded-2xl p-6 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-sky-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-start justify-between relative z-10">
                  <div className="p-3.5 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20 group-hover:scale-110 group-hover:border-sky-500/40 transition-all duration-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                    {skill.level}
                  </span>
                </div>

                <div className="mt-5 relative z-10">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-6 relative z-10 space-y-1.5">
                  <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
