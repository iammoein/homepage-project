import { useState } from "react";

import closeBtn from "../assets/close-button.svg";
import hamburgerMenu from "../assets/hamburger-button.svg";
import DarkModeButton from "./DarkModeButton";

export default function MobileNavbar({onDark, toggleDark}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const classes =
    "hover:border-b-2 hover:border-primary-color text-xl font-semibold text-[#909193] hover:text-primary-color active:border-primary-color active::text-primary-color";
  const btnClasses =
    "hover:filter hover:brightness-0 hover:saturate(100%) hover:hue-rotate(210deg) "
  return (
    <>
      <button onClick={toggleMenu} aria-label="Toggle menu">
        <img className={btnClasses} src={hamburgerMenu} alt="Menu button" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 bg-background-color h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-50 dark:bg-dark-background-color ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-5 mt-4 items-center">
          <button
            className="self-end"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img className={btnClasses} src={closeBtn} alt="Menu button" />
          </button>
          <nav>
            <ul className="flex flex-col mt-6 gap-8 justify-center items-center ">
              <li>
                <a className={classes} href="#">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className={classes}>
                  Product
                </a>
              </li>
              <li>
                <a href="#" className={classes}>
                  Resource
                </a>
              </li>
              <li>
                <a href="#" className={classes}>
                  Contact
                </a>
              </li>
              <li>
                <DarkModeButton darkMode={onDark} toggleDarkMode={toggleDark} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
