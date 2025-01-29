import {Element} from "react-scroll"
const About = () => {
  return (
    <Element name = "about">
      <section
      
        className="relative h-[450px] bg-cover bg-center mt-20 "
        style={{ backgroundImage: "url('../image.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0c1841] opacity-80"></div>
        <div className="z-10 p-8 text-white  flex flex-col justify-center  relative top-30 items-center gap-6">
          <h3 className="text-[#ffbf87] font-semibold text-[20px]">ABOUT US</h3>
          <p className="lg:w-[35%] text-center">
            We Are Your Security Risk Management Company Of Choice. The Motivation
            for our emergence and market entry was predicated on growing
            insecurity and sophistry in the criminal activities with few providers
            and lesser effective strategy available to keep crime at a tolerable
            level in the country. Oscar Newman Concept Limited was incorporated in
            the year 2013 by a team of seasoned security practitioners and
            investors.
          </p>
          <button className="bg-[#fd7904] hover:bg-transparent hover:border transition-all duration-300 border-[#fd7904] w-[100px] p-2 cursor-pointer rounded-[10px] text-white">
              Learn more
            </button>
        </div>
      </section>
    </Element>
  );
};

export default About;
