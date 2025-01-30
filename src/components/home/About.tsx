import { Element } from "react-scroll";
import sec from "../../assets/sec.png";
import ilustration from "../../assets/illustration.png";
import { GiCheckMark } from "react-icons/gi";

const About = () => {
  return (
    <Element name="about">
      <section
        className="relative h-[350px] bg-cover bg-center my-20 lg:my-2 "
        style={{ backgroundImage: "url('../image.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0c1841] opacity-80"></div>
        <div className="z-10 p-8 text-white  flex flex-col justify-center  relative top-30 items-center gap-6">
          <h3 className="text-[#ffbf87] font-semibold text-[20px]">ABOUT US</h3>
          <p className="lg:w-[45%] text-center">
            We Are Your Security Risk Management Company Of Choice. The
            Motivation for our emergence and market entry was predicated on
            growing insecurity and sophistry in the criminal activities with few
            providers and lesser effective strategy available to keep crime at a
            tolerable level in the country. Oscar Newman Concept Limited was
            incorporated in the year 2013 by a team of seasoned security
            practitioners and investors.
          </p>
          <button className="bg-[#fd7904] hover:bg-transparent hover:border transition-all duration-300 border-[#fd7904] w-[100px] p-2 cursor-pointer rounded-[10px] text-white">
            Learn more
          </button>
        </div>
      </section>
      <div className="p-10 mb-16 ">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-[#fd7904] text-center font-semibold text-[20px]">
            OUR UNIQUENESS
          </h3>
          <div className="w-16 h-1 bg-black " />
        </div>
        <section className="  lg:flex-row flex-col lg:border-b-2 lg:pb-4 border-gray-400  max-h-[550px] flex justify-center gap-8 lg:gap-40  lg:px-28 mx-auto">
          <div className="lg:w-1/2 lg:py-12 flex flex-col gap-4" data-aos="zoom-out-right">
            <img src={sec} alt="Security" className=" lg:pt-0 object-cover" />
          </div>
          <div className="lg:w-1/2 lg:py-12 border-b-2 lg:pb-0 lg:border-none pb-4 border-gray-400">
            <p className="mb-4 text-[#fd7904] text-[16px] font-semibold">
              Our uniqueness in Guard provision is visibly demonstrated, they
              are the repository of all what protection is all about.
            </p>
            <p className="mb-4">
              Each guard and site is connected to a 24 hour Command and control
              centre with rapid response capability that ensure your assets are
              protected, secured and can be recovered in minutes when exposed to
              the criminal elements.
            </p>
            <p className="mb-4">
              All our guards are vetted, de-risked and fingerprinted on our
              enterprise resource software, capturing critical details about
              them including their social media activities for personality
              profiling devoid of any risk to your facility or person.
            </p>
            <p>
              They work with consciousness that they can be traced and tracked
              and it is a strong deterrence against deviant behaviours. All our
              guards go through our Security College where they are exposed to
              modern techniques of crime prevention and deterrence.
            </p>
          </div>
        </section>
        <div className="flex items-center gap-40 mt-8"  >
          <img
          data-aos="fade-up"
            src={ilustration}
            alt="Illustration"
            className=" lg:pt-0 object-cover w-[40%] hidden lg:block"
          />
          <div  data-aos="fade-left">
          <div className="flex flex-col mt-12 lg:mt-0" >
          <h3 className="text-[#fd7904] mb-8 font-semibold text-[20px]">
          Security Risk Advisory
          </h3>
          <div className="w-16 h-1 bg-black relative bottom-8" />
          </div>
        
      
            <ul  className="flex flex-col gap-8 ">
              <li className="flex items-center gap-4" >
                {" "}
                <GiCheckMark className="text-green-500" />
                Security Risk assessment and analysis for sites and systems.
              </li>
              <li className="flex items-center gap-4">
                <GiCheckMark className="text-green-500" />
                Corporate/business Security risk analysis /Penetration
                testing.Security Risk mapping and risk mitigation designs.
              </li>
              <li className="flex items-center gap-4">
                <GiCheckMark className="text-green-500" />
                Security Risk design implementation supervision.
              </li>
              <li className="flex items-center gap-4">
                <GiCheckMark className="text-green-500" />
                Security Management Trainings.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
