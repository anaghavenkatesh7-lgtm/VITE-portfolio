import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        © {year} Anagha Venkatesh. All rights reserved.
      </p>

      <nav aria-label="Social links">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}

export default Footer;