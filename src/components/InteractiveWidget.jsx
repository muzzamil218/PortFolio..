import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Plus, Minus, Grid, Sparkles, HelpCircle } from "lucide-react";

export default function InteractiveWidget() {
  const [activeTab, setActiveTab] = useState("counter");
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [hoveredCell, setHoveredCell] = useState(null);

  const getCellLabel = (row, col) => {
    const files = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];
    return `${files[col]}${ranks[row]}`;
  };

  return (
    <section className="relative py-20 bg-slate-950 border-t border-sky-950/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-slate-900/40 border border-sky-500/15 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-sky-500/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono font-bold rounded-lg border border-sky-500/15 mb-2">
                <Sparkles className="h-3 w-3" />
                Live Demo Sandbox
              </div>
              <h3 className="text-xl font-black text-white">Interactive Component Sandbox</h3>
              <p className="text-xs text-slate-400 mt-1 font-sans">Experience live components representing my featured project solutions.</p>
            </div>

            <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-sky-500/10 shrink-0">
              <button
                onClick={() => setActiveTab("counter")}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${activeTab === "counter" ? "bg-sky-500 text-slate-950" : "text-slate-400 hover:text-white"}`}
              >
                <Plus className="h-3.5 w-3.5" />
                React Counter
              </button>
              <button
                onClick={() => setActiveTab("chessboard")}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${activeTab === "chessboard" ? "bg-sky-500 text-slate-950" : "text-slate-400 hover:text-white"}`}
              >
                <Grid className="h-3.5 w-3.5" />
                Chessboard UI
              </button>
            </div>
          </div>

          <div className="min-h-[280px] flex items-center justify-center">
            {activeTab === "counter" ? (
              <div className="text-center w-full max-w-sm mx-auto space-y-6">
                <div className="p-6 bg-slate-950 rounded-2xl border border-sky-500/10">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Current State</span>
                  <motion.div
                    key={count}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl font-black text-white font-mono tracking-tight"
                  >
                    {count}
                  </motion.div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setCount((prev) => prev - step)}
                    className="p-3 bg-slate-900 hover:bg-slate-850 text-sky-400 rounded-xl border border-sky-500/10 hover:border-sky-500/30 transition-all cursor-pointer"
                  >
                    <Minus className="h-5 w-5" />
                  </button>

                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-950 rounded-xl border border-sky-500/10">
                    <span className="text-xs font-mono text-slate-500">Step:</span>
                    <select
                      value={step}
                      onChange={(e) => setStep(Number(e.target.value))}
                      className="bg-transparent text-sky-400 font-mono font-bold text-xs outline-none cursor-pointer"
                    >
                      <option value={1} className="bg-slate-950 text-white">1</option>
                      <option value={5} className="bg-slate-950 text-white">5</option>
                      <option value={10} className="bg-slate-950 text-white">10</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setCount((prev) => prev + step)}
                    className="p-3 bg-slate-900 hover:bg-slate-850 text-sky-400 rounded-xl border border-sky-500/10 hover:border-sky-500/30 transition-all cursor-pointer"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                <button
                  onClick={() => setCount(0)}
                  className="px-4 py-2 text-xs font-mono font-bold text-slate-500 hover:text-sky-400 transition-colors inline-flex items-center gap-1.5 mx-auto"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset Counter
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="grid grid-cols-8 gap-[1px] bg-sky-950 p-1.5 rounded-2xl border border-sky-500/20 shadow-inner max-w-[280px] w-full aspect-square">
                  {Array.from({ length: 64 }).map((_, idx) => {
                    const row = Math.floor(idx / 8);
                    const col = idx % 8;
                    const isDark = (row + col) % 2 === 1;
                    const cellName = getCellLabel(row, col);

                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredCell(cellName)}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`aspect-square transition-all duration-200 cursor-pointer rounded-sm flex items-center justify-center text-[9px] font-mono font-bold ${hoveredCell === cellName ? "bg-sky-400 text-slate-950 scale-105 shadow-md shadow-sky-400/50" : isDark ? "bg-slate-900 text-slate-500" : "bg-sky-950/20 text-sky-400/60"}`}
                      >
                        {col === 0 && <span className="absolute left-1 text-[8px] opacity-40">{8 - row}</span>}
                        {row === 7 && <span className="absolute bottom-1 text-[8px] opacity-40">{["A", "B", "C", "D", "E", "F", "G", "H"][col]}</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="flex-1 max-w-xs space-y-4 text-center md:text-left">
                  <div className="p-4 bg-slate-950 rounded-xl border border-sky-500/10 min-h-[92px] flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Hover Coordinate</span>
                    {hoveredCell ? (
                      <span className="text-3xl font-black text-sky-400 font-mono tracking-wide">{hoveredCell}</span>
                    ) : (
                      <span className="text-sm font-medium text-slate-400 italic">Hover board to inspect coordinates</span>
                    )}
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-400 text-left">
                    <HelpCircle className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Calculates perfect grid coordinates dynamically using pure responsive JSX rendering.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
