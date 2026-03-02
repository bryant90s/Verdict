import { motion } from 'motion/react';
import { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Data Acquisition',
    description: 'Comprehensive discovery intake, jurisdiction analysis, and historical case pattern extraction.',
  },
  {
    number: '02',
    title: 'Pattern Analysis',
    description: 'Machine learning models identify behavioral trends across judges, juries, and opposing counsel.',
  },
  {
    number: '03',
    title: 'Jury Simulation',
    description: 'Monte Carlo simulations model verdict outcomes across thousands of trial scenarios.',
  },
  {
    number: '04',
    title: 'Trial Strategy Deployment',
    description: 'Data-driven recommendations inform opening statements, witness order, and settlement timing.',
  },
];

export function Methodology() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="pt-20 pb-12 relative bg-gradient-to-b from-[#12182b]/30 to-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl lg:text-7xl mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            Methodology
          </h2>
          <p className="text-slate-500 text-lg tracking-normal">Systematic. Repeatable. Defensible.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10" />
          
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className="group relative"
              >
                <div className="flex gap-8 p-8 pl-20 relative">
                  {/* Large ghosted numbers behind text */}
                  <div className="absolute left-0 top-0 text-[12rem] leading-none tracking-tighter opacity-5 select-none pointer-events-none" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.number}
                  </div>
                  
                  {/* Timeline node */}
                  <div className={`absolute left-6 top-12 w-5 h-5 border-2 rounded-full transition-all duration-300 ${
                    hoveredStep === index ? 'border-white bg-white' : 'border-white/30 bg-transparent'
                  }`} />
                  
                  <div className="flex-1 relative z-10">
                    <h3
                      className={`text-3xl mb-2 tracking-tight transition-colors duration-300 ${
                        hoveredStep === index ? 'text-white' : 'text-slate-400'
                      }`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-500 tracking-normal leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}