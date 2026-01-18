import React from "react";
import Logo from "/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <img src={Logo} alt="Logo" />
        <nav>
          <a href="#">Privacy</a>
          <span></span>
          <a href="#">T&C</a>
        </nav>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2025 All copy rights reserved </p>
        <p>
          Crafted by{" "}
          <a href="https://www.koiostudio.com/" target="_blank">
            Koiostudio
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
