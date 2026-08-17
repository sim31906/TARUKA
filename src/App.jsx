import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Highlights from './components/Highlights';
import StoreFormats from './components/StoreFormats';
import Branches from './components/Branches';
import Investment from './components/Investment';
import ROI from './components/ROI';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactFab from './components/ContactFab';
import Analytics from './components/Analytics';
import MenuPage from './pages/MenuPage';

function MainPage() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.state?.scrollTo) window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main id="app">
        <Hero />
        <About />
        <Menu />
        <Highlights />
        <StoreFormats />
        <Branches />
        <Investment />
        <ROI />
        <Support />
        <Contact />
      </main>
      <Footer />
      <ContactFab />
    </>
  );
}

export default function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </>
  );
}
