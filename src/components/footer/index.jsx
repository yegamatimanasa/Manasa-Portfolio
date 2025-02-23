import React from "react";
import "./styles.scss"; // Ensure your styles are included

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left Side - Built By */}
        <div className="footer__left">
          <p>
            Built by{" "}
            <a href="https://www.linkedin.com/in/yegamatimanasa/" target="_blank" rel="noopener noreferrer" className="footer__link">
             Manasa Yegamati
            </a>
          </p>
        </div>

        {/* Right Side - Say Hello */}
        <div className="footer__right">
        <p>
          Say{" "}
          <a href="mailto:manasayegamati7989@gmail.com" className="footer__link">
            Hello!
          </a>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
