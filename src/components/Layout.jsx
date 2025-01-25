import { Suspense } from "react";
import Footer from "./Footer/Footer";
import  Header  from "./Header/Header";


export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <Suspense> {children}</Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
