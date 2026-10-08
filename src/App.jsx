import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CalculatorSection from './components/CalculatorSection';
import About from './components/About';
import SocialSection from './components/SocialSection';
import VisitorCounter from './components/VisitorCounter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import SEOHead from './components/SEOHead';
import GstCalculatorPage from './pages/GstCalculatorPage';
import { getCurrentPath, usePathListener } from './utils/navigation';

export default function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const cleanup = usePathListener((path) => {
      setCurrentPath(path);
    });
    return cleanup;
  }, []);

  // Dedicated Route: /gst-calculator
  if (currentPath === '/gst-calculator') {
    return <GstCalculatorPage />;
  }

  // Default Homepage Route: /
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      {/* Dynamic SEO Meta & Schema for Home Route */}
      <SEOHead route="home" />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section */}
        <Services />

        {/* 3. Dedicated GST Calculator Section on Homepage */}
        <CalculatorSection />

        {/* 4. About Us & Why Choose Us Section */}
        <About />

        {/* 5. Social Media Section ("Connect With Us") */}
        <SocialSection />

        {/* 6. Website Visitor Counter Section (Isolated Reusable Component) */}
        <VisitorCounter />

        {/* 7. Contact Section (Call, WhatsApp, Get Directions, Form) */}
        <Contact />
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppFloating />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
