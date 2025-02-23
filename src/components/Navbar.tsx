import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("Home");
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", link: "/", isRoute: true },
    { name: "About", link: "aboutus", isRoute: true },
    { name: "Services", link: "services", isRoute: false },
    { name: "Blog", link: "/allblog", isRoute: true },
    { name: "Contact", link: "/contact", isRoute: true },
  ];

  const handleNavigation = (path: string, isRoute: boolean) => {
    if (isRoute) {
      navigate(path);
    }
    setActiveNavbar(path);
    setOpenSidebar(false);
  };

  return (
    <div className="relative z-50">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex gap-12 font-semibold text-white">
        {navItems.map((item, index) =>
          item.isRoute ? (
            <RouterLink
              key={index}
              to={item.link}
              className={`cursor-pointer transition ${
                activeNavbar === item.link ? "text-[#fd7904]" : "text-white"
              }`}
              onClick={() => handleNavigation(item.link, true)}
            >
              {item.name}
            </RouterLink>
          ) : (
            <ScrollLink
              key={index}
              to={item.link}
              smooth={true}
              duration={500}
              className={`cursor-pointer transition ${
                activeNavbar === item.link ? "text-[#fd7904]" : "text-white"
              }`}
              onClick={() => handleNavigation(item.link, false)}
            >
              {item.name}
            </ScrollLink>
          )
        )}
      </div>

      {/* Mobile Sidebar Button */}
      <div
        className="lg:hidden text-white text-[24px] cursor-pointer"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        {!openSidebar ? <GiHamburgerMenu /> : <IoCloseSharp />}
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white text-black shadow-lg transition-transform duration-500 ease-in-out transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Close Button */}
          <div
            className="self-end text-2xl cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          >
            <IoCloseSharp />
          </div>

          {/* Navigation Links */}
          {navItems.map((item, index) =>
            item.isRoute ? (
              <RouterLink
                key={index}
                to={item.link}
                className={`cursor-pointer text-lg ${
                  activeNavbar === item.link ? "text-[#fd7904]" : "text-black"
                }`}
                onClick={() => handleNavigation(item.link, true)}
              >
                {item.name}
              </RouterLink>
            ) : (
              <ScrollLink
                key={index}
                to={item.link}
                smooth={true}
                duration={500}
                className={`cursor-pointer text-lg ${
                  activeNavbar === item.link ? "text-[#fd7904]" : "text-black"
                }`}
                onClick={() => handleNavigation(item.link, false)}
              >
                {item.name}
              </ScrollLink>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
