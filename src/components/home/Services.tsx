import cctv from "../../assets/cctv-camera.svg";
import encrypted from "../../assets/encrypted (1).svg";
import cyberSecurity from "../../assets/cyber-security.svg";
import consultant from "../../assets/consultant.svg";
import { Element } from "react-scroll";

const Services = () => {
  const services = [
    {
      label: "Physical Security",
      desc: "Our uniqueness in Guard provision is manifested as they are the repository of all what protection is all about.",
      imgSrc: cctv,
      id: 1,
    },
    {
      label: "Digital Security",
      desc: "At ONC, we automate routine tasks to enhance security efficiency and provide a robust, cost-effective security regime.",
      imgSrc: encrypted,
      id: 2,
    },
    {
      label: "Cyber Security",
      desc: "Oscar Newman Concept Limited offers consumer(s) cyber security products, as well as enterprise cyber security solutions.",
      imgSrc: cyberSecurity,
      id: 3,
    },
    {
      label: "Risk Advisory & Consultancy",
      desc: "We remove friction created by risk through clinical analysis and identification of risk sources, probability of occurrence & criticality",
      imgSrc: consultant,
      id: 4,
    },
  ];
  return (
    <Element name="services">
  <div className="mx-auto w-full max-w-4xl py-12 px-6 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 overflow-hidden">

        {services.map((service) => (
          <div
            data-aos="fade-up"
            key={service.id}
            className="bg-[#f5f5f5]   lg:h-[300px] w-full  space-y-4 shadow-2xl p-4 flex flex-col gap-2 items-center justify-center rounded-[30px]"
          >
            <div className="bg-[#09032e] lg:w-24 lg:h-24 md:w-18 md:h-18 w-12 h-12 rounded-full p-2 flex justify-center items-center">
              <img
                src={service.imgSrc}
                alt={service.label}
                className="lg:w-[60%] w-[80%] object-cover"
              />
            </div>
            <div className=" text-center">
              <p className="text-[#2e2e2e] mb-1 font-bold">{service.label}</p>
              <p className="text-[#2e2e2e] text-sm">{service.desc}</p>
            </div>
            <button className="bg-[#09032e] hover:bg-blue-100 hover:text-black cursor-pointer px-6 py-3 rounded-[10px] text-white">
              Read more
            </button>
          </div>
        ))}
      </div>
     </Element>
  );
};

export default Services;
