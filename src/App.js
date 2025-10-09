import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <div className="container App">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
