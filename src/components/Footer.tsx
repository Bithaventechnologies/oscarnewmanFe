import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return <div className="bg-[#09032e] lg:px-28 text-[#FDFDF7]">
     
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 place-items-center ">
        
            <div className="flex flex-col gap-4">
            <img src={logo} alt="logo" className="w-[100%]"/>
            <p className="flex items-center gap-3 ml-12"> <MdLocationOn className="text-white"/>203, Oakwook, 23b Creeks Avenue</p>
            <p className="flex items-center gap-3"> <IoIosCall className="text-white  ml-12"/>07081101605</p>
            <p className="flex items-center gap-3"> <IoMdMail className="text-white  ml-12"/>oscarnewman@gmail.com</p>
            </div>
            <div className="flex flex-col gap-6 mt-6 lg:mt-36">
              <p className="text-[14px]">Quick Links</p>
            <Link to = "/">Home</Link>
            <Link to ="#">About</Link>
            <Link to ="#">Register</Link>
            </div>
            <div className="flex flex-col gap-6  mt-6 lg:mt-18">
              <p className="text-[14px]">Legal Links</p>
            <Link to = "#">Terms</Link>
            <Link to ="#">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-6  mt-6 lg:mt-26">
              <p className="text-[14px]">Social Media</p>
            <Link to = "#">Facebook</Link>
            <Link to ="#">Twitter</Link>
            <Link to ="#">Linkedin</Link>
            </div>
           
          </div>
          <p className="text-center text-sm py-12">Copyrights 2024 by OscarNewman</p>
  </div>;
};

export default Footer;
