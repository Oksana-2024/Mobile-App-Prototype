import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import { Layout } from "./Layout";

const Home = lazy(() => import("./Pages/HomePage"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
