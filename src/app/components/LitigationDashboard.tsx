import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { AnimatedCounter } from './AnimatedCounter';

const trendData = [
  { x: 1, y: 20 },
  { x: 2, y: 35 },
  { x: 3, y: 28 },
  { x: 4, y: 45 },
  { x: 5, y: 52 },
  { x: 6, y: 68 },
  { x: 7, y: 75 },
];

interface DataCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  trend?: 'up' | 'down';
  showChart?: boolean;
  delay: number;
}

function DataCard({ title, value, suffix = '', prefix = '', decimals = 0, showChart = false, delay }: DataCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [secondsAgo, setSecondsAgo] = useState(4.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsAgo(prev => parseFloat((prev + 0.1).toFixed(1)));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-[rgba(18,24,43,0.7)] backdrop-blur-xl border border-white/10 p-6 relative group hover:border-white/20 transition-all overflow-hidden"
    >
      {/* Faint data-grid texture inside cards */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id={`grid-${title}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
        </svg>
      </div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="text-slate-500 text-xs tracking-wider uppercase">{title}</div>
        {/* Micro pulse animation on active metrics */}
        <motion.div
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-1.5 h-1.5 bg-white rounded-full"
        />
      </div>
      
      <div className="text-4xl mb-4 tracking-tighter relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
        {isInView && <AnimatedCounter end={value} decimals={decimals} prefix={prefix} suffix={suffix} />}
      </div>

      {showChart && (
        <div className="h-16 -mx-2 relative z-10">
          {/* Shimmer line on graph */}
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 2,
            }}
          />
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <Line
                type="monotone"
                dataKey="y"
                stroke="#9d6b53"
                strokeWidth={1.5}
                dot={false}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Timestamp indicator */}
      <div className="text-[10px] text-slate-600 mt-3 tracking-wide relative z-10">
        Updated {secondsAgo}s ago
      </div>
    </motion.div>
  );
}

export function LitigationDashboard() {
  return (
    <section className="-mt-12 pb-32 relative bg-gradient-to-b from-transparent to-[#12182b]/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl lg:text-7xl mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            Live Litigation Dashboard
          </h2>
          <p className="text-slate-500 text-lg tracking-normal">Real-time intelligence. Continuous insight.</p>
        </motion.div>

        {/* Staggered vertical alignment for rhythm */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="md:mt-0">
            <DataCard
              title="Jurisdiction Risk Score"
              value={73.4}
              decimals={1}
              showChart={true}
              delay={0}
            />
          </div>
          <div className="md:mt-6">
            <DataCard
              title="Judge Pattern Analysis"
              value={89}
              suffix="%"
              delay={0.1}
            />
          </div>
          <div className="md:mt-2">
            <DataCard
              title="Settlement Likelihood"
              value={64.2}
              suffix="%"
              decimals={1}
              delay={0.2}
            />
          </div>
          <div className="md:mt-8">
            <DataCard
              title="Trial Duration Forecast"
              value={18}
              suffix=" days"
              delay={0.3}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center text-slate-600 text-xs tracking-wider uppercase"
        >
          Updated in real-time • Encrypted • Attorney-client privileged
        </motion.div>
      </div>
    </section>
  );
}