import { motion } from 'motion/react';
import { GridBackground } from './GridBackground';
import { AnimatedCounter } from './AnimatedCounter';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      
      {/* Subtle horizontal line passing behind headline */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-8 relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-20 lg:gap-44 items-start">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl lg:text-9xl xl:text-[12rem] tracking-tighter mb-8 leading-[0.9]" style={{ fontFamily: 'var(--font-heading)' }}>
              Litigation.<br />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/8 inline-block scale-110 origin-left -ml-1" 
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
              >
                Modeled.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-400 mb-12 tracking-normal max-w-xl">
              Data-driven trial intelligence for high-value disputes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white hover:bg-slate-200 text-[#0a0e1a] transition-colors flex items-center justify-center gap-2 tracking-wide uppercase text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Request Strategic Review
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white transition-colors tracking-wide uppercase text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Explore Case Intelligence
              </button>
            </div>
          </motion.div>
          
          {/* Right: Live Data Panel with enhanced glass effect and depth */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[rgba(18,24,43,0.85)] backdrop-blur-2xl border border-white/20 p-8 relative lg:mt-24"
            style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.5)' }}
          >
            {/* "Live Modeling Active" indicator */}
            <div className="flex items-center gap-2 mb-6 text-[10px] tracking-widest uppercase text-slate-500">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-[#9d6b53] rounded-full"
              />
              Live Modeling Active
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-slate-500 text-xs tracking-wider uppercase mb-2">Cases Modeled</div>
                <div className="text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter end={1284} duration={2} />
                </div>
              </div>
              
              <div>
                <div className="text-slate-500 text-xs tracking-wider uppercase mb-2">Win Rate</div>
                <div className="text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter end={87.3} decimals={1} suffix="%" duration={2} />
                </div>
              </div>
              
              <div>
                <div className="text-slate-500 text-xs tracking-wider uppercase mb-2">Avg. Verdict Increase</div>
                <div className="text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter end={32} prefix="+" suffix="%" duration={2} />
                </div>
              </div>
              
              <div>
                <div className="text-slate-500 text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
                  Active Federal Cases
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-1 bg-white rounded-full"
                  />
                </div>
                <div className="text-5xl tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
                  <AnimatedCounter end={142} duration={2} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle structural divider */}
        <div className="mt-16 lg:mt-20 w-full h-px bg-white/10" />
      </div>
    </section>
  );
}