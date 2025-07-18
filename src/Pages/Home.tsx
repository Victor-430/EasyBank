import { Articles } from "../components/Articles";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <div className=" font-sans">
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
