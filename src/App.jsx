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

export default function App() {
  return (
    <>
      <Analytics />
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
