import React from "react";
import Toggle from "./toggle";
import { useState } from "react";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark") == "true"
  );

  const handleToggle = () => {
    setDarkMode(!darkMode);

    localStorage.setItem("dark", darkMode.toString());
  };
  return (
    <nav className="nav">
      <Toggle
        checked={darkMode}
        leftLabel="Light Mode"
        name="dark"
        onChange={handleToggle}
        rightLabel="Dark Mode"
      />
    </nav>
  );
};

export default Nav;
