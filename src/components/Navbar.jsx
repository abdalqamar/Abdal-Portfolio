import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle menu toggle
  function menuHandler() {
    setToggle((prev) => !prev);
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src={assets.header_bg_color} className="w-full" />
      </div>

      <nav
        className={`w-full py-2.5 px-5 lg:px-8 xl:px-[4%] flex items-center justify-between z-50 font-ovo fixed 
                ${
                  isScrolled
                    ? "bg-[#FAF3EE] backdrop-blur-lg border-b border-neutral-400/80 bg-opacity-90 shadow-sm  "
                    : "bg-transparent"
                }`}
      >
        <a href="#">
          <img src={assets.Abdal_Logo} className="w-28 " />
        </a>

        <ul className="hidden md:flex items-center gap-6 md:gap-4 lg:gap-8 rounded-full px-12 py-3 text-[1.2rem] ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/courses">
            <li>Courses</li>
          </Link>
          <Link to={"/about"}>About</Link>

          <Link to={"/contact"}>Contact</Link>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:flex  items-center gap-3 px-10 py-2.5 border
                      border-gray-500 rounded-full ml-4"
          >
            Hire me! <img src={assets.arrow_icon} className="w-2.5" />
          </a>

          {/* Menu Button */}
          <button className="block md:hidden ml-3" onClick={menuHandler}>
            <img
              src={toggle ? assets.menu_black : assets.menu_black}
              alt="menu"
              className="w-6 cursor-pointer transition"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 bottom-0 w-50 h-screen bg-[#FAF3EE]
                 transition-all duration-500 px-5 items-center py-20 z-50 
                    ${
                      toggle ? "right-0" : "-right-60"
                    } flex md:hidden flex-col gap-4`}
        >
          <div className="absolute right-6 top-6">
            <img
              src={assets.close_black}
              className=" w-5 cursor-pointer"
              onClick={menuHandler}
            />
          </div>

          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/courses">
            <li>Courses</li>
          </Link>
          <Link to={"/about"}>About</Link>

          <Link to={"/contact"}>Contact</Link>
          {/* Social Icons */}
          <div className="flex items-center w-full justify-evenly gap-2 mt-4">
            <li>
              <a
                href="https://facebook.com"
                className="text-lg cursor-pointer"
                target="/"
              >
                <FaFacebook size={23} />
              </a>
            </li>

            <li>
              <a
                href="//www.instagram.com/abdalqamar24/"
                target="/"
                className="text-lg cursor-pointer"
              >
                <FaInstagram size={23} />
              </a>
            </li>
            <li>
              <a
                className="text-lg cursor-pointer"
                href="www.linkedin.com/in/abdalqamar"
                target="/"
              >
                <FaLinkedin size={23} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/abdalqamar"
                className="text-lg cursor-pointer"
              >
                <FaGithub size={23} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
