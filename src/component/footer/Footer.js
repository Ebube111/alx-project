import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div style={{ textAlign: "center" }}>
        <a target="_blank" href="https://twitter.com/Busko_57">
          Twitter Profile
        </a>
        <div style={{ height: 10 }}></div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ebube-agwaze-375a771b8/"
        >
          Linkedin Profile
        </a>
        <div style={{ height: 10 }}></div>
        <a target="_blank" href="https://github.com/Ebube111/alx-project">
          Project Repo
        </a>
      </div>
      <div className="footer">
        <span> &copy; A Project by Ebube Agwaze</span>
        <span> I DO NOT OWN ANY OF THE IMAGES OR NFTS ON THIS SITE</span>
      </div>
    </div>
  );
};

export default Footer;
