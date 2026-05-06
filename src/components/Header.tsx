import { useState, useEffect } from "react";
import { Menu, X, Code, Sparkles } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "summary", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/85 backdrop-blur-md border-b border-sky-950/40 py-3 shadow-lg shadow-sky-950/20" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleNavClick("summary")}>
            <div className="p-2 bg-gradient-to-br from-sky-500/10 to-sky-500/20 rounded-xl border border-sky-500/30 shadow-inner">
              <Code className="h-5 w-5 text-sky-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wide flex items-center gap-1.5">
                Muzzamil Qureshi
                <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-sky-400 font-semibold font-mono">
                Junior Frontend Developer
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1 font-mono">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 relative ${activeSection === item.id ? "text-sky-400 font-bold" : "text-slate-400 hover:text-white"}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-500 to-sky-300 rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-4 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-medium text-sm border border-sky-500/30 hover:border-sky-500/50 transition-all duration-300"
            >
              Hire Me
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-sky-950/40 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 font-mono">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-base transition-all ${activeSection === item.id ? "text-sky-400 bg-sky-500/10 font-bold" : "text-slate-400 hover:text-white hover:bg-slate-900"}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-center mt-4 px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold transition-all"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
