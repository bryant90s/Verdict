import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseIntelligence } from './components/CaseIntelligence';
import { LitigationDashboard } from './components/LitigationDashboard';
import { CaseStudy } from './components/CaseStudy';
import { Methodology } from './components/Methodology';
import { Testimonials } from './components/Testimonials';
import { Security } from './components/Security';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <CaseIntelligence />
      <LitigationDashboard />
      <CaseStudy />
      <Methodology />
      <Testimonials />
      <Security />
      <FinalCTA />
      <Footer />
    </div>
  );
}
