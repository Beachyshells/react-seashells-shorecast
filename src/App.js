import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`container App  ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
