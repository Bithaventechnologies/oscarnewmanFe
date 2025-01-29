const Testimonials = () => {
  return (
    <div className="bg-[#09032E] px-10 py-10 ">
      {" "}
      <h1 className="text-[#ffbf87] font-semibold text-[20px] text-center uppercase">
        Testimonials"
      </h1>
      <div className="bg-[#FD7904] lg:w-[90%] w-full mx-auto mt-8 flex items-center justify-between text-white p-12">
        <div >
            <h1 className="text-bold text-[16px] lg:text-3xl">Ready to live without safety worries?</h1>
            <p>Let&apos;s get you started</p>
        </div>
        <button className="bg-[#09032e] hover:bg-gray-100 hover:text-black transition duration-300 cursor-pointer w-[100px] p-2 rounded-[10px] text-lg  text-white">Contact us</button>
      </div>
    </div>
  );
};

export default Testimonials;
