export function Footer() {
  return (
    <footer className="pt-8 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-heading)' }}>
              VERDICT<span className="text-white/40">.</span>
            </div>
            <p className="text-slate-500 text-sm tracking-wide">
              Litigation intelligence for high-stakes federal disputes.
            </p>
          </div>
          
          <div>
            <div className="text-xs tracking-widest uppercase text-slate-400 mb-4">Platform</div>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-slate-500 hover:text-white transition-colors">Case Intelligence</a></div>
              <div><a href="#" className="text-slate-500 hover:text-white transition-colors">Jury Modeling</a></div>
              <div><a href="#" className="text-slate-500 hover:text-white transition-colors">Risk Analytics</a></div>
              <div><a href="#" className="text-slate-500 hover:text-white transition-colors">Trial Forecasting</a></div>
            </div>
          </div>
          
          <div>
            <div className="text-xs tracking-widest uppercase text-slate-400 mb-4">Contact</div>
            <div className="space-y-2 text-sm text-slate-500">
              <div>strategic@verdict.law</div>
              <div>+1 (202) 555-0147</div>
              <div>Washington, DC</div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 tracking-wide">
          <div>© 2026 VERDICT. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Engagement Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}