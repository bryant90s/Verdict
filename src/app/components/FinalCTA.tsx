import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="pt-16 pb-12 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-7xl lg:text-8xl xl:text-9xl mb-12 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            Win With <span className="text-white">Certainty.</span>
          </h2>
          
          <div className="mb-12">
            <button className="px-12 py-5 bg-white hover:bg-slate-200 text-[#0a0e1a] transition-colors inline-flex items-center gap-3 text-lg tracking-wide uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Begin Strategic Review
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-slate-600 text-xs tracking-wider uppercase">
            <span>Confidential</span>
            <span className="text-white/20">•</span>
            <span>Secure</span>
            <span className="text-white/20">•</span>
            <span>Data-Driven</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom grid */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}