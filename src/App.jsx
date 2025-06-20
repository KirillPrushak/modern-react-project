import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CompanyLogo from './components/CompanyLogo';
import PurposeSection from './components/PurposeSection';
import FeaturesSections from './components/FeaturesSections';
import ScheduleSection from './components/ScheduleSection';
import MonitorSEction from './components/MonitorSEction';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr
      from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"
      ></div>
      <div className="overflow-hiddent">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSections />
        <ScheduleSection />
        <MonitorSEction />
        <PricingSection />
        <ServicesSection />
        <TestimonialSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
