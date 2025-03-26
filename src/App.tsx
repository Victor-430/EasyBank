import "./index.css";

import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { Section } from "./components/Section.tsx";
import { Articles } from "./components/Articles.tsx";

export const App = () => {
  return (
    <div className="overflow-x-hidden font-sans">
      <NavBar />
      <Hero />
      <Section />
      <Articles />
      <Footer />
    </div>
  );
};
