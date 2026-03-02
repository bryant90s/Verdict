import { motion } from 'motion/react';
import { Shield, Lock, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Legal-Grade Data Encryption',
    description: 'AES-256 encryption at rest and in transit. Zero-knowledge architecture ensures VERDICT cannot access unencrypted client data.',
  },
  {
    icon: Shield,
    title: 'Private Modeling Environment',
    description: 'Isolated compute instances per matter. No cross-contamination between cases. Data purged on engagement completion.',
  },
  {
    icon: FileCheck,
    title: 'Attorney-Client Privilege Compliant',
    description: 'Work product doctrine protection. Engagement structured as litigation consulting. Discoverable safeguards in place.',
  },
];

export function Security() {
  return (
    <section className="pt-20 pb-12 relative bg-gradient-to-b from-transparent to-[#12182b]/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Subtle section divider with spacing */}
        <div className="mb-4">
          <div className="h-px bg-white/[0.08] w-full" />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl lg:text-7xl mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            Security & Confidentiality
          </h2>
          <p className="text-slate-500 text-lg tracking-normal">Privilege-protected. Enterprise-grade. Absolute discretion.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-[rgba(18,24,43,0.5)] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center border border-white/20">
                  <feature.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed tracking-normal">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 p-8 border border-white/10 text-center relative"
            style={{ 
              background: 'linear-gradient(145deg, rgba(18,24,43,0.4), rgba(18,24,43,0.2))',
              boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.05)'
            }}
          >
            <div className="flex items-center justify-center gap-8 text-slate-600 text-xs tracking-widest uppercase">
              <span className="px-4 py-2 border border-white/10" style={{ 
                background: 'linear-gradient(145deg, rgba(26,34,56,0.3), rgba(10,14,26,0.3))',
                boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.05), 1px 1px 3px rgba(0,0,0,0.4)'
              }}>
                SOC 2 Type II
              </span>
              <span className="text-white/20">|</span>
              <span className="px-4 py-2 border border-white/10" style={{ 
                background: 'linear-gradient(145deg, rgba(26,34,56,0.3), rgba(10,14,26,0.3))',
                boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.05), 1px 1px 3px rgba(0,0,0,0.4)'
              }}>
                ISO 27001
              </span>
              <span className="text-white/20">|</span>
              <span className="px-4 py-2 border border-white/10" style={{ 
                background: 'linear-gradient(145deg, rgba(26,34,56,0.3), rgba(10,14,26,0.3))',
                boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.05), 1px 1px 3px rgba(0,0,0,0.4)'
              }}>
                HIPAA Compliant
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}