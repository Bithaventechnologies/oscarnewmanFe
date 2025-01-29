import logo from "../assets/logo.svg"
import Navbar from "./Navbar";

const Header = () => {
    return <div className="bg-[#09032e] py-2 lg:px-28 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-[30%] lg:w-[10%]"/>
        <Navbar/>
    </div>;
};

export default Header;
