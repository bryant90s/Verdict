import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "The predictive modeling fundamentally changed our trial strategy. We secured a verdict 40% higher than initial demand.",
    author: "Michael Chen",
    role: "Lead Trial Counsel",
    firm: "Fortune 50 Product Liability Defense",
  },
  {
    quote: "VERDICT's jury simulation identified risks we hadn't considered. Settlement came at terms we never thought possible.",
    author: "Sarah Martinez",
    role: "General Counsel",
    firm: "Healthcare System, $8B Revenue",
  },
  {
    quote: "Their pattern analysis on opposing counsel was surgical. We knew their playbook before they executed it.",
    author: "David Thompson",
    role: "Managing Partner",
    firm: "Federal Securities Litigation",
  },
];

export function Testimonials() {
  return (
    <section className="-mt-12 pb-6 pt-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Subtle structural divider */}
        <div className="mb-16 lg:mb-20 w-full h-px bg-white/10" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl lg:text-7xl mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
            Client Impact
          </h2>
        </motion.div>

        {/* Symmetric 2-column grid layout with centered third card */}
        <div className="max-w-6xl mx-auto">
          {/* First row: two cards side by side */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 mb-12 lg:mb-16">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-white/10 bg-[rgba(18,24,43,0.3)] p-8 h-full flex flex-col"
              >
                {/* Thin divider on top */}
                <div className="w-12 h-px bg-white/20 mb-8" />
                
                <div className="mb-8 flex-grow">
                  <p className="text-white leading-relaxed italic text-lg">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="text-sm tracking-wider uppercase text-slate-400 mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-xs tracking-wide text-slate-500">
                    {testimonial.role}
                  </div>
                  <div className="text-xs tracking-wide text-slate-600">
                    {testimonial.firm}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row: centered third card */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-white/10 bg-[rgba(18,24,43,0.3)] p-8 w-full lg:w-[calc(50%-1.75rem)] flex flex-col"
            >
              {/* Thin divider on top */}
              <div className="w-12 h-px bg-white/20 mb-8" />
              
              <div className="mb-8 flex-grow">
                <p className="text-white leading-relaxed italic text-lg">
                  {testimonials[2].quote}
                </p>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <div className="text-sm tracking-wider uppercase text-slate-400 mb-1">
                  {testimonials[2].author}
                </div>
                <div className="text-xs tracking-wide text-slate-500">
                  {testimonials[2].role}
                </div>
                <div className="text-xs tracking-wide text-slate-600">
                  {testimonials[2].firm}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}