import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("Home");
  const [openSidebar, setOpenSidebar] = useState(false);

  const navItems = [
    { name: "Home", link: "/", isRoute: true },
    { name: "About", link: "about", isRoute: false },
    { name: "Services", link: "services", isRoute: false },
    { name: "Blog", link: "blog", isRoute: false },
    { name: "Contact", link: "/contact", isRoute: true }, // Contact is a route
  ];

  return (
    <div className="lg:mr-16 mr-6">
      {/* Desktop Navbar */}
      <div className="text-white lg:flex gap-12 font-semibold hidden">
        {navItems.map((item, index) =>
          item.isRoute ? (
            <RouterLink
              to={item.link}
              key={index}
              className={`cursor-pointer ${
                activeNavbar === item.name ? "text-[#fd7904]" : "text-white"
              }`}
              onClick={() => setActiveNavbar(item.name)}
            >
              {item.name}
            </RouterLink>
          ) : (
            <ScrollLink
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
            </ScrollLink>
          )
        )}
      </div>

      {/* Mobile Sidebar */}
      <div
        className="cursor-pointer lg:hidden text-white text-[20px]"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        {!openSidebar ? <GiHamburgerMenu /> : <IoCloseSharp />}
      </div>

      <div
        className={`bg-white font-semibold flex flex-col gap-12 z-[1000] rounded-r-4xl h-[70vh] ${
          openSidebar ? "translate-x-0 w-[40%]" : "-translate-x-full"
        } transition-transform ease-in-out duration-500 p-6 absolute left-0 top-0 bottom-0`}
      >
        {navItems.map((item, index) =>
          item.isRoute ? (
            <RouterLink
              to={item.link}
              key={index}
              className={`cursor-pointer ${
                activeNavbar === item.name ? "text-[#fd7904]" : "text-black"
              }`}
              onClick={() => {
                setActiveNavbar(item.name);
                setOpenSidebar(false);
              }}
            >
              {item.name}
            </RouterLink>
          ) : (
            <ScrollLink
              to={item.link}
              smooth={true}
              duration={500}
              key={index}
              className={`cursor-pointer ${
                activeNavbar === item.name ? "text-[#fd7904]" : "text-black"
              }`}
              onClick={() => {
                setActiveNavbar(item.name);
                setOpenSidebar(false);
              }}
            >
              {item.name}
            </ScrollLink>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
