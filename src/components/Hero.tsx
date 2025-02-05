import heroImg from "../assets/heroImg.svg";

const Hero = () => {
  return (
    <div className="bg-[#0a0f2d] w-full h-auto relative px-10 lg:px-28 py-16 text-white flex flex-col lg:flex-row items-center gap-12">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000] via-transparent to-[#0a0f2d] opacity-90"></div>

      {/* Left Section - Text */}
      <div className="lg:w-1/2 relative text-center lg:text-left">
        <h1 className="lg:text-5xl text-3xl font-extrabold tracking-wide leading-tight">
          Your{" "}
          <span className="text-[#fd7904] drop-shadow-lg">
            No.1 <br /> Security
          </span>{" "}
          Risk Advisory & <br /> Management Company
        </h1>

        <p className="mt-6 lg:w-[90%] text-gray-300 text-lg">
          With **over 25 years of experience**, we’ve seen it all. That’s why
          <span className="font-semibold text-white">
            {" "}
            Oscar Newman Concept Limited{" "}
          </span>
          is the **trusted security partner** for businesses and individuals
          across Nigeria. Discover our cutting-edge **security solutions,
          services, and strategies**.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start relative">
          <button className="px-6 py-2 text-lg font-semibold border-2 border-[#fd7904] text-[#fd7904] rounded-lg hover:bg-[#fd7904] hover:text-white transition-all duration-300">
            Learn More
          </button>
          <button className="px-6 py-2 text-lg font-semibold bg-[#fd7904] text-white rounded-lg hover:bg-[#e56c00] transition-all duration-300">
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Right Section - Security Image (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center relative">
        <img
          className="w-[80%] lg:w-[60%] drop-shadow-lg transition-transform duration-500 hover:scale-105"
          src={heroImg}
          alt="Security Guard"
        />
      </div>
    </div>
  );
};

export default Hero;
