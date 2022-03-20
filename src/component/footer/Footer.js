import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div style={{ textAlign: "center" }}>
        <a target="_blank" href="https://github.com/Ebube111">
          Ebube Git Profile
        </a>
        <div style={{ height: 10 }}></div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ebube-agwaze-375a771b8/"
        >
          Linkedin Profile
        </a>
      </div>
      <div className="footer">
        <span>An Alx Project built by Ebube Agwaze</span>
        <span> &copy; I DO NOT OWN ANY OF THE IMAGES OR NFTS ON THIS SITE</span>
      </div>
    </div>
  );
};

export default Footer;
