import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <main className="md:px-16 md:py-4 bg-background-color dark:bg-dark-background-color dark:text-dark-accent-color">
      <Header onDark={darkMode} toggleDark={toggleDarkMode} />

      <Hero />
    </main>
  );
}

export default App;
