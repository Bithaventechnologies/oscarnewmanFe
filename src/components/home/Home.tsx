import { useEffect } from "react";
import Hero from "../Hero";
import About from "./About";
import Consult from "./Consult";
import Services from "./Services";
import Testimonials from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Consult />
      <Testimonials />
    </div>
  );
};

export default Home;
