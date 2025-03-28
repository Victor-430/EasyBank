import { Articles } from "../components/Articles";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div className="overflow-x-hidden font-sans">
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
};
