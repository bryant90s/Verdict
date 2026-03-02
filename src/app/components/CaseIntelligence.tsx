import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const juryData = [
  { time: 'T1', value: 20 },
  { time: 'T2', value: 35 },
  { time: 'T3', value: 45 },
  { time: 'T4', value: 65 },
  { time: 'T5', value: 78 },
  { time: 'T6', value: 85 },
];

const outcomeData = [
  { scenario: 'S1', prob: 45 },
  { scenario: 'S2', prob: 68 },
  { scenario: 'S3', prob: 82 },
  { scenario: 'S4', prob: 54 },
];

const riskData = [
  { quarter: 'Q1', risk: 30 },
  { quarter: 'Q2', risk: 45 },
  { quarter: 'Q3', risk: 38 },
  { quarter: 'Q4', risk: 25 },
];

interface PanelProps {
  title: string;
  description: string;
  chart: 'line' | 'bar';
  data: any[];
  delay: number;
}

function IntelligencePanel({ title, description, chart, data, delay }: PanelProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[rgba(18,24,43,0.7)] backdrop-blur-xl border border-white/10 p-8 transition-all duration-300 hover:border-white/20"
    >
      <div className="mb-6">
        <h3 className="text-2xl mb-2 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>{title}</h3>
        <p className="text-slate-500 text-sm tracking-normal">{description}</p>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          {chart === 'line' ? (
            <LineChart data={data}>
              <XAxis dataKey={Object.keys(data[0])[0]} stroke="#8b92a8" tick={{ fill: '#8b92a8' }} />
              <YAxis stroke="#8b92a8" tick={{ fill: '#8b92a8' }} />
              <Line
                type="monotone"
                dataKey={Object.keys(data[0])[1]}
                stroke="#9d6b53"
                strokeWidth={1.5}
                dot={{ fill: '#9d6b53', r: 3 }}
                animationDuration={1500}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <XAxis dataKey={Object.keys(data[0])[0]} stroke="#8b92a8" tick={{ fill: '#8b92a8' }} />
              <YAxis stroke="#8b92a8" tick={{ fill: '#8b92a8' }} />
              <Bar dataKey={Object.keys(data[0])[1]} fill="#9d6b53" animationDuration={1500} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden mt-4 pt-4 border-t border-white/10"
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>94%</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)' }}>2.4x</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Impact</div>
          </div>
          <div>
            <div className="text-2xl text-white" style={{ fontFamily: 'var(--font-heading)' }}>342</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Cases</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CaseIntelligence() {
  return (
    <section className="-mt-12 pb-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl lg:text-7xl mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            Case Intelligence Engine
          </h2>
          <p className="text-slate-500 text-xl tracking-normal">Predictive modeling at scale</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <IntelligencePanel
            title="Jury Behavior Modeling"
            description="Predictive analysis of jury decision patterns based on demographics, case type, and jurisdiction."
            chart="line"
            data={juryData}
            delay={0}
          />
          <IntelligencePanel
            title="Outcome Probability Simulation"
            description="Monte Carlo simulations across multiple trial scenarios to forecast verdict ranges."
            chart="bar"
            data={outcomeData}
            delay={0.15}
          />
          <IntelligencePanel
            title="Pre-Trial Risk Forecasting"
            description="Quantitative risk assessment of settlement vs. trial exposure across time horizons."
            chart="line"
            data={riskData}
            delay={0.3}
          />
        </div>
        
        {/* Subtle structural divider */}
        <div className="mt-16 lg:mt-20 w-full h-px bg-white/10" />
      </div>
    </section>
  );
}