import { useState } from 'react';

import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MobileMenu from './MobileMenu/MobileMenu';
import SectionContactUs from './SectionContactUs/SectionContactUs';
import SectionFeatures from './SectionFeatures/SectionFeatures';
import SectionHero from './SectionHero/SectionHero';
import SectionOurTeam from './SectionOurTeam/SectionOurTeam';
import SectionReviews from './SectionReviews/SectionReviews';
import SectionWatch from './SectionWatch/SectionWatch';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <header>
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
      <main className="main">
        <SectionHero />
        <SectionFeatures />
        <SectionWatch />
        <SectionOurTeam />
        <SectionReviews />
        <SectionContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
}

export default App;
