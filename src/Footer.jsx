import React from "react";
import "./Footer.css";

function Footer() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a
        href="https://moultoab.wixsite.com/ali-moulton"
        className="portfolio-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Ali Moulton </p>
      </a>
      <p>
        {currentMonth} {currentYear}
      </p>
      <p>Clubspot Assessment</p>
    </footer>
  );
}

export default Footer;
