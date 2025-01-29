import heroImg from "../assets/heroImg.svg";

const Hero = () => {
  return (
    
    <div className="bg-[#09032e] relative px-10 lg:px-8 py-8 text-[#fff] mb-20 flex gap-40 justify-center">
        <div className="absolute  inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div> 
      <div className="lg:w-1/2">
        <h1 className="lg:text-5xl  text-2xl font-bold">
          Your <span className="text-[#fd7904]"> No.1  <br /> Security</span> Risk
          Advisory & <br /> Management Company
        </h1>
        <p className="mt-6 lg:w-[70%]">
          We've seen more than the majority in over 25 years in combined
          experience of safeguarding what matters, that is why Oscar Newman
          Concept Limited is the preferred security partner for businesses and
          private individuals all around Nigeria. Learn more about our security
          solutions, services, and strategies
        </p>

        <div className="space-x-6 mt-6 flex gap-3 ">
          <button className="text-[#fd7904] cursor-pointer w-[100px] border border-[#fd7904] p-2 rounded-md">
            Learn more
          </button>
          <button className="bg-[#fd7904] p-2 cursor-pointer rounded-md text-white">
            Book a consultation
          </button>
        </div>
      </div>
      <img className = "w-[30%] hidden lg:block" src={heroImg} alt="head"  />
    </div>
  );
};

export default Hero;
