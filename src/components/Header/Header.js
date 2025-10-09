import { FaSun, FaMoon } from "react-icons/fa";
import "./Header.css";
export default function Header(props) {
  return (
    <div className="Header app-header">
      <h1 className="title header-title">SeaShell's Shorecast</h1>
      <div className="d-flex justify-content-center">
        <p className="sub-title">Local Lakeside Weather- it's a shorething</p>
        <button onClick={props.toggleTheme} className="theme-toggle">
          {props.theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
}
