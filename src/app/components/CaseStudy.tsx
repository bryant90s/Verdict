import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { AnimatedCounter } from './AnimatedCounter';

interface MetricCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  delay: number;
  size?: 'small' | 'medium' | 'large';
}

function MetricCard({ value, label, prefix = '', suffix = '', delay, size = 'medium' }: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sizeClasses = {
    small: 'text-4xl lg:text-5xl',
    medium: 'text-5xl lg:text-6xl',
    large: 'text-6xl lg:text-7xl',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay }}
      className="p-8 bg-[rgba(18,24,43,0.5)] backdrop-blur-sm border border-white/10"
    >
      <div className={`${sizeClasses[size]} mb-3 tracking-tighter`} style={{ fontFamily: 'var(--font-heading)' }}>
        {prefix}
        {isInView && value.includes('.') ? (
          <AnimatedCounter end={parseFloat(value)} decimals={1} suffix={suffix} />
        ) : (
          value
        )}
        {!value.includes('.') && suffix}
      </div>
      <div className="text-slate-400 tracking-wide uppercase text-xs">{label}</div>
    </motion.div>
  );
}

export function CaseStudy() {
  return (
    <section className="pb-32 pt-32 relative overflow-visible">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <div className="inline-block px-4 py-1 border border-white/20 mb-8">
            <span className="text-slate-400 text-xs tracking-wider uppercase">Federal Product Liability Case</span>
          </div>
          
          {/* Thin vertical line intersecting composition */}
          <div className="absolute left-[30%] top-20 h-[400px] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          
          {/* Dramatically oversized number - 15% increase, allow overlap */}
          <h2 className="text-[9.5rem] lg:text-[16rem] xl:text-[21rem] mb-8 tracking-tighter leading-none relative" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="font-thin opacity-80" style={{ fontWeight: 300 }}>$</span>214M
          </h2>
          
          <p className="text-3xl tracking-tight mb-4">Verdict Secured.</p>
          
          <p className="text-slate-500 text-base max-w-2xl tracking-normal leading-relaxed">
            Strategic modeling resulted in unprecedented jury award. Trial analytics identified key inflection points that shaped opening strategy and witness sequencing.
          </p>
        </motion.div>

        {/* Asymmetric metrics layout with increased tension */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          <div className="md:col-span-1">
            <MetricCard value="+41" suffix="%" label="Jury Award Increase" delay={0.2} size="large" />
          </div>
          <div className="md:col-span-1 md:mt-16">
            <MetricCard value="−22" suffix="%" label="Pre-Trial Exposure" delay={0.3} size="medium" />
          </div>
          <div className="md:col-span-1 md:mt-8">
            <MetricCard value="3.7" suffix="x" label="ROI on Strategy Modeling" delay={0.4} size="small" />
          </div>
        </div>
      </div>
    </section>
  );
}