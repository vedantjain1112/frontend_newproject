import React, { useState } from "react";
import "./ThemeToggle.scss";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);

    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div
      className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
      onClick={toggleTheme}
    >
      <div className="toggle-slider">
        {isDarkMode ? (
          <FaMoon className="moon-icon" />
        ) : (
          <FaSun className="sun-icon" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
