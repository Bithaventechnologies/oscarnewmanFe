import About from "./components/About";
import Consult from "./components/Consult";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const App = () => {
  return <div className="w-full h-full ">
    <Header/>
    <Hero/>
    <Services/>
    <About/>
    <Consult/>
    <Testimonials/>
    <Footer/>
  </div>;
};

export default App;
