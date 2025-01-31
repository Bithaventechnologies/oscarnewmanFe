import cctv from "../../assets/cctv-camera.svg"
import encrypted from "../../assets/encrypted (1).svg"
import cyberSecurity from "../../assets/cyber-security.svg"
import consultant from "../../assets/consultant.svg"
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
      <div className=" px-10 lg:px-0 md:gap-x-12 mb-20  mx-auto grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-items-center  lg:gap-x-55  max-md:gap-y-12 md:gap-y-20  w-[60%]">
        {
      services.map((service) => (
          <div  data-aos="fade-left" key = {service.id} className="bg-[#f5f5f5]  lg:h-[300px]   space-y-4 shadow-2xl p-4 flex flex-col gap-2 items-center justify-center rounded-[30px]">
              <div className="bg-[#09032e] lg:w-24 lg:h-24 md:w-18 md:h-18 w-12 h-12 rounded-full p-2 flex justify-center items-center"><img src={service.imgSrc} alt={service.label} className="lg:w-[60%] w-[80%] object-cover"/></div>
              <div className=" text-center">
                  <p className="text-[#2e2e2e] mb-1 font-bold">{service.label}</p>
                  <p className="text-[#2e2e2e] text-sm">{service.desc}</p>
              </div>
              <button className="bg-[#09032e] hover:bg-blue-100 hover:text-black cursor-pointer w-[80px] p-2 rounded-[10px] text-white">Read more</button>
          </div>
      ))
        }
      </div>
    </Element>
  );
};

export default Services;
