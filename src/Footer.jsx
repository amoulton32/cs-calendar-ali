import React from "react";
import "./Footer.css";

function Footer() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Ali Moulton </p>
      <p>
        {currentMonth} {currentYear}
      </p>
      <p>Clubspot Assessment</p>
    </footer>
  );
}

export default Footer;
