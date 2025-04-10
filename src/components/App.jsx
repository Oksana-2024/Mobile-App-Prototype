import "./App.css";
import Footer from "./Footer/Footer";

import Header from "./Header/Header";
import SectionContactUs from "./SectionContactUs/SectionContactUs";
import SectionFeatures from "./SectionFeatures/SectionFeatures";
import SectionHero from "./SectionHero/SectionHero";
import SectionOurTeam from "./SectionOurTeam/SectionOurTeam";
import SectionReviews from "./SectionReviews/SectionReviews";
import SectionWatch from "./SectionWatch/SectionWatch";

function App() {
  return (
    <>
      <header>
        <Header />
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
    </>
  );
}

export default App;
