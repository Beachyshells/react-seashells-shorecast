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
          href="YOUR_NETLIFY_SITE_LINK_HERE"
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
