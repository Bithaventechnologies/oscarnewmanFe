import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import Navbar from "./Navbar";

const Header = () => {
    return <div className="bg-[#09032e] py-2 lg:px-26 flex justify-between items-center">
        <Link to = "/"><img src={logo} alt="logo" className="w-[50%]"/></Link>
        <Navbar/>
    </div>;
};

export default Header;
