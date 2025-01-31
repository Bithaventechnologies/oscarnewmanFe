import heroImg from "../assets/heroImg.svg";

const Hero = () => {
  return (
    <div className=" bg-[#09032e] w-full h-[90vh] relative px-10 lg:px-18  py-8 text-[#fff] mb-20 flex gap-40 justify-center">
      <div className="absolute  inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
      <div className="lg:w-2/3 relative">
        <h1 className="lg:text-5xl  text-2xl font-bold">
          Your{" "}
          <span className="text-[#fd7904]">
            {" "}
            No.1 <br /> Security
          </span>{" "}
          Risk Advisory & <br /> Management Company
        </h1>
        <p className="mt-6 lg:w-[70%] relative">
          We've seen more than the majority in over 25 years in combined
          experience of safeguarding what matters, that is why Oscar Newman
          Concept Limited is the preferred security partner for businesses and
          private individuals all around Nigeria. Learn more about our security
          solutions, services, and strategies
        </p>

        <div className="space-x-6 mt-6 flex gap-3 relative ">
          <button className="text-[#fd7904] cursor-pointer px-12 py-3 border border-[#fd7904] rounded-md">
            Learn more
          </button>
          <button className="bg-[#fd7904] p-2 cursor-pointer rounded-md text-white">
            Book a consultation
          </button>
        </div>
      </div>
      <div className="w-[40%] h-full  flex justify-center items-center max-lg:hidden">
        <img
          sizes="150"
          className=" hidden lg:block"
          src={heroImg}
          alt="head"
        />
      </div>
    </div>
  );
};

export default Hero;
