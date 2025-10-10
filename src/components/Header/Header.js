import { FaSun, FaMoon } from "react-icons/fa";
import "./Header.css";
export default function Header(props) {
  return (
    <div className="Header app-header">
      <button onClick={props.toggleTheme} className="theme-toggle">
        {props.theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
      <div className="header-content">
        <h1 className="title header-title">SeaShell's Shorecast</h1>
        <p className="sub-title">Local Lakeside Weather- it's a shorething</p>
      </div>
      <div></div>{" "}
    </div>
  );
}
