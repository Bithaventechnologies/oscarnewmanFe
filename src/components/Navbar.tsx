import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Blog", link: "blog" },
    { name: "Contact", link: "contact" },
  ];
  const [activeNavbar, setActiveNavbar] = useState("Home");
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="lg:mr-16 mr-6 ">
      {/* Desktop */}
      <div className="text-white lg:flex gap-12  font-semibold hidden">
        {navItems.map((item, index) => (
          <Link
            to={item.link}
            smooth={true}
            duration={500}
            key={index}
            className={`cursor-pointer ${
              activeNavbar === item.name ? "text-[#fd7904]" : "text-white"
            }`}
            onClick={() => setActiveNavbar(item.name)}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div
        className="cursor-pointer lg:hidden text-white text-[20px]"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        {!openSidebar ? <GiHamburgerMenu /> : <IoCloseSharp />}
      </div>

      {/* Mobile */}
      <div
        className={` bg-white   font-semibold flex flex-col gap-12 z-[1000] rounded-r-4xl  h-[70vh] ${
          openSidebar ? "translate-x-0 w-[40%]" : "-translate-x-full"
        } transition-transform  ease-in-out duration-500 p-6 absolute left-0 top-0 bottom-0 `}
      >
        {navItems.map((item, index) => (
          <Link
            to={item.link}
            smooth={true}
            duration={500}
            key={index}
            className={`cursor-pointer ${
              activeNavbar === item.name && openSidebar
                ? "text-[#fd7904]"
                : "text-black"
            }`}
            onClick={() => {
              setActiveNavbar(item.name);
              setOpenSidebar(false);
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
