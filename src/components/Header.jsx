import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import DarkModeButton from "./DarkModeButton";

export default function Header({ onDark, toggleDark }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const classes = "w-6 h-6 rotate-45 rounded-[4px] ";
  return (
    <header className="p-4 md:mb-16 flex items-center justify-between ">
      <div className="flex items-center">
        <div className={classes + "bg-primary-color z-10"}></div>
        <div className={classes + " bg-secondary-color"}></div>
        <h2 className="ml-4 font-poppins text-2xl font-bold text-accent-color dark:text-dark-accent-color">
          Alarado
        </h2>
      </div>

      {isMobile ? (
        <MobileNavbar onDark={onDark} toggleDark={toggleDark} />
      ) : (
        <>
          <DesktopNavbar />
          <DarkModeButton darkMode={onDark} toggleDarkMode={toggleDark} />
        </>
      )}
    </header>
  );
}
