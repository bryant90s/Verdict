import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,14,26,0.8)] backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <div className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
          VERDICT<span className="text-white/40">.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase">
          <a href="#intelligence" className="text-slate-500 hover:text-white transition-colors">Intelligence</a>
          <a href="#methodology" className="text-slate-500 hover:text-white transition-colors">Methodology</a>
          <a href="#security" className="text-slate-500 hover:text-white transition-colors">Security</a>
          <button className="px-6 py-2 border border-white/20 text-white hover:bg-white hover:text-[#0a0e1a] transition-colors">
            Contact
          </button>
        </nav>
      </div>
    </motion.header>
  );
}