import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        This project was coded by 🐞
        <a
          href="https://www.linkedin.com/in/michelle-durham-07559073/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Michelle Durham
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/Beachyshells/react-seashells-shorecast"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://phenomenal-puffpuff-3d0c89.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </footer>
  );
}
