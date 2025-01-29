import cctv from "../assets/cctv-camera.svg"
import encrypted from "../assets/encrypted (1).svg"
import cyberSecurity from "../assets/cyber-security.svg"
import consultant from "../assets/consultant.svg"
import {Element} from "react-scroll"

const Services = () => {
  const services = [
    {
      label: "Physical Security",
      desc: "Our uniqueness in Guard provision is manifested as they are the repository of all what protection is all about.",
      imgSrc: cctv,
      id: 1
    },
    {
      label: "Digital Security",
      desc: "At ONC, we automate routine tasks to enhance security efficiency and provide a robust, cost-effective security regime.",
      imgSrc: encrypted,
      id: 2
    },
    {
      label: "Cyber Security",
      desc: "Oscar Newman Concept Limited offers consumer(s) cyber security products, as well as enterprise cyber security solutions.",
      imgSrc: cyberSecurity,
      id: 3
    },
    {
      label: "Risk Advisory & Consultancy",
      desc: "We remove friction created by risk through clinical analysis and identification of risk sources, probability of occurrence & criticality",
      imgSrc: consultant,
      id: 4
    },
  ];
  return (
    <Element name = "services">
      <div className="px-10 lg:px-8  mb-8 grid  grid-cols-1 lg:grid-cols-2 lg:place-items-center  lg:gap-x-55 max-md:gap-y-20 md:gap-y-20 max-md:gap-x-80 lg:w-[40%]   mx-auto">
        {
      services.map((service) => (
          <div key = {service.id} className="bg-[#f5f5f5] w-full lg:w-[200px] h-[250px] space-y-4 shadow-2xl p-4 flex flex-col gap-1 items-center justify-center rounded-[30px]">
              <div className="bg-[#09032e] w-24 h-24 rounded-full p-2 flex justify-center items-center"><img src={service.imgSrc} alt={service.label} className="w-[60%] object-cover"/></div>
              <div className=" text-center">
                  <p className="text-[#2e2e2e] font-bold">{service.label}</p>
                  <p className="text-[#2e2e2e] text-sm">{service.desc}</p>
              </div>
              <button className="bg-[#09032e] cursor-pointer w-[80px] p-2 rounded-[10px] text-white">Read more</button>
          </div>
      ))
        }
      </div>
    </Element>
  );
};

export default Services;
