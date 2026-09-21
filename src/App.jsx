import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Ticker from './components/Ticker';
import Portfolio from './components/Portfolio';
import AtelierReel from './components/AtelierReel';
import Process from './components/Process';
import Tools from './components/Tools';
import Training from './components/Training';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Ticker />
        <Portfolio />
        <AtelierReel />
        <Process />
        <Tools />
        <Training />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
