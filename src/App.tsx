import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return <div className="w-full h-full ">
    <Header/>
    <Hero/>
    <Services/>
    <About/>
    <Footer/>
  </div>;
};

export default App;
